const { NlpManager } = require('node-nlp');
const manager = new NlpManager({
  languages: ['es'],
});

const fs = require('fs');
const classifier = require('../classifier.js');
let modelTag = './modelA9.nlp';
let minOcurrences = 3;

async function trainnlp(manager) {
  if (fs.existsSync(modelTag)) {
    manager.load(modelTag);
    return;
  }

  manager.addDocument('es', 'Me quiero morir', 'p_muerte');
  manager.addDocument('es', 'Deseo morir', 'p_muerte');
  manager.addDocument('es', 'Ya quiero morir', 'p_muerte');
  manager.addDocument('es', 'Ya matenme', 'p_muerte');
  manager.addDocument('es', 'Ayer tenía ganas de suicidarme', 'p_muerte');
  manager.addDocument('es', 'Tengo ganas de suicidarme', 'p_muerte');
  manager.addDocument('es', 'El suicidio es la solución', 'p_muerte');
  manager.addDocument('es', 'Suicidarme es la solución', 'p_muerte');
  manager.addDocument('es', 'He pensado en suicidarme', 'p_muerte');
  manager.addDocument('es', 'Quiero suicidarme', 'p_muerte');
  manager.addDocument('es', 'Suicidarme es la mejor opción', 'p_muerte');
  manager.addDocument('es', 'La vida no vale nada', 'p_muerte');
  manager.addDocument('es', 'Ya no quiero vivir más tiempo', 'p_muerte');
  manager.addDocument('es', 'Me voy a matar', 'p_muerte');
  manager.addDocument(
    'es',
    'Morirme es la solución a mis problemas',
    'p_muerte',
  );
  manager.addDocument('es', 'Decidí acabar con mi vida', 'p_muerte');
  manager.addDocument('es', 'He pensado quitarme la vida', 'p_muerte');
  manager.addDocument('es', 'Decidí quitarme la vida', 'p_muerte');
  manager.addDocument('es', 'Voy a quitarme la vida', 'p_muerte');
  manager.addDocument('es', 'Quiero quitarme la vida', 'p_muerte');
  manager.addDocument(
    'es',
    'Voy a terminar con esto de una vez por todas',
    'p_muerte',
  );
  manager.addDocument('es', 'Mi vida no vale nada', 'p_muerte');
  manager.addDocument('es', 'Desearía estar muerto', 'p_muerte');
  manager.addDocument('es', 'Desearía estar muerta', 'p_muerte');
  manager.addDocument('es', 'Desearía no haber nacido', 'p_muerte');
  manager.addDocument('es', 'Me pienso hacer daño', 'p_muerte');
  manager.addDocument('es', 'Me despido de este mundo', 'p_muerte');
  manager.addDocument('es', 'Quiero irme de este mundo', 'p_muerte');
  manager.addDocument('es', 'Me preocupa la muerte', 'p_muerte');
  manager.addDocument('es', 'He perdido la esperanza', 'p_muerte');
  manager.addDocument(
    'es',
    'Estoy a punto de cometer un acto suicida',
    'p_muerte',
  );
  manager.addDocument('es', 'Solo veo obscuridad', 'p_muerte');
  manager.addDocument('es', 'La única solución es la muerte', 'p_muerte');
  manager.addDocument(
    'es',
    'La solución a mis problemas es acabar con mi vida',
    'p_muerte',
  );
  manager.addDocument('es', 'Ya quiero desaparecer de la tierra', 'p_muerte');
  manager.addDocument('es', 'No quiero vivir un día más', 'p_muerte');
  manager.addDocument('es', 'Solo quiero morir', 'p_muerte');
  manager.addDocument('es', 'Pienso en matarme constantemente', 'p_muerte');
  manager.addDocument('es', 'Tengo intenciones de matarme', 'p_muerte');
  manager.addDocument('es', 'Voy a matarme uno de estos días', 'p_muerte');
  manager.addDocument('es', 'Me voy a suicidar', 'p_muerte');
  manager.addDocument(
    'es',
    'no hay día en el cual no piense matarme',
    'p_muerte',
  );
  manager.addDocument('es', 'Solo quiero morir y descansar en paz', 'p_muerte');
  manager.addDocument('es', 'Siento que ya no voy a poder más', 'p_muerte');
  //manager.addDocument('es', '', 'p_muerte');

  //**********************************************************************************************************

  manager.addDocument('es', 'Vivir es de lo mejor que hay', 'p_vida');
  manager.addDocument('es', 'Quiero habla con alguien', 'p_vida');
  manager.addDocument('es', 'Estoy en una dificil situación', 'p_vida');
  manager.addDocument(
    'es',
    'Me haré muestras de sangre y otro tipo de exámenes',
    'p_vida',
  );
  manager.addDocument(
    'es',
    'Francamente no me hallo mucho en el entorno y el ambiente.',
    'p_vida',
  );
  manager.addDocument('es', 'Ayer tenía ganas de jugar', 'p_vida');
  manager.addDocument(
    'es',
    'La vida es lo más importante que tenemos',
    'p_vida',
  );
  manager.addDocument('es', 'Quiero llegar a ser viejito', 'p_vida');
  manager.addDocument('es', 'Morirse nunca es la solución', 'p_vida');
  manager.addDocument('es', 'Decidí acabar con mis estudios', 'p_vida');
  manager.addDocument('es', 'Voy a terminar mi tarea en estos días', 'p_vida');
  manager.addDocument(
    'es',
    'Siempre le he tenido miedo a la obscuridad',
    'p_vida',
  );
  manager.addDocument('es', 'Quiero irme de mi casa', 'p_vida');
  manager.addDocument(
    'es',
    'Ayer perdí mi cartera, espero recuperarla',
    'p_vida',
  );
  manager.addDocument(
    'es',
    'No importan los problemas, la vida es bella',
    'p_vida',
  );
  manager.addDocument('es', 'No quiero ir a la escuela', 'p_vida');
  manager.addDocument('es', 'Ayer me despedí rápido de mi amigo', 'p_vida');
  manager.addDocument(
    'es',
    'Aunque la vida sea dificil, hay que seguir luchando',
    'p_vida',
  );
  manager.addDocument('es', 'Hay que ir siempre para adelante', 'p_vida');
  manager.addDocument('es', 'No me gustan los vegetales', 'p_vida');
  manager.addDocument('es', 'No me agrada nada ese tipo', 'p_vida');
  manager.addDocument('es', 'La violencia la sufrimos todos', 'p_vida');
  manager.addDocument(
    'es',
    'el estar en linea no me hace sentir tan solo',
    'p_vida',
  );
  manager.addDocument('es', 'No me considero perfeccionista', 'p_vida');
  manager.addDocument('es', 'pero todo me afecta', 'p_vida');
  manager.addDocument(
    'es',
    'empece a sentir esto desde el año pasado',
    'p_vida',
  );
  manager.addDocument('es', 'cambiar de personalidad', 'p_vida');
  manager.addDocument('es', 'ODIO hacer squats', 'p_vida');
  manager.addDocument(
    'es',
    'les dejo este video para al menos terminarlo con buen sabor de boca',
    'p_vida',
  );
  manager.addDocument('es', 'pensar', 'p_vida');
  manager.addDocument('es', 'Hoy fui a hacerme', 'p_vida');
  manager.addDocument('es', 'una vez más', 'p_vida');
  manager.addDocument('es', 'un test de VIH', 'p_vida');
  manager.addDocument('es', 'paz', 'p_vida');
  manager.addDocument(
    'es',
    'Debemos pagar el precio de intentar conseguir la vida que queremos',
    'p_vida',
  );
  manager.addDocument('es', 'estaban igual de solos ayer', 'p_vida');
  manager.addDocument('es', 'estarán igual de solos mañana', 'p_vida');
  manager.addDocument('es', 'Es el dolor más grande y más profundo', 'p_vida');
  manager.addDocument('es', 'se piden por Internet', 'p_vida');
  manager.addDocument('es', 'solo de su carisma ', 'p_vida');
  manager.addDocument(
    'es',
    'en el 50 aniversario de nuestra Alma Mater para disfrutar de todo su contenido',
    'p_vida',
  );
  manager.addDocument(
    'es',
    'como: “Este tiempo es más largo que aquel otro”',
    'p_vida',
  );
  manager.addDocument('es', 'Mido el tiempo', 'p_vida');
  manager.addDocument('es', 'mido el futuro', 'p_vida');
  manager.addDocument('es', 'mido el presente', 'p_vida');
  manager.addDocument('es', 'mido el pretérito', 'p_vida');
  manager.addDocument('es', 'a ustedes una mía buscándome', 'p_vida');
  manager.addDocument(
    'es',
    'Si se ven bien pendejos/pendejas defendiendo algo sólo por llevar la contraria',
    'p_vida',
  );
  manager.addDocument('es', 'solo quería pedirles algunos consejos', 'p_vida');
  manager.addDocument(
    'es',
    'este dolor de cabeza me anuncia un próximo pesar',
    'p_vida',
  );
  manager.addDocument('es', 'mi madre por problemas de lumbociatica', 'p_vida');
  manager.addDocument('es', 'vivo sola', 'p_vida');
  manager.addDocument('es', 'estoy en un punto donde tomo', 'p_vida');
  manager.addDocument('es', 'poco a poco estoy saliendo de esto', 'p_vida');
  manager.addDocument(
    'es',
    'Un suave dolor de cabeza me quiere acompañar durante el resto del día pero ya estoy acostumbrado a eso',
    'p_vida',
  );
  manager.addDocument('es', 'ver el mundo diferente', 'p_vida');
  //manager.addDocument('es', '', 'p_vida');

  //Entrenamos el modelo
  console.log('Training...');
  await manager.train();
  console.log('Trained!');

  //Guardamos el modelo

  //manager.save(modelTag, true);
}

async function updateOcurrences(post) {
  let intentTag = 'p_muerte';

  await classifier.phrasesId(post, intentTag, manager);
}

exports.analyzePosts = async function(postsArray) {
  console.log('***********					 	*****************');
  console.log('***********	SUICIDIO		 	*****************');
  console.log('***********					 	*****************');
  //Poner al principio del arreglo las palabras clave más significativas
  var keywords = [
    'suicidio',
    'muerte',
    'miedo',
    'morir',
    'daño',
    'tumba',
    'mutilar',
    'cortar',
    'vivir',
    'funeral',
    'acabar',
    'terminar',
    'fallecer',
    'dormir',
    'luz',
    'obscuridad',
  ];

  //Establecemos los stemms con los que se comparan las utterances
  await classifier.setKeywordsStemms(keywords);

  //Entrenamos el modelo
  await trainnlp(manager);

  //Mandamos cada uno de los posts a checar si existe alguna coincidencia
  for (let i = 0; i < postsArray.length; i++) {
    console.log('********');
    console.log('*POST ' + i + '*');
    console.log('********');
    await updateOcurrences(postsArray[i]);
  }

  //Obtenemos las ocurrencias
  if (classifier.getOcurrences() >= minOcurrences) {
    classifier.resetOcurrences();
    return true;
  }
  classifier.resetOcurrences();
  return false;
};
