//Identificador de desesperanza
const {
	NlpManager
} = require('node-nlp');
const manager = new NlpManager({
	languages: ['es']
});
const fs = require('fs');
const classifier = require('../classifier.js');

let modelTag = './modelB6.nlp';
let minOcurrences = 3;

async function trainnlp(manager) {
	if (fs.existsSync(modelTag)) {
		manager.load(modelTag);
		return;
	}

	//Explicito
	manager.addDocument('es', 'No tengo esperanza', 'desesperanza');
	manager.addDocument('es', 'No tengo esperanzas', 'desesperanza');
	manager.addDocument('es', 'No tengo esperanza de nada', 'desesperanza');
	manager.addDocument('es', 'No tengo esperanzas de nada', 'desesperanza');
	manager.addDocument('es', 'Ya no tengo esperanza', 'desesperanza');
	manager.addDocument('es', 'Ya no tengo esperanzas', 'desesperanza');
	manager.addDocument('es', 'Ya no tengo esperanza de nada', 'desesperanza');
	manager.addDocument('es', 'Ya no tengo esperanzas de nada', 'desesperanza');
	manager.addDocument('es', 'Estoy desesperanzado', 'desesperanza');
	manager.addDocument('es', 'Estoy desesperanzada', 'desesperanza');
	manager.addDocument('es', 'Estoy desahuciado', 'desesperanza');
	manager.addDocument('es', 'Estoy desahuciada', 'desesperanza');
	manager.addDocument('es', 'Me encuentro desahuciado', 'desesperanza');
	manager.addDocument('es', 'Me encuentro desahuciada', 'desesperanza');
	manager.addDocument('es', 'Pierdo la esperanza', 'desesperanza');
	manager.addDocument('es', 'He perdido la esperanza', 'desesperanza');
	manager.addDocument('es', 'Perdí la esperanza', 'desesperanza');
	manager.addDocument('es', 'Pierdo la esperanza de todo', 'desesperanza');
	manager.addDocument('es', 'He perdido la esperanza de que me vaya mejor', 'desesperanza');
	manager.addDocument('es', 'Perdí la esperanza en mi familia', 'desesperanza');
	manager.addDocument('es', 'No hay nada que esperar', 'desesperanza');
	manager.addDocument('es', 'Sin algo que esperar', 'desesperanza');
	manager.addDocument('es', 'Sin mucho que esperar', 'desesperanza');


	//No encontrar alternativas de solución ante una determinada situación
	manager.addDocument('es', 'No hay solución', 'desesperanza');
	manager.addDocument('es', 'No hay una solución', 'desesperanza');
	manager.addDocument('es', 'No hay alguna solución', 'desesperanza');
	manager.addDocument('es', 'No hay solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No hay una solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No hay alguna solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No encuentro solución', 'desesperanza');
	manager.addDocument('es', 'No encuentro una solución', 'desesperanza');
	manager.addDocument('es', 'No encuentro alguna solución', 'desesperanza');
	manager.addDocument('es', 'No encuentro solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No encuentro una solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No encuentro alguna solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No existe solución', 'desesperanza');
	manager.addDocument('es', 'No existe una solución', 'desesperanza');
	manager.addDocument('es', 'No existe ninguna solución', 'desesperanza');
	manager.addDocument('es', 'No existe solución alguna', 'desesperanza');
	manager.addDocument('es', 'No veo ninguna solución', 'desesperanza');
	manager.addDocument('es', 'No veo solución alguna', 'desesperanza');
	manager.addDocument('es', 'No veo alguna solución', 'desesperanza');
	manager.addDocument('es', 'No veía ninguna solución', 'desesperanza');
	manager.addDocument('es', 'No veía solución alguna', 'desesperanza');
	manager.addDocument('es', 'No veía alguna solución', 'desesperanza');
	manager.addDocument('es', 'No vi ninguna solución', 'desesperanza');
	manager.addDocument('es', 'No he visto solución alguna', 'desesperanza');
	manager.addDocument('es', 'No vi alguna solución', 'desesperanza');
	manager.addDocument('es', 'No he visto alguna solución', 'desesperanza');
	manager.addDocument('es', 'No hay alternativa', 'desesperanza');
	manager.addDocument('es', 'No hay alternativas', 'desesperanza');
	manager.addDocument('es', 'No hay otra alternativa', 'desesperanza');
	manager.addDocument('es', 'No hay otras alternativas', 'desesperanza');
	manager.addDocument('es', 'No hay alternativas de solución', 'desesperanza');
	manager.addDocument('es', 'No hay una alternativa de solución', 'desesperanza');
	manager.addDocument('es', 'No hay alternativas alguna de solución', 'desesperanza');
	manager.addDocument('es', 'No hay alternativas de solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No hay una alternativa de solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No hay alguna alternativa de solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No hay alternativas de solución ante esto', 'desesperanza');
	manager.addDocument('es', 'No hay una alternativa de solución ante esta situación', 'desesperanza');
	manager.addDocument('es', 'No hay alternativa alguna de solución ante mis problemas', 'desesperanza');
	manager.addDocument('es', 'No encuentro alternativa de solución', 'desesperanza');
	manager.addDocument('es', 'No encuentro una alternativa de solución', 'desesperanza');
	manager.addDocument('es', 'No encuentro alguna alternativa de solución', 'desesperanza');
	manager.addDocument('es', 'No encuentro alternativa de solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No encuentro una alternativa de solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No encuentro alguna alternativa de solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No encuentro alternativa de solución ante esta situación', 'desesperanza');
	manager.addDocument('es', 'No encuentro una alternativa de solución al hecho de su muerte', 'desesperanza');
	manager.addDocument('es', 'No encuentro alguna alternativa de solución ante esto', 'desesperanza');
	manager.addDocument('es', 'No he encontrado alternativa de solución', 'desesperanza');
	manager.addDocument('es', 'No he encontrado una alternativa de solución', 'desesperanza');
	manager.addDocument('es', 'No he encontrado alguna alternativa de solución', 'desesperanza');
	manager.addDocument('es', 'No he encontrado alternativa de solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No encontré una alternativa de solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No encontré alguna alternativa de solución a mis problemas', 'desesperanza');
	manager.addDocument('es', 'No encontré alternativa de solución ante esta situación', 'desesperanza');
	manager.addDocument('es', 'No encontré una alternativa de solución al hecho de su muerte', 'desesperanza');
	manager.addDocument('es', 'No encontré alguna alternativa de solución ante esto', 'desesperanza');
	manager.addDocument('es', 'No existe alternativa de solución', 'desesperanza');
	manager.addDocument('es', 'No existe una alternativa de solución', 'desesperanza');
	manager.addDocument('es', 'No existe ninguna alternativa de solución', 'desesperanza');
	manager.addDocument('es', 'No veo ninguna alternativa de solución', 'desesperanza');
	manager.addDocument('es', 'No veo alternativa de solución alguna', 'desesperanza');
	manager.addDocument('es', 'No veo alguna alternativa de solución', 'desesperanza');
	manager.addDocument('es', 'No veo la luz', 'desesperanza');
	manager.addDocument('es', 'No veo la luz al final del tunel', 'desesperanza');
	manager.addDocument('es', 'Todo lo veo obscuro', 'desesperanza');
	manager.addDocument('es', 'Todo lo veo oscuro', 'desesperanza');
	manager.addDocument('es', 'No veo salida', 'desesperanza');
	manager.addDocument('es', 'No veo la salida', 'desesperanza');
	manager.addDocument('es', 'No veo una salida', 'desesperanza');
	manager.addDocument('es', 'No encuentro salida', 'desesperanza');
	manager.addDocument('es', 'No encuentro la salida', 'desesperanza');
	manager.addDocument('es', 'No encuentro una salida', 'desesperanza');
	manager.addDocument('es', 'No encuentro salida a mi problemas', 'desesperanza');
	manager.addDocument('es', 'No encuentro la salida de esto', 'desesperanza');
	manager.addDocument('es', 'No encuentro la salida de mis problemas', 'desesperanza');
	manager.addDocument('es', 'No encuentro una salida a todo esto', 'desesperanza');
	manager.addDocument('es', 'Ya todo está perdido', 'desesperanza');
	manager.addDocument('es', 'Ya no hay nada que hacer', 'desesperanza');
	manager.addDocument('es', 'No puedo más', 'desesperanza');

	//No tener expectativas de futuro 
	manager.addDocument('es', 'No tengo expectativas', 'desesperanza');
	manager.addDocument('es', 'Ya no tengo expectativas', 'desesperanza');
	manager.addDocument('es', 'No tengo expectativas de nada', 'desesperanza');
	manager.addDocument('es', 'Ya no tengo expectativas de nada', 'desesperanza');
	manager.addDocument('es', 'No tengo expectativas del futuro', 'desesperanza');
	manager.addDocument('es', 'Ya no tengo expectativas del futuro', 'desesperanza');

	manager.addDocument('es', 'No me importa el futuro', 'desesperanza');
	manager.addDocument('es', 'No me importa mi futuro', 'desesperanza');
	manager.addDocument('es', 'No me importa lo que vaya a pasar', 'desesperanza');
	manager.addDocument('es', 'No me importa lo que me vaya a pasar', 'desesperanza');
	manager.addDocument('es', 'Ya no me importa el futuro', 'desesperanza');
	manager.addDocument('es', 'Ya no me importa mi futuro', 'desesperanza');
	manager.addDocument('es', 'Ya no me importa lo que vaya a pasar', 'desesperanza');
	manager.addDocument('es', 'Ya no me importa lo que me vaya a pasar', 'desesperanza');

	manager.addDocument('es', 'No me interesa el futuro', 'desesperanza');
	manager.addDocument('es', 'No me interesa mi futuro', 'desesperanza');
	manager.addDocument('es', 'No me interesa lo que vaya a pasar', 'desesperanza');
	manager.addDocument('es', 'No me interesa lo que me vaya a pasar', 'desesperanza');
	manager.addDocument('es', 'Ya no me interesa el futuro', 'desesperanza');
	manager.addDocument('es', 'Ya no me interesa mi futuro', 'desesperanza');
	manager.addDocument('es', 'Ya no me interesa lo que vaya a pasar', 'desesperanza');
	manager.addDocument('es', 'Ya no me interesa lo que me vaya a pasar', 'desesperanza');

	manager.addDocument('es', 'No espero nada', 'desesperanza');
	manager.addDocument('es', 'No espero nada de la vida', 'desesperanza');
	manager.addDocument('es', 'No espero nada del futuro', 'desesperanza');
	manager.addDocument('es', 'No espero nada de mi futuro', 'desesperanza');
	manager.addDocument('es', 'No espero nada de nadie', 'desesperanza');
	manager.addDocument('es', 'Ya no espero nada', 'desesperanza');
	manager.addDocument('es', 'Ya no espero nada de la vida', 'desesperanza');
	manager.addDocument('es', 'Ya no espero nada del futuro', 'desesperanza');
	manager.addDocument('es', 'Ya no espero nada de mi futuro', 'desesperanza');
	manager.addDocument('es', 'Ya no espero nada de nadie', 'desesperanza');

	manager.addDocument('es', 'El futuro sin sentido', 'desesperanza');
	manager.addDocument('es', 'El futuro no tiene sentido', 'desesperanza');

	manager.addDocument('es', 'talvez se la ultima ya que no puedo más con esta agonía', 'desesperanza');
	manager.addDocument('es', 'No lo voy a lograr', 'desesperanza');
	manager.addDocument('es', 'No le encuentro ya sentido a nada', 'desesperanza');
	manager.addDocument('es', 'Nada tiene solución', 'desesperanza');
	manager.addDocument('es', 'no tengo esperanza', 'desesperanza');
	manager.addDocument('es', 'no ninguna esperanza', 'desesperanza');
	manager.addDocument('es', 'no tengo esperanza alguna de nada', 'desesperanza');
	manager.addDocument('es', 'no tengo esperanza alguna de la vida', 'desesperanza');
	manager.addDocument('es', 'no tengo esperanza alguna de que su situación mejore', 'desesperanza');
	manager.addDocument('es', 'El futuro sin sentido', 'desesperanza');
	manager.addDocument('es', 'ya no voy a poder más', 'desesperanza');
	manager.addDocument('es', 'Todo siempre será peor', 'desesperanza');
	manager.addDocument('es', 'Esto solo empeorará', 'desesperanza');
	manager.addDocument('es', 'Las cosas solo van de mal en peor', 'desesperanza');
	manager.addDocument('es', 'Pienso que nunca pasará', 'desesperanza');
	manager.addDocument('es', 'Nunca pasará', 'desesperanza');
	manager.addDocument('es', 'Siento que estoy perdiendo la batalla', 'desesperanza');
	manager.addDocument('es', 'No vale la pena seguir', 'desesperanza');
	manager.addDocument('es', 'Tampoco vale la pena seguir', 'desesperanza');


//***************************************************************************************************************************************
	//Frases que no contienen la etiqueta
	manager.addDocument('es', 'Llevo esperando mucho tiempo', 'esperanza');
	manager.addDocument('es', 'Espero mucho de las personas', 'esperanza');
	manager.addDocument('es', 'Espero que no pase nada malo', 'esperanza');
	manager.addDocument('es', 'Esperando a que me conteste', 'esperanza');
	manager.addDocument('es', 'La esperanza es lo último que muere', 'esperanza');
	manager.addDocument('es', 'Arriba la esperanza abuelita', 'esperanza');
	manager.addDocument('es', 'Ya no me gusta salir a jugar', 'esperanza');
	manager.addDocument('es', 'Ya no me gusta escribir', 'esperanza');
	manager.addDocument('es', 'Ya no me interesa que digan los demás de mi', 'esperanza');
	manager.addDocument('es', 'Ya no me interesa ese género musical', 'esperanza');
	manager.addDocument('es', 'Ya no me interesa esa persona', 'esperanza');
	manager.addDocument('es', 'El interes tiene pies', 'esperanza');
	manager.addDocument('es', 'La tasa de interes está muy alta', 'esperanza');
	manager.addDocument('es', 'Compré una pantalla a meses sin intereses', 'esperanza');
	manager.addDocument('es', 'Me interesa investigar más sobre el tema', 'esperanza');
	manager.addDocument('es', 'Tengo interes en jugar hockey sobre hielo', 'esperanza');
	manager.addDocument('es', 'En un futuro lo entenderas', 'esperanza');
	manager.addDocument('es', 'Fui a que me leyeran el futuro', 'esperanza');
	manager.addDocument('es', 'La pelicula de la familia del futuro es de mis favoritas', 'esperanza');
	manager.addDocument('es', 'El futuro es hoy viejo', 'esperanza');
	manager.addDocument('es', 'Viendo hacia futuro me parece buena idea', 'esperanza');
	manager.addDocument('es', 'Confio en que me va a ir mejor en el futuro', 'esperanza');
	manager.addDocument('es', 'Ya no me importa que se burlen de mi', 'esperanza');
	manager.addDocument('es', 'Ya no me importa lo que digan de mi', 'esperanza');
	manager.addDocument('es', 'Me importan mis familiares', 'esperanza');
	manager.addDocument('es', 'Me importan mis calificaciones', 'esperanza');
	manager.addDocument('es', 'Me importan que será de mi en un futuro', 'esperanza');
	manager.addDocument('es', 'Me importa mis familia', 'esperanza');
	manager.addDocument('es', 'Ya termine toda mi tarea', 'esperanza');
	manager.addDocument('es', 'Ya termine toda mi trabajo', 'esperanza');
	manager.addDocument('es', 'No encuentro mis llaves', 'esperanza');
	manager.addDocument('es', 'No encuentro donde dejé mi cartera', 'esperanza');
	manager.addDocument('es', 'No encuentro mi playera favorita', 'esperanza');
	manager.addDocument('es', 'No encuentro como mejorar este clasificador', 'esperanza');
	manager.addDocument('es', 'Hay mucha luz', 'esperanza');
	manager.addDocument('es', 'Este día estuvo muy obscuro', 'esperanza');
	manager.addDocument('es', 'Este día estuvo muy oscuro', 'esperanza');
	manager.addDocument('es', 'Existen alternativas', 'esperanza');
	manager.addDocument('es', 'Existen alternativas de solución', 'esperanza');
	manager.addDocument('es', 'Existen muchas alternativas', 'esperanza');
	manager.addDocument('es', 'Existen otras alternativas', 'esperanza');
	manager.addDocument('es', 'Una alternativa es hacer lo que dice mi madre', 'esperanza');
	manager.addDocument('es', 'Otra alternativa es guiarme por el corazón', 'esperanza');
	manager.addDocument('es', 'Esa es la solución', 'esperanza');
	manager.addDocument('es', 'Hay solución', 'esperanza');
	manager.addDocument('es', 'Hay una solución', 'esperanza');
	manager.addDocument('es', 'Hay alguna solución', 'esperanza');
	manager.addDocument('es', 'Hay solución a mis problemas', 'esperanza');
	manager.addDocument('es', 'Hay muchas soluciones a mis problemas', 'esperanza');
	manager.addDocument('es', 'Tiene solución', 'esperanza');
	manager.addDocument('es', 'Tiene una solución', 'esperanza');
	manager.addDocument('es', 'Tiene alguna solución', 'esperanza');
	manager.addDocument('es', 'Tengo solución a mis problemas', 'esperanza');
	manager.addDocument('es', 'Tengo muchas soluciones a mis problemas', 'esperanza');
	manager.addDocument('es', 'Encontré al solución', 'esperanza');
	manager.addDocument('es', 'Al fin encontré al solución', 'esperanza');
	manager.addDocument('es', 'Existe solución', 'esperanza');
	manager.addDocument('es', 'Existe una solución', 'esperanza');
	manager.addDocument('es', 'Existen muchas soluciones', 'esperanza');
	manager.addDocument('es', 'Hay alternativa', 'esperanza');
	manager.addDocument('es', 'Hay otra alternativa', 'esperanza');
	manager.addDocument('es', 'Hay alternativas', 'esperanza');
	manager.addDocument('es', 'Hay otras alternativas', 'esperanza');
	manager.addDocument('es', 'Hay alternativa de solución', 'esperanza');
	manager.addDocument('es', 'Hay otra alternativa de solución', 'esperanza');
	manager.addDocument('es', 'Hay alternativas de solución', 'esperanza');
	manager.addDocument('es', 'Hay otras alternativas de solución', 'esperanza');
	manager.addDocument('es', 'Tengo expectativas', 'esperanza');
	manager.addDocument('es', 'Tengo expectativas', 'esperanza');
	manager.addDocument('es', 'Tengo muchas expectativas', 'esperanza');
	manager.addDocument('es', 'Tengo muchas expectativas de la gente', 'esperanza');
	manager.addDocument('es', 'Tengo muchas expectativas de este proyecto', 'esperanza');
	manager.addDocument('es', 'Tengo muchas expectativas de la vida', 'esperanza');
	manager.addDocument('es', 'Tengo expectativas del futuro', 'esperanza');
	manager.addDocument('es', 'Tengo muchas expectativas del futuro', 'esperanza');
	manager.addDocument('es', 'Que me irá a pasar en el futuro', 'esperanza');
	manager.addDocument('es', 'Mi futuro pinta bien', 'esperanza');
	manager.addDocument('es', 'no me he mantenido estable en el animo', 'esperanza');
	manager.addDocument('es', 'por algunas cosas que no suelo bien', 'esperanza');
	manager.addDocument('es', 'actualmente estoy a punto de ingresar a la universidad', 'esperanza');
	manager.addDocument('es', 'pero no hay día en el cual no piense matarme', 'esperanza');
	manager.addDocument('es', 'me siento fracasada en todo no puedo dormir por las noches', 'esperanza');
	manager.addDocument('es', 'pensar en no querer vivir', 'esperanza');
	manager.addDocument('es', 'aunque la gente siempre intenta decirme lo contrario', 'esperanza');
	manager.addDocument('es', 'simplemente yo no lo creó aunque a veces aparente que lo hago en el fondo', 'esperanza');
	manager.addDocument('es', 'no tengo permitido parecer débil', 'esperanza');
	manager.addDocument('es', 'no ser entendido me odio', 'esperanza');
	manager.addDocument('es', 'esta sera mi salida para todo', 'esperanza');
	manager.addDocument('es', 'la violencia la sufrimos todos', 'esperanza');
	manager.addDocument('es', 'He pensando mucho en quitarme la vida', 'esperanza');
	manager.addDocument('es', 'Su muerte es culpa mía, ya no lo soporto más', 'esperanza');
	manager.addDocument('es', 'No tengo nada de hambre', 'esperanza');
	manager.addDocument('es', 'No quedo satisfecho con nada', 'esperanza');
	manager.addDocument('es', 'Espero no molestar', 'esperanza');
	manager.addDocument('es', 'Desde ayer quiero llorar pero no puedo solo está ahí esperando', 'esperanza');
	manager.addDocument('es', 'Y no, no hablo de quitarse la ropa', 'esperanza');
	manager.addDocument('es', 'Cuando la depresión me tiene incapacitada no solo es mi cabeza mi cuerpo no me responde', 'esperanza');
	manager.addDocument('es', 'No es un buen día', 'esperanza');
	manager.addDocument('es', 'No tengo amigos', 'esperanza');
	manager.addDocument('es', 'A mi familia no le importo', 'esperanza');
	manager.addDocument('es', 'No me da vergüenza decir', 'esperanza');
	manager.addDocument('es', 'no lo soy en lo absoluto', 'esperanza');
	manager.addDocument('es', 'me tienen paciencia', 'esperanza');
	manager.addDocument('es', 'no me tengan lastima', 'esperanza');
	manager.addDocument('es', 'no la', 'esperanza');
	manager.addDocument('es', 'No importa cuando se lea esto', 'esperanza');
	manager.addDocument('es', 'las princesas no trabajan Huitrón', 'esperanza');
	manager.addDocument('es', 'Talvez tienen razon en no querer', 'esperanza');
	manager.addDocument('es', 'no entiendo esta vida y no me gusta', 'esperanza');
	manager.addDocument('es', 'aquí aún no encuentro trabajo', 'esperanza');
	manager.addDocument('es', 'no me hace falta nada material para ser feliz', 'esperanza');
	manager.addDocument('es', 'Todos tienen sus trabajos y yo no', 'esperanza');
	manager.addDocument('es', 'No me importa hablar con gente de cualquier lugar', 'esperanza');
	manager.addDocument('es', 'no lo hicera si en verdad no lo necesitará', 'esperanza');
	manager.addDocument('es', 'perdí interes en aquellas cosas', 'esperanza');
	manager.addDocument('es', 'ya van letios meses sintiendo esto acompañado de unos ataques no se como llamarlos', 'esperanza');
	manager.addDocument('es', 'no puedo hacer nada sin pesar en lo q pasara si lo hago', 'esperanza');
	manager.addDocument('es', 'en q todos seran mejor si no estas', 'esperanza');
	manager.addDocument('es', 'las cosas buenas a mi no tiene', 'esperanza');
	manager.addDocument('es', 'siempre estoy hecho mierda', 'esperanza');
	manager.addDocument('es', 'no vale nada lo unico', 'esperanza');
	manager.addDocument('es', 'nunca pude escuchar bien lo', 'esperanza');
	manager.addDocument('es', 'no merecían conocer mi vida privada', 'esperanza');
	manager.addDocument('es', 'este día los haga sentir más solos', 'esperanza');
	manager.addDocument('es', 'ya no tengo pilas para nada', 'esperanza');
	manager.addDocument('es', 'Ojalá nunca me toque compartir una foto de ustedes', 'esperanza');
	manager.addDocument('es', 'el estar en linea no me hace sentir tan solo', 'esperanza');
	manager.addDocument('es', 'pero ya estoy perdiendo el miedo', 'esperanza');
	manager.addDocument('es', 'no solo en mi mente', 'esperanza');
	manager.addDocument('es', 'mi madre no hacia nada porque decia que no podia ver a su pareja asi', 'esperanza');
	manager.addDocument('es', 'estuve 3 veces en terapia las cuales nunca termine', 'esperanza');
	//manager.addDocument('es', '', 'esperanza');
	//manager.addDocument('es', '', 'esperanza');
	//manager.addDocument('es', '', 'esperanza');
	//manager.addDocument('es', '', 'esperanza');
	//manager.addDocument('es', '', 'esperanza');
	//manager.addDocument('es', '', 'esperanza');


	//Entrenamos el modelo
	console.log('Training...');
	await manager.train();
	console.log('Trained!');

	//Guardamos el modelo

	//manager.save(modelTag, true);
}

async function updateOcurrences(post) {
	let intentTag = "desesperanza";
	//Se envía a analizar el posts con el modelo
	await classifier.phrasesId(post, intentTag, manager);
}

exports.analyzePosts = async function (postsArray) {
	console.log("***********					 			*****************");
	console.log("***********	DESESPERANZA			 	*****************");
	console.log("***********					 			*****************");
 						

	var keywords = 	[	
						'desesperanza', 'solucion', 'problema', 'luz', 'alternativa', 'desahuciado',
						'luz', 'obscuro', 'oscuro', 'desahuciado', 'esperanza', 'interesa', 'futuro'
					];

	let keywordsExceptions = 	[
									
								];

	//Establecemos los stemms con los que se comparan las utterances
	await classifier.setKeywordsStemms(keywords);

	if(keywordsExceptions.length > 0){
		await classifier.setKeywordsExceptions(keywordsExceptions);
	}

	//Entrenamos el modelo
	await trainnlp(manager);

	//Para este caso ocupamos otros tokens
	/*
	let tokensDel = [';', ':', ',', '?', '¿', '!', '¡', ' y ', ' e ', ' o ', ' u ', ' ni ', ' que '];
	await classifier.setTokensDel(tokensDel);
	*/


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