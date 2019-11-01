import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DiagnosticEntity } from './diagnostic.entity';
import { StudentEntity } from '../students/student.entity';
import { DiagnosticRO } from './diagnostic.dto';
import { TwitterAuthDTO } from '../external-api/twitter/twitter-auth.dto';
import { TwitterService } from '../external-api/twitter/twitter.service';
import { PostsService } from '../posts/posts.service';
import { PostRO } from '../posts/post.dto';
import { RedditAuthDTO } from '../external-api/reddit/reddit-auth.dto';
import { RedditService } from '../external-api/reddit/reddit.service';

import * as CryptoJS from 'crypto-js';
import { ClassifierService } from '../classifier/classifier.service';
import { PsychologistEntity } from '../psychologists/psychologist.entity';
import { DiagnosticDetailEntity } from '../diagnostic-details/diagnostic-detail.entity';
import { ClassificationCriteriaEntity } from '../classification-criteria/classification-criteria.entity';
import { ActivitiesService } from '../activities/activities.service';
import { ActivityEntity } from '../activities/activity.entity';

@Injectable()
export class DiagnosticsService {
  constructor(
    @InjectRepository(DiagnosticEntity)
    private diagnosticRepository: Repository<DiagnosticEntity>,
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
    @InjectRepository(PsychologistEntity)
    private psychologistRepository: Repository<PsychologistEntity>,
    @InjectRepository(DiagnosticDetailEntity)
    private diagnosticDetailRepository: Repository<DiagnosticDetailEntity>,
    @InjectRepository(ClassificationCriteriaEntity)
    private classificationCriteriaRepository: Repository<
      ClassificationCriteriaEntity
    >,
    @InjectRepository(ActivityEntity)
    private activityRepository: Repository<ActivityEntity>,

    private twitterService: TwitterService,
    private redditService: RedditService,
    private postsService: PostsService,
    private classifierService: ClassifierService,
    private activitiyService: ActivitiesService,
  ) {}

  private diagnosticToResponseObject(
    diagnostic: DiagnosticEntity,
  ): DiagnosticRO {
    /*  const bytes = CryptoJS.AES.decrypt(diagnostic.result, process.env.SECRET);
    bytes.toString(CryptoJS.enc.Utf8).then(console.log);
    const result = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    //const result = 'true';
    console.log('RESULT', result); */
    const responseObject: any = {
      ...diagnostic,
      student: diagnostic.student || null,
      details: diagnostic.details || null,
    };

    return responseObject;
  }

  async fetchAllTwitter(
    userId: string,
    twitterAuth: Partial<TwitterAuthDTO>,
    limit: number,
  ): Promise<PostRO[]> {
    const twitterPosts = await this.twitterService.getTwitterPosts(
      twitterAuth,
      limit,
    );

    const createdPosts = await this.postsService.createMany(
      userId,
      twitterPosts,
    );

    return createdPosts;
  }

  async fetchAllReddit(
    userId: string,
    redditAuth: RedditAuthDTO,
    limit: number,
  ) {
    const redditPosts = await this.redditService.getRedditPosts(
      redditAuth,
      limit,
    );

    const createdPosts = await this.postsService.createMany(
      userId,
      redditPosts,
    );

    return createdPosts;
  }

  async getAllPosts(userId: string): Promise<PostRO[]> {
    const posts = await this.postsService.showByUser(userId);
    return posts;
  }

  async diagnostic(
    userId: string,
    classifiedPosts: any,
  ): Promise<DiagnosticRO[]> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    const topWords = classifiedPosts.topWords.join();

    const criteria = [
      'A2',
      'A3',
      'A4',
      'A6',
      'A7',
      'A8',
      'A9',
      'B1',
      'B4',
      'B6',
      'C1',
    ];

