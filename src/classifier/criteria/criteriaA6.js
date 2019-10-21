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
	manager.addDocument('es', 'Estoy cansadisimo', 'fatiga');
	manager.addDocument('es', 'Estoy cansada', 'fatiga');
	manager.addDocument('es', 'Estoy cansadisima', 'fatiga');
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
	manager.addDocument('es', 'Ando cansadisimo', 'fatiga');
	manager.addDocument('es', 'Ando cansada', 'fatiga');
	manager.addDocument('es', 'Ando cansadisima', 'fatiga');
	manager.addDocument('es', 'Ando muy cansado', 'fatiga');
	manager.addDocument('es', 'Ando muy cansada', 'fatiga');
	manager.addDocument('es', 'Ando algo cansado', 'fatiga');
	manager.addDocument('es', 'Ando algo cansada', 'fatiga');
	manager.addDocument('es', 'Me canso mucho', 'fatiga');
	manager.addDocument('es', 'Cada vez me canso más', 'fatiga');
	manager.addDocument('es', 'Me estoy cansando mucho', 'fatiga');
	manager.addDocument('es', 'Me siento cansado', 'fatiga');
	manager.addDocument('es', 'Me siento cansadisimo', 'fatiga');
	manager.addDocument('es', 'Me siento cansada', 'fatiga');
	manager.addDocument('es', 'Me siento cansadisima', 'fatiga');
	manager.addDocument('es', 'Me siento muy cansado', 'fatiga');
	manager.addDocument('es', 'Me siento muy cansada', 'fatiga');
	manager.addDocument('es', 'Me siento bastante cansado', 'fatiga');
	manager.addDocument('es', 'Me siento bastante cansada', 'fatiga');
	manager.addDocument('es', 'Me siento algo cansado', 'fatiga');
	manager.addDocument('es', 'Me siento algo cansada', 'fatiga');
	manager.addDocument('es', 'Termino cansado', 'fatiga');
	manager.addDocument('es', 'Termino cansadisimo', 'fatiga');
	manager.addDocument('es', 'Termino cansada', 'fatiga');
	manager.addDocument('es', 'Termino cansadisima', 'fatiga');
	manager.addDocument('es', 'Terminé cansado', 'fatiga');
	manager.addDocument('es', 'Terminé cansada', 'fatiga');
	manager.addDocument('es', 'Termino muy cansado', 'fatiga');
	manager.addDocument('es', 'Termino muy cansada', 'fatiga');
	manager.addDocument('es', 'Terminé muy cansado', 'fatiga');
	manager.addDocument('es', 'Terminé muy cansada', 'fatiga');
	manager.addDocument('es', 'Terminé bastante cansado', 'fatiga');
	manager.addDocument('es', 'Terminé bastante cansada', 'fatiga');
	manager.addDocument('es', 'He terminado muy cansado', 'fatiga');
	manager.addDocument('es', 'He terminado algo cansado', 'fatiga');
	manager.addDocument('es', 'He terminado algo cansado estoy días', 'fatiga');
	manager.addDocument('es', 'Acabo cansado', 'fatiga');
	manager.addDocument('es', 'Acabo cansadisimo', 'fatiga');
	manager.addDocument('es', 'Acabo cansada', 'fatiga');
	manager.addDocument('es', 'Acabo cansadisima', 'fatiga');
	manager.addDocument('es', 'Acabé cansado', 'fatiga');
	manager.addDocument('es', 'Acabé cansada', 'fatiga');
	manager.addDocument('es', 'Acabo muy cansado', 'fatiga');
	manager.addDocument('es', 'Acabo muy cansada', 'fatiga');
	manager.addDocument('es', 'Acabé muy cansado', 'fatiga');
	manager.addDocument('es', 'Acabé muy cansada', 'fatiga');
	manager.addDocument('es', 'Acabé bastante cansado', 'fatiga');
	manager.addDocument('es', 'Acabé bastante cansada', 'fatiga');
	manager.addDocument('es', 'He acabado muy cansado', 'fatiga');
	manager.addDocument('es', 'He acabado algo cansado', 'fatiga');
	manager.addDocument('es', 'He acabado algo cansado estoy días', 'fatiga');
	manager.addDocument('es', 'Estoy fatigado', 'fatiga');
	manager.addDocument('es', 'Estoy fatigadisimo', 'fatiga');
	manager.addDocument('es', 'Estoy fatigada', 'fatiga');
	manager.addDocument('es', 'Estoy fatigadisima', 'fatiga');
	manager.addDocument('es', 'Estoy muy fatigado', 'fatiga');
	manager.addDocument('es', 'Estoy muy fatigada', 'fatiga');
	manager.addDocument('es', 'Estoy bastante fatigado', 'fatiga');
	manager.addDocument('es', 'Estoy bastante fatigada', 'fatiga');
	manager.addDocument('es', 'Estoy fatigado todo le tiempo', 'fatiga');
	manager.addDocument('es', 'Estoy fatigada todo le tiempo', 'fatiga');
	manager.addDocument('es', 'He estado fatigado', 'fatiga');
	manager.addDocument('es', 'He estado fatigadisimo', 'fatiga');
	manager.addDocument('es', 'He estado fatigada', 'fatiga');
	manager.addDocument('es', 'He estado fatigadisima', 'fatiga');
	manager.addDocument('es', 'He estado muy fatigado', 'fatiga');
	manager.addDocument('es', 'He estado muy fatigada', 'fatiga');
	manager.addDocument('es', 'Ando fatigado', 'fatiga');
	manager.addDocument('es', 'Ando fatigadisimo', 'fatiga');
	manager.addDocument('es', 'Ando fatigada', 'fatiga');
	manager.addDocument('es', 'Ando fatigadisima', 'fatiga');
	manager.addDocument('es', 'Ando muy fatigado', 'fatiga');
	manager.addDocument('es', 'Ando muy fatigada', 'fatiga');
	manager.addDocument('es', 'Ando algo fatigado', 'fatiga');
	manager.addDocument('es', 'Ando algo fatigada', 'fatiga');
	manager.addDocument('es', 'Me fatigo mucho', 'fatiga');
	manager.addDocument('es', 'Me estoy fatigando mucho', 'fatiga');
	manager.addDocument('es', 'Me siento fatigado', 'fatiga');
	manager.addDocument('es', 'Me siento fatigadisimo', 'fatiga');
	manager.addDocument('es', 'Me siento fatigada', 'fatiga');
	manager.addDocument('es', 'Me siento fatigadisima', 'fatiga');
	manager.addDocument('es', 'Me siento muy fatigado', 'fatiga');
	manager.addDocument('es', 'Me siento muy fatigada', 'fatiga');
	manager.addDocument('es', 'Me siento bastante fatigado', 'fatiga');
	manager.addDocument('es', 'Me siento bastante fatigada', 'fatiga');
	manager.addDocument('es', 'Me siento algo fatigado', 'fatiga');
	manager.addDocument('es', 'Me siento algo fatigada', 'fatiga');
	manager.addDocument('es', 'Termino fatigado', 'fatiga');
	manager.addDocument('es', 'Termino fatigadisimo', 'fatiga');
	manager.addDocument('es', 'Termino fatigada', 'fatiga');
	manager.addDocument('es', 'Termino fatigadisima', 'fatiga');
	manager.addDocument('es', 'Terminé fatigado', 'fatiga');
	manager.addDocument('es', 'Terminé fatigada', 'fatiga');
	manager.addDocument('es', 'Termino muy fatigado', 'fatiga');
	manager.addDocument('es', 'Termino muy fatigada', 'fatiga');
	manager.addDocument('es', 'Terminé muy fatigado', 'fatiga');
	manager.addDocument('es', 'Terminé muy fatigada', 'fatiga');
	manager.addDocument('es', 'Terminé bastante fatigado', 'fatiga');
	manager.addDocument('es', 'Terminé bastante fatigada', 'fatiga');
	manager.addDocument('es', 'He terminado muy fatigado', 'fatiga');
	manager.addDocument('es', 'He terminado algo fatigado', 'fatiga');
	manager.addDocument('es', 'He terminado algo fatigado estoy días', 'fatiga');
	manager.addDocument('es', 'Acabo fatigado', 'fatiga');
	manager.addDocument('es', 'Acabo fatigadisimo', 'fatiga');
	manager.addDocument('es', 'Acabo fatigada', 'fatiga');
	manager.addDocument('es', 'Acabo fatigadisima', 'fatiga');
	manager.addDocument('es', 'Acabé fatigado', 'fatiga');
	manager.addDocument('es', 'Acabé fatigada', 'fatiga');
	manager.addDocument('es', 'Acabo muy fatigado', 'fatiga');
	manager.addDocument('es', 'Acabo muy fatigada', 'fatiga');
	manager.addDocument('es', 'Acabé muy fatigado', 'fatiga');
	manager.addDocument('es', 'Acabé muy fatigada', 'fatiga');
	manager.addDocument('es', 'Acabé bastante fatigado', 'fatiga');
	manager.addDocument('es', 'Acabé bastante fatigada', 'fatiga');
	manager.addDocument('es', 'He acabado muy fatigado', 'fatiga');
	manager.addDocument('es', 'He acabado algo fatigado', 'fatiga');
	manager.addDocument('es', 'He acabado algo fatigado estoy días', 'fatiga');
	manager.addDocument('es', 'Me siento algo agotado', 'fatiga');
	manager.addDocument('es', 'Me siento algo agotada', 'fatiga');
	manager.addDocument('es', 'Estoy agotado', 'fatiga');
	manager.addDocument('es', 'Estoy agotada', 'fatiga');
	manager.addDocument('es', 'Estoy agotadisimo', 'fatiga');
	manager.addDocument('es', 'Estoy agotadisima', 'fatiga');
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
	manager.addDocument('es', 'Ando agotadisimo', 'fatiga');
	manager.addDocument('es', 'Ando agotada', 'fatiga');
	manager.addDocument('es', 'Ando agotadisima', 'fatiga');
	manager.addDocument('es', 'Ando muy agotado', 'fatiga');
	manager.addDocument('es', 'Ando muy agotada', 'fatiga');
	manager.addDocument('es', 'Ando algo agotado', 'fatiga');
	manager.addDocument('es', 'Ando algo agotada', 'fatiga');
	manager.addDocument('es', 'Me agoto mucho', 'fatiga');
	manager.addDocument('es', 'Me estoy agotando mucho', 'fatiga');
	manager.addDocument('es', 'Me siento agotado', 'fatiga');
	manager.addDocument('es', 'Me siento agotadisimo', 'fatiga');
	manager.addDocument('es', 'Me siento agotada', 'fatiga');
	manager.addDocument('es', 'Me siento agotadisima', 'fatiga');
	manager.addDocument('es', 'Me siento muy agotado', 'fatiga');
	manager.addDocument('es', 'Me siento muy agotada', 'fatiga');
	manager.addDocument('es', 'Me siento bastante agotado', 'fatiga');
	manager.addDocument('es', 'Me siento bastante agotada', 'fatiga');
	manager.addDocument('es', 'Me siento algo agotado', 'fatiga');
	manager.addDocument('es', 'Me siento algo agotada', 'fatiga');
	manager.addDocument('es', 'Termino agotado', 'fatiga');
	manager.addDocument('es', 'Termino agotadisimo', 'fatiga');
	manager.addDocument('es', 'Termino agotada', 'fatiga');
	manager.addDocument('es', 'Termino agotadisima', 'fatiga');
	manager.addDocument('es', 'Terminé agotado', 'fatiga');
	manager.addDocument('es', 'Terminé agotada', 'fatiga');
	manager.addDocument('es', 'Termino muy agotado', 'fatiga');
	manager.addDocument('es', 'Termino muy agotada', 'fatiga');
	manager.addDocument('es', 'Terminé muy agotado', 'fatiga');
	manager.addDocument('es', 'Terminé muy agotada', 'fatiga');
	manager.addDocument('es', 'Terminé bastante agotado', 'fatiga');
	manager.addDocument('es', 'Terminé bastante agotada', 'fatiga');
	manager.addDocument('es', 'He terminado muy agotado', 'fatiga');
	manager.addDocument('es', 'He terminado algo agotado', 'fatiga');
	manager.addDocument('es', 'He terminado algo agotado estoy días', 'fatiga');
	manager.addDocument('es', 'Acabo agotado', 'fatiga');
	manager.addDocument('es', 'Acabo agotadisimo', 'fatiga');
	manager.addDocument('es', 'Acabo agotada', 'fatiga');
	manager.addDocument('es', 'Acabo agotadisima', 'fatiga');
	manager.addDocument('es', 'Acabé agotado', 'fatiga');
	manager.addDocument('es', 'Acabé agotada', 'fatiga');
	manager.addDocument('es', 'Acabo muy agotado', 'fatiga');
	manager.addDocument('es', 'Acabo muy agotada', 'fatiga');
	manager.addDocument('es', 'Acabé muy agotado', 'fatiga');
	manager.addDocument('es', 'Acabé muy agotada', 'fatiga');
	manager.addDocument('es', 'Acabé bastante agotado', 'fatiga');
	manager.addDocument('es', 'Acabé bastante agotada', 'fatiga');
	manager.addDocument('es', 'He acabado muy agotado', 'fatiga');
	manager.addDocument('es', 'He acabado algo agotado', 'fatiga');
	manager.addDocument('es', 'He acabado algo agotado estoy días', 'fatiga');
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
	manager.addDocument('es', 'Mi cansancio aumenta', 'fatiga');
	manager.addDocument('es', 'El cansancio aumenta', 'fatiga');
	manager.addDocument('es', 'Mi cansancio incrementa', 'fatiga');
	manager.addDocument('es', 'El cansancio incrementa', 'fatiga');
	manager.addDocument('es', 'Mi fatiga aumenta', 'fatiga');
	manager.addDocument('es', 'La fatiga aumenta', 'fatiga');
	manager.addDocument('es', 'Mi fatiga incrementa', 'fatiga');
	manager.addDocument('es', 'La fatiga incrementa', 'fatiga');
	manager.addDocument('es', 'El agotamiento aumenta', 'fatiga');
	manager.addDocument('es', 'Mi agotamiento aumenta', 'fatiga');
	manager.addDocument('es', 'El agotamiento incrementa', 'fatiga');
	manager.addDocument('es', 'Mi agotamiento incrementa', 'fatiga');

	//Otros
	manager.addDocument('es', 'Estoy modo zombie', 'fatiga');
	manager.addDocument('es', 'Estoy como zombie', 'fatiga');
	manager.addDocument('es', 'Me siento zombie', 'fatiga');
	manager.addDocument('es', 'Me siento como un zombie', 'fatiga');
	manager.addDocument('es', 'Soy un zombie', 'fatiga');
	manager.addDocument('es', 'Soy un zombie', 'fatiga');
	manager.addDocument('es', 'Soy un zombie', 'fatiga');

	

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
	manager.addDocument('es', 'no soporto las ganas de llorar', 'no_fatiga');
	manager.addDocument('es', 'Quiero cambiar', 'no_fatiga');
	manager.addDocument('es', 'Tengo muchas ganas de comer una dona', 'no_fatiga');
	manager.addDocument('es', 'me den ganas de luchar', 'no_fatiga');
	manager.addDocument('es', 'Terminé la tarea', 'no_fatiga');
	manager.addDocument('es', 'Tengo diabetes', 'no_fatiga');
	manager.addDocument('es', 'nada', 'no_fatiga');
	manager.addDocument('es', 'pero no renuncio porque tengo gastos', 'no_fatiga');
	manager.addDocument('es', 'me cuesta mucho no derrumbarme delante de él', 'no_fatiga');
	manager.addDocument('es', 'Acabé mi tarea', 'no_fatiga');
	manager.addDocument('es', 'Acabé con esto', 'no_fatiga');
	manager.addDocument('es', 'Acabo con mi deberes', 'no_fatiga');
	manager.addDocument('es', 'Por fin acabé este videojuego', 'no_fatiga');
	manager.addDocument('es', 'Terminé el trabajo', 'no_fatiga');
	manager.addDocument('es', 'Terminé la carrera', 'no_fatiga');
	manager.addDocument('es', 'Terminé el juego', 'no_fatiga');
	manager.addDocument('es', 'Terminé el partido', 'no_fatiga');
	manager.addDocument('es', 'En unos momentos termino de hacer esto', 'no_fatiga');
	manager.addDocument('es', 'No puedo dormir', 'no_fatiga');
	manager.addDocument('es', 'dormir', 'no_fatiga');
	manager.addDocument('es', 'tengo examen dentro de 3 horas no me se nada', 'no_fatiga');
	manager.addDocument('es', 'es que realmente no se que quiero', 'no_fatiga');
	manager.addDocument('es', 'solo quiero sentir un poco de felicidad en mi', 'no_fatiga');
	manager.addDocument('es', 'no quiero tomar una mala decisión', 'no_fatiga');
	manager.addDocument('es', 'Un suave dolor de cabeza me quiere acompañar durante el resto del día pero ya estoy acostumbrado a eso', 'no_fatiga');
	manager.addDocument('es', 'quiero morir', 'no_fatiga');
	manager.addDocument('es', 'ni siquiera yo mismo sería alguien con quien quiera estar', 'no_fatiga');
	manager.addDocument('es', 'tengo amigos pero aún así me siento vacía sin fuerzas', 'no_fatiga');
	manager.addDocument('es', 'No quiero saber nada de nadie', 'no_fatiga');
	manager.addDocument('es', 'Todo me da miedo últimamente', 'no_fatiga');
	manager.addDocument('es', 'siento que la gente quiere hacerme daño', 'no_fatiga');
	manager.addDocument('es', 'pero no quiero depender de ello', 'no_fatiga');
	manager.addDocument('es', 'sólo quiero sentirme mejor conmigo misma', 'no_fatiga');
	manager.addDocument('es', 'Por eso me llena de rabia que otros tengan algo que yo quiero', 'no_fatiga');
	manager.addDocument('es', 'Pero últimamente tengo más y más ganas de llorar', 'no_fatiga');
	manager.addDocument('es', 'Se me antoja todo ultimamente y no estoy embarazada', 'no_fatiga');
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
						'pereza', 'sueño', 'dormir', 'pérdida', 'pila', 'faltar', 'ponchado', 'agotadisimo',
						'cansadisimo', 'fatigadisimo', 'termine','acabe'
					];

	//Establecemos las palabras que puedan causar ruido
	let keywordsExceptions = ['pero'];
	await classifier.setKeywordsExceptions(keywordsExceptions)

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