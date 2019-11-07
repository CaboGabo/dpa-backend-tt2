//Identificador de pensamientos suicidas
const {
	NlpManager
} = require('node-nlp');
const manager = new NlpManager({
	languages: ['es']
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
	manager.addDocument('es', 'Morirme es la solución a mis problemas', 'p_muerte');
	manager.addDocument('es', 'Decidí acabar con mi vida', 'p_muerte');
	manager.addDocument('es', 'He pensado quitarme la vida', 'p_muerte');
	manager.addDocument('es', 'Decidí quitarme la vida', 'p_muerte');
	manager.addDocument('es', 'Voy a quitarme la vida', 'p_muerte');
	manager.addDocument('es', 'Quiero quitarme la vida', 'p_muerte');
	manager.addDocument('es', 'Voy a terminar con esto de una vez por todas', 'p_muerte');
	manager.addDocument('es', 'Mi vida no vale nada', 'p_muerte');
	manager.addDocument('es', 'Desearía estar muerto', 'p_muerte');
	manager.addDocument('es', 'Desearía estar muerta', 'p_muerte');
	manager.addDocument('es', 'Desearía no haber nacido', 'p_muerte');
	manager.addDocument('es', 'Me pienso hacer daño', 'p_muerte');
	manager.addDocument('es', 'Me despido de este mundo', 'p_muerte');
	manager.addDocument('es', 'Quiero irme de este mundo', 'p_muerte');
	manager.addDocument('es', 'Me preocupa la muerte', 'p_muerte');
	manager.addDocument('es', 'He perdido la esperanza', 'p_muerte');
	manager.addDocument('es', 'Estoy a punto de cometer un acto suicida', 'p_muerte');
	manager.addDocument('es', 'Solo veo obscuridad', 'p_muerte');
	manager.addDocument('es', 'La única solución es la muerte', 'p_muerte');
	manager.addDocument('es', 'La solución a mis problemas es acabar con mi vida', 'p_muerte');
	manager.addDocument('es', 'Ya quiero desaparecer de la tierra', 'p_muerte');
	manager.addDocument('es', 'No quiero vivir un día más', 'p_muerte');
	manager.addDocument('es', 'Solo quiero morir', 'p_muerte');
	manager.addDocument('es', 'Pienso en matarme constantemente', 'p_muerte');
	manager.addDocument('es', 'Tengo intenciones de matarme', 'p_muerte');
	manager.addDocument('es', 'Voy a matarme uno de estos días', 'p_muerte');
	manager.addDocument('es', 'Me voy a suicidar', 'p_muerte');
	manager.addDocument('es', 'no hay día en el cual no piense matarme', 'p_muerte');
	manager.addDocument('es', 'Solo quiero morir y descansar en paz', 'p_muerte');
	manager.addDocument('es', 'Siento que ya no voy a poder más', 'p_muerte');
	manager.addDocument('es', 'Dejar de existir', 'p_muerte');
	manager.addDocument('es', 'Desería dejar de existir', 'p_muerte');
	manager.addDocument('es', 'Deseo dejar de existir', 'p_muerte');
	manager.addDocument('es', 'Quisiera dejar de existir', 'p_muerte');
	manager.addDocument('es', 'Quiero dejar de existir', 'p_muerte');
	manager.addDocument('es', 'elegir dejar de existir', 'p_muerte');
	manager.addDocument('es', 'decidir dejar de existir', 'p_muerte');
	manager.addDocument('es', 'elegir el momento para dejar de existir', 'p_muerte');
	manager.addDocument('es', 'Le pido a dios que me lleve', 'p_muerte');
	manager.addDocument('es', 'Llevame dios', 'p_muerte');
	manager.addDocument('es', 'Necesito irme de este sufrimiento', 'p_muerte');
	manager.addDocument('es', 'Necesito irme de este mundo', 'p_muerte');
	manager.addDocument('es', 'Necesito morir', 'p_muerte');
	manager.addDocument('es', 'Necesito dejar de existir', 'p_muerte');
	manager.addDocument('es', 'Querer desaparecer', 'p_muerte');
	manager.addDocument('es', 'Quiero desaparecer', 'p_muerte');
	manager.addDocument('es', 'Quisiera desaparecer', 'p_muerte');
	manager.addDocument('es', 'A veces me odio hasta el punto de querer desaparecer', 'p_muerte');
	manager.addDocument('es', 'Mi vida terminará', 'p_muerte');
	manager.addDocument('es', 'Mi vida terminará pronto', 'p_muerte');
	manager.addDocument('es', 'Quiero que mi vida termine pronto', 'p_muerte');
	manager.addDocument('es', 'Quisiera que mi vida termine pronto', 'p_muerte');
	manager.addDocument('es', 'Siento que mi vida terminará pronto', 'p_muerte');
	//manager.addDocument('es', '', 'p_muerte');
	//manager.addDocument('es', '', 'p_muerte');
	//manager.addDocument('es', '', 'p_muerte');
	//manager.addDocument('es', '', 'p_muerte');

//**********************************************************************************************************


	manager.addDocument('es', 'Vivir es de lo mejor que hay', 'p_vida');
	manager.addDocument('es', 'Quiero habla con alguien', 'p_vida');
	manager.addDocument('es', 'Estoy en una dificil situación', 'p_vida');
	manager.addDocument('es', 'Me haré muestras de sangre y otro tipo de exámenes', 'p_vida');
	manager.addDocument('es', 'Francamente no me hallo mucho en el entorno y el ambiente.', 'p_vida');
	manager.addDocument('es', 'Ayer tenía ganas de jugar', 'p_vida');
	manager.addDocument('es', 'La vida es lo más importante que tenemos', 'p_vida');
	manager.addDocument('es', 'Quiero llegar a ser viejito', 'p_vida');
	manager.addDocument('es', 'Morirse nunca es la solución', 'p_vida');
	manager.addDocument('es', 'Decidí acabar con mis estudios', 'p_vida');
	manager.addDocument('es', 'Voy a terminar mi tarea en estos días', 'p_vida');
	manager.addDocument('es', 'Siempre le he tenido miedo a la obscuridad', 'p_vida');
	manager.addDocument('es', 'Quiero irme de mi casa', 'p_vida');
	manager.addDocument('es', 'Ayer perdí mi cartera, espero recuperarla', 'p_vida');
	manager.addDocument('es', 'No importan los problemas, la vida es bella', 'p_vida');
	manager.addDocument('es', 'No quiero ir a la escuela', 'p_vida');
	manager.addDocument('es', 'Ayer me despedí rápido de mi amigo', 'p_vida');
	manager.addDocument('es', 'Aunque la vida sea dificil, hay que seguir luchando', 'p_vida');
	manager.addDocument('es', 'Hay que ir siempre para adelante', 'p_vida');
	manager.addDocument('es', 'No me gustan los vegetales', 'p_vida');
	manager.addDocument('es', 'No me agrada nada ese tipo', 'p_vida');
	manager.addDocument('es', 'La violencia la sufrimos todos', 'p_vida');
	manager.addDocument('es', 'el estar en linea no me hace sentir tan solo', 'p_vida');
	manager.addDocument('es', 'No me considero perfeccionista', 'p_vida');
	manager.addDocument('es', 'pero todo me afecta', 'p_vida');
	manager.addDocument('es', 'empece a sentir esto desde el año pasado', 'p_vida');
	manager.addDocument('es', 'cambiar de personalidad', 'p_vida');
	manager.addDocument('es', 'ODIO hacer squats', 'p_vida');
	manager.addDocument('es', 'les dejo este video para al menos terminarlo con buen sabor de boca', 'p_vida');
	manager.addDocument('es', 'pensar', 'p_vida');
	manager.addDocument('es', 'Hoy fui a hacerme', 'p_vida');
	manager.addDocument('es', 'una vez más', 'p_vida');
	manager.addDocument('es', 'un test de VIH', 'p_vida');
	manager.addDocument('es', 'paz', 'p_vida');
	manager.addDocument('es', 'Debemos pagar el precio de intentar conseguir la vida que queremos', 'p_vida');
	manager.addDocument('es', 'estaban igual de solos ayer', 'p_vida');
	manager.addDocument('es', 'estarán igual de solos mañana', 'p_vida');
	manager.addDocument('es', 'Es el dolor más grande y más profundo', 'p_vida');
	manager.addDocument('es', 'se piden por Internet', 'p_vida');
	manager.addDocument('es', 'solo de su carisma ', 'p_vida');
	manager.addDocument('es', 'en el 50 aniversario de nuestra Alma Mater para disfrutar de todo su contenido', 'p_vida');
	manager.addDocument('es', 'como: “Este tiempo es más largo que aquel otro”', 'p_vida');
	manager.addDocument('es', 'Mido el tiempo', 'p_vida');
	manager.addDocument('es', 'mido el futuro', 'p_vida');
	manager.addDocument('es', 'mido el presente', 'p_vida');
	manager.addDocument('es', 'mido el pretérito', 'p_vida');
	manager.addDocument('es', 'a ustedes una mía buscándome', 'p_vida');
	manager.addDocument('es', 'Si se ven bien pendejos/pendejas defendiendo algo sólo por llevar la contraria', 'p_vida');
	manager.addDocument('es', 'solo quería pedirles algunos consejos', 'p_vida');
	manager.addDocument('es', 'este dolor de cabeza me anuncia un próximo pesar', 'p_vida');
	manager.addDocument('es', 'mi madre por problemas de lumbociatica', 'p_vida');
	manager.addDocument('es', 'vivo sola', 'p_vida');
	manager.addDocument('es', 'estoy en un punto donde tomo', 'p_vida');
	manager.addDocument('es', 'poco a poco estoy saliendo de esto', 'p_vida');
	manager.addDocument('es', 'Un suave dolor de cabeza me quiere acompañar durante el resto del día pero ya estoy acostumbrado a eso', 'p_vida');
	manager.addDocument('es', 'ver el mundo diferente', 'p_vida');
	manager.addDocument('es', 'fortaleza amén explica lo que Dios ha hecho en ti hoy amén dale gracias por un día más de vida amén', 'p_vida');
	manager.addDocument('es', 'Tuve un entrenamiento de vida', 'p_vida');
	manager.addDocument('es', 'La vida lo es todo', 'p_vida');
	manager.addDocument('es', 'Este ultimo año he tenido muchisima hambre', 'p_vida');
	manager.addDocument('es', 'Me pregunto si existe una Enkarni de verdad', 'p_vida');
	manager.addDocument('es', 'Me siento fatal he estado muy mal estos dias ayer discuti con mis hijos creo que ya se aburrieron de mi', 'p_vida');
	manager.addDocument('es', 'Ya me quede sin dinero', 'p_vida');
	manager.addDocument('es', 'quiero contar que aparentemente no tengo problemas de tipo economico', 'p_vida');
	manager.addDocument('es', 'He encontrado este foro', 'p_vida');
	manager.addDocument('es', 'a mi me hizo mucho daño su comportamiento quería estar con ella pero ella no quería nada de nadie', 'p_vida');
	manager.addDocument('es', 'no quiero hacerles daño', 'p_vida');
	manager.addDocument('es', 'este trabajo me ha creado tanta ansiedad', 'p_vida');
	manager.addDocument('es', 'No poder dormir me está matando', 'p_vida');
	manager.addDocument('es', 'He perdido la ilusión', 'p_vida');
	manager.addDocument('es', 'nada me motiva', 'p_vida');
	manager.addDocument('es', 'también existen personas que solo son pasajeros en tu vida', 'p_vida');
	manager.addDocument('es', 'Un excelente curso si pueden llevar también Cálculo IV con él', 'p_vida');
	manager.addDocument('es', 'comienzas a disfrutar la vida', 'p_vida');
	manager.addDocument('es', 'de día', 'p_vida');
	manager.addDocument('es', 'No siento deseos ni siquiera de levantarme', 'p_vida');
	manager.addDocument('es', 'eso no me deja concentrarme', 'p_vida');
	manager.addDocument('es', 'Por Dios, me costó un mundo levantarme hoy', 'p_vida');
	manager.addDocument('es', 'Dios no existe', 'p_vida');
	manager.addDocument('es', 'Dios es bueno', 'p_vida');
	manager.addDocument('es', 'más cuando tienes estos trastornos porque Dios de habrá enseñado conmigo no entiendo que hice mal para merecerme esto a la final el tiene sus designios a sido tanto mi pensamiento de dormir', 'p_vida');
	manager.addDocument('es', 'las cosas que antes me provocaban placer ahora son una más', 'p_vida');
	manager.addDocument('es', 'Cada día caigo más profundo en el pozo', 'p_vida');
	manager.addDocument('es', 'recibi atencion psicologica mas sin embargo no siento alguna mejoria', 'p_vida');
	manager.addDocument('es', 'cada día engordo más', 'p_vida');
	manager.addDocument('es', 'factores de mi depresión pueden haber muchos pero que mas da mencionarlos', 'p_vida');
	manager.addDocument('es', 'te das cuenta que dejaste un desastre en tu vida autocompadeciendote', 'p_vida');
	manager.addDocument('es', 'como si la vida misma fuera otra monotonía más por hacer', 'p_vida');
	manager.addDocument('es', 'a veces es mejor solo dejarse llevar', 'p_vida');
	manager.addDocument('es', 'Quiero estar bien', 'p_vida');
	manager.addDocument('es', 'siento que la angustia no me está dejando respirar', 'p_vida');
	manager.addDocument('es', 'Deja de llorar', 'p_vida');
	manager.addDocument('es', 'El culpable de todo esto soy yo', 'p_vida');
	manager.addDocument('es', 'Tome un poco de mas por la depre', 'p_vida');
	manager.addDocument('es', 'A veces pienso en que debería ir mejor con un psiquiatra', 'p_vida');
	manager.addDocument('es', 'En este momento me siento perdida', 'p_vida');
	manager.addDocument('es', 'Debo de admitir que mi vida no he vivido alguna dificultad', 'p_vida');
	manager.addDocument('es', 'no me dejan vivir en paz', 'p_vida');
	manager.addDocument('es', 'más triste', 'p_vida');
	manager.addDocument('es', 'Actualmente me encuentro en uno de los peores períodos de mi vida', 'p_vida');
	manager.addDocument('es', 'Supongo que el adulto cínico no ha logrado matar del todo al niño dentro de mi porque esto me hizo muy feliz', 'p_vida');
	manager.addDocument('es', 'Trabajar, comer, relacionarse hacer hijos y morir', 'p_vida');
	manager.addDocument('es', 'No quiero saber nada de nadie', 'p_vida');
	manager.addDocument('es', 'espero poder usarlo', 'p_vida');
	manager.addDocument('es', 'Y hoy voy para abajo', 'p_vida');
	manager.addDocument('es', 'ya no tengo pilas para nada', 'p_vida');
	manager.addDocument('es', 'ya no me dejo ayudar porque a nadie le importo un carajo', 'p_vida');
	manager.addDocument('es', 'que tampoco vale la pena seguir me esta matando', 'p_vida');
	manager.addDocument('es', 'ahora que pienso', 'p_vida');
	manager.addDocument('es', 'No espero nada de la vida ', 'p_vida');
	manager.addDocument('es', 'Me he sentido mal ultimamente', 'p_vida');
	manager.addDocument('es', 'Soy la persona más inutil que existe', 'p_vida');
	//manager.addDocument('es', '', 'p_vida');
	//manager.addDocument('es', '', 'p_vida');
	//manager.addDocument('es', '', 'p_vida');
	//manager.addDocument('es', '', 'p_vida');
	//manager.addDocument('es', '', 'p_vida');

	//Entrenamos el modelo
	console.log('Training...');
	await manager.train();
	console.log('Trained!');

	//Guardamos el modelo

	//manager.save(modelTag, true);
}


async function updateOcurrences(post) {
	let intentTag = "p_muerte";
	//Se envía a analizar el posts con el modelo
	await classifier.phrasesId(post, intentTag, manager);
}

exports.analyzePosts = async function (postsArray) {
	console.log("***********					 	*****************");
	console.log("***********	SUICIDIO		 	*****************");
	console.log("***********					 	*****************");
	//Poner al principio del arreglo las palabras clave más significativas
	var keywords = ['suicidio','muerte','miedo','morir','daño','tumba',
					'mutilar','cortar','vivir','funeral','acabar','terminar',
					'fallecer','dormir','luz','obscuridad','existir'];

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