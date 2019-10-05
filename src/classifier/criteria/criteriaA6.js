//Identificador de fatiga ***********************************
const {
	NlpManager
} = require('node-nlp');
const manager = new NlpManager({
	languages: ['es']
});
const fs = require('fs');
const classifier = require('../classifier.js');

let modelTag = './modelA6.nlp';
let minOcurrences = 3;


async function trainnlp(manager) {
	if (fs.existsSync(modelTag)) {
		manager.load(modelTag);
		return;
	}

	manager.addDocument('es', 'Estoy cansado', 'fatiga');
	manager.addDocument('es', 'Estoy cansada', 'fatiga');
	manager.addDocument('es', 'Estoy muy cansado', 'fatiga');
	manager.addDocument('es', 'Estoy muy cansada', 'fatiga');
	manager.addDocument('es', 'Estoy bastante cansado', 'fatiga');
	manager.addDocument('es', 'Estoy bastante cansada', 'fatiga');
	manager.addDocument('es', 'Estoy cansado todo le tiempo', 'fatiga');
	manager.addDocument('es', 'Estoy cansada todo le tiempo', 'fatiga');
	manager.addDocument('es', 'He estado cansado', 'fatiga');
	manager.addDocument('es', 'He estado cansada', 'fatiga');
	manager.addDocument('es', 'He estado muy cansado', 'fatiga');
	manager.addDocument('es', 'He estado muy cansada', 'fatiga');
	manager.addDocument('es', 'Ando cansado', 'fatiga');
	manager.addDocument('es', 'Ando cansada', 'fatiga');
	manager.addDocument('es', 'Ando muy cansado', 'fatiga');
	manager.addDocument('es', 'Ando muy cansada', 'fatiga');
	manager.addDocument('es', 'Ando algo cansado', 'fatiga');
	manager.addDocument('es', 'Ando algo cansada', 'fatiga');
	manager.addDocument('es', 'Me canso mucho', 'fatiga');
	manager.addDocument('es', 'Cada vez me canso más', 'fatiga');
	manager.addDocument('es', 'Me estoy cansando mucho', 'fatiga');
	manager.addDocument('es', 'Me siento cansado', 'fatiga');
	manager.addDocument('es', 'Me siento cansada', 'fatiga');
	manager.addDocument('es', 'Me siento muy cansado', 'fatiga');
	manager.addDocument('es', 'Me siento muy cansada', 'fatiga');
	manager.addDocument('es', 'Me siento bastante cansado', 'fatiga');
	manager.addDocument('es', 'Me siento bastante cansada', 'fatiga');
	manager.addDocument('es', 'Me siento algo cansado', 'fatiga');
	manager.addDocument('es', 'Me siento algo cansada', 'fatiga');
	manager.addDocument('es', 'Estoy fatigado', 'fatiga');
	manager.addDocument('es', 'Estoy fatigada', 'fatiga');
	manager.addDocument('es', 'Estoy muy fatigado', 'fatiga');
	manager.addDocument('es', 'Estoy muy fatigada', 'fatiga');
	manager.addDocument('es', 'Estoy bastante fatigado', 'fatiga');
	manager.addDocument('es', 'Estoy bastante fatigada', 'fatiga');
	manager.addDocument('es', 'Estoy fatigado todo le tiempo', 'fatiga');
	manager.addDocument('es', 'Estoy fatigada todo le tiempo', 'fatiga');
	manager.addDocument('es', 'He estado fatigado', 'fatiga');
	manager.addDocument('es', 'He estado fatigada', 'fatiga');
	manager.addDocument('es', 'He estado muy fatigado', 'fatiga');
	manager.addDocument('es', 'He estado muy fatigada', 'fatiga');
	manager.addDocument('es', 'Ando fatigado', 'fatiga');
	manager.addDocument('es', 'Ando fatigada', 'fatiga');
	manager.addDocument('es', 'Ando muy fatigado', 'fatiga');
	manager.addDocument('es', 'Ando muy fatigada', 'fatiga');
	manager.addDocument('es', 'Ando algo fatigado', 'fatiga');
	manager.addDocument('es', 'Ando algo fatigada', 'fatiga');
	manager.addDocument('es', 'Me fatigo mucho', 'fatiga');
	manager.addDocument('es', 'Me estoy fatigando mucho', 'fatiga');
	manager.addDocument('es', 'Me siento fatigado', 'fatiga');
	manager.addDocument('es', 'Me siento fatigada', 'fatiga');
	manager.addDocument('es', 'Me siento muy fatigado', 'fatiga');
	manager.addDocument('es', 'Me siento muy fatigada', 'fatiga');
	manager.addDocument('es', 'Me siento bastante fatigado', 'fatiga');
	manager.addDocument('es', 'Me siento bastante fatigada', 'fatiga');
	manager.addDocument('es', 'Me siento algo fatigado', 'fatiga');
	manager.addDocument('es', 'Me siento algo fatigada', 'fatiga');
	manager.addDocument('es', 'Me siento algo agotado', 'fatiga');
	manager.addDocument('es', 'Me siento algo agotada', 'fatiga');
	manager.addDocument('es', 'Estoy agotado', 'fatiga');
	manager.addDocument('es', 'Estoy agotada', 'fatiga');
	manager.addDocument('es', 'Estoy muy agotado', 'fatiga');
	manager.addDocument('es', 'Estoy muy agotada', 'fatiga');
	manager.addDocument('es', 'Estoy bastante agotado', 'fatiga');
	manager.addDocument('es', 'Estoy bastante agotada', 'fatiga');
	manager.addDocument('es', 'Estoy agotado todo le tiempo', 'fatiga');
	manager.addDocument('es', 'Estoy agotada todo le tiempo', 'fatiga');
	manager.addDocument('es', 'He estado agotado', 'fatiga');
	manager.addDocument('es', 'He estado agotada', 'fatiga');
	manager.addDocument('es', 'He estado muy agotado', 'fatiga');
	manager.addDocument('es', 'He estado muy agotada', 'fatiga');
	manager.addDocument('es', 'Ando agotado', 'fatiga');
	manager.addDocument('es', 'Ando agotada', 'fatiga');
	manager.addDocument('es', 'Ando muy agotado', 'fatiga');
	manager.addDocument('es', 'Ando muy agotada', 'fatiga');
	manager.addDocument('es', 'Ando algo agotado', 'fatiga');
	manager.addDocument('es', 'Ando algo agotada', 'fatiga');
	manager.addDocument('es', 'Me agoto mucho', 'fatiga');
	manager.addDocument('es', 'Me estoy agotando mucho', 'fatiga');
	manager.addDocument('es', 'Me siento agotado', 'fatiga');
	manager.addDocument('es', 'Me siento agotada', 'fatiga');
	manager.addDocument('es', 'Me siento muy agotado', 'fatiga');
	manager.addDocument('es', 'Me siento muy agotada', 'fatiga');
	manager.addDocument('es', 'Me siento bastante agotado', 'fatiga');
	manager.addDocument('es', 'Me siento bastante agotada', 'fatiga');
	manager.addDocument('es', 'Me siento algo agotado', 'fatiga');
	manager.addDocument('es', 'Me siento algo agotada', 'fatiga');
	manager.addDocument('es', 'Me siento algo ponchado', 'fatiga');
	manager.addDocument('es', 'Me siento algo ponchada', 'fatiga');
	manager.addDocument('es', 'Estoy ponchado', 'fatiga');
	manager.addDocument('es', 'Estoy ponchada', 'fatiga');
	manager.addDocument('es', 'Estoy muy ponchado', 'fatiga');
	manager.addDocument('es', 'Estoy muy ponchada', 'fatiga');
	manager.addDocument('es', 'Estoy bastante ponchado', 'fatiga');
	manager.addDocument('es', 'Estoy bastante ponchada', 'fatiga');
	manager.addDocument('es', 'Estoy ponchado todo le tiempo', 'fatiga');
	manager.addDocument('es', 'Estoy ponchada todo le tiempo', 'fatiga');
	manager.addDocument('es', 'He estado ponchado', 'fatiga');
	manager.addDocument('es', 'He estado ponchada', 'fatiga');
	manager.addDocument('es', 'He estado muy ponchado', 'fatiga');
	manager.addDocument('es', 'He estado muy ponchada', 'fatiga');
	manager.addDocument('es', 'Ando ponchado', 'fatiga');
	manager.addDocument('es', 'Ando ponchada', 'fatiga');
	manager.addDocument('es', 'Ando muy ponchado', 'fatiga');
	manager.addDocument('es', 'Ando muy ponchada', 'fatiga');
	manager.addDocument('es', 'Ando algo ponchado', 'fatiga');
	manager.addDocument('es', 'Ando algo ponchada', 'fatiga');
	manager.addDocument('es', 'Me siento ponchado', 'fatiga');
	manager.addDocument('es', 'Me siento ponchada', 'fatiga');
	manager.addDocument('es', 'Me siento muy ponchado', 'fatiga');
	manager.addDocument('es', 'Me siento bastante ponchado', 'fatiga');
	manager.addDocument('es', 'Me siento algo ponchado', 'fatiga');
	manager.addDocument('es', 'No tengo energía', 'fatiga');
	manager.addDocument('es', 'No tengo nada de energía', 'fatiga');
	manager.addDocument('es', 'Tengo muy poca energía', 'fatiga');
	manager.addDocument('es', 'Tengo nula energía', 'fatiga');
	manager.addDocument('es', 'No he tenido energía', 'fatiga');
	manager.addDocument('es', 'No he tenido nada de energía', 'fatiga');
	manager.addDocument('es', 'No he tenido mucha energía', 'fatiga');
	manager.addDocument('es', 'Me falta energía', 'fatiga');
	manager.addDocument('es', 'Me ha faltado energía', 'fatiga');
	manager.addDocument('es', 'Me está faltando energía', 'fatiga');
	manager.addDocument('es', 'No tengo ganas', 'fatiga');
	manager.addDocument('es', 'No tengo ganas de nada', 'fatiga');
	manager.addDocument('es', 'No tengo ganas de hacer nada', 'fatiga');
	manager.addDocument('es', 'No tengo ganas de salir', 'fatiga');
	manager.addDocument('es', 'Tengo flojera', 'fatiga');
	manager.addDocument('es', 'Tengo mucha flojera', 'fatiga');
	manager.addDocument('es', 'Me da flojera', 'fatiga');
	manager.addDocument('es', 'Me da bastante flojera', 'fatiga');
	manager.addDocument('es', 'Tengo pereza', 'fatiga');
	manager.addDocument('es', 'Tengo mucha pereza', 'fatiga');
	manager.addDocument('es', 'Me da pereza', 'fatiga');
	manager.addDocument('es', 'Me da bastante pereza', 'fatiga');
	manager.addDocument('es', 'Tengo sueño', 'fatiga');
	manager.addDocument('es', 'Tengo mucho sueño', 'fatiga');
	manager.addDocument('es', 'Tengo bastante sueño', 'fatiga');
	manager.addDocument('es', 'Quiero dormir', 'fatiga');
	manager.addDocument('es', 'Quiero dormir todo el tiempo', 'fatiga');
	manager.addDocument('es', 'No tengo pilas', 'fatiga');
	manager.addDocument('es', 'Me faltan pilas', 'fatiga');
	manager.addDocument('es', 'Me faltan ganas', 'fatiga');
	manager.addDocument('es', 'Me siento sin ganas', 'fatiga');
	manager.addDocument('es', 'Estoy sin ganas', 'fatiga');
	manager.addDocument('es', 'Estoy exhausto', 'fatiga');
	manager.addDocument('es', 'Estoy exhausta', 'fatiga');
	manager.addDocument('es', 'Me encuentro exhausto', 'fatiga');
	manager.addDocument('es', 'Me encuentro exhausta', 'fatiga');

//**********************************************************************************************************


	manager.addDocument('es', 'Estoy feliz', 'no_fatiga');
	manager.addDocument('es', 'Estoy muy feliz', 'no_fatiga');
	manager.addDocument('es', 'Estoy bastante feliz', 'no_fatiga');
	manager.addDocument('es', 'Estoy esperando a una persona', 'no_fatiga');
	manager.addDocument('es', 'He estado hambriento', 'no_fatiga');
	manager.addDocument('es', 'He estado hambrienta', 'no_fatiga');
	manager.addDocument('es', 'He estado como loco estas semanas', 'no_fatiga');
	manager.addDocument('es', 'He estado como loca estas semanas', 'no_fatiga');
	manager.addDocument('es', 'Ando paseando por aquí', 'no_fatiga');
	manager.addDocument('es', 'Ando triste', 'no_fatiga');
	manager.addDocument('es', 'Me faltan veinte pesos en mi cartera', 'no_fatiga');
	manager.addDocument('es', 'Me siento bien', 'no_fatiga');
	manager.addDocument('es', 'Me siento muy bien', 'no_fatiga');
	manager.addDocument('es', 'Me siento bastante bien', 'no_fatiga');
	manager.addDocument('es', 'No tengo dinero', 'no_fatiga');
	manager.addDocument('es', 'No tengo otra forma de hacerlo', 'no_fatiga');
	manager.addDocument('es', 'No tengo mascota', 'no_fatiga');
	manager.addDocument('es', 'No tengo nada de hambre', 'no_fatiga');
	manager.addDocument('es', 'No tengo nada de dinero', 'no_fatiga');
	manager.addDocument('es', 'No he tenido tiempo', 'no_fatiga');
	manager.addDocument('es', 'No he tenido problemas desde hace un mes', 'no_fatiga');
	manager.addDocument('es', 'Me da miedo acercarme a la gente', 'no_fatiga');
	manager.addDocument('es', 'Me dan cosa los insectos', 'no_fatiga');
	manager.addDocument('es', 'Me da risa todo lo que dice', 'no_fatiga');
	manager.addDocument('es', 'Tengo que decirte muchas cosas', 'no_fatiga');
	manager.addDocument('es', 'Tengo que hacer mi tarea', 'no_fatiga');
	manager.addDocument('es', 'Tengo que ponerme a hacer ejercicio', 'no_fatiga');
	manager.addDocument('es', 'Tengo muy poca paciencia', 'no_fatiga');
	manager.addDocument('es', 'Tengo mucha ropa que lavar', 'no_fatiga');
	manager.addDocument('es', 'Tengo mucho tiempo libre', 'no_fatiga');
	manager.addDocument('es', 'Quiero salir a correr', 'no_fatiga');
	manager.addDocument('es', 'Quiero a mi madre', 'no_fatiga');
	manager.addDocument('es', 'Quiero comer unos tacos al pastor', 'no_fatiga');
	manager.addDocument('es', 'el sentimiento crece', 'no_fatiga');
	manager.addDocument('es', 'ayer tenia ganas de suicidarme', 'no_fatiga');
	manager.addDocument('es', 'He perdido las ganas de vivir y de comer', 'no_fatiga');
	manager.addDocument('es', 'Dormir ha sido un problema estos días', 'no_fatiga');
	manager.addDocument('es', 'esta sera mi salida para todo', 'no_fatiga');
	manager.addDocument('es', 'defendernos entre todos ', 'no_fatiga');
	manager.addDocument('es', 'hasta me da vergüenza', 'no_fatiga');
	manager.addDocument('es', 'tengo tantas ganas de desapatecer de este mundo', 'no_fatiga');
	manager.addDocument('es', 'No me gusta nada', 'no_fatiga');
	//manager.addDocument('es', '', 'no_fatiga');
	//manager.addDocument('es', '', 'no_fatiga');
	//manager.addDocument('es', '', 'no_fatiga');
	//manager.addDocument('es', '', 'no_fatiga');



	//Entrenamos el modelo
	console.log('Training...');
	await manager.train();
	console.log('Trained!');

	//Guardamos el modelo

	//manager.save(modelTag, true);
}

async function updateOcurrences(post) {
	let intentTag = "fatiga";
	//Se envía a analizar el posts con el modelo
	await classifier.phrasesId(post, intentTag, manager);
}

exports.analyzePosts = async function (postsArray) {

	console.log("***********					 	*****************");
	console.log("***********	     FATIGA			*****************");
	console.log("***********					 	*****************");
	var keywords = [
						'cansancio', 'fatiga', 'energía', 'agotado', 'perder', 'ganar', 'flojera',
						'pereza', 'sueño', 'dormir', 'pérdida', 'pila', 'faltar', 'ponchado'
					];

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