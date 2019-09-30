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
import { SuggestionsService } from '../suggestions/suggestions.service';

import * as CryptoJS from 'crypto-js';

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
    private suggestionsService: SuggestionsService,
  ) {}

  private diagnosticToResponseObject(
    diagnostic: DiagnosticEntity,
  ): DiagnosticRO {
    let bytes = CryptoJS.AES.decrypt(diagnostic.score, process.env.SECRET);
    const score = parseInt(JSON.parse(bytes.toString(CryptoJS.enc.Utf8)));

    bytes = CryptoJS.AES.decrypt(diagnostic.result, process.env.SECRET);
    const result = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    const responseObject: any = {
      ...diagnostic,
      student: diagnostic.student || null,
      suggestions: diagnostic.suggestions || null,
      score,
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
    //ENVIAR POSTS AL CLASIFICADOR DE EMILIANO
    const result = CryptoJS.AES.encrypt('true', process.env.SECRET).toString();
    const score = CryptoJS.AES.encrypt('85', process.env.SECRET).toString();

    const diagnostic = await this.diagnosticRepository.create({
      result,
      score,
      student,
    });

    await this.diagnosticRepository.save(diagnostic);
    return this.diagnosticToResponseObject(diagnostic);
  }

  async updateSuggestions(userId: string): Promise<DiagnosticRO[]> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    let diagnostics = await this.diagnosticRepository.find({
      where: { student: { id: student.id } },
      relations: ['student', 'suggestions'],
    });

    if (!diagnostics) {
      throw new HttpException(
        'No diagnostics were found',
        HttpStatus.NOT_FOUND,
      );
    }

    for (const diagnostic of diagnostics) {
      await this.suggestionsService.saveSuggestionsDiagnostic(diagnostic.id);
    }

    diagnostics = await this.diagnosticRepository.find({
      where: { student: { id: student.id } },
      relations: ['student', 'suggestions'],
    });

    return diagnostics.map(diagnostic =>
      this.diagnosticToResponseObject(diagnostic),
    );
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
      relations: ['student', 'suggestions'],
    });

    return diagnostics.map(diagnostic =>
      this.diagnosticToResponseObject(diagnostic),
    );
  }

  async read(userId: string, id: string): Promise<DiagnosticRO> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'diagnostics'],
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
