const lorca = require('lorca-nlp');

let ocurrences = 0;

let stemmsKeywords = [];

let keywordEx = [];

function levenshteinDistance(a, b) {
  const distanceMatrix = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));
  for (let i = 0; i <= a.length; i += 1) {
    distanceMatrix[0][i] = i;
  }

  for (let j = 0; j <= b.length; j += 1) {
    distanceMatrix[j][0] = j;
  }

  for (let j = 1; j <= b.length; j += 1) {
    for (let i = 1; i <= a.length; i += 1) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      distanceMatrix[j][i] = Math.min(
        distanceMatrix[j][i - 1] + 1,
        distanceMatrix[j - 1][i] + 1,
        distanceMatrix[j - 1][i - 1] + indicator,
      );
    }
  }

  return distanceMatrix[b.length][a.length];
}

function splitMulti(str, tokens) {
  let tempChar = tokens[0];
  for (let i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  str = str.split(tempChar);
  return str;
}

/*
//Obtener si alguna palabra clave o derivado aparece en el texto
exports.keywordId = function (post, keywords) {
	//Creation of stemms for posts and keywords

	//Post stemms
	let doc = lorca(post);
	let stemms = doc.words().stem().get();

	//Array stemms
	const stemmsKeywords = [];
	for (let i = 0; i < keywords.length; i++) {
		stemmsKeywords.push(doc.stem(keywords[i]));
	}

	let count = 0;
	for (let i = 0; i < stemms.length; i++) {
		for (let j = 0; j < stemmsKeywords.length; j++) {
			let levDistance = levenshteinDistance(stemms[i], stemmsKeywords[j]);
			let totalLength = stemms[i].length + stemmsKeywords[j].length;
			let simPercentage = levDistance * 100 / totalLength;
			if ((levDistance <= 2) && (simPercentage < 20) &&
				(stemms[i].substring(0, 2) === stemmsKeywords[j].substring(0, 2))
			) {
				console.log(stemms[i] + "/" + stemmsKeywords[j]);
				console.log(simPercentage + "%");
				console.log("Levenshtein: " + levenshteinDistance(stemms[i], stemmsKeywords[j]));
				count++;
			}
		}
	}
	return count;
}

*/

//Obtener si alguna oración tiene relación con alguna de las frases prestablecidas
exports.phrasesId = async function(post, intent, manager) {
  let promisesArray = [];
  let sentences = splitMulti(post, '.');
  // Entrenamos y salvamos el modelo.
  //Enviamos post oración por oración a verificar
  for (let i = 0; i < sentences.length; i++) {
    //Si las frases son muy largas, se separan por otros delimitadores (por ahora la ',')
    if (sentences[i].length > 60) {
      let tokensDel = [
        ';',
        ',',
        '?',
        '¿',
        '!',
        '¡',
        ' y ',
        ' e ',
        ' o ',
        ' u ',
        ' ni ',
      ];
      let sentenceChunks = splitMulti(sentences[i], tokensDel);
      for (let j = 0; j < sentenceChunks.length; j++) {
        promisesArray.push(manager.process('es', sentenceChunks[j]));
      }
    } else {
      promisesArray.push(manager.process('es', sentences[i]));
    }
  }

  //console.log(promisesArray);
  let responses = await Promise.all(promisesArray);
  responses.forEach(element => {
    if (element.intent === intent && element.score > 0.7) {
      console.log(
        'Utterance: ' +
          element.utterance +
          ' Intent: ' +
          element.intent +
          ' Score: ' +
          element.score,
      );
      //Si el intent tiene score por encima de 0.98 automaticamente se suma la ocurrencia
      if (element.score > 0.98) {
        ocurrences++;
        return;
      }
      //Sacamos los stemms del utterance
      let utter = lorca(element.utterance);
      let stemmsUtterance = utter
        .words()
        .stem()
        .get();
      let count = 0;
      for (let i = 0; i < stemmsUtterance.length; i++) {
        for (let j = 0; j < stemmsKeywords.length; j++) {
          let levDistance = levenshteinDistance(
            stemmsUtterance[i],
            stemmsKeywords[j],
          );
          let totalLength =
            stemmsUtterance[i].length + stemmsKeywords[j].length;
          let simPercentage = (levDistance * 100) / totalLength;
          if (
            levDistance <= 2 &&
            simPercentage < 20 &&
            stemmsUtterance[i].substring(0, 2) ===
              stemmsKeywords[j].substring(0, 2) &&
            !keywordEx.includes(stemmsUtterance[i])
          ) {
            //console.log(stemmsUtterance[i] + "/" + stemmsKeywords[j]);
            //console.log(simPercentage + "%");
            //console.log("Levenshtein: " + levenshteinDistance(stemmsUtterance[i], stemmsKeywords[j]));
            if (levDistance < 2 && simPercentage < 15) {
              console.log(
                stemmsUtterance[i] +
                  '/' +
                  stemmsKeywords[j] +
                  '/' +
                  element.score,
              );
              //console.log("Keywords Stemms" + stemmsKeywords);
              ocurrences++;
              return;
            }
          }
        }
      }
    }
  });

  return ocurrences;
};

exports.setKeywordsStemms = async function(keywordsArray) {
  stemmsKeywords = [];
  let doc = lorca('');
  for (let i = 0; i < keywordsArray.length; i++) {
    stemmsKeywords.push(doc.stem(keywordsArray[i]));
  }
};

exports.setKeywordsExceptions = async function(keywordsExceptions) {
  keywordEx = [];
  let doc = lorca('');
  for (let i = 0; i < keywordsExceptions.length; i++) {
    keywordEx.push(doc.stem(keywordsExceptions[i]));
  }
};

exports.getOcurrences = function() {
  console.log('OCURRENCIAS: ' + ocurrences);
  return ocurrences;
};

exports.resetOcurrences = function() {
  ocurrences = 0;
};
