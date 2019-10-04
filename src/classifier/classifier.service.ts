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
    return await this.mainTdm(justPosts);
  }

  async mainTdm(posts: string[]) {
    let mainCount = 0;

    if (await this.isABehaviourPresent(posts)) {
      console.log('El criterio A está presente');
      mainCount++;
    } else {
      console.log('El criterio A no está presente');
    }

    /*
	if(await isBBehaviourPresent(postsArray)){
		console.log("El criterio B está presente");
		mainCount++;
	}
	else
		console.log("El criterio B no está presente");
	*/

    /*
	if(await isCBehaviourPresent(postsArray)){
		console.log("El criterio C está presente");
		mainCount++;
	}
	else
		console.log("El criterio C no está presente");
	*/

    //Mandamos la respuesta final sobre si presenta o no los sintomas del TDM

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

  /* async isBBehaviourPresent(postsArray){
    let presentSymptoms = 0;
  
    //if(await criteriaB1.analyzePosts(postsArray))
      presentSymptoms++;
  
    if(presentSymptoms > 0)
      return true;
    return false;
  }
  
  async isCBehaviourPresent(postsArray){
    let presentSymptoms = 0;
  
    if(await criteriaC1.analyzePosts(postsArray))
      presentSymptoms++;
  
    if(presentSymptoms > 0)
      return true;
    return false;
  }*/
}
