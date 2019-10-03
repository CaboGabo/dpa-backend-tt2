import { Injectable } from '@nestjs/common';
import { PostRO } from '../posts/post.dto';

import * as criteriaA9 from './tdm/criteriaA9';

@Injectable()
export class ClassifierService {
  public async classify(posts: PostRO[]) {
    let justPosts = [];
    for (const post of posts) {
      justPosts.push(post.content);
    }
    return [await this.mainTdm(justPosts), 85];
  }

  async mainTdm(posts: string[]) {
    let mainCount = 0;

    if (await this.isABehaviourPresent(posts)) {
      console.log('El criterio A está presente');
      mainCount++;
    } else {
      console.log('El criterio A no está presente');
    }

    if (mainCount == 3) {
      return true;
    } else {
      return false;
    }
  }

  async isABehaviourPresent(posts: string[]) {
    let presentSymptoms = 0;
    if (await criteriaA9.analyzePosts(posts)) {
      presentSymptoms++;
    }

    if (presentSymptoms >= 2) {
      return true;
    }

    return false;
  }
}
