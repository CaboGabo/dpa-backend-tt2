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

  redditAuth(): string {
    return this.redditService.getAuthenticationUrl();
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

  async diagnostic(userId: string): Promise<DiagnosticRO[]> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    const posts = await this.postsService.showByUser(userId);
    const insResult = await this.classifierService.classify(posts);

    const {
      globalResult: tdmResult,
      criteriaResults: criteriaTdm,
    } = insResult[0];
    const {
      globalResult: tdpResult,
      criteriaResults: criteriaTdp,
    } = insResult[1];

    /* const resultTdm = CryptoJS.AES.encrypt(
      `${insResult[0]}`,
      process.env.SECRET,
    ).toString();
    const resultTdp = CryptoJS.AES.encrypt(
      `${insResult[1]}`,
      process.env.SECRET,
    ).toString(); */

    const diagnostic1 = await this.diagnosticRepository.create({
      result: tdmResult,
      depressionType: 'tdm',
      student,
    });

    const diagnostic2 = await this.diagnosticRepository.create({
      result: tdpResult,
      depressionType: 'tdp',
      student,
    });

    await this.diagnosticRepository.save(diagnostic1);
    await this.diagnosticRepository.save(diagnostic2);

    for (let i = 1; i < criteriaTdm.length; i++) {
      const criteria = await this.classificationCriteriaRepository.findOne({
        where: { keyname: criteriaTdm[i]['keyname'] },
      });

      const diagnosticDetail = this.diagnosticDetailRepository.create({
        classificationCriteria: criteria,
        result: criteriaTdm[i]['result'],
        diagnostic: diagnostic1,
      });

      await this.diagnosticDetailRepository.save(diagnosticDetail);
    }

    for (let i = 1; i < criteriaTdp.length; i++) {
      const criteria = await this.classificationCriteriaRepository.findOne({
        where: { keyname: criteriaTdp[i]['keyname'] },
      });

      const diagnosticDetail = this.diagnosticDetailRepository.create({
        classificationCriteria: criteria,
        result: criteriaTdp[i]['result'],
        diagnostic: diagnostic2,
      });

      await this.diagnosticDetailRepository.save(diagnosticDetail);
    }

    return [diagnostic1, diagnostic2].map(diagnostic =>
      this.diagnosticToResponseObject(diagnostic),
    );
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
      i++;
    }

    return this.diagnosticToResponseObject(diagnostic);
  }
}
