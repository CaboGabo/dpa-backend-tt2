import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { GoogleCloudService } from '../google-cloud/google-cloud.service';
import { TwitterAuthDTO } from './twitter-auth.dto';

import * as Twitter from 'twitter';
import { PostDTO } from '../../posts/post.dto';

@Injectable()
export class TwitterService {
  constructor(private googleCloud: GoogleCloudService) {}

  public async getTwitterPosts(
    twitterAuth: Partial<TwitterAuthDTO>,
    count: number,
  ): Promise<any> {
    const twitterKeys = {
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: twitterAuth.token || process.env.TWITTER_ACCESS_KEY,
      access_token_secret:
        twitterAuth.secret || process.env.TWITTER_ACCESS_SECRET,
    };

    const twitterClient = new Twitter(twitterKeys);

    const options = {
      screen_name: twitterAuth.userName,
      count,
      tweet_mode: 'extended',
    };

    let posts = [];

    try {
      const tweets = await twitterClient.get('statuses/user_timeline', options);
      for (const tweet of tweets) {
        const formatedTweet = this.formatTweet(tweet.full_text);
        const processedTweet = await this.googleCloud.analyzePost(
          formatedTweet,
        );
        const content = `"Publicación: ${formatedTweet}, Sentimiento: ${
          processedTweet.score
        }, Magnitud: ${processedTweet.magnitude}"`;
        const tag = await this.googleCloud.predictPost(content);
        //console.log(tag);
        //const tag = 'Sin depresión';
        const post = {
          content: `${content}, ${tag}`,
          type: 'text',
          postdate: this.formatDate(tweet.created_at),
        };

        console.log(post);
        posts.push(post);
      }

      return posts;
    } catch (e) {
      console.log('error', e);
      throw new ServiceUnavailableException();
    }
  }

  formatDate(text: string): string {
    const date = new Date(text);
    const stringDate = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`;
    return stringDate;
  }

  formatTweet(text: string): string {
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
