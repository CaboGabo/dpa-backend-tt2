import { Injectable } from '@nestjs/common';
import { PostRO } from '../posts/post.dto';

import * as criteriaA2 from './criteria/criteriaA2';
import * as criteriaA3 from './criteria/criteriaA3';
import * as criteriaA4 from './criteria/criteriaA4';
import * as criteriaA6 from './criteria/criteriaA6';
import * as criteriaA7 from './criteria/criteriaA7';
import * as criteriaA8 from './criteria/criteriaA8';
import * as criteriaA9 from './criteria/criteriaA9';
import * as criteriaB1 from './criteria/criteriaB1';
import * as criteriaB4 from './criteria/criteriaB4';
import * as criteriaB6 from './criteria/criteriaB6';
import * as criteriaC1 from './criteria/criteriaC1';

let resultA2,resultA3,resultA4,resultA6,resultA7,
    resultA8,resultA9,resultB1,resultB4,resultB6,
    resultC1;

@Injectable()
export class ClassifierService {
  public async classify(posts: PostRO[]) {
    let justPosts = [];
    for (const post of posts) {
      justPosts.push(post.content);
    }
    await this.allCriterias(justPosts);
    let result = [];
    result[0] = this.mainTdm(justPosts);
    result[1] = this.mainTdp(justPosts); 
    return result;
  }

  async allCriterias(posts: string[]){
    resultA2 = criteriaA2.analyzePosts(posts);
    resultA3 = criteriaA3.analyzePosts(posts);
    resultA4 = criteriaA4.analyzePosts(posts);
    resultA6 = criteriaA6.analyzePosts(posts);
    resultA7 = criteriaA7.analyzePosts(posts);
    resultA8 = criteriaA8.analyzePosts(posts);
    resultA9 = criteriaA9.analyzePosts(posts);
    resultB1 = criteriaB1.analyzePosts(posts);
    resultB4 = criteriaB4.analyzePosts(posts);
    resultB6 = criteriaB6.analyzePosts(posts);
    resultC1 = criteriaC1.analyzePosts(posts);
  }


  async mainTdm(posts: string[]) {
    let mainCount = 0;

    if (await this.isTdmABehaviourPresent(posts)) {
      console.log('El criterio TDM-A está presente');
      mainCount++;
    } else {
      console.log('El criterio TDM-A no está presente');
    }

	  if(await this.isTdmBBehaviourPresent(posts)){
		  console.log("El criterio TDM-B está presente");
		  mainCount++;
	  }
	  else
		  console.log("El criterio TDM-B no está presente");

	  if(await this.isTdmCBehaviourPresent(posts)){
		  console.log("El criterio TDM-C está presente");
		  mainCount++;
	  }
	  else
		  console.log("El criterio TDM-C no está presente");

    //Mandamos la respuesta final sobre si presenta o no los sintomas del TDM
    if (mainCount == 3) {
      return true;
    } else {
      return false;
    }
  }


  async mainTdp(posts: string[]){
    let mainCount = 0;

    if(await this.isTdpABehaviourPresent(posts)){
      console.log("El criterio TDP-A está presente");
      mainCount++;
    }
    else
      console.log("El criterio TDP-A no está presente");
    
    if(await this.isTdpBBehaviourPresent(posts)){
      console.log("El criterio TDP-B está presente");
      mainCount++;
    }
    else
      console.log("El criterio TDP-B no está presente");
    
    if(await this.isTdpCBehaviourPresent(posts)){
      console.log("El criterio TDP-C está presente");
      mainCount++;
    }
    else
      console.log("El criterio TDP-C no está presente");

    if(await this.isTdpGBehaviourPresent(posts)){
      console.log("El criterio TDP-G está presente");
      mainCount++;
    }
    else
      console.log("El criterio TDP-G no está presente");

    if(await this.isTdpHBehaviourPresent(posts)){
      console.log("El criterio TDP-H está presente");
      mainCount++;
    }
    else
      console.log("El criterio TDP-H no está presente");  

    //Mandamos la respuesta final sobre si presenta o no los sintomas del TDM
    if(mainCount == 3)
      return true;
    else
      return false;
}


//*******************    PUNTOS TDM  *************************************************************************

  async isTdmABehaviourPresent(posts: string[]) {
    let presentSymptoms = 0;

    //Verificamos que el porcentaje de publicaciones es en su mayoría depresivo

    //if(depPercentage > 50)
    //  presentSymptoms++

    if(resultA2)
      presentSymptoms++;

    if(resultA3)
      presentSymptoms++;

    if(resultA4)
      presentSymptoms++;

    if(resultA6)
      presentSymptoms++;

    if(resultA7)
      presentSymptoms++;

    if(resultA8)
      presentSymptoms++;

    if(resultA9)
      presentSymptoms++;

    if(presentSymptoms >= 5)
      return true;
    return false;
  }

  async isTdmBBehaviourPresent(posts: string[]){
    let presentSymptoms = 0;
  
    if(resultB1)
      presentSymptoms++;
  
    if(presentSymptoms > 0)
      return true;
    return false;
  }
  
  async isTdmCBehaviourPresent(posts: string[]){
    let presentSymptoms = 0;
  
    if(resultC1)
      presentSymptoms++;
  
    if(presentSymptoms > 0)
      return true;
    return false;
  }

  
//*******************    PUNTOS TDP  *************************************************************************

  async isTdpABehaviourPresent(posts: string[]){
    let presentSymptoms = 0;
    
    //Detección de pensamientos negativos durante dos años

    if(presentSymptoms >= 2)
      return true;
    return false;
  }

  async isTdpBBehaviourPresent(posts: string[]){
    let presentSymptoms = 0;

    //Pérdida o aumento de apetito
    if(resultA3)
      presentSymptoms++;

    //Insomnio
    if(resultA4)
      presentSymptoms++;

    //Fatiga
    if(resultA6)
      presentSymptoms++;

    //Baja autoestima / Involucra criterio A7 (Pensamientos de inutilidad)
    if(resultB4 || resultA7)
      presentSymptoms++;

    //Dificultad para concentrarse
    if(resultA8)
      presentSymptoms++;

    //Desesperanza
    if(resultB6)
      presentSymptoms++;

    if(presentSymptoms >= 2)
      return true;
    return false;
  }

  async isTdpCBehaviourPresent(posts: string[]){
    //Checar fechas
    let presentSymptoms = 0;

    //Deteccion de efectos presentes sin lapsos vacios de 2 meses

    if(presentSymptoms > 0)
      return true;
    return false;
  }

  async isTdpGBehaviourPresent(posts: string[]){
    let presentSymptoms = 0;

    //Sustancia o enfermedad
    if(resultC1)
      presentSymptoms++;

    if(presentSymptoms > 0)
      return true;
    return false;
  }

  async isTdpHBehaviourPresent(posts: string[]){
    let presentSymptoms = 0;

    //Malestar o Deterioro
    if(resultB1)
      presentSymptoms++;

    if(presentSymptoms > 0)
      return true;
    return false;
  }


}
