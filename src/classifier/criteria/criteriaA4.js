//Identificador de insomnio **********************************
const {
	NlpManager
} = require('node-nlp');
const manager = new NlpManager({
	languages: ['es']
});
const fs = require('fs');
const classifier = require('../classifier.js');

let modelTag = './modelA4.nlp';
let minOcurrences = 3;


async function trainnlp(manager) {
	if (fs.existsSync(modelTag)) {
		manager.load(modelTag);
		return;
	}

	manager.addDocument('es', 'No tengo sueño', 'insomnio');
	manager.addDocument('es', 'No puedo dormir', 'insomnio');
	manager.addDocument('es', 'No duermo', 'insomnio');
	manager.addDocument('es', 'No he podido dormir', 'insomnio');
	manager.addDocument('es', 'No puedo dormir por estar pensando en cosas malas', 'insomnio');
	manager.addDocument('es', 'Estoy desvelado', 'insomnio');
	manager.addDocument('es', 'Estoy muy desvelado', 'insomnio');
	manager.addDocument('es', 'Estoy bastante desvelado', 'insomnio');
	manager.addDocument('es', 'Tengo trastornos de sueño', 'insomnio');
	manager.addDocument('es', 'Quiero tomar una siesta pero no puedo', 'insomnio');
	manager.addDocument('es', 'Necesito dormir y no puedo', 'insomnio');
	manager.addDocument('es', 'Estuve despierto toda la noche', 'insomnio');
	manager.addDocument('es', 'He estado despierto toda la noche', 'insomnio');
	manager.addDocument('es', 'Ultimamente dormir ha sido un problema', 'insomnio');
	manager.addDocument('es', 'Dormir ha sido un problema', 'insomnio');
	manager.addDocument('es', 'Dormir es un problema', 'insomnio');
	manager.addDocument('es', 'Ya quiero descansar, ayuda', 'insomnio');
	manager.addDocument('es', 'Estoy bastante cansado pero no puedo dormir', 'insomnio');
	manager.addDocument('es', 'Dormí menos de dos horas', 'insomnio');
	manager.addDocument('es', 'No dormí nada', 'insomnio');
	manager.addDocument('es', 'Llevo despierto desde hace 3 días', 'insomnio');
	manager.addDocument('es', 'Tengo insomnio', 'insomnio');
	manager.addDocument('es', 'Me causa insomnio', 'insomnio');
	manager.addDocument('es', 'El insomnio no me deja', 'insomnio');
	manager.addDocument('es', 'Mi insomnio no me deja dormir', 'insomnio');
	manager.addDocument('es', 'Porque tengo insomnio', 'insomnio');
	manager.addDocument('es', 'He tenido insomnio', 'insomnio');
	manager.addDocument('es', 'insomnio', 'insomnio');
	manager.addDocument('es', 'Dormí muy poco', 'insomnio');
	manager.addDocument('es', 'Dormí poco', 'insomnio');
	manager.addDocument('es', 'Dormí mal', 'insomnio');
	manager.addDocument('es', 'Dormí bastante mal', 'insomnio');
	manager.addDocument('es', 'Dormí muy mal', 'insomnio');
	manager.addDocument('es', 'Qué triste que cualquier tontería me cause insomnio', 'insomnio');
	manager.addDocument('es', 'Ansío poder dormir', 'insomnio');
	manager.addDocument('es', 'Ansío poder dormir un poco', 'insomnio');
	manager.addDocument('es', 'Ansío poder dormir aunque sea una hora', 'insomnio');
	manager.addDocument('es', 'Ansío poder descansar', 'insomnio');
	manager.addDocument('es', 'Espero poder dormir', 'insomnio');
	manager.addDocument('es', 'Espero poder dormir un rato', 'insomnio');
	manager.addDocument('es', 'Espero poder dormir aunque sea un poco', 'insomnio');
	manager.addDocument('es', 'Espero poder descansar', 'insomnio');
	manager.addDocument('es', 'Nada me ayuda a dormir', 'insomnio');
	manager.addDocument('es', 'Ojalá pueda dormir', 'insomnio');
	manager.addDocument('es', 'Ojalá pueda descansar', 'insomnio');
	manager.addDocument('es', 'Ojalá pueda dormir algo', 'insomnio');
	manager.addDocument('es', 'Ojalá pueda descansar algo', 'insomnio');
	manager.addDocument('es', 'Ojalá pueda dormir un poco', 'insomnio');
	manager.addDocument('es', 'Ojalá pueda descansar un poco', 'insomnio');
	manager.addDocument('es', 'Tuve una mala noche', 'insomnio');
	manager.addDocument('es', 'Tengo muy malas noches', 'insomnio');
	manager.addDocument('es', 'He tenido muchas malas noches', 'insomnio');
	manager.addDocument('es', 'Ultimamaente he tenido muchas malas noches', 'insomnio');
	manager.addDocument('es', 'He tenido muy malas noches', 'insomnio');
	manager.addDocument('es', 'He tenido muy malas noches ultimamente', 'insomnio');
	//manager.addDocument('es', '', 'insomnio');
	//manager.addDocument('es', '', 'insomnio');
	//manager.addDocument('es', '', 'insomnio');
	//manager.addDocument('es', '', 'insomnio');

	

//**********************************************************************************************************


	manager.addDocument('es', 'Dormí mucho ayer', 'no_insomnio');
	manager.addDocument('es', 'Dormir no es problema para mí', 'no_insomnio');
	manager.addDocument('es', 'Tengo mucho sueño', 'no_insomnio');
	manager.addDocument('es', 'Tengo bastantes cosas que hacer', 'no_insomnio');
	manager.addDocument('es', 'No tengo ganas de ir a la escuela', 'no_insomnio');
	manager.addDocument('es', 'Adios, ya me voy a dormir', 'no_insomnio');
	manager.addDocument('es', 'No entiendo a la mayoría de la gente', 'no_insomnio');
	manager.addDocument('es', 'Dormí como 10 horas ayer', 'no_insomnio');
	manager.addDocument('es', 'Estoy feliz', 'no_insomnio');
	manager.addDocument('es', 'Las siestas son lo mejor del mundo', 'no_insomnio');
	manager.addDocument('es', 'Mi hermano y yo dormimos como bebés', 'no_insomnio');
	manager.addDocument('es', 'pero no hay día en el cual no piense matarme', 'no_insomnio');
	manager.addDocument('es', 'ahora tengo un gran bajón emocional', 'no_insomnio');
	manager.addDocument('es', 'no puedo hacer nada sin pesar en lo q pasara si lo hago', 'no_insomnio');
	manager.addDocument('es', 'en lo q no pasara', 'no_insomnio');
	manager.addDocument('es', 'está depresión lleva consumiendome desde secundaria por lo mismo', 'no_insomnio');
	manager.addDocument('es', 'todos sean negativos', 'no_insomnio');
	manager.addDocument('es', 'pensar en no querer vivir', 'no_insomnio');
	manager.addDocument('es', 'Tengo muchos problemas', 'no_insomnio');
	manager.addDocument('es', 'No tengo nada de hambre', 'no_insomnio');
	manager.addDocument('es', 'No tengo nada de dinero', 'no_insomnio');
	manager.addDocument('es', 'Me siento incapaz de sobresalir', 'no_insomnio');
	manager.addDocument('es', 'Siempre busco sentirme mal', 'no_insomnio');
	manager.addDocument('es', 'No tengo permitido parecer débil', 'no_insomnio');
	manager.addDocument('es', 'talvez se la ultima ya que no puedo más con esta agonía', 'no_insomnio');
	manager.addDocument('es', 'al fin sentí una pequeña esperanza pero no fue así', 'no_insomnio');
	manager.addDocument('es', 'pero no puedo', 'no_insomnio');
	manager.addDocument('es', 'yo soy una persona demasiado antisocial', 'no_insomnio');
	manager.addDocument('es', 'No importa cuando se lea esto', 'no_insomnio');
	manager.addDocument('es', 'no sentirme tan mal ya que no quiero estarme sintiendo así', 'no_insomnio');
	manager.addDocument('es', 'igual he perdido el gusto por mis hobbies', 'no_insomnio');
	manager.addDocument('es', 'poco demostrativa era un gran defecto', 'no_insomnio');
	manager.addDocument('es', 'Quiero cambiar', 'no_insomnio');
	manager.addDocument('es', 'Gracias X tomar la molestia', 'no_insomnio');
	manager.addDocument('es', 'estoy bastante fastidiada', 'no_insomnio');
	manager.addDocument('es', 'Desde hace 6 años no tengo una estabilidad laboral', 'no_insomnio');
	manager.addDocument('es', 'Desde entonces no levanto cabeza', 'no_insomnio');
	manager.addDocument('es', 'Llevaba 6 meses muy bien', 'no_insomnio');
	manager.addDocument('es', 'necesito ayuda', 'no_insomnio');
	manager.addDocument('es', 'no quiero tomar mala decisión', 'no_insomnio');
	manager.addDocument('es', 'Soy un gordo, me comí un helado grande y una pizza', 'no_insomnio');
	manager.addDocument('es', 'Se me antoja todo ultimamente y no estoy embarazada', 'no_insomnio');
	//manager.addDocument('es', '', 'no_insomnio');
	//manager.addDocument('es', '', 'no_insomnio');

	//Entrenamos el modelo
	console.log('Training...');
	await manager.train();
	console.log('Trained!');

	//Guardamos el modelo

	//manager.save(modelTag, true);
}

async function updateOcurrences(post) {
	let intentTag = "insomnio";
	//Se envía a analizar el posts con el modelo
	await classifier.phrasesId(post, intentTag, manager);
}

exports.analyzePosts = async function (postsArray) {
	console.log("***********					 	*****************");
	console.log("***********	     INSOMNIO		*****************");
	console.log("***********					 	*****************");
	//Poner al principio del arreglo las palabras clave más significativas
	let keywords = ['insomnio','sueño','dormir','desvelo','trastorno',
				'cansado','despierto','problema','dificultad',
				'descansar','soñar'];

	//Establecemos los stemms con los que se comparan las utterances
	await classifier.setKeywordsStemms(keywords);

	//Entrenamos el modelo
	await trainnlp(manager);

	//Mandamos cada uno de los posts a checar si existe alguna coincidencia
	for (let i = 0; i < postsArray.length; i++) {
		console.log("********");
		console.log("*POST "+i+"*");
		console.log("********");
		await updateOcurrences(postsArray[i]);
	}

	//Obtenemos las ocurrencias
	if (classifier.getOcurrences() >= minOcurrences){
		classifier.resetOcurrences();
		return true;
	}
	classifier.resetOcurrences();
	return false;

}