    let counters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (const classifiedPost of classifiedPosts.classifiedPosts) {
      let i = 0;
      for (const tag of classifiedPost['tags']) {
        if (
          tag === 'perdidaInteres' ||
          tag === 'modPeso' ||
          tag === 'insomnio' ||
          tag === 'fatiga' ||
          tag === 'inutilidad' ||
          tag === 'disminucionPensar' ||
          tag === 'p_muerte' ||
          tag === 'malestar' ||
          tag === 'bajaAutoestima' ||
          tag === 'desesperanza' ||
          tag === 'consumoAfeccion'
        ) {
          counters[i]++;
        }
        i++;
      }
    }

    let results = [];
    for (let i = 0; i < counters.length; i++) {
      let result: boolean;
      if (counters[i] >= 3) {
        result = true;
      } else {
        result = false;
      }
      results.push({
        criteria: criteria[i],
        result,
      });
    }

    const tdmResult = this.getTdmResult(results);
    const tdpResult = false; //this.getTdpResult(results);

    let diagnostic1 = await this.diagnosticRepository.create({
      result: tdmResult,
      depressionType: 'tdm',
      topWords,
      student,
    });

    let diagnostic2 = await this.diagnosticRepository.create({
      result: tdpResult,
      depressionType: 'tdp',
      topWords,
      student,
    });

    await this.diagnosticRepository.save(diagnostic1);
    await this.diagnosticRepository.save(diagnostic2);

    await this.saveDiagnosticDetailsTdm(diagnostic1, results);
    await this.saveDiagnosticDetailsTdp(diagnostic2, results);

    diagnostic1 = await this.diagnosticRepository.findOne({
      where: { id: diagnostic1.id },
      relations: ['details', 'student'],
    });

    let i = 0;
    for (const detail of diagnostic1.details) {
      diagnostic1.details[i] = await this.diagnosticDetailRepository.findOne({
        where: { id: detail.id },
        relations: ['activities', 'classificationCriteria'],
      });
      i++;
    }

    diagnostic2 = await this.diagnosticRepository.findOne({
      where: { id: diagnostic2.id },
      relations: ['details', 'student'],
    });

    i = 0;
    for (const detail of diagnostic2.details) {
      diagnostic2.details[i] = await this.diagnosticDetailRepository.findOne({
        where: { id: detail.id },
        relations: ['activities', 'classificationCriteria'],
      });
      i++;
    }

