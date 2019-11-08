import { Injectable } from '@nestjs/common';
//import { PostRO } from '../posts/post.dto';

import * as classifier from './classifier';
import { PostEntity } from '../posts/post.entity';

classifier.getClassifiers();

@Injectable()
export class ClassifierService {
  public async classify(posts: PostEntity[]) {
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
        {
          keyname: 'A2',
          result: criteriaResults[0]['perdidaInteres'],
          ocurrences: criteriaResults[1]['perdidaInteres'],
        },
        {
          keyname: 'A3',
          result: criteriaResults[0]['modPeso'],
          ocurrences: criteriaResults[1]['modPeso'],
        },
        {
          keyname: 'A4',
          result: criteriaResults[0]['insomnio'],
          ocurrences: criteriaResults[1]['insomnio'],
        },
        {
          keyname: 'A6',
          result: criteriaResults[0]['fatiga'],
          ocurrences: criteriaResults[1]['fatiga'],
        },
        {
          keyname: 'A7',
          result: criteriaResults[0]['inutilidad'],
          ocurrences: criteriaResults[1]['inutilidad'],
        },
        {
          keyname: 'A8',
          result: criteriaResults[0]['disminucionPensar'],
          ocurrences: criteriaResults[1]['disminucionPensar'],
        },
        {
          keyname: 'A9',
          result: criteriaResults[0]['p_muerte'],
          ocurrences: criteriaResults[1]['p_muerte'],
        },
        {
          keyname: 'B1',
          result: criteriaResults[0]['malestar'],
          ocurrences: criteriaResults[1]['malestar'],
        },
        {
          keyname: 'C1',
          result: criteriaResults[0]['consumoAfeccion'],
          ocurrences: criteriaResults[1]['consumoAfeccion'],
        },
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
    if (criteriaResults[0]['perdidaInteres']) {
      presentSymptoms++;
    }

    if (criteriaResults[0]['modPeso']) {
      presentSymptoms++;
    }

    if (criteriaResults[0]['insomnio']) {
      presentSymptoms++;
    }

    if (criteriaResults[0]['fatiga']) {
      presentSymptoms++;
    }

    if (criteriaResults[0]['inutilidad']) {
      presentSymptoms++;
    }

    if (criteriaResults[0]['disminucionPensar']) {
      presentSymptoms++;
    }

    if (criteriaResults[0]['p_muerte']) {
      presentSymptoms++;
    }

    if (presentSymptoms >= 5) {
      return true;
    }

    return false;
  }

  async isTdmBBehaviourPresent(criteriaResults: any) {
    let presentSymptoms = 0;

    if (criteriaResults[0]['malestar']) {
      presentSymptoms++;
    }

    if (presentSymptoms > 0) {
      return true;
    }

    return false;
  }

  async isTdmCBehaviourPresent(criteriaResults: any) {
    let presentSymptoms = 0;

    if (criteriaResults[0]['consumoAfeccion']) {
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
        {
          keyname: 'A3',
          result: criteriaResults[0]['modPeso'],
          ocurrences: criteriaResults[1]['modPeso'],
        },
        {
          keyname: 'A4',
          result: criteriaResults[0]['insomnio'],
          ocurrences: criteriaResults[1]['insomnio'],
        },
        {
          keyname: 'A6',
          result: criteriaResults[0]['fatiga'],
          ocurrences: criteriaResults[1]['fatiga'],
        },
        {
          keyname: 'A7',
          result: criteriaResults[0]['inutilidad'],
          ocurrences: criteriaResults[1]['inutilidad'],
        },
        {
          keyname: 'A8',
          result: criteriaResults[0]['disminucionPensar'],
          ocurrences: criteriaResults[1]['disminucionPensar'],
        },
        {
          keyname: 'B4',
          result: criteriaResults[0]['bajaAutoestima'],
          ocurrences: criteriaResults[1]['bajaAutoestima'],
        },
        {
          keyname: 'B6',
          result: criteriaResults[0]['desesperanza'],
          ocurrences: criteriaResults[1]['desesperanza'],
        },
        {
          keyname: 'B1',
          result: criteriaResults[0]['malestar'],
          ocurrences: criteriaResults[1]['malestar'],
        },
        {
          keyname: 'C1',
          result: criteriaResults[0]['consumoAfeccion'],
          ocurrences: criteriaResults[1]['consumoAfeccion'],
        },
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
    if (criteriaResults[0]['modPeso']) {
      presentSymptoms++;
    }

    //Insomnio
    if (criteriaResults[0]['insomnio']) {
      presentSymptoms++;
    }

    //Fatiga
    if (criteriaResults[0]['fatiga']) {
      presentSymptoms++;
    }

    //Baja autoestima / Involucra criterio A7 (Pensamientos de inutilidad)
    if (
      criteriaResults[0]['bajaAutoestima'] ||
      criteriaResults[0]['inutilidad']
    ) {
      presentSymptoms++;
    }

    //Dificultad para concentrarse
    if (criteriaResults[0]['disminucionPensar']) {
      presentSymptoms++;
    }

    //Desesperanza
    if (criteriaResults[0]['desesperanza']) {
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
    if (criteriaResults[0]['consumoAfeccion']) {
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
    if (criteriaResults[0]['malestar']) {
      presentSymptoms++;
    }

    if (presentSymptoms > 0) {
      return true;
    }
    return false;
  }
}
