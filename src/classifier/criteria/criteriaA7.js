//Identificador de sentimientos de inutilidad ***********************************
const {
	NlpManager
} = require('node-nlp');
const manager = new NlpManager({
	languages: ['es']
});
const fs = require('fs');
const classifier = require('../classifier.js');

let modelTag = './modelA7.nlp';
let minOcurrences = 3;


async function trainnlp(manager) {
	if (fs.existsSync(modelTag)) {
		manager.load(modelTag);
		return;
	}

	//Sentimientos de inutilidad
	manager.addDocument('es', 'Soy un inútil', 'inutilidad');
	manager.addDocument('es', 'Soy un imbecil', 'inutilidad');
	manager.addDocument('es', 'Soy una basura', 'inutilidad');
	manager.addDocument('es', 'Soy un tonto', 'inutilidad');
	manager.addDocument('es', 'Soy un idiota', 'inutilidad');
	manager.addDocument('es', 'Soy un deshecho', 'inutilidad');
	manager.addDocument('es', 'Soy un torpe', 'inutilidad');
	manager.addDocument('es', 'Soy un estupido', 'inutilidad');
	manager.addDocument('es', 'Soy una mierda', 'inutilidad');
	manager.addDocument('es', 'Soy un tarado', 'inutilidad');
	manager.addDocument('es', 'Soy inútil', 'inutilidad');
	manager.addDocument('es', 'Soy imbecil', 'inutilidad');
	manager.addDocument('es', 'Soy basura', 'inutilidad');
	manager.addDocument('es', 'Soy tonto', 'inutilidad');
	manager.addDocument('es', 'Soy idiota', 'inutilidad');
	manager.addDocument('es', 'Soy deshecho', 'inutilidad');
	manager.addDocument('es', 'Soy torpe', 'inutilidad');
	manager.addDocument('es', 'Soy estupido', 'inutilidad');
	manager.addDocument('es', 'Soy mierda', 'inutilidad');
	manager.addDocument('es', 'Soy inservible', 'inutilidad');
	manager.addDocument('es', 'Soy tarado', 'inutilidad');
	manager.addDocument('es', 'Soy despreciable', 'inutilidad');

	manager.addDocument('es', 'Soy una inútil', 'inutilidad');
	manager.addDocument('es', 'Soy una imbecil', 'inutilidad');
	manager.addDocument('es', 'Soy una basura', 'inutilidad');
	manager.addDocument('es', 'Soy una tonta', 'inutilidad');
	manager.addDocument('es', 'Soy una idiota', 'inutilidad');
	manager.addDocument('es', 'Soy una deshecho', 'inutilidad');
	manager.addDocument('es', 'Soy una torpe', 'inutilidad');
	manager.addDocument('es', 'Soy una estupida', 'inutilidad');
	manager.addDocument('es', 'Soy una mierda', 'inutilidad');
	manager.addDocument('es', 'Soy una tarada', 'inutilidad');
	manager.addDocument('es', 'Soy inútil', 'inutilidad');
	manager.addDocument('es', 'Soy imbecil', 'inutilidad');
	manager.addDocument('es', 'Soy basura', 'inutilidad');
	manager.addDocument('es', 'Soy tonto', 'inutilidad');
	manager.addDocument('es', 'Soy idiota', 'inutilidad');
	manager.addDocument('es', 'Soy deshecho', 'inutilidad');
	manager.addDocument('es', 'Soy torpe', 'inutilidad');
	manager.addDocument('es', 'Soy estupida', 'inutilidad');
	manager.addDocument('es', 'Soy mierda', 'inutilidad');
	manager.addDocument('es', 'Soy inservible', 'inutilidad');
	manager.addDocument('es', 'Soy tarada', 'inutilidad');
	manager.addDocument('es', 'Soy despreciable', 'inutilidad');

	manager.addDocument('es', 'Soy la persona más tonta', 'inutilidad');
	manager.addDocument('es', 'Soy la persona más inútil', 'inutilidad');
	manager.addDocument('es', 'Soy la persona más imbecil que existe', 'inutilidad');
	manager.addDocument('es', 'Soy la persona más basura', 'inutilidad');
	manager.addDocument('es', 'Soy la persona más idiota que existe', 'inutilidad');
	manager.addDocument('es', 'Soy la persona más torpe', 'inutilidad');
	manager.addDocument('es', 'Soy la persona más estupida que existe', 'inutilidad');
	manager.addDocument('es', 'Soy la persona más mierda', 'inutilidad');
	manager.addDocument('es', 'Soy la persona más inservible', 'inutilidad');
	manager.addDocument('es', 'Soy la persona más tarada que existe', 'inutilidad');
	manager.addDocument('es', 'Soy la persona más despreciable', 'inutilidad');

	manager.addDocument('es', 'No sirvo', 'inutilidad');
	manager.addDocument('es', 'No sirvo para nada', 'inutilidad');
	manager.addDocument('es', 'Me siento inútil', 'inutilidad');
	manager.addDocument('es', 'Me siento imbecil', 'inutilidad');
	manager.addDocument('es', 'Me siento basura', 'inutilidad');
	manager.addDocument('es', 'Me siento tonto', 'inutilidad');
	manager.addDocument('es', 'Me siento tonta', 'inutilidad');
	manager.addDocument('es', 'Me siento idiota', 'inutilidad');
	manager.addDocument('es', 'Me siento deshecho', 'inutilidad');
	manager.addDocument('es', 'Me siento torpe', 'inutilidad');
	manager.addDocument('es', 'Me siento estupido', 'inutilidad');
	manager.addDocument('es', 'Me siento estupida', 'inutilidad');
	manager.addDocument('es', 'Me siento mierda', 'inutilidad');
	manager.addDocument('es', 'Me siento inservible', 'inutilidad');
	manager.addDocument('es', 'Me siento tarado', 'inutilidad');
	manager.addDocument('es', 'Me siento incapaz', 'inutilidad');
	manager.addDocument('es', 'Soy incapaz', 'inutilidad');
	manager.addDocument('es', 'No valgo la pena', 'inutilidad');
	manager.addDocument('es', 'No valgo nada', 'inutilidad');
	manager.addDocument('es', 'No valgo nada para nadie', 'inutilidad');
	manager.addDocument('es', 'Mi vida no vale', 'inutilidad');
	manager.addDocument('es', 'Mi vida no vale nada', 'inutilidad');
	manager.addDocument('es', 'Mi vida no vale un peso', 'inutilidad');
	manager.addDocument('es', 'No hago nada bien', 'inutilidad');
	manager.addDocument('es', 'Nunca hago nada bien', 'inutilidad');
	manager.addDocument('es', 'Todo me sale mal', 'inutilidad');
	manager.addDocument('es', 'Nada me sale bien', 'inutilidad');
	manager.addDocument('es', 'Todo lo que hago sale mal', 'inutilidad');
	manager.addDocument('es', 'Nada de lo que hago sale bien', 'inutilidad');
	manager.addDocument('es', 'Me es imposible hacer algo bien', 'inutilidad');


	//Sentimientos de culpa
	manager.addDocument('es', 'Soy culpable', 'inutilidad');
	manager.addDocument('es', 'Soy el culpable', 'inutilidad');
	manager.addDocument('es', 'Soy el culpable de esta situación', 'inutilidad');
	manager.addDocument('es', 'Es mi culpa', 'inutilidad');
	manager.addDocument('es', 'Es por mi culpa', 'inutilidad');
	manager.addDocument('es', 'La culpa es mia', 'inutilidad');
	manager.addDocument('es', 'Es por mi', 'inutilidad');
	manager.addDocument('es', 'Es mi culpa que esto esté pasando', 'inutilidad');
	manager.addDocument('es', 'Esto que pasa es mi culpa', 'inutilidad');
	manager.addDocument('es', 'Soy el responable', 'inutilidad');
	manager.addDocument('es', 'Soy la responable', 'inutilidad');
	manager.addDocument('es', 'Soy el responable de que esto pase', 'inutilidad');
	manager.addDocument('es', 'Soy la responable de que esto pase', 'inutilidad');
	manager.addDocument('es', 'Me siento responsable', 'inutilidad');
	manager.addDocument('es', 'Me siento responsable de lo que sucedió', 'inutilidad');
	manager.addDocument('es', 'Todo es mi culpa', 'inutilidad');
	manager.addDocument('es', 'Fue mi culpa', 'inutilidad');
	manager.addDocument('es', 'Fue por mi culpa', 'inutilidad');
	manager.addDocument('es', 'Fue por mi', 'inutilidad');
	manager.addDocument('es', 'Fue por mi que esto sucedió', 'inutilidad');
	manager.addDocument('es', 'No lo hubiera hecho', 'inutilidad');
	manager.addDocument('es', 'Si no lo hubiera hecho', 'inutilidad');
	manager.addDocument('es', 'Si tan solo no lo hubiera hecho', 'inutilidad');
	manager.addDocument('es', 'Tengo remordimiento', 'inutilidad');
	manager.addDocument('es', 'Tengo el remordimiento', 'inutilidad');
	manager.addDocument('es', 'Me siento con remordimiento', 'inutilidad');
	manager.addDocument('es', 'Me remuerde', 'inutilidad');
	manager.addDocument('es', 'Me remuerde la conciencia', 'inutilidad');
	manager.addDocument('es', 'La culpa es mia', 'inutilidad');
	manager.addDocument('es', 'Es culpa mia', 'inutilidad');
	manager.addDocument('es', 'La culpa es mía', 'inutilidad');
	manager.addDocument('es', 'Es culpa mía', 'inutilidad');
	manager.addDocument('es', 'Su muerte es culpa mía', 'inutilidad');
	manager.addDocument('es', 'Que haya pasado esto es culpa mía', 'inutilidad');
	
//**********************************************************************************************************

	
	manager.addDocument('es', 'Soy un loco', 'no_inutilidad');
	manager.addDocument('es', 'Soy una loco', 'no_inutilidad');
	manager.addDocument('es', 'Soy bueno para el futbol', 'no_inutilidad');
	manager.addDocument('es', 'Soy buena para el futbol', 'no_inutilidad');
	manager.addDocument('es', 'Soy un buen hijo', 'no_inutilidad');
	manager.addDocument('es', 'Soy una buena hija', 'no_inutilidad');
	manager.addDocument('es', 'Soy tranquilo', 'no_inutilidad');
	manager.addDocument('es', 'Soy tranquila', 'no_inutilidad');
	manager.addDocument('es', 'Soy bastante calmado', 'no_inutilidad');
	manager.addDocument('es', 'Soy bastante calmada', 'no_inutilidad');
	manager.addDocument('es', 'No me gusta nada', 'no_inutilidad');
	manager.addDocument('es', 'No tengo nada pendiente', 'no_inutilidad');
	manager.addDocument('es', 'No quiero ir al evento', 'no_inutilidad');
	manager.addDocument('es', 'Me siento bien', 'no_inutilidad');
	manager.addDocument('es', 'Me siento útil', 'no_inutilidad');
	manager.addDocument('es', 'Me siento servible', 'no_inutilidad');
	manager.addDocument('es', 'Me siento inteligente', 'no_inutilidad');
	manager.addDocument('es', 'Me siento enfermo de la panza', 'no_inutilidad');
	manager.addDocument('es', 'Me siento enferma de la panza', 'no_inutilidad');
	manager.addDocument('es', 'Me siento agusto con mi silla', 'no_inutilidad');
	manager.addDocument('es', 'Me siento mareado', 'no_inutilidad');
	manager.addDocument('es', 'Me siento mareada', 'no_inutilidad');
	manager.addDocument('es', 'Me siento incluido en el equipo', 'no_inutilidad');
	manager.addDocument('es', 'Me siento incluida en el equipo', 'no_inutilidad');
	manager.addDocument('es', 'No soy culpable', 'no_inutilidad');
	manager.addDocument('es', 'No soy tonto', 'no_inutilidad');
	manager.addDocument('es', 'No soy tonta', 'no_inutilidad');
	manager.addDocument('es', 'No soy idiota', 'no_inutilidad');
	manager.addDocument('es', 'No soy basura', 'no_inutilidad');
	manager.addDocument('es', 'No soy mierda', 'no_inutilidad');
	manager.addDocument('es', 'No soy estupido', 'no_inutilidad');
	manager.addDocument('es', 'No soy estupida', 'no_inutilidad');
	manager.addDocument('es', 'No soy inservible', 'no_inutilidad');
	manager.addDocument('es', 'Soy bueno para esto', 'no_inutilidad');
	manager.addDocument('es', 'Soy buena para esto', 'no_inutilidad');
	manager.addDocument('es', 'Soy feliz', 'no_inutilidad');
	manager.addDocument('es', 'Soy bueno', 'no_inutilidad');
	manager.addDocument('es', 'Soy buena', 'no_inutilidad');
	manager.addDocument('es', 'Soy una persona', 'no_inutilidad');
	manager.addDocument('es', 'No es mi culpa', 'no_inutilidad');
	manager.addDocument('es', 'No soy estupido', 'no_inutilidad');
	manager.addDocument('es', 'No soy estupida', 'no_inutilidad');
	manager.addDocument('es', 'No tengo remordimientos', 'no_inutilidad');
	manager.addDocument('es', 'Sin remordimientos', 'no_inutilidad');

	manager.addDocument('es', 'así que hice squats', 'no_inutilidad');
	manager.addDocument('es', '¿Y ahora para qué me habló ese men?', 'no_inutilidad');
	manager.addDocument('es', 'Nunca he hecho mi rutina del gym con un amigo', 'no_inutilidad');
	manager.addDocument('es', 'mañana será la primera vez', 'no_inutilidad');
	manager.addDocument('es', 'Siempre que voy con mi mamá en el auto me pongo a cantar', 'no_inutilidad');
	manager.addDocument('es', 'creer que todavía hay fe', 'no_inutilidad');
	manager.addDocument('es', 'un test de VIH', 'no_inutilidad');
	manager.addDocument('es', 'estaban igual de solos ayer', 'no_inutilidad');
	manager.addDocument('es', 'estarán igual de solos mañana', 'no_inutilidad');
	manager.addDocument('es', 'Qué triste que cualquier tontería me cause insomnio', 'no_inutilidad');
	manager.addDocument('es', 'Es el dolor más grande y más profundo', 'no_inutilidad');
	manager.addDocument('es', 'en el metro', 'no_inutilidad');
	manager.addDocument('es', 'todo el rato estuve preguntándome', 'no_inutilidad');
	manager.addDocument('es', 'de dónde salen', 'no_inutilidad');
	manager.addDocument('es', 'se piden por Internet', 'no_inutilidad');
	manager.addDocument('es', 'dónde está la mía', 'no_inutilidad');
	manager.addDocument('es', 'Mezclando la energía de la adolescencia', 'no_inutilidad');
	manager.addDocument('es', 'cargas de su cuerpo', 'no_inutilidad');
	manager.addDocument('es', 'Es una sonrisa tranquilizadora', 'no_inutilidad');
	manager.addDocument('es', 'por la que cualquiera daría sus días', 'no_inutilidad');
	manager.addDocument('es', 'Es una sonrisa que enamora', 'no_inutilidad');
	manager.addDocument('es', 'solo de su carisma', 'no_inutilidad');
	manager.addDocument('es', 'de qué', 'no_inutilidad');
	manager.addDocument('es', 'qué es', 'no_inutilidad');
	manager.addDocument('es', 'lo que mido cuando digo', 'no_inutilidad');
	manager.addDocument('es', 'como: “Este tiempo es más largo que aquel otro”', 'no_inutilidad');
	manager.addDocument('es', ' como: “Este es doble que aquél”', 'no_inutilidad');
	manager.addDocument('es', 'Mido el tiempo', 'no_inutilidad');
	manager.addDocument('es', 'lo sé', 'no_inutilidad');
	manager.addDocument('es', 'mido el futuro', 'no_inutilidad');
	manager.addDocument('es', 'mido el presente', 'no_inutilidad');
	manager.addDocument('es', '¿Qué es, pues, lo que mido?', 'no_inutilidad');
	manager.addDocument('es', 'solo quería pedirles algunos consejos', 'no_inutilidad');
	manager.addDocument('es', 'algo que me pueda tomar pero que sea natural', 'no_inutilidad');
	manager.addDocument('es', 'lo que pasa es que sufro de ansiedad', 'no_inutilidad');
	manager.addDocument('es', 'Cada vez me canso más', 'no_inutilidad');
	manager.addDocument('es', 'El simple hecho de pensar en comida me da nauseas', 'no_inutilidad');
	manager.addDocument('es', 'Me siento agotado', 'no_inutilidad');
	manager.addDocument('es', 'Gracias por tan lindo regalo', 'no_inutilidad');
	manager.addDocument('es', 'me lo impide', 'no_inutilidad');
	manager.addDocument('es', 'es como si mi subconsciente me negara la felicidad', 'no_inutilidad');
	manager.addDocument('es', 'Hola es mi primera publicación', 'no_inutilidad');
	manager.addDocument('es', 'Tengo Depresión severa', 'no_inutilidad');
	manager.addDocument('es', 'ahora tengo un gran bajón emocional', 'no_inutilidad');
	manager.addDocument('es', 'me juzga por mi cabello', 'no_inutilidad');
	manager.addDocument('es', 'está depresión lleva consumiendome desde secundaria por lo mismo', 'no_inutilidad');
	manager.addDocument('es', 'Es tu culpa', 'no_inutilidad');
	manager.addDocument('es', 'Es su culpa', 'no_inutilidad');
	manager.addDocument('es', 'Es por tu culpa', 'no_inutilidad');
	manager.addDocument('es', 'Es por su culpa', 'no_inutilidad');
	manager.addDocument('es', 'Antes tenia miedo a la muerte', 'no_inutilidad');
	manager.addDocument('es', 'aun teniendo a alguien me siento demasiado solo', 'no_inutilidad');
	manager.addDocument('es', 'empece a sentir esto desde el año pasado', 'no_inutilidad');
	manager.addDocument('es', 'quisiera poder tener el valor suficiente como para superar esta etapa de mi vida', 'no_inutilidad');
	manager.addDocument('es', 'Hago todo bien', 'no_inutilidad');
	manager.addDocument('es', 'Nunca hago algo mal', 'no_inutilidad');
	manager.addDocument('es', 'Siempre hago todo bien', 'no_inutilidad');
	manager.addDocument('es', 'Todo me sale bien', 'no_inutilidad');
	manager.addDocument('es', 'Todo lo que hago sale bien', 'no_inutilidad');
	manager.addDocument('es', 'ODIO hacer squats', 'no_inutilidad');
	manager.addDocument('es', 'Hoy fui a hacerme', 'no_inutilidad');
	manager.addDocument('es', 'Mi gato roncando en mi cama, y yo haciendo tarea', 'no_inutilidad');
	manager.addDocument('es', 'hacer menos la protesta', 'no_inutilidad');
	manager.addDocument('es', 'a ustedes una mía buscándome', 'no_inutilidad');
	//manager.addDocument('es', '', 'no_inutilidad');

	//Entrenamos el modelo
	console.log('Training...');
	await manager.train();
	console.log('Trained!');

	//Guardamos el modelo

	//manager.save(modelTag, true);
}

async function updateOcurrences(post) {
	let intentTag = "inutilidad";
	//Se envía a analizar el posts con el modelo
	await classifier.phrasesId(post, intentTag, manager);
}


exports.analyzePosts = async function (postsArray) {

	console.log("***********					 	*****************");
	console.log("***********	INUTILIDAD Y CULPA 	*****************");
	console.log("***********					 	*****************");

	var keywords = [
						'inútil', 'mal', 'idiota', 'desprecio', 'inservible', 'tonto',
						'deshecho', 'sirvo', 'torpe', 'tarado', 'estúpido', 'culpa',
						'responsable', 'imbécil', 'basura', 'mierda', 'hubiera',
						'remordimiento', 'remuerde', 'incapaz', 'valgo', 'bien'
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