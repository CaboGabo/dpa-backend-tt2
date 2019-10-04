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
import { ActivitiesService } from '../activities/activities.service';

import * as CryptoJS from 'crypto-js';
import { ClassifierService } from '../classifier/classifier.service';

@Injectable()
export class DiagnosticsService {
  constructor(
    @InjectRepository(DiagnosticEntity)
    private diagnosticRepository: Repository<DiagnosticEntity>,
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
    private twitterService: TwitterService,
    private redditService: RedditService,
    private postsService: PostsService,
    private activitiesService: ActivitiesService,
    private classifierService: ClassifierService,
  ) {}

  private diagnosticToResponseObject(
    diagnostic: DiagnosticEntity,
  ): DiagnosticRO {
    const bytes = CryptoJS.AES.decrypt(diagnostic.result, process.env.SECRET);
    const result = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    const responseObject: any = {
      ...diagnostic,
      student: diagnostic.student || null,
      activities: diagnostic.activities || null,
      result: result === 'true' ? true : false,
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

  async diagnostic(userId: string): Promise<DiagnosticRO> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    const posts = await this.postsService.showByUser(userId);
    const insResult = await this.classifierService.classify(posts);
    console.log(insResult);
    const result = CryptoJS.AES.encrypt(
      `${insResult}`,
      process.env.SECRET,
    ).toString();

    const diagnostic = await this.diagnosticRepository.create({
      result,
      student,
    });

    await this.diagnosticRepository.save(diagnostic);
    return this.diagnosticToResponseObject(diagnostic);
  }

  async addActivities(userId: string, id: string, page: number): Promise<any> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    let diagnostic = await this.diagnosticRepository.findOne({
      where: { id, student },
      relations: ['student', 'activities'],
    });

    if (!diagnostic) {
      throw new HttpException('Diagnostic not found', HttpStatus.NOT_FOUND);
    }

    const { saved } = await this.activitiesService.saveActivitiesDiagnostic(
      id,
      page,
      student,
    );

    diagnostic = await this.diagnosticRepository.findOne({
      where: { id, student },
      relations: ['student', 'activities'],
    });

    return {
      ...this.diagnosticToResponseObject(diagnostic),
      newActivities: saved,
    };
  }

  async activityDone(
    userId: string,
    diagnosticId: string,
    activityId: string,
  ): Promise<DiagnosticRO> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    let diagnostic = await this.diagnosticRepository.findOne({
      where: { diagnosticId, student },
      relations: ['student', 'activities'],
    });

    if (!diagnostic) {
      throw new HttpException('Diagnostic not found', HttpStatus.NOT_FOUND);
    }

    await this.activitiesService.activityDone(activityId);

    diagnostic = await this.diagnosticRepository.findOne({
      where: { diagnosticId, student },
      relations: ['student', 'activities'],
    });

    return this.diagnosticToResponseObject(diagnostic);
  }

  async activityNotDone(
    userId: string,
    diagnosticId: string,
    activityId: string,
  ): Promise<DiagnosticRO> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    let diagnostic = await this.diagnosticRepository.findOne({
      where: { diagnosticId, student },
      relations: ['student', 'activities'],
    });

    if (!diagnostic) {
      throw new HttpException('Diagnostic not found', HttpStatus.NOT_FOUND);
    }

    await this.activitiesService.activityNotDone(activityId);

    diagnostic = await this.diagnosticRepository.findOne({
      where: { diagnosticId, student },
      relations: ['student', 'activities'],
    });

    return this.diagnosticToResponseObject(diagnostic);
  }

  async getAll(userId: string): Promise<DiagnosticRO[]> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    let diagnostics = await this.diagnosticRepository.find({
      where: { student: { id: student.id } },
      relations: ['student', 'activities'],
    });

    return diagnostics.map(diagnostic =>
      this.diagnosticToResponseObject(diagnostic),
    );
  }

  async read(userId: string, id: string): Promise<DiagnosticRO> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'activities'],
    });

    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    let diagnostics = await this.diagnosticRepository.find({
      where: { student: { id: student.id } },
    });

    const diagnostic = diagnostics.filter(diagnostic => diagnostic.id === id);

    if (diagnostic.length === 0) {
      throw new HttpException('Diagnostic not found', HttpStatus.NOT_FOUND);
    }

    return this.diagnosticToResponseObject(diagnostic[0]);
  }
}