    return [diagnostic1, diagnostic2].map(diagnostic =>
      this.diagnosticToResponseObject(diagnostic),
    );
  }

  async saveDiagnosticDetailsTdm(diagnostic: DiagnosticEntity, results: any) {
    for (let i = 0; i < 8; i++) {
      const criteria = await this.classificationCriteriaRepository.findOne({
        where: { keyname: results[i].criteria },
      });

      const diagnosticDetail = this.diagnosticDetailRepository.create({
        classificationCriteria: criteria,
        result: results[i].result,
        diagnostic,
      });

      await this.diagnosticDetailRepository.save(diagnosticDetail);
    }

    const criteria = await this.classificationCriteriaRepository.findOne({
      where: { keyname: results[results.length - 1].criteria },
    });
    const diagnosticDetail = this.diagnosticDetailRepository.create({
      classificationCriteria: criteria,
      result: results[results.length - 1].result,
      diagnostic,
    });

    await this.diagnosticDetailRepository.save(diagnosticDetail);
  }

  async saveDiagnosticDetailsTdp(diagnostic: DiagnosticEntity, results: any) {
    for (let i = 1; i < 6; i++) {
      const criteria = await this.classificationCriteriaRepository.findOne({
        where: { keyname: results[i].criteria },
      });

      const diagnosticDetail = this.diagnosticDetailRepository.create({
        classificationCriteria: criteria,
        result: results[i].result,
        diagnostic,
      });

      await this.diagnosticDetailRepository.save(diagnosticDetail);
    }

    for (let i = 7; i < results.length; i++) {
      const criteria = await this.classificationCriteriaRepository.findOne({
        where: { keyname: results[i].criteria },
      });

      const diagnosticDetail = this.diagnosticDetailRepository.create({
        classificationCriteria: criteria,
        result: results[i].result,
        diagnostic,
      });

      await this.diagnosticDetailRepository.save(diagnosticDetail);
    }
  }

  getTdmResult(criteriaResults: any) {
    let mainCount = 0;

    let tdmA = 0;
    for (let i = 0; i < 7; i++) {
      if (criteriaResults[i]['result']) {
        tdmA++;
      }
    }

    if (tdmA >= 5) {
      mainCount++;
    }

    if (criteriaResults[7]['result']) {
      mainCount++;
    }

    if (criteriaResults[10]['result']) {
      mainCount--;
    }

    if (mainCount === 2) {
      return true;
    }
    return false;
  }

  async addActivities(userId: string, id: string): Promise<any> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    let diagnostic = await this.diagnosticRepository.findOne({
      where: { id, student },
      relations: ['student', 'details'],
    });

    if (!diagnostic) {
      throw new HttpException('Diagnostic not found', HttpStatus.NOT_FOUND);
    }

    const {
      saved,
    } = await this.activitiyService.saveActivitiesDiagnosticDetail(id, student);

    diagnostic = await this.diagnosticRepository.findOne({
      where: { id, student },
      relations: ['student', 'details'],
    });

    let i = 0;
    for (const detail of diagnostic.details) {
      diagnostic.details[i] = await this.diagnosticDetailRepository.findOne({
        where: { id: detail.id },
        relations: ['activities', 'classificationCriteria'],
      });

      let j = 0;
      for (const activity of diagnostic.details[i].activities) {
        diagnostic.details[i].activities[
          j
        ] = await this.activityRepository.findOne({
          where: { id: activity.id },
          relations: ['suggestion', 'diagnosticDetail'],
        });
        j++;
      }
      i++;
    }

    return {
      ...this.diagnosticToResponseObject(diagnostic),
      newActivities: saved,
    };
  }

  async getAllByStudent(userId: string): Promise<DiagnosticRO[]> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    let diagnostics = await this.diagnosticRepository.find({
      where: { student: { id: student.id } },
      relations: ['student', 'details'],
    });

    for (const diagnostic of diagnostics) {
      let i = 0;
      for (const detail of diagnostic.details) {
        diagnostic.details[i] = await this.diagnosticDetailRepository.findOne({
          where: { id: detail.id },
          relations: ['activities', 'classificationCriteria'],
        });
        let j = 0;
        for (const activity of diagnostic.details[i].activities) {
          diagnostic.details[i].activities[
            j
          ] = await this.activityRepository.findOne({
            where: { id: activity.id },
            relations: ['suggestion', 'diagnosticDetail'],
          });
          j++;
        }
        i++;
      }
    }

    return diagnostics.map(diagnostic =>
      this.diagnosticToResponseObject(diagnostic),
    );
  }

  async getAllByPsychologist(userId: string): Promise<DiagnosticRO[]> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!psychologist) {
      throw new HttpException('Psychologist not found', HttpStatus.NOT_FOUND);
    }

    const diagnostics = await this.diagnosticRepository.find();

    for (const diagnostic of diagnostics) {
      let i = 0;
      for (const detail of diagnostic.details) {
        diagnostic.details[i] = await this.diagnosticDetailRepository.findOne({
          where: { id: detail.id },
          relations: ['activities', 'classificationCriteria'],
        });

        let j = 0;
        for (const activity of diagnostic.details[i].activities) {
          diagnostic.details[i].activities[
            j
          ] = await this.activityRepository.findOne({
            where: { id: activity.id },
            relations: ['suggestion', 'diagnosticDetail'],
          });
          j++;
        }
        i++;
      }
    }

    return diagnostics.map(diagnostic =>
      this.diagnosticToResponseObject(diagnostic),
    );
  }

  async readByPsychologist(userId: string, id: string): Promise<DiagnosticRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!psychologist) {
      throw new HttpException('Psychologist not found', HttpStatus.NOT_FOUND);
    }

    const diagnostic = await this.diagnosticRepository.findOne({
      where: { id },
      relations: ['student', 'details'],
    });

    if (!diagnostic) {
      throw new HttpException('Diagnostic not found', HttpStatus.NOT_FOUND);
    }

    let i = 0;
    for (const detail of diagnostic.details) {
      diagnostic.details[i] = await this.diagnosticDetailRepository.findOne({
        where: { id: detail.id },
        relations: ['activities', 'classificationCriteria'],
      });

      let j = 0;
      for (const activity of diagnostic.details[i].activities) {
        diagnostic.details[i].activities[
          j
        ] = await this.activityRepository.findOne({
          where: { id: activity.id },
          relations: ['suggestion', 'diagnosticDetail'],
        });
        j++;
      }
      i++;
    }

    return this.diagnosticToResponseObject(diagnostic);
  }

  async readByStudent(userId: string, id: string): Promise<DiagnosticRO> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    let diagnostic = await this.diagnosticRepository.findOne({
      where: { student: { id: student.id }, id },
      relations: ['student', 'details'],
    });

    if (!diagnostic) {
      throw new HttpException('Diagnostic not found', HttpStatus.NOT_FOUND);
    }

    let i = 0;
    for (const detail of diagnostic.details) {
      diagnostic.details[i] = await this.diagnosticDetailRepository.findOne({
        where: { id: detail.id },
        relations: ['activities', 'classificationCriteria'],
      });

      let j = 0;
      for (const activity of diagnostic.details[i].activities) {
        diagnostic.details[i].activities[
          j
        ] = await this.activityRepository.findOne({
          where: { id: activity.id },
          relations: ['suggestion', 'diagnosticDetail'],
        });
        j++;
      }
      i++;
    }

    return this.diagnosticToResponseObject(diagnostic);
  }

  async getDiagnosticStatistics(): Promise<any> {
    const diagnostics = await this.diagnosticRepository.find({
      relations: ['student', 'details'],
    });

    const diagnosticsTdm = diagnostics.filter(
      diagnostic => diagnostic.depressionType === 'tdm' && diagnostic.result,
    );
    const diagnosticsTdp = diagnostics.filter(
      diagnostic => diagnostic.depressionType === 'tdp' && diagnostic.result,
    );

    const peopleWithTdm = diagnosticsTdm.length;
    const peopleWithTdp = diagnosticsTdp.length;

    const peopleOk = diagnostics.length - peopleWithTdm - peopleWithTdp;

    const averageAgeTdm = this.getSumAges(diagnosticsTdm);
    const averageAgeTdp = this.getSumAges(diagnosticsTdp);

    return {
      totalPeople: diagnostics.length,
      peopleWithTdm,
      peopleWithTdp,
      peopleOk,
      averageAgeTdm,
      averageAgeTdp,
    };
  }

  async getDiagnosticDetailsStatistics(): Promise<any> {
    const diagnosticDetails = await this.diagnosticDetailRepository.find({
      relations: ['classification-criteria'],
    });

    const diagnosticDetailsPositive = diagnosticDetails.filter(
      diagnosticDetail => diagnosticDetail.result,
    );

    let criteria = {
      A2: 0,
      A3: 0,
      A4: 0,
      A6: 0,
      A7: 0,
      A8: 0,
      A9: 0,
      B1: 0,
      B4: 0,
      B6: 0,
      C1: 0,
    };

    for (const diagnosticDetailPositive of diagnosticDetailsPositive) {
      criteria[`${diagnosticDetailPositive.classificationCriteria.keyname}`]++;
    }

    return criteria;
  }

  async getAllWords(): Promise<any> {
    const diagnostics = await this.diagnosticRepository.find();
    let topWordsArray = [];
    for (const diagnostic of diagnostics) {
      topWordsArray = [...topWordsArray, ...diagnostic.topWords.split(',')];
    }

    return this.countWords(topWordsArray);
  }

  countWords(original) {
    return original.reduce(
      (countsMap, item) => countsMap.set(item, countsMap.get(item) + 1 || 1),
      new Map(),
    );
  }

  getSumAges(diagnostics: DiagnosticEntity[]): number {
    if (diagnostics.length === 0) {
      return 0;
    }
    let count = 0;
    for (const diagnostic of diagnostics) {
      count += diagnostic.student.age;
    }
    return count / diagnostics.length;
  }
}
