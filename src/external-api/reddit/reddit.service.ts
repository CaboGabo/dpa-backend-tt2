import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { GoogleCloudService } from '../google-cloud/google-cloud.service';
import { RedditAuthDTO } from './reddit-auth.dto';

import * as snoowrap from 'snoowrap';
import { PostDTO } from '../../posts/post.dto';

@Injectable()
export class RedditService {
  constructor(private googleCloud: GoogleCloudService) {}

  public getAuthenticationUrl() {
    const authenticationUrl = snoowrap.getAuthUrl({
      clientId: 'sMWdg1ctbYuP6Q',
      scope: ['identity', 'mysubreddits', 'read', 'history'],
      redirectUri: 'http://localhost:4200/sign-up-networks',
      permanent: false,
      state: 'fe211bebc52eb3da9bef8db6e63104d3',
    });

    return authenticationUrl;
  }

  public async getRedditPosts(
    redditAuth: RedditAuthDTO,
    count: number,
  ): Promise<any> {
    const redditKeys = {
      code: redditAuth.code,
      userAgent: 'DPa App',
      scope: ['identity', 'mysubreddits', 'read', 'history'],
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri: 'http://localhost:4200/sign-up-networks',
    };

    let posts: PostDTO[];

    snoowrap
      .fromAuthCode(redditKeys)
      .then(r => {
        r.getMe()
          .fetch()
          .then(async userInfo => {
            const [redditPosts, redditComments] = await Promise.all([
              r.getUser(userInfo.name).getSubmissions({ limit: count }),
              r.getUser(userInfo.name).getComments({ limit: count }),
            ]);
            for (const redditPost of redditPosts) {
              const formatedPost = this.formatPost(
                `${redditPost.title}: ${redditPost.selftext}`,
              );
              const processedPost = await this.googleCloud.analyzePost(
                formatedPost,
              );
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
                postdate: this.toDate(redditPost.created).toDateString(),
              };

              console.log(post);
              posts.push(post);
            }

            for (const redditComment of redditComments) {
              const formatedComment = this.formatPost(redditComment.body);
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
                postdate: this.toDate(redditComment.created).toDateString(),
              };

              posts.push(post);
            }

            return posts;
          });
      })
      .catch(err => {
        console.log(err);
        throw new ServiceUnavailableException();
      });
  }

  toDate(secs: number): Date {
    let date = new Date(1970, 0, 1);
    date.setSeconds(secs);
    return date;
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
