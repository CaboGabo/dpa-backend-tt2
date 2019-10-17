import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { GoogleCloudService } from '../google-cloud/google-cloud.service';
import { RedditAuthDTO } from './reddit-auth.dto';

import * as snoowrap from 'snoowrap';
import { PostDTO } from '../../posts/post.dto';

@Injectable()
export class RedditService {
  constructor(private googleCloud: GoogleCloudService) {}

  public async getRedditPosts(
    redditAuth: RedditAuthDTO,
    count: number,
  ): Promise<any> {
    const redditKeys = {
      code: redditAuth.code,
      userAgent: 'DPa App',
      scope: ['identity', 'mysubreddits', 'read', 'history'],
      clientId: process.env.CLIENT_ID_REDDIT,
      clientSecret: process.env.CLIENT_SECRET_REDDIT,
      redirectUri: 'http://localhost:4200/sign-up-networks',
    };

    let posts = [];

    const r = await snoowrap.fromAuthCode(redditKeys);
    const me = await r.getMe().name;
    const redditPosts = await r.getUser(me).getSubmissions({ amount: count });
    const redditComments = await r.getUser(me).getComments({ amount: count });

    console.log('me');
    console.log(me);

    for (const redditPost of redditPosts) {
      posts.push(await this.buildPost(redditPost));
    }

    for (const redditComment of redditComments) {
      posts.push(await this.buildComment(redditComment));
    }

    return posts;
  }

  toDate(secs: number): Date {
    let date = new Date(1970, 0, 1);
    date.setSeconds(secs);
    return date;
  }

  async buildPost(p: any) {
    const formatedPost = this.formatPost(`${p.title}: ${p.selftext}`);
    const processedPost = await this.googleCloud.analyzePost(formatedPost);
    const content = `"Publicación: ${formatedPost}, Sentimiento: ${
      processedPost.score
    }, Magnitud: ${processedPost.magnitude}"`;
    const tag = await this.googleCloud.predictPost(content);

    const post = {
      content: formatedPost,
      sentiment: processedPost.score,
      magnitude: processedPost.magnitude,
      tag,
      type: 'text',
      postdate: this.formatDate(this.toDate(p.created)),
    };
    console.log(post);
    return post;
  }

  formatDate(date: Date): string {
    const stringDate = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`;
    return stringDate;
  }

  async buildComment(c: any) {
    const formatedComment = this.formatPost(c.body);
    const processedComment = await this.googleCloud.analyzePost(
      formatedComment,
    );
    const content = `"Publicación: ${formatedComment}, Sentimiento: ${
      processedComment.score
    }, Magnitud: ${processedComment.magnitude}`;
    const tag = await this.googleCloud.predictPost(content);

    const post = {
      content: formatedComment,
      sentiment: processedComment.score,
      magnitude: processedComment.magnitude,
      tag,
      type: 'text',
      postdate: this.toDate(c.created).toDateString(),
    };

    return post;
  }

  formatPost(text: string): string {
    const formatedText = [];

    const arrText = text.split('');
    let j = 0;
    for (let i = 0; i < arrText.length; i++) {
      if (arrText[i] === '"') {
        formatedText.push('"');
      }
      formatedText.push(arrText[i]);
    }

    return formatedText.join('');
  }
}
