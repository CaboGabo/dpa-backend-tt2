import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
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
import { PostEntity } from '../posts/post.entity';

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
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,

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

  async diagnostic(userId: string): Promise<any> /*Promise<DiagnosticRO[]>*/ {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Estudiante no encontrado', HttpStatus.NOT_FOUND);
    }

    const posts = await this.postRepository.find({
      where: { author: student },
    });
    const insResult = await this.classifierService.classify(posts);

    let topWords = this.getTopWords(posts)
      .map(word => JSON.stringify(word))
      .join();

    topWords = `[${topWords}]`

    const {
      globalResult: tdmResult,
      criteriaResults: criteriaTdm,
    } = insResult[0];
    const {
      globalResult: tdpResult,
      criteriaResults: criteriaTdp,
    } = insResult[1];

    let diagnostic1 = await this.diagnosticRepository.create({
      result: tdmResult,
      depressionType: 'tdm',
      student,
      topWords: topWords,
    });

    let diagnostic2 = await this.diagnosticRepository.create({
      result: tdpResult,
      depressionType: 'tdp',
      student,
      topWords: topWords,
    });

    await this.diagnosticRepository.save(diagnostic1);
    await this.diagnosticRepository.save(diagnostic2);

    for (let i = 1; i < criteriaTdm.length; i++) {
      const criteria = await this.classificationCriteriaRepository.findOne({
        where: { keyname: criteriaTdm[i]['keyname'] },
      });

      let posts = [];
      for (const id of criteriaTdm[i]['ocurrences']) {
        const post = await this.postRepository.findOne({
          where: { id },
        });
        posts.push(post);
      }
      console.log(posts);

      const diagnosticDetail = this.diagnosticDetailRepository.create({
        classificationCriteria: criteria,
        result: criteriaTdm[i]['result'],
        diagnostic: diagnostic1,
        posts,
      });

      await this.diagnosticDetailRepository.save(diagnosticDetail);
    }

    for (let i = 1; i < criteriaTdp.length; i++) {
      const criteria = await this.classificationCriteriaRepository.findOne({
        where: { keyname: criteriaTdp[i]['keyname'] },
      });

      let posts = [];
      for (const id of criteriaTdp[i]['ocurrences']) {
        const post = await this.postRepository.findOne({
          where: { id },
        });
        posts.push(post);
      }
      console.log(posts);
      const diagnosticDetail = this.diagnosticDetailRepository.create({
        classificationCriteria: criteria,
        result: criteriaTdp[i]['result'],
        diagnostic: diagnostic2,
        posts,
      });

      await this.diagnosticDetailRepository.save(diagnosticDetail);
    }

    diagnostic1 = await this.diagnosticRepository.findOne({
      where: { id: diagnostic1.id },
      relations: ['details', 'student'],
    });

    let i = 0;
    for (const detail of diagnostic1.details) {
      diagnostic1.details[i] = await this.diagnosticDetailRepository.findOne({
        where: { id: detail.id },
        relations: ['activities', 'classificationCriteria', 'posts'],
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
        relations: ['activities', 'classificationCriteria', 'posts'],
      });
      i++;
    }

    return [diagnostic1, diagnostic2].map(diagnostic =>
      this.diagnosticToResponseObject(diagnostic),
    );
  }

  getTopWords(posts: PostEntity[]): any {
    let contents = [];

    for (const post of posts) {
      contents.push(post.content);
    }

    let wordsArray = contents.join(' ').split(/\s+/);
    let wordsMap = {};
    wordsArray.forEach(key => {
      if (wordsMap.hasOwnProperty(key)) {
        wordsMap[key]++;
      } else {
        wordsMap[key] = 1;
      }
    });

    let finalWordsArray = [];
    finalWordsArray = Object.keys(wordsMap).map(key => {
      return {
        name: key,
        total: wordsMap[key],
      };
    });

    finalWordsArray.sort((a, b) => {
      return b.total - a.total;
    });

    return finalWordsArray;
  }

  /*async saveDiagnosticDetailsTdm(diagnostic: DiagnosticEntity, results: any) {
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

  getTdpResult(criteriaResults: any) {
    let mainCount = 0;

    //Punto A, validación de los dos años de publicaciones

    //Punto B, Cumple con al menos 2 criterios A3, A4, A6, B4, A8, B6
    let tdpB = 0;

    if (criteriaResults[1]['result']) {
      tdpB++;
    }

    if (criteriaResults[2]['result']) {
      tdpB++;
    }

    if (criteriaResults[3]['result']) {
      tdpB++;
    }

    if (criteriaResults[5]['result']) {
      tdpB++;
    }

    if (criteriaResults[8]['result']) {
      tdpB++;
    }

    if (criteriaResults[9]['result']) {
      tdpB++;
    }

    if (tdpB >= 2) {
      mainCount++;
    }

    //Punto C, criterios del punto B presentes al menos cada 2 meses

    //Punto D, segun yo estes es igual a punto A

    //Punto G, C1

    if (criteriaResults[10]['result']) {
      mainCount--;
    }

    //Punto H, B1
    if (criteriaResults[7]['result']) {
      mainCount++;
    }

    if (mainCount === 5) {
      return true;
    }
    return false;
  }*/

  async addActivities(userId: string, id: string): Promise<any> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Estudiante no encontrado', HttpStatus.NOT_FOUND);
    }

    let diagnostic = await this.diagnosticRepository.findOne({
      where: { id, student },
      relations: ['student', 'details'],
    });

    if (!diagnostic) {
      throw new HttpException(
        'Diagnóstico no encontrado',
        HttpStatus.NOT_FOUND,
      );
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
        relations: ['activities', 'classificationCriteria', 'posts'],
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
      throw new HttpException('Estudiante no encontrado', HttpStatus.NOT_FOUND);
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
          relations: ['activities', 'classificationCriteria', 'posts'],
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
      throw new HttpException('Psicólogo no encontrado', HttpStatus.NOT_FOUND);
    }

    if (!psychologist.isValidated) {
      throw new HttpException('Psicólogo no validado', HttpStatus.NOT_FOUND);
    }

    const diagnostics = await this.diagnosticRepository.find();

    for (const diagnostic of diagnostics) {
      let i = 0;
      for (const detail of diagnostic.details) {
        diagnostic.details[i] = await this.diagnosticDetailRepository.findOne({
          where: { id: detail.id },
          relations: ['activities', 'classificationCriteria', 'posts'],
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
      throw new HttpException('Psicólogo no encontrado', HttpStatus.NOT_FOUND);
    }

    if (!psychologist.isValidated) {
      throw new HttpException('Psicólogo no validado', HttpStatus.NOT_FOUND);
    }

    const diagnostic = await this.diagnosticRepository.findOne({
      where: { id },
      relations: ['student', 'details'],
    });

    if (!diagnostic) {
      throw new HttpException(
        'Diagnóstico no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    let i = 0;
    for (const detail of diagnostic.details) {
      diagnostic.details[i] = await this.diagnosticDetailRepository.findOne({
        where: { id: detail.id },
        relations: ['activities', 'classificationCriteria', 'posts'],
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
      throw new HttpException('Estudiante no encontrado', HttpStatus.NOT_FOUND);
    }

    let diagnostic = await this.diagnosticRepository.findOne({
      where: { student: { id: student.id }, id },
      relations: ['student', 'details'],
    });

    if (!diagnostic) {
      throw new HttpException(
        'Diagnóstico no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    let i = 0;
    for (const detail of diagnostic.details) {
      diagnostic.details[i] = await this.diagnosticDetailRepository.findOne({
        where: { id: detail.id },
        relations: ['activities', 'classificationCriteria', 'posts'],
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

    const peopleOk = diagnostics.length / 2 - peopleWithTdm - peopleWithTdp;

    const averageAge = this.getSumAges(diagnostics);
    const averageAgeTdm = this.getSumAges(diagnosticsTdm);
    const averageAgeTdp = this.getSumAges(diagnosticsTdp);

    return {
      totalPeople: diagnostics.length / 2,
      peopleWithTdm,
      peopleWithTdp,
      peopleOk,
      averageAgeTdm,
      averageAgeTdp,
      averageAge,
    };
  }

  async getDiagnosticDetailsStatistics(): Promise<any> {
    const diagnosticDetails = await this.diagnosticDetailRepository.find({
      relations: ['classificationCriteria', 'diagnostic'],
    });

    const tdmDetailsPositive = diagnosticDetails.filter(
      diagnosticDetail =>
        diagnosticDetail.result &&
        diagnosticDetail.diagnostic.depressionType === 'tdm',
    );

    const tdpDetailsPositive = diagnosticDetails.filter(
      diagnosticDetail =>
        diagnosticDetail.result &&
        diagnosticDetail.diagnostic.depressionType === 'tdp',
    );

    const criteriaTdm = {
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

    const criteriaTdp = {
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

    for (const tdmDetailPositive of tdmDetailsPositive) {
      criteriaTdm[`${tdmDetailPositive.classificationCriteria.keyname}`]++;
    }

    for (const tdpDetailPositive of tdpDetailsPositive) {
      criteriaTdp[`${tdpDetailPositive.classificationCriteria.keyname}`]++;
    }

    return {
      tdm: criteriaTdm,
      tdp: criteriaTdp,
    };
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
