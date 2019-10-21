//Identificador de disminución de interés o pérdida de placer

const {
	NlpManager
} = require('node-nlp');
const manager = new NlpManager({
	languages: ['es']
});
const fs = require('fs');
const classifier = require('../classifier.js');

let modelTag = './modelA2.nlp';
let minOcurrences = 3;

async function trainnlp(manager) {
	if (fs.existsSync(modelTag)) {
		manager.load(modelTag);
		return;
	}

	//Disminución de interés
	manager.addDocument('es', 'No me interesa', 'perdidaInteres');
	manager.addDocument('es', 'Ya no', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me interesa', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me interesa nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me interesa absolutamente nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me interesa lo que me solía interesar', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me interesa lo que me solía importar', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me interesa nada de lo que me gusta', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me interesa nada de lo que me gustaba', 'perdidaInteres');
	manager.addDocument('es', 'No tengo interes', 'perdidaInteres');
	manager.addDocument('es', 'No tengo interes por nada', 'perdidaInteres');
	manager.addDocument('es', 'No tengo interes de nada', 'perdidaInteres');
	manager.addDocument('es', 'No tengo ningun interes', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo interes', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo interes por nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo interes de nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo ningun interes', 'perdidaInteres');
	manager.addDocument('es', 'Perdí interes', 'perdidaInteres');
	manager.addDocument('es', 'Perdí interes en todo', 'perdidaInteres');
	manager.addDocument('es', 'Perdí interes en las cosas', 'perdidaInteres');
	manager.addDocument('es', 'Perdí el interes', 'perdidaInteres');
	manager.addDocument('es', 'Perdí interes en aquellas cosas que me encantaba hacer', 'perdidaInteres');
	manager.addDocument('es', 'Perdí interes en aquellas cosas' , 'perdidaInteres');
	manager.addDocument('es', 'Perdí el interes por todo', 'perdidaInteres');
	manager.addDocument('es', 'Perdí el interes de todo', 'perdidaInteres');
	manager.addDocument('es', 'Perdi el interes', 'perdidaInteres');
	manager.addDocument('es', 'Perdi el interes', 'perdidaInteres');
	manager.addDocument('es', 'Perdi el interes por todo', 'perdidaInteres');
	manager.addDocument('es', 'Perdi el interes de todo', 'perdidaInteres');
	manager.addDocument('es', 'He perdido el interes', 'perdidaInteres');
	manager.addDocument('es', 'He perdido el interes por todo', 'perdidaInteres');
	manager.addDocument('es', 'He perdido el interes de todo', 'perdidaInteres');
	manager.addDocument('es', 'Lo que antes me interesaba ahora ya no', 'perdidaInteres');
	manager.addDocument('es', 'No me importa', 'perdidaInteres');
	manager.addDocument('es', 'No me importa nada', 'perdidaInteres');
	manager.addDocument('es', 'No me importa absolutamente nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me importa', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me importa nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me importa lo que me solía interesar', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me importa lo que me solía importar', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me importa nada de lo que me gusta', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me importa nada de lo que me gustaba', 'perdidaInteres');
	manager.addDocument('es', 'No tiene importancia', 'perdidaInteres');
	manager.addDocument('es', 'No tiene importancia para mi', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tiene importancia', 'perdidaInteres');
	manager.addDocument('es', 'Perdi el que me importen las cosas', 'perdidaInteres');
	manager.addDocument('es', 'Perdí el que me importen las cosas', 'perdidaInteres');
	manager.addDocument('es', 'Lo que antes me importaba ahora ya no', 'perdidaInteres');
	manager.addDocument('es', 'No me gusta', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me gusta', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me gusta nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me gusta absolutamente nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me gusta lo que me solía gustar', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me gusta lo que me solía importar', 'perdidaInteres');
	manager.addDocument('es', 'Ya no me gusta lo que me solía interesar', 'perdidaInteres');
	manager.addDocument('es', 'No tengo gusto', 'perdidaInteres');
	manager.addDocument('es', 'No tengo gusto por nada', 'perdidaInteres');
	manager.addDocument('es', 'No tengo gusto de nada', 'perdidaInteres');
	manager.addDocument('es', 'No tengo ningun gusto', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo gusto', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo gusto por nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo gusto de nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo ningun gusto', 'perdidaInteres');
	manager.addDocument('es', 'Perdi el gusto', 'perdidaInteres');
	manager.addDocument('es', 'Perdi el gusto', 'perdidaInteres');
	manager.addDocument('es', 'Perdi el interes por todo', 'perdidaInteres');
	manager.addDocument('es', 'Perdi el interes de todo', 'perdidaInteres');
	manager.addDocument('es', 'Perdí el gusto', 'perdidaInteres');
	manager.addDocument('es', 'Perdí el gusto', 'perdidaInteres');
	manager.addDocument('es', 'Perdí el gusto por todo', 'perdidaInteres');
	manager.addDocument('es', 'Perdí el gusto de todo', 'perdidaInteres');
	manager.addDocument('es', 'He perdido el gusto', 'perdidaInteres');
	manager.addDocument('es', 'He perdido el gusto por todo', 'perdidaInteres');
	manager.addDocument('es', 'He perdido el gusto de todo', 'perdidaInteres');
	manager.addDocument('es', 'Lo que antes me gustaba ahora ya no', 'perdidaInteres');
	manager.addDocument('es', 'Pérdida de interes', 'perdidaInteres');
	manager.addDocument('es', 'Pérdida de gusto', 'perdidaInteres');
	manager.addDocument('es', 'Pérdida de importancia', 'perdidaInteres');
	manager.addDocument('es', 'Perdida de interes', 'perdidaInteres');
	manager.addDocument('es', 'Perdida de gusto', 'perdidaInteres');
	manager.addDocument('es', 'Perdida de importancia', 'perdidaInteres');
	manager.addDocument('es', 'Ya nade me llama la atención', 'perdidaInteres');
	manager.addDocument('es', 'No me llama la atención', 'perdidaInteres');
	manager.addDocument('es', 'Nada me llama la atención', 'perdidaInteres');
	manager.addDocument('es', 'No capta mi atención', 'perdidaInteres');
	manager.addDocument('es', 'Dejó de interesarme', 'perdidaInteres');
	manager.addDocument('es', 'Dejó de captar mi atención', 'perdidaInteres');
	manager.addDocument('es', 'Dejó de gustarme', 'perdidaInteres');
	manager.addDocument('es', 'Dejo de interesarme', 'perdidaInteres');
	manager.addDocument('es', 'Dejo de captar mi atencion', 'perdidaInteres');
	manager.addDocument('es', 'Dejo de gustarme', 'perdidaInteres');
	manager.addDocument('es', 'Deje el medicamento', 'perdidaInteres');
	manager.addDocument('es', 'Deje el tratamiento', 'perdidaInteres');
	manager.addDocument('es', 'Deje de jugar videojuegos', 'perdidaInteres');
	manager.addDocument('es', 'Deje de disfrutar la vida', 'perdidaInteres');
	manager.addDocument('es', 'Empieza a dejar de gustarme', 'perdidaInteres');
	manager.addDocument('es', 'Empieza a dejar de interesarme', 'perdidaInteres');
	manager.addDocument('es', 'Empieza a dejar de llamarme la atención', 'perdidaInteres');
	manager.addDocument('es', 'Empezó a dejar de gustarme', 'perdidaInteres');
	manager.addDocument('es', 'Empezó a dejar de interesarme', 'perdidaInteres');
	manager.addDocument('es', 'Empezó a dejar de llamarme la atención', 'perdidaInteres');
	manager.addDocument('es', 'Me es indiferente', 'perdidaInteres');
	manager.addDocument('es', 'Ya me es indiferente', 'perdidaInteres');
	manager.addDocument('es', 'Ahora me es indiferente', 'perdidaInteres');
	manager.addDocument('es', 'Es indiferente', 'perdidaInteres');
	manager.addDocument('es', 'Pasó a ser indiferente', 'perdidaInteres');
	manager.addDocument('es', 'Pasó a no gustarme', 'perdidaInteres');
	manager.addDocument('es', 'Pasó a no llamar mi atención', 'perdidaInteres');
	manager.addDocument('es', 'Pasó a no interesarme', 'perdidaInteres');
	manager.addDocument('es', 'Perdí las ganas', 'perdidaInteres');
	manager.addDocument('es', 'He perdido las ganas', 'perdidaInteres');
	manager.addDocument('es', 'He perdido las ganas de comer', 'perdidaInteres');
	manager.addDocument('es', 'He perdido las ganas de todo', 'perdidaInteres');
	manager.addDocument('es', 'No tengo ganas', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo ganas', 'perdidaInteres');
	manager.addDocument('es', 'No tengo ganas de nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo ganas de nada', 'perdidaInteres');
	manager.addDocument('es', 'No encuentro sentido', 'perdidaInteres');
	manager.addDocument('es', 'No le encuentro sentido', 'perdidaInteres');
	manager.addDocument('es', 'No le encuentro sentido a nada', 'perdidaInteres');
	//manager.addDocument('es', '', 'perdidaInteres');
	//manager.addDocument('es', '', 'perdidaInteres');
	//manager.addDocument('es', '', 'perdidaInteres');
	//manager.addDocument('es', '', 'perdidaInteres');
	//manager.addDocument('es', '', 'perdidaInteres');


	//Pérdida de placer
	manager.addDocument('es', 'Perdí el placer', 'perdidaInteres');
	manager.addDocument('es', 'Perdi el placer', 'perdidaInteres');
	manager.addDocument('es', 'Perdi el placer por las cosas', 'perdidaInteres');
	manager.addDocument('es', 'Perdí el placer por las cosas', 'perdidaInteres');
	manager.addDocument('es', 'He perdido el placer por las cosas', 'perdidaInteres');
	manager.addDocument('es', 'Ya no encuentro placer', 'perdidaInteres');
	manager.addDocument('es', 'Ya no encuentro placer en lo que hago', 'perdidaInteres');
	manager.addDocument('es', 'Ya no encuentro placer en las cosas', 'perdidaInteres');
	manager.addDocument('es', 'Ya no encuentro placer en lo que me gusta', 'perdidaInteres');
	manager.addDocument('es', 'Ya no encuentro placer en lo que me gustaba', 'perdidaInteres');
	manager.addDocument('es', 'Nada me causa placer', 'perdidaInteres');
	manager.addDocument('es', 'Ya nada me causa placer', 'perdidaInteres');
	manager.addDocument('es', 'Ya nada me provoca placer', 'perdidaInteres');
	manager.addDocument('es', 'He perdido el placer', 'perdidaInteres');
	manager.addDocument('es', 'He perdido el placer de las cosas', 'perdidaInteres');
	manager.addDocument('es', 'He perdido el placer de las cosas', 'perdidaInteres');
	manager.addDocument('es', 'He perdido el placer de todo', 'perdidaInteres');
	manager.addDocument('es', 'No tengo placer', 'perdidaInteres');
	manager.addDocument('es', 'No tengo placer por nada', 'perdidaInteres');
	manager.addDocument('es', 'No tengo placer de nada', 'perdidaInteres');
	manager.addDocument('es', 'No tengo ningun placer', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo placer', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo placer por nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo placer de nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no tengo ningun placer', 'perdidaInteres');
	manager.addDocument('es', 'Lo que antes me causaba placer ahora ya no', 'perdidaInteres');
	manager.addDocument('es', 'Lo que antes solía causarme placer ahora ya no', 'perdidaInteres');
	manager.addDocument('es', 'Lo que antes me provocaba placer ahora ya no', 'perdidaInteres');
	manager.addDocument('es', 'Lo que antes solía provocarme placer ahora ya no', 'perdidaInteres');
	manager.addDocument('es', 'Lo que antes me provocaba placer ahora son una cosa más', 'perdidaInteres');
	manager.addDocument('es', 'Las cosas que antes me provocaban placer ahora ya no', 'perdidaInteres');
	manager.addDocument('es', 'Dejó de causarme placer', 'perdidaInteres');
	manager.addDocument('es', 'Dejó de provocarme placer', 'perdidaInteres');
	manager.addDocument('es', 'Pasó a no causarme placer', 'perdidaInteres');
	manager.addDocument('es', 'Pasó a no provocarme placer', 'perdidaInteres');
	manager.addDocument('es', 'Pérdida de placer', 'perdidaInteres');
	manager.addDocument('es', 'No gozo nada', 'perdidaInteres');
	manager.addDocument('es', 'Ya no gozo nada', 'perdidaInteres');
	manager.addDocument('es', 'Nada me causa gozo', 'perdidaInteres');
	manager.addDocument('es', 'Ya nada me causa gozo', 'perdidaInteres');
	manager.addDocument('es', 'Lo que antes gozaba ahora ya no', 'perdidaInteres');
	manager.addDocument('es', 'Lo que antes solo gozar ahora ya no', 'perdidaInteres');
	//manager.addDocument('es', 'Nada me motiva', 'perdidaInteres');
	//manager.addDocument('es', '', 'perdidaInteres');
	//manager.addDocument('es', '', 'perdidaInteres');
	//manager.addDocument('es', '', 'perdidaInteres');
	//manager.addDocument('es', '', 'perdidaInteres');
	//manager.addDocument('es', '', 'perdidaInteres');
	//manager.addDocument('es', '', 'perdidaInteres');

//**********************************************************************************************************

	//No presentan perdida de interes o placer
	manager.addDocument('es', 'Perdí mis llaves', 'sinPerdidaInteres');
	manager.addDocument('es', 'Perdí mi celular', 'sinPerdidaInteres');
	manager.addDocument('es', 'Perdí la cabeza', 'sinPerdidaInteres');
	manager.addDocument('es', 'Perdí la cordura', 'sinPerdidaInteres');
	manager.addDocument('es', 'No tengo dinero', 'sinPerdidaInteres');
	manager.addDocument('es', 'No tengo vergüenza', 'sinPerdidaInteres');
	manager.addDocument('es', 'No tengo otra alternatica', 'sinPerdidaInteres');
	manager.addDocument('es', 'No tengo pruebas, pero tampoco dudas', 'sinPerdidaInteres');
	manager.addDocument('es', 'Ya no tengo tanto coraje como antes', 'sinPerdidaInteres');
	manager.addDocument('es', 'Ya no tengo la tarea que solía tener', 'sinPerdidaInteres');
	manager.addDocument('es', 'Ya no me hablan', 'sinPerdidaInteres');
	manager.addDocument('es', 'Ya no me preguntan sobre mi fiesta', 'sinPerdidaInteres');
	manager.addDocument('es', 'He perdido como diez plumas este año', 'sinPerdidaInteres');
	manager.addDocument('es', 'He perdido a muchas personas que quería', 'sinPerdidaInteres');
	manager.addDocument('es', 'He perdido la partida de smash', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me llama la atención', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me llama mucho la atención ese tema', 'sinPerdidaInteres');
	manager.addDocument('es', 'Eso me llama mucho la atención', 'sinPerdidaInteres');
	manager.addDocument('es', 'Llama bastante mi atención', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me interesa', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me interesa mucho', 'sinPerdidaInteres');
	manager.addDocument('es', 'Tengo interes', 'sinPerdidaInteres');
	manager.addDocument('es', 'Tengo mucho interes', 'sinPerdidaInteres');
	manager.addDocument('es', 'Tengo bastante interes', 'sinPerdidaInteres');
	manager.addDocument('es', 'Tengo interes por todo', 'sinPerdidaInteres');
	manager.addDocument('es', 'Gané interes', 'sinPerdidaInteres');
	manager.addDocument('es', 'Gané interes por ese tema', 'sinPerdidaInteres');
	manager.addDocument('es', 'He ganado interes', 'sinPerdidaInteres');
	manager.addDocument('es', 'He ganado interes por esas cosas', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me importa', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me importa mucho', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me importa lo que digan los demás', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me gusta', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me gusta mucho', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me gusta bastante', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me gusta todo lo que hago', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me llama la atención', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me llama bastante la atención', 'sinPerdidaInteres');
	manager.addDocument('es', 'Me llama la atención jugar hockey', 'sinPerdidaInteres');
	manager.addDocument('es', 'Dejo de llover ya', 'sinPerdidaInteres');
	manager.addDocument('es', 'Dejo mis cosas en mi casa', 'sinPerdidaInteres');
	manager.addDocument('es', 'Dejó a sus hijos', 'sinPerdidaInteres');
	manager.addDocument('es', 'Deja de llorar', 'sinPerdidaInteres');
	manager.addDocument('es', 'Empieza a interesarme', 'sinPerdidaInteres');
	manager.addDocument('es', 'Empieza a gustarme', 'sinPerdidaInteres');
	manager.addDocument('es', 'Empieza a llamarme la atención', 'sinPerdidaInteres');
	manager.addDocument('es', 'Empieza la canción', 'sinPerdidaInteres');
	manager.addDocument('es', 'Empieza una larga jornada de trabajo', 'sinPerdidaInteres');
	manager.addDocument('es', 'Empieza la semana', 'sinPerdidaInteres');
	manager.addDocument('es', 'Cada vez me gusta más', 'sinPerdidaInteres');
	manager.addDocument('es', 'Cada vez me interesa más', 'sinPerdidaInteres');
	manager.addDocument('es', 'Cada vez me llama más la atención', 'sinPerdidaInteres');

	manager.addDocument('es', 'yo no llegue a su casa', 'sinPerdidaInteres');
	manager.addDocument('es', 'no se que esperar', 'sinPerdidaInteres');
	manager.addDocument('es', 'les dejo este video para al menos terminarlo con buen sabor de boca', 'sinPerdidaInteres');
	manager.addDocument('es', 'de hecho no merecían', 'sinPerdidaInteres');
	manager.addDocument('es', 'No cabe duda que el peor enemigo eres tú', 'sinPerdidaInteres');
	manager.addDocument('es', 'No aceptes una forma de vivir que no te llene el alma de gozo', 'sinPerdidaInteres');
	manager.addDocument('es', 'Recuerden: no dejen que este día los haga sentir más solos', 'sinPerdidaInteres');
	manager.addDocument('es', 'Es el dolor más grande y más profundo', 'sinPerdidaInteres');
	manager.addDocument('es', 'Siento que ya no voy a poder más', 'sinPerdidaInteres');
	manager.addDocument('es', 'en el metro', 'sinPerdidaInteres');
	manager.addDocument('es', 'todo el rato estuve preguntándome', 'sinPerdidaInteres');
	manager.addDocument('es', 'en México el whatsapp debería llamarse "quéondapp"', 'sinPerdidaInteres');
	manager.addDocument('es', 'No importa cuando se lea esto ', 'sinPerdidaInteres');
	manager.addDocument('es', 'las princesas no trabajan Huitrón', 'sinPerdidaInteres');

	manager.addDocument('es', 'Qué asco que el Barcelona esté lleno de puro sudamericano que todo reclama', 'sinPerdidaInteres');
	manager.addDocument('es', 'con el poder seductor de la inteligencia', 'sinPerdidaInteres');
	manager.addDocument('es', 'Su sonrisa expresa el sentir de las batallas', 'sinPerdidaInteres');
	manager.addDocument('es', 'Es una sonrisa tranquilizadora', 'sinPerdidaInteres');
	manager.addDocument('es', 'una sonrisa que no necesita de nada para mostrarse', 'sinPerdidaInteres');
	manager.addDocument('es', 'el inagotable brillo de los ojos de esa chica', 'sinPerdidaInteres');
	manager.addDocument('es', 'en el 50 aniversario de nuestra Alma Mater para disfrutar de todo su contenido', 'sinPerdidaInteres');
	manager.addDocument('es', 'De aquí me pareció que el tiempo no es otra cosa que una extensión', 'sinPerdidaInteres');
	manager.addDocument('es', 'No lo sé', 'sinPerdidaInteres');
	manager.addDocument('es', 'maravilla será si no es de la misma alma', 'sinPerdidaInteres');
	manager.addDocument('es', 'Mido el tiempo', 'sinPerdidaInteres');
	manager.addDocument('es', 'mido el futuro', 'sinPerdidaInteres');
	manager.addDocument('es', 'que aún no es', 'sinPerdidaInteres');
	manager.addDocument('es', 'mido el presente', 'sinPerdidaInteres');
	manager.addDocument('es', 'que no se extiende por ningún espacio', 'sinPerdidaInteres');
	manager.addDocument('es', 'mido el pretérito', 'sinPerdidaInteres');
	manager.addDocument('es', 'que ya no existe', 'sinPerdidaInteres');
	manager.addDocument('es', '¿Qué es, pues, lo que mido? ', 'sinPerdidaInteres');
	manager.addDocument('es', 'lo que pasa es que sufro de ansiedad', 'sinPerdidaInteres');
	manager.addDocument('es', 'no sentirme tan mal ya que no quiero estarme sintiendo así', 'sinPerdidaInteres');
	manager.addDocument('es', 'pero no hay día en el cual no piense matarme', 'sinPerdidaInteres');
	manager.addDocument('es', 'no puedo hacer nada sin pesar en lo q pasara si lo hago', 'sinPerdidaInteres');
	manager.addDocument('es', 'en lo q no pasara', 'sinPerdidaInteres');
	manager.addDocument('es', 'en q todos seran mejor si no estas', 'sinPerdidaInteres');
	manager.addDocument('es', 'Siento que no sirvo para nada', 'sinPerdidaInteres');
	manager.addDocument('es', 'Su muerte es culpa mía, ya no lo soporto más', 'sinPerdidaInteres');
	manager.addDocument('es', 'que las cosas buenas a mi no tiene que pasar', 'sinPerdidaInteres');
	manager.addDocument('es', 'no ser entendido me odio', 'sinPerdidaInteres');
	manager.addDocument('es', 'no tengo permitido parecer débil', 'sinPerdidaInteres');
	manager.addDocument('es', 'ya no me dejo ayudar porque a nadie le importo un carajo', 'sinPerdidaInteres');
	manager.addDocument('es', 'ya no tengo a nadie', 'sinPerdidaInteres');
	manager.addDocument('es', 'tengo que fingir que me encuentro estable para que no me tengan lastima', 'sinPerdidaInteres');
	manager.addDocument('es', 'Espero no molestar', 'sinPerdidaInteres');
	manager.addDocument('es', 'quiero ser independiente pero esta maldita ansiedad no me deja', 'sinPerdidaInteres');
	manager.addDocument('es', 'la verdad creo que no me hace falta nada material para ser feliz', 'sinPerdidaInteres');
	manager.addDocument('es', 'me cuesta mucho no derrumbarme delante de él', 'sinPerdidaInteres');
	manager.addDocument('es', 'de verdad no termino de adaptarme', 'sinPerdidaInteres');
	manager.addDocument('es', 'la verdad no es nada grande', 'sinPerdidaInteres');
	manager.addDocument('es', 'no me dejan vivir en paz', 'sinPerdidaInteres');
	//manager.addDocument('es', '', 'sinPerdidaInteres');
	//manager.addDocument('es', '', 'sinPerdidaInteres');
	//manager.addDocument('es', '', 'sinPerdidaInteres');
	//manager.addDocument('es', '', 'sinPerdidaInteres');
	//manager.addDocument('es', '', 'sinPerdidaInteres');
	
	//Entrenamos el modelo
	console.log('Training...');
	await manager.train();
	console.log('Trained!');

	//Guardamos el modelo

	//manager.save(modelTag, true);
}

async function updateOcurrences(post) {
	let intentTag = "perdidaInteres";
	//Se envía a analizar el posts con el modelo
	await classifier.phrasesId(post, intentTag, manager);
}

exports.analyzePosts = async function (postsArray) {
	console.log("***********					 				*****************");
	console.log("***********	PERDIDA DE INTERES O PLACER 	*****************");
	console.log("***********					 				*****************");
 						

	var keywords = 	[	
						'perdida', 'perder', 'interes', 'gusto', 'importancia', 
						'disminuir', 'placer', 'disfrutar', 'gozar', 'gustar', 'indiferente',
						'atención', 'captar', 'tener', 'satisfecho', 'ganas', 'sentido'
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

	//Reset de arrays personalizados para el clasificador

	classifier.resetTokensDel();

	//Obtenemos las ocurrencias
	if (classifier.getOcurrences() >= minOcurrences){
		classifier.resetOcurrences();

		return true;
	}
	classifier.resetOcurrences();
	return false;

}