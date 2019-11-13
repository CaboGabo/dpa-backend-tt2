const criteriaA2 = require('./classifiers/criteriaA2');
const criteriaA3 = require('./classifiers/criteriaA3');
const criteriaA4 = require('./classifiers/criteriaA4');
const criteriaA6 = require('./classifiers/criteriaA6');
const criteriaA7 = require('./classifiers/criteriaA7');
const criteriaA8 = require('./classifiers/criteriaA8');
const criteriaA9 = require('./classifiers/criteriaA9');
const criteriaB1 = require('./classifiers/criteriaB1');
const criteriaB4 = require('./classifiers/criteriaB4');
const criteriaB6 = require('./classifiers/criteriaB6');
const criteriaC1 = require('./classifiers/criteriaC1');

let classifiers = [];

let tokensDel = ['.', ';', ',', '?', '¿', '!', '¡', ' y ', ' e ', ' o ', ' u ', ' ni '];

async function getClassifiers() {
  classifiers = await Promise.all([
    criteriaA2.train(),
    criteriaA3.train(),
    criteriaA4.train(),
    criteriaA6.train(),
    criteriaA7.train(),
    criteriaA8.train(),
    criteriaA9.train(),
    criteriaB1.train(),
    criteriaB4.train(),
    criteriaB6.train(),
    criteriaC1.train(),
  ]);

  console.log('Clasificadores entrenados');
}

async function main(posts) {
  let tags = [
    'perdidaInteres',
    'modPeso',
    'insomnio',
    'fatiga',
    'inutilidad',
    'disminucionPensar',
    'p_muerte',
    'malestar',
    'bajaAutoestima',
    'desesperanza',
    'consumoAfeccion',
  ];

  let ocurrences = {
    perdidaInteres: 0,
    modPeso: 0,
    insomnio: 0,
    fatiga: 0,
    inutilidad: 0,
    disminucionPensar: 0,
    p_muerte: 0,
    malestar: 0,
    bajaAutoestima: 0,
    desesperanza: 0,
    consumoAfeccion: 0,
  };

  let postOcurrences = {
    perdidaInteres: [],
    modPeso: [],
    insomnio: [],
    fatiga: [],
    inutilidad: [],
    disminucionPensar: [],
    p_muerte: [],
    malestar: [],
    bajaAutoestima: [],
    desesperanza: [],
    consumoAfeccion: [],
  };

  //Dividmos los posts en oraciones
  let sentences = [];
  let cont = 0;
  for (const post of posts){
    sentences[cont] = await splitMulti(post.content, tokensDel);
    cont++;
  }

  console.log('*********');
  let i = 0;
  for (const classifier of classifiers) {
    let k = 0;
    for (const sentence of sentences) {
      for (let j = 0; j < sentence.length; j++) {
        const result = classifier.getBestClassification(sentence[j]);
        console.log('SentenceLoca: ' + sentence[j]);
        if (result.label === tags[i] && result.value > 0.95) {
          console.log('SentenceLoca: ' + sentence[j]);
          console.log(result);
          ocurrences[`${result.label}`]++;
          postOcurrences[`${result.label}`].push(posts[k].id);
          break;
        }
      }
      k++;
    }
    i++;
  }
  

  let results = {};
  for (criteria in ocurrences) {
    if (ocurrences[criteria] >= 3) {
      results[criteria] = true;
    } else {
      results[criteria] = false;
    }
  }

  return [results, postOcurrences];
}

async function splitMulti(str, tokens) {
  let tempChar = tokens[0];
  for (let i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  str = str.split(tempChar);
  return str;
}

module.exports = {
  main,
  getClassifiers
};