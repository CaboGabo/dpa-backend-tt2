import { Injectable } from '@nestjs/common';
import { PostRO } from '../posts/post.dto';

import * as classifier from './classifier';

@Injectable()
export class ClassifierService {
  public async classify(posts: PostRO[]) {
    const criteriaResults = await classifier.main(posts);
    console.log(criteriaResults);

    let result = [];
    result[0] = await this.mainTdm(criteriaResults);
    result[1] = await this.mainTdp(criteriaResults);
    return result;
  }

  //*************              ************//
  //*************    TDM       ************//
  //*************              ************//
  //*************              ************//

  async mainTdm(criteriaResults: any) {
    let resultTdm = {
      globalResult: false,
      criteriaResults: [
        { keyname: 'A2', result: criteriaResults[0] },
        { keyname: 'A3', result: criteriaResults[1] },
        { keyname: 'A4', result: criteriaResults[2] },
        { keyname: 'A6', result: criteriaResults[3] },
        { keyname: 'A7', result: criteriaResults[4] },
        { keyname: 'A8', result: criteriaResults[5] },
        { keyname: 'A9', result: criteriaResults[6] },
        { keyname: 'B1', result: criteriaResults[7] },
        { keyname: 'C1', result: criteriaResults[10] },
      ],
    };

    let mainCount = 0;
    let cBehaviour = false;

    if (await this.isTdmABehaviourPresent(criteriaResults)) {
      console.log('El criterio TDM-A está presente');
      mainCount++;
    } else {
      console.log('El criterio TDM-A no está presente');
    }

    if (await this.isTdmBBehaviourPresent(criteriaResults)) {
      console.log('El criterio TDM-B está presente');
      mainCount++;
    } else console.log('El criterio TDM-B no está presente');

    if (await this.isTdmCBehaviourPresent(criteriaResults)) {
      console.log('El criterio TDM-C está presente');
      cBehaviour = true;
    } else console.log('El criterio TDM-C no está presente');

    //Mandamos la respuesta final sobre si presenta o no los sintomas del TDM
    if (mainCount == 2 && !cBehaviour) {
      resultTdm.globalResult = true;
    }

    return resultTdm;
  }

  async isTdmABehaviourPresent(criteriaResults: any) {
    let presentSymptoms = 0;

    //****************
    //Verificamos que el porcentaje de publicaciones es en su mayoría depresivo
    //if(depPercentage > 50)
    //  presentSymptoms++

    //Criterios A2-A9
    if (criteriaResults[0]) {
      presentSymptoms++;
    }

    if (criteriaResults[1]) {
      presentSymptoms++;
    }

    if (criteriaResults[2]) {
      presentSymptoms++;
    }

    if (criteriaResults[3]) {
      presentSymptoms++;
    }

    if (criteriaResults[4]) {
      presentSymptoms++;
    }

    if (criteriaResults[5]) {
      presentSymptoms++;
    }

    if (criteriaResults[6]) {
      presentSymptoms++;
    }

    if (presentSymptoms >= 5) {
      return true;
    }

    return false;
  }

  async isTdmBBehaviourPresent(criteriaResults: any) {
    let presentSymptoms = 0;

    if (criteriaResults[7]) {
      presentSymptoms++;
    }

    if (presentSymptoms > 0) {
      return true;
    }

    return false;
  }

  async isTdmCBehaviourPresent(criteriaResults: any) {
    let presentSymptoms = 0;

    if (criteriaResults[10]) {
      presentSymptoms++;
    }

    if (presentSymptoms > 0) {
      return true;
    }

    return false;
  }

  //*************              ************//
  //*************    TDP       ************//
  //*************              ************//
  //*************              ************//

  async mainTdp(criteriaResults: any) {
    let resultTdp = {
      globalResult: false,
      criteriaResults: [
        { keyname: 'A3', result: criteriaResults[1] },
        { keyname: 'A4', result: criteriaResults[2] },
        { keyname: 'A6', result: criteriaResults[3] },
        { keyname: 'A7', result: criteriaResults[4] },
        { keyname: 'A8', result: criteriaResults[5] },
        { keyname: 'B4', result: criteriaResults[8] },
        { keyname: 'B6', result: criteriaResults[9] },
        { keyname: 'B1', result: criteriaResults[7] },
        { keyname: 'C1', result: criteriaResults[10] },
      ],
    };

    let mainCount = 0;
    let gBehaviour = false;

    if (await this.isTdpABehaviourPresent()) {
      console.log('El criterio TDP-A está presente');
      mainCount++;
    } else console.log('El criterio TDP-A no está presente');

    if (await this.isTdpBBehaviourPresent(criteriaResults)) {
      console.log('El criterio TDP-B está presente');
      mainCount++;
    } else console.log('El criterio TDP-B no está presente');

    if (await this.isTdpCBehaviourPresent(criteriaResults)) {
      console.log('El criterio TDP-C está presente');
      mainCount++;
    } else console.log('El criterio TDP-C no está presente');

    if (await this.isTdpGBehaviourPresent(criteriaResults)) {
      console.log('El criterio TDP-G está presente');
      gBehaviour = true;
    } else console.log('El criterio TDP-G no está presente');

    if (await this.isTdpHBehaviourPresent(criteriaResults)) {
      console.log('El criterio TDP-H está presente');
      mainCount++;
    } else console.log('El criterio TDP-H no está presente');

    //Mandamos la respuesta final sobre si presenta o no los sintomas del TDM
    if (mainCount == 4 && !gBehaviour) {
      resultTdp.globalResult = true;
    }

    return resultTdp;
  }

  async isTdpABehaviourPresent() {
    let presentSymptoms = 0;

    //Detección de pensamientos negativos durante dos años
    //****************
    if (presentSymptoms >= 0) {
      return true;
    }

    return false;
  }

  async isTdpBBehaviourPresent(criteriaResults) {
    let presentSymptoms = 0;

    //Pérdida o aumento de apetito
    if (criteriaResults[1]) {
      presentSymptoms++;
    }

    //Insomnio
    if (criteriaResults[2]) {
      presentSymptoms++;
    }

    //Fatiga
    if (criteriaResults[3]) {
      presentSymptoms++;
    }

    //Baja autoestima / Involucra criterio A7 (Pensamientos de inutilidad)
    if (criteriaResults[8] || criteriaResults[4]) {
      presentSymptoms++;
    }

    //Dificultad para concentrarse
    if (criteriaResults[5]) {
      presentSymptoms++;
    }

    //Desesperanza
    if (criteriaResults[9]) {
      presentSymptoms++;
    }

    if (presentSymptoms >= 2) {
      return true;
    }

    return false;
  }

  async isTdpCBehaviourPresent(criteriaResults) {
    //Checar fechas
    let presentSymptoms = 0;

    //****************
    //Deteccion de efectos presentes sin lapsos vacios de 2 meses

    if (presentSymptoms > 0) {
      return true;
    }

    return false;
  }

  async isTdpGBehaviourPresent(criteriaResults) {
    let presentSymptoms = 0;

    //Sustancia o enfermedad
    if (criteriaResults[10]) {
      presentSymptoms++;
    }

    if (presentSymptoms > 0) {
      return true;
    }
    return false;
  }

  async isTdpHBehaviourPresent(criteriaResults) {
    let presentSymptoms = 0;

    //Malestar o Deterioro
    if (criteriaResults[7]) {
      presentSymptoms++;
    }

    if (presentSymptoms > 0) {
      return true;
    }
    return false;
  }
}
