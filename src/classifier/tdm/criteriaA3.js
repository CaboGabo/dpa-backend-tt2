//Identificador de pérdida de peso
const {
	NlpManager
} = require('node-nlp');
const manager = new NlpManager({
	languages: ['es']
});
const fs = require('fs');
const classifier = require('../classifier.js');

let modelTag = './modelA3.nlp';
let minOcurrences = 3;

async function trainnlp(manager) {
	if (fs.existsSync(modelTag)) {
		manager.load(modelTag);
		return;
	}
	//Frases con etiqueta 'modPeso'
	
	//Bajar de peso
	manager.addDocument('es', 'Bajé de peso', 'modPeso');
	manager.addDocument('es', 'Ahora peso menos', 'modPeso');
	manager.addDocument('es', 'Peso menos', 'modPeso');
	manager.addDocument('es', 'He bajado de peso', 'modPeso');
	manager.addDocument('es', 'He bajado mucho de peso', 'modPeso');
	manager.addDocument('es', 'He bajado mucho de peso estos meses', 'modPeso');
	manager.addDocument('es', 'Estoy bajando de peso', 'modPeso');
	manager.addDocument('es', 'Estoy bajando demasiado de peso', 'modPeso');
	manager.addDocument('es', 'Estoy ya muy flaco', 'modPeso');
	manager.addDocument('es', 'Estoy flaco', 'modPeso');
	manager.addDocument('es', 'He disminuido mucho mi peso', 'modPeso');
	manager.addDocument('es', 'Disminuí de peso', 'modPeso');
	manager.addDocument('es', 'La ropa ya no me queda', 'modPeso');
	manager.addDocument('es', 'Ya no me queda mi ropa', 'modPeso');
	manager.addDocument('es', 'Tengo que comprar nueva ropa, ya no me queda nada', 'modPeso');
	manager.addDocument('es', 'Estoy muy delgado', 'modPeso');
	manager.addDocument('es', 'He adelgazado mucho', 'modPeso');
	manager.addDocument('es', 'He adelgazado mucho estos días', 'modPeso');
	manager.addDocument('es', 'Necesito comer más', 'modPeso');
	//Aumentar de peso
	manager.addDocument('es', 'Subí de peso', 'modPeso');
	manager.addDocument('es', 'Aumente de peso', 'modPeso');
	manager.addDocument('es', 'Incremente de peso', 'modPeso');
	manager.addDocument('es', 'Ahora peso más', 'modPeso');
	manager.addDocument('es', 'Peso más', 'modPeso');
	manager.addDocument('es', 'He subido de peso', 'modPeso');
	manager.addDocument('es', 'He subido mucho de peso', 'modPeso');
	manager.addDocument('es', 'He subido mucho de peso estos meses', 'modPeso');
	manager.addDocument('es', 'He aumentado de peso', 'modPeso');
	manager.addDocument('es', 'He aumentado mucho de peso', 'modPeso');
	manager.addDocument('es', 'He aumentado mucho de peso estos meses', 'modPeso');
	manager.addDocument('es', 'Estoy subiendo de peso', 'modPeso');
	manager.addDocument('es', 'Estoy subiendo demasiado de peso', 'modPeso');
	manager.addDocument('es', 'Estoy aumentando de peso', 'modPeso');
	manager.addDocument('es', 'Estoy aumentando demasiado de peso', 'modPeso');
	manager.addDocument('es', 'Estoy ya muy gordo', 'modPeso');
	manager.addDocument('es', 'Estoy gordo', 'modPeso');
	manager.addDocument('es', 'He aumentado mucho mi peso', 'modPeso');
	manager.addDocument('es', 'Aumenté de peso', 'modPeso');
	manager.addDocument('es', 'Estoy muy gordo', 'modPeso');
	manager.addDocument('es', 'He engordado mucho', 'modPeso');
	manager.addDocument('es', 'He engordado mucho estos días', 'modPeso');
	manager.addDocument('es', 'Necesito dejar de comer', 'modPeso');
	//Bajo apetito
	manager.addDocument('es', 'No tengo apetito', 'modPeso');
	manager.addDocument('es', 'Casi no tengo apetito', 'modPeso');
	manager.addDocument('es', 'No tengo hambre', 'modPeso');
	manager.addDocument('es', 'Casi no tengo hambre', 'modPeso');
	manager.addDocument('es', 'No se me antoja nada', 'modPeso');
	manager.addDocument('es', 'No tengo antojo de nada', 'modPeso');
	manager.addDocument('es', 'No he comido nada', 'modPeso');
	manager.addDocument('es', 'No he comido nada hoy', 'modPeso');
	manager.addDocument('es', 'No comí nada', 'modPeso');
	manager.addDocument('es', 'No comí', 'modPeso');
	manager.addDocument('es', 'No comí nada ayer', 'modPeso');
	manager.addDocument('es', 'No he comido mucho', 'modPeso');
	manager.addDocument('es', 'No quiero comer nada', 'modPeso');
	manager.addDocument('es', 'No quiero comer', 'modPeso');
	manager.addDocument('es', 'No como', 'modPeso');
	manager.addDocument('es', 'Me lleno con cualquier cosa', 'modPeso');
	manager.addDocument('es', 'Estoy lleno todo el tiempo', 'modPeso');
	manager.addDocument('es', 'Pensar en comida me da nauseas', 'modPeso');
	
	//Aumento apetito
	manager.addDocument('es', 'Tengo mucho apetito', 'modPeso');
	manager.addDocument('es', 'Tengo hambre', 'modPeso');
	manager.addDocument('es', 'Tengo mucha hambre', 'modPeso');
	manager.addDocument('es', 'Se me antoja todo', 'modPeso');
	manager.addDocument('es', 'Tengo antojo de todo', 'modPeso');
	manager.addDocument('es', 'Tengo antojo', 'modPeso');
	manager.addDocument('es', 'He comido muchas veces en el día', 'modPeso');
	manager.addDocument('es', 'He comido mucho hoy', 'modPeso');
	manager.addDocument('es', 'Comí mucho', 'modPeso');
	manager.addDocument('es', 'Comí', 'modPeso');
	manager.addDocument('es', 'Comí mucho ayer', 'modPeso');
	manager.addDocument('es', 'He comido mucho', 'modPeso');
	manager.addDocument('es', 'Quiero comer de todo', 'modPeso');
	manager.addDocument('es', 'Quiero comer', 'modPeso');
	manager.addDocument('es', 'No quedo satisfecho', 'modPeso');
	manager.addDocument('es', 'No quedo satisfecho con nada', 'modPeso');
	manager.addDocument('es', 'Pienso en comida todo el tiempo', 'modPeso');
	manager.addDocument('es', 'Pienso en comida', 'modPeso');
	manager.addDocument('es', 'Pienso en comer todo el tiempo', 'modPeso');
	manager.addDocument('es', 'Pienso en comer', 'modPeso');

//**********************************************************************************************************

	//Frases con etiqueta sinModPeso
	manager.addDocument('es', 'Me gusta bastante el futbol', 'sinModPeso');
	manager.addDocument('es', 'Suelo cansarme bastante depues de ir a correr', 'sinModPeso');
	manager.addDocument('es', 'Pienso en cosas malas todo el tiempo', 'sinModPeso');
	manager.addDocument('es', 'Desde ayer no tengo ganas de nada', 'sinModPeso');
	manager.addDocument('es', 'Ayer el metro estaba muy lleno', 'sinModPeso');
	manager.addDocument('es', 'He aumentado de estatura estos ultimos días', 'sinModPeso');
	manager.addDocument('es', 'He aumentado mi score en este juego', 'sinModPeso');
	manager.addDocument('es', 'Estoy subiendo unas fotos', 'sinModPeso');
	manager.addDocument('es', 'No me gusta tener que subir esas escaleras', 'sinModPeso');
	manager.addDocument('es', 'me lo impide', 'sinModPeso');
	manager.addDocument('es', 'es como si mi subconsciente me negara la felicidad', 'sinModPeso');
	manager.addDocument('es', 'como si dentro de mi supiera que no merezco ser feliz', 'sinModPeso');
	manager.addDocument('es', 'por que no lo valgo', 'sinModPeso');
	manager.addDocument('es', 'por que soy tonto', 'sinModPeso');
	manager.addDocument('es', 'incapaz de sobresalir', 'sinModPeso');
	manager.addDocument('es', 'siempre estoy hecho mierda', 'sinModPeso');
	manager.addDocument('es', 'A veces quisiera hablarlo con alguien', 'sinModPeso');
	manager.addDocument('es', 'No tengo permitido parecer débil', 'sinModPeso');
	manager.addDocument('es', 'Así que me lo guardo', 'sinModPeso');
	manager.addDocument('es', 'Crece hasta que me abrasa', 'sinModPeso');
	manager.addDocument('es', 'a veces honestamente pienso que nunca pasara', 'sinModPeso');
	manager.addDocument('es', 'Talvez se la ultima ya que no puedo más con esta agonía', 'sinModPeso');
	manager.addDocument('es', 'esta desesperación ya me canse de llorar', 'sinModPeso');
	manager.addDocument('es', 'no ser entendido me odio', 'sinModPeso');
	manager.addDocument('es', 'esta sera mi salida para todo', 'sinModPeso');
	manager.addDocument('es', 'la violencia la sufrimos todos', 'sinModPeso');
	manager.addDocument('es', 'se manifiestan contra la violencia', 'sinModPeso');
	manager.addDocument('es', 'defendernos entre todos', 'sinModPeso');
	manager.addDocument('es', 'solo quiero morir para que desaparezca todo mis problemas ya que no se que hacer enserio', 'sinModPeso');
	manager.addDocument('es', 'He pensando mucho en quitarme la vida ', 'sinModPeso');
	manager.addDocument('es', 'Tengo Depresión severa', 'sinModPeso');
	manager.addDocument('es', 'dificil estoy con Venalafaxina', 'sinModPeso');
	manager.addDocument('es', 'ahora tengo un gran bajón emocional', 'sinModPeso');
	manager.addDocument('es', 'a pesar de la Psiquiatría', 'sinModPeso');
	manager.addDocument('es', 'Chicos necesito algún consejo', 'sinModPeso');
	manager.addDocument('es', 'Suele compararme mucho', 'sinModPeso');
	manager.addDocument('es', 'Ya no siento pasión por nada', 'sinModPeso');
	manager.addDocument('es', 'Pienso suicidarme cuando tenga 26', 'sinModPeso');
	manager.addDocument('es', 'No me considero perfeccionista', 'sinModPeso');
	manager.addDocument('es', 'No me soporto', 'sinModPeso');
	manager.addDocument('es', 'Estoy exahusto', 'sinModPeso');
	manager.addDocument('es', 'En un fin de semana lleno de noticias terribles', 'sinModPeso');
	manager.addDocument('es', 'una vez más', 'sinModPeso');
	manager.addDocument('es', 'mientras esperaba reflexionaba con mi amiga cómo luego una es bien ingenua', 'sinModPeso');
	manager.addDocument('es', 'ya no tengo pilas para nada', 'sinModPeso');
	manager.addDocument('es', 'Así como algunas marcas cambian de nombre en países diferentes', 'sinModPeso');
	manager.addDocument('es', 'como: “Este tiempo es más largo que aquel otro”', 'sinModPeso');
	manager.addDocument('es', 'como: “Este es doble que aquél”', 'sinModPeso');
	//manager.addDocument('es', '', 'sinModPeso');



	//Entrenamos el modelo
	console.log('Training...');
	await manager.train();
	console.log('Trained!');

	//Guardamos el modelo

	//manager.save(modelTag, true);
}

async function updateOcurrences(post) {
	let intentTag = "modPeso";
	//Se envía a analizar el posts con el modelo
	await classifier.phrasesId(post, intentTag, manager);
}

exports.analyzePosts = async function (postsArray) {
	console.log("***********					 	*****************");
	console.log("***********	PERDIDA DE PESO 	*****************");
	console.log("***********					 	*****************");

	var keywords = [	
						'peso', 'apetito', 'perder', 'aumentar',
						'ganar', 'subir', 'gordo', 'flaco', 'bajar',
						'incrementar', 'disminuir', 'tener', 'hambre',
						'quedar', 'ropa', 'comer', 'dieta', 'régimen',
						'engordar', 'antojo', 'ayunar', 'nutriólogo',
						'adelgazar', 'engordar', 'satisfecho', 'lleno', 'repleto',
						'alimentar'
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