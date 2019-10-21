//Identificador de disminución de la capacidad para pensar o concentrarse o indecisión

const {
	NlpManager
} = require('node-nlp');
const manager = new NlpManager({
	languages: ['es']
});
const fs = require('fs');
const classifier = require('../classifier.js');

let modelTag = './modelA8.nlp';
let minOcurrences = 3;

async function trainnlp(manager) {
	if (fs.existsSync(modelTag)) {
		manager.load(modelTag);
		return;
	}

	//Disminución de la capacidad para pensar
	manager.addDocument('es', 'No pienso', 'disminucionPensar');
	manager.addDocument('es', 'No pienso bien', 'disminucionPensar');
	manager.addDocument('es', 'No pienso muy bien', 'disminucionPensar');
	manager.addDocument('es', 'No he podido pensar', 'disminucionPensar');
	manager.addDocument('es', 'No he podido pensar bien', 'disminucionPensar');
	manager.addDocument('es', 'No he podido pensar nada bien', 'disminucionPensar');
	manager.addDocument('es', 'No he podido pensar muy bien', 'disminucionPensar');
	manager.addDocument('es', 'No he estado pensando', 'disminucionPensar');
	manager.addDocument('es', 'No he estado pensando bien', 'disminucionPensar');
	manager.addDocument('es', 'No he estado pensando claramente', 'disminucionPensar');
	manager.addDocument('es', 'No he estado pensando muy bien', 'disminucionPensar');
	manager.addDocument('es', 'No he estado pensando nada bien', 'disminucionPensar');
	manager.addDocument('es', 'No puedo pensar', 'disminucionPensar');
	manager.addDocument('es', 'No puedo pensar bien', 'disminucionPensar');
	manager.addDocument('es', 'No puedo pensar muy bien', 'disminucionPensar');
	manager.addDocument('es', 'Me cuesta trabajo pensar', 'disminucionPensar');
	manager.addDocument('es', 'Me cuesta mucho trabajo pensar', 'disminucionPensar');
	manager.addDocument('es', 'Me cuesta trabajo pensar claramente', 'disminucionPensar');
	manager.addDocument('es', 'Me cuesta pensar', 'disminucionPensar');
	manager.addDocument('es', 'Me cuesta mucho pensar', 'disminucionPensar');
	manager.addDocument('es', 'Me cuesta pensar claramente', 'disminucionPensar');
	manager.addDocument('es', 'Me ha costado trabajo pensar', 'disminucionPensar');
	manager.addDocument('es', 'Ultimamente me ha costado trabajo pensar', 'disminucionPensar');
	manager.addDocument('es', 'Me ha estado costando trabajo pensar', 'disminucionPensar');
	manager.addDocument('es', 'Ultimamente me ha estado costando trabajo pensar', 'disminucionPensar');
	manager.addDocument('es', 'Me ha costado pensar', 'disminucionPensar');
	manager.addDocument('es', 'Ultimamente me ha costado pensar', 'disminucionPensar');
	manager.addDocument('es', 'Me ha estado costando pensar', 'disminucionPensar');
	manager.addDocument('es', 'Ultimamente me ha estado costando pensar', 'disminucionPensar');
	manager.addDocument('es', 'Mi capacidad para pensar ha disminuido', 'disminucionPensar');
	manager.addDocument('es', 'Mi capacidad para pensar esta disminuyendo', 'disminucionPensar');
	manager.addDocument('es', 'Mi capacidad para pensar disminuye', 'disminucionPensar');
	manager.addDocument('es', 'Mi capacidad para pensar se ha reducido', 'disminucionPensar');
	manager.addDocument('es', 'Mi capacidad para pensar se esta reduciendo', 'disminucionPensar');
	manager.addDocument('es', 'Mi capacidad para pensar se reduce', 'disminucionPensar');

	//Disminución de la capacidad de concentrarse
	manager.addDocument('es', 'No me concentro', 'disminucionPensar');
	manager.addDocument('es', 'No me concentro bien', 'disminucionPensar');
	manager.addDocument('es', 'No me concentro muy bien', 'disminucionPensar');
	manager.addDocument('es', 'No me puedo concentrar', 'disminucionPensar');
	manager.addDocument('es', 'No me puedo concentrar nada', 'disminucionPensar');
	manager.addDocument('es', 'No me puedo concentrar muy bien', 'disminucionPensar');
	manager.addDocument('es', 'No me puedo concentrar nada bien', 'disminucionPensar');
	manager.addDocument('es', 'No me he podido concentrar', 'disminucionPensar');
	manager.addDocument('es', 'No me he podido concentrar ultimamente', 'disminucionPensar');
	manager.addDocument('es', 'En estos ultimos dias no me he podido concentrar', 'disminucionPensar');
	manager.addDocument('es', 'Concentrarme es dificil', 'disminucionPensar');
	manager.addDocument('es', 'Concentrarme es muy dificil', 'disminucionPensar');
	manager.addDocument('es', 'Concentrarme es complicado', 'disminucionPensar');
	manager.addDocument('es', 'Concentrarme es muy complicado', 'disminucionPensar');
	manager.addDocument('es', 'No he estado concentrado', 'disminucionPensar');
	manager.addDocument('es', 'No me he concentrado', 'disminucionPensar');
	manager.addDocument('es', 'Falta de concentración', 'disminucionPensar');
	manager.addDocument('es', 'Me falta concetración', 'disminucionPensar');
	manager.addDocument('es', 'Me ha faltado concetración', 'disminucionPensar');
	manager.addDocument('es', 'Me ha faltado concetración estos días', 'disminucionPensar');
	manager.addDocument('es', 'Ultimamente me ha faltado concetración', 'disminucionPensar');
	manager.addDocument('es', 'Mi concentración ha disminuido', 'disminucionPensar');
	manager.addDocument('es', 'Mi concentración disminuye', 'disminucionPensar');
	manager.addDocument('es', 'Mi concentración disminuyó', 'disminucionPensar');
	manager.addDocument('es', 'Me cuesta concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Me cuesta mucho concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Me cuesta trabajo concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Me cuesta mucho trabajo concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Ultimamente me ha costado trabajo concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Me ha estado costando trabajo concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Ultimamente me ha estado costando trabajo concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Me ha costado concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Ultimamente me ha costado concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Me ha estado costando concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Me ha estado costando el concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Ultimamente me ha estado costando concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Ultimamente me cuesta concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Me cuesta concentrarme', 'disminucionPensar');
	manager.addDocument('es', 'Me cuesta concentrarme ultimamente', 'disminucionPensar');
	manager.addDocument('es', 'Nada me entra en la cabeza', 'disminucionPensar');
	manager.addDocument('es', 'Las cosas no me entran a la cabeza', 'disminucionPensar');
	manager.addDocument('es', 'No me entra en la cabeza', 'disminucionPensar');

	//Indecisión. (Duda/ incertidumbre)
	manager.addDocument('es', 'Estoy indeciso', 'disminucionPensar');
	manager.addDocument('es', 'Estoy indecisa', 'disminucionPensar');
	manager.addDocument('es', 'Estoy muy indeciso', 'disminucionPensar');
	manager.addDocument('es', 'Estoy muy indecisa', 'disminucionPensar');
	manager.addDocument('es', 'Tengo indecisión', 'disminucionPensar');
	manager.addDocument('es', 'Tengo mucha indecisión', 'disminucionPensar');
	manager.addDocument('es', 'Estoy dudoso', 'disminucionPensar');
	manager.addDocument('es', 'Estoy dudosa', 'disminucionPensar');
	manager.addDocument('es', 'Tengo duda', 'disminucionPensar');
	manager.addDocument('es', 'No estoy seguro', 'disminucionPensar');
	manager.addDocument('es', 'No estoy segura', 'disminucionPensar');
	manager.addDocument('es', 'No estoy seguro de nada', 'disminucionPensar');
	manager.addDocument('es', 'No estoy segura de nada', 'disminucionPensar');
	manager.addDocument('es', 'Estoy inseguro', 'disminucionPensar');
	manager.addDocument('es', 'Estoy insegura', 'disminucionPensar');
	manager.addDocument('es', 'Estoy inseguro de todo', 'disminucionPensar');
	manager.addDocument('es', 'Estoy insegura de todo', 'disminucionPensar');
	manager.addDocument('es', 'Tengo incertidumbre', 'disminucionPensar');
	manager.addDocument('es', 'Tengo mucha incertidumbre', 'disminucionPensar');
	manager.addDocument('es', 'La indecisión', 'disminucionPensar');
	manager.addDocument('es', 'La indecisión me domina', 'disminucionPensar');
	manager.addDocument('es', 'La duda', 'disminucionPensar');
	manager.addDocument('es', 'La duda me domina', 'disminucionPensar');
	manager.addDocument('es', 'La inseguridad', 'disminucionPensar');
	manager.addDocument('es', 'La inseguridad me domina', 'disminucionPensar');
	manager.addDocument('es', 'No puedo decidir', 'disminucionPensar');
	manager.addDocument('es', 'No me puedo decidir', 'disminucionPensar');
	manager.addDocument('es', 'No sé', 'disminucionPensar');
	manager.addDocument('es', 'No sé que hacer', 'disminucionPensar');
	manager.addDocument('es', 'No sé que puedo hacer', 'disminucionPensar');
	manager.addDocument('es', 'No sé que podría hacer', 'disminucionPensar');
	manager.addDocument('es', 'No se', 'disminucionPensar');
	manager.addDocument('es', 'No se que hacer', 'disminucionPensar');
	manager.addDocument('es', 'No se que puedo hacer', 'disminucionPensar');
	manager.addDocument('es', 'No se que podría hacer', 'disminucionPensar');
	manager.addDocument('es', 'Ya no sé', 'disminucionPensar');
	manager.addDocument('es', 'Ya no sé que hacer', 'disminucionPensar');
	manager.addDocument('es', 'Ya no sé que puedo hacer', 'disminucionPensar');
	manager.addDocument('es', 'Ya no sé que podría hacer', 'disminucionPensar');
	manager.addDocument('es', 'Ya no se', 'disminucionPensar');
	manager.addDocument('es', 'Ya no se que hacer', 'disminucionPensar');
	manager.addDocument('es', 'Ya no se que puedo hacer', 'disminucionPensar');
	manager.addDocument('es', 'Ya no se que podría hacer', 'disminucionPensar');
	manager.addDocument('es', 'No saber que hacer', 'disminucionPensar');
	manager.addDocument('es', 'No se que quiero', 'disminucionPensar');
	manager.addDocument('es', 'No se que deseo', 'disminucionPensar');
	manager.addDocument('es', 'No tengo idea de que quiero', 'disminucionPensar');
	manager.addDocument('es', 'No tengo idea de que deseo', 'disminucionPensar');

//**********************************************************************************************************

	//No presentan nigun signo
	manager.addDocument('es', 'A veces pienso que esto no esta bien', 'sinDisminucion');
	manager.addDocument('es', 'Pienso luego actuo', 'sinDisminucion');
	manager.addDocument('es', 'Y pensar que iba a ser tan fácil', 'sinDisminucion');
	manager.addDocument('es', 'No he podido terminar mi tarea', 'sinDisminucion');
	manager.addDocument('es', 'No he podido resolver el problema', 'sinDisminucion');
	manager.addDocument('es', 'No he podido jugar videojuegos estas ultimas semanas', 'sinDisminucion');
	manager.addDocument('es', 'No he estado en mi casa', 'sinDisminucion');
	manager.addDocument('es', 'No he estado al tanto de la liga mx', 'sinDisminucion');
	manager.addDocument('es', 'No he tenido tiempo de nada', 'sinDisminucion');
	manager.addDocument('es', 'No puedo patinar', 'sinDisminucion');
	manager.addDocument('es', 'No puedo comer mucho', 'sinDisminucion');
	manager.addDocument('es', 'Me cuesta trabajo despertarme tan temprano', 'sinDisminucion');
	manager.addDocument('es', 'Me cuesta trabajo estar todo el tiempo pensando en eso', 'sinDisminucion');
	manager.addDocument('es', 'Me ha costado hacer este disco', 'sinDisminucion');
	manager.addDocument('es', 'Ultimamente he estado muy triste', 'sinDisminucion');
	manager.addDocument('es', 'Ultimamente he estado muy feliz', 'sinDisminucion');
	manager.addDocument('es', 'Ultimamente no se me antoja nada', 'sinDisminucion');
	manager.addDocument('es', 'No me duele', 'sinDisminucion');
	manager.addDocument('es', 'No me sirve de nada enojarme', 'sinDisminucion');
	manager.addDocument('es', 'No me puedo mantener dormido por tanto tiempo', 'sinDisminucion');
	manager.addDocument('es', 'No me puedo mantener dormida por tanto tiempo', 'sinDisminucion');
	manager.addDocument('es', 'Estoy tranquilo', 'sinDisminucion');
	manager.addDocument('es', 'Estoy tranquila', 'sinDisminucion');
	manager.addDocument('es', 'Estoy muy borracho', 'sinDisminucion');
	manager.addDocument('es', 'Estoy muy borracha', 'sinDisminucion');
	manager.addDocument('es', 'Me ofrecieron un seguro de vida', 'sinDisminucion');
	manager.addDocument('es', 'Estoy seguro que todo saldrá bien', 'sinDisminucion');
	manager.addDocument('es', 'Estoy segura que todo saldrá bien', 'sinDisminucion');
	manager.addDocument('es', 'Estoy seguro que si', 'sinDisminucion');
	manager.addDocument('es', 'Estoy segura que si', 'sinDisminucion');
	manager.addDocument('es', 'Seguramente es culpable', 'sinDisminucion');
	manager.addDocument('es', 'Me costó mucho mi celular', 'sinDisminucion');
	manager.addDocument('es', 'Me costó mucho trabajo el llegar a donde estoy', 'sinDisminucion');
	manager.addDocument('es', 'ODIO hacer squats', 'sinDisminucion');
	manager.addDocument('es', 'Estoy exahusto', 'sinDisminucion');
	manager.addDocument('es', 'Estoy exahusta', 'sinDisminucion');
	manager.addDocument('es', 'pensar', 'sinDisminucion');
	manager.addDocument('es', 'de hecho no merecían', 'sinDisminucion');
	manager.addDocument('es', 'ya no tengo pilas para nada', 'sinDisminucion');
	manager.addDocument('es', 'se piden por Internet', 'sinDisminucion');
	manager.addDocument('es', 'dónde está la mía', 'sinDisminucion');
	manager.addDocument('es', 'No importa cuando se lea esto', 'sinDisminucion');
	manager.addDocument('es', 'las princesas no trabajan Huitrón', 'sinDisminucion');
	manager.addDocument('es', 'Mezclando la energía de la adolescencia', 'sinDisminucion');
	manager.addDocument('es', 'con el poder seductor de la inteligencia', 'sinDisminucion');
	manager.addDocument('es', 'maravilla será si no es de la misma alma', 'sinDisminucion');
	manager.addDocument('es', 'lo sé ', 'sinDisminucion');
	manager.addDocument('es', 'que no se extiende por ningún espacio', 'sinDisminucion');
	manager.addDocument('es', 'Si se ven bien pendejos/pendejas defendiendo algo sólo por llevar la contraria', 'sinDisminucion');
	manager.addDocument('es', 'hacer menos la protesta', 'sinDisminucion');
	manager.addDocument('es', 'Mi familia me da la espalda ps no siento su apoyo', 'sinDisminucion');
	manager.addDocument('es', 'No tengo ganas de nada quisiera morirme', 'sinDisminucion');
	manager.addDocument('es', 'no entiendo esta vida y no me gusta', 'sinDisminucion');
	manager.addDocument('es', 'la verdad creo que no me hace falta nada material para ser feliz', 'sinDisminucion');
	manager.addDocument('es', 'no quiero hacerles daño', 'sinDisminucion');
	manager.addDocument('es', 'Desde hace 6 años no tengo una estabilidad laboral', 'sinDisminucion');
	manager.addDocument('es', 'me cuesta mucho no derrumbarme delante de él', 'sinDisminucion');
	manager.addDocument('es', 'la verdad no es nada grande', 'sinDisminucion');
	manager.addDocument('es', 'pero no renuncio porque tengo gastos', 'sinDisminucion');
	manager.addDocument('es', 'que simplemente aún no llevan cálculo se los agradecería', 'sinDisminucion');
	manager.addDocument('es', 'Más que un segundo lugar se logró formar un maravilloso grupo de personas', 'sinDisminucion');
	manager.addDocument('es', 'no encuentro la felicidad', 'sinDisminucion');
	manager.addDocument('es', 'tengo examen dentro de 3 horas no me se nada', 'sinDisminucion');
	manager.addDocument('es', 'talvez se la ultima ya que no puedo más con esta agonía', 'sinDisminucion');
	manager.addDocument('es', 'Tengo que sacar fuerza de mi interior para que no se den cuenta que me siento fatal', 'sinDisminucion');
	manager.addDocument('es', 'bipolaridad no me puedo acostumbrar', 'sinDisminucion');
	manager.addDocument('es', 'Hola buenas tardes grupo hoy no me he sentido bien me siento muy triste no se que hacer', 'sinDisminucion');
	manager.addDocument('es', 'No quiero saber nada de nadie', 'sinDisminucion');
	manager.addDocument('es', 'No es cierto que uno se arregla', 'sinDisminucion');
	manager.addDocument('es', 'en un ambiente en el cual se podría considerar inseguro', 'sinDisminucion');
	manager.addDocument('es', 'detesto que esos idiotas tengan cosas que podrían haber sido mías', 'sinDisminucion');
	manager.addDocument('es', 'mientras tú piensas que soy tu mejor amigo', 'sinDisminucion');
	manager.addDocument('es', 'No me gusta la situación en la que estoy pero', 'sinDisminucion');
	manager.addDocument('es', 'pensar en no querer vivir', 'sinDisminucion');
	manager.addDocument('es', 'no tengo permitido parecer débil', 'sinDisminucion');
	manager.addDocument('es', 'se manifiestan contra la violencia', 'sinDisminucion');
	manager.addDocument('es', 'He pensando mucho en quitarme la vida', 'sinDisminucion');
	manager.addDocument('es', 'Cuando la depresión me tiene incapacitada no solo es mi cabeza mi cuerpo no me responde', 'sinDisminucion');
	manager.addDocument('es', 'Saber que no tengo amigos', 'sinDisminucion');
	manager.addDocument('es', 'No cabe duda que el peor enemigo eres tú', 'sinDisminucion');
	manager.addDocument('es', 'no se que esperar', 'sinDisminucion');
	manager.addDocument('es', 'Pienso suicidarme cuando tenga 26', 'sinDisminucion');
	manager.addDocument('es', 'ahora que pienso', 'sinDisminucion');
	manager.addDocument('es', 'inseguridad', 'sinDisminucion');
	manager.addDocument('es', 'Quiero estar bien y no lo estoy', 'sinDisminucion');
	manager.addDocument('es', 'mitigar la frialdad nocturna a la que estoy acostumbrado', 'sinDisminucion');
	manager.addDocument('es', 'obviamente se que no soy la unica pasando por esto', 'sinDisminucion');
	manager.addDocument('es', 'No sé porque tengo tanto sueño', 'sinDisminucion');
	manager.addDocument('es', 'la ansiedad aún no inicia', 'sinDisminucion');
	//manager.addDocument('es', '', 'sinDisminucion');
	//manager.addDocument('es', '', 'sinDisminucion');
	//manager.addDocument('es', '', 'sinDisminucion');

	//Entrenamos el modelo
	console.log('Training...');
	await manager.train();
	console.log('Trained!');

	//Guardamos el modelo

	//manager.save(modelTag, true);
}

async function updateOcurrences(post) {
	let intentTag = "disminucionPensar";
	//Se envía a analizar el posts con el modelo
	await classifier.phrasesId(post, intentTag, manager);
}

exports.analyzePosts = async function (postsArray) {
	console.log("***********					 					*****************");
	console.log("***********	DISMINUCION CAPACIDAD PARA PENSAR O INDECISION 	*****************");
	console.log("***********					 					*****************");
 						

	var keywords = 	[	
						'disminuir', 'reducir', 'bajar', 'decrecer', 'capacidad',
						'pensar', 'concentrar', 'indecision', 'pienso', 'cuesta',
						'costando', 'poder', 'puedo', 'duda', 'incertidumbre',
						'seguro', 'decidir', 'saber'
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
