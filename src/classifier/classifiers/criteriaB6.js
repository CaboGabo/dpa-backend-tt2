const {
    LogisticRegressionNLU
} = require('node-nlp');


async function train() {
    const classifier = new LogisticRegressionNLU({
        language: 'es'
    });
    classifier.add('No tengo esperanza', 'desesperanza');
    classifier.add('No tengo esperanzas', 'desesperanza');
    classifier.add('No tengo esperanza de nada', 'desesperanza');
    classifier.add('No tengo esperanzas de nada', 'desesperanza');
    classifier.add('Ya no tengo esperanza', 'desesperanza');
    classifier.add('Ya no tengo esperanzas', 'desesperanza');
    classifier.add('Ya no tengo esperanza de nada', 'desesperanza');
    classifier.add('Ya no tengo esperanzas de nada', 'desesperanza');
    classifier.add('Estoy desesperanzado', 'desesperanza');
    classifier.add('Estoy desesperanzada', 'desesperanza');
    classifier.add('Estoy desahuciado', 'desesperanza');
    classifier.add('Estoy desahuciada', 'desesperanza');
    classifier.add('Me encuentro desahuciado', 'desesperanza');
    classifier.add('Me encuentro desahuciada', 'desesperanza');
    classifier.add('Pierdo la esperanza', 'desesperanza');
    classifier.add('He perdido la esperanza', 'desesperanza');
    classifier.add('Perdí la esperanza', 'desesperanza');
    classifier.add('Pierdo la esperanza de todo', 'desesperanza');
    classifier.add('He perdido la esperanza de que me vaya mejor', 'desesperanza');
    classifier.add('Perdí la esperanza en mi familia', 'desesperanza');
    classifier.add('No hay nada que esperar', 'desesperanza');
    classifier.add('Sin algo que esperar', 'desesperanza');
    classifier.add('Sin mucho que esperar', 'desesperanza');


    //No encontrar alternativas de solución ante una determinada situación
    classifier.add('No hay solución', 'desesperanza');
    classifier.add('No hay una solución', 'desesperanza');
    classifier.add('No hay alguna solución', 'desesperanza');
    classifier.add('No hay solución a mis problemas', 'desesperanza');
    classifier.add('No hay una solución a mis problemas', 'desesperanza');
    classifier.add('No hay alguna solución a mis problemas', 'desesperanza');
    classifier.add('No encuentro solución', 'desesperanza');
    classifier.add('No encuentro una solución', 'desesperanza');
    classifier.add('No encuentro alguna solución', 'desesperanza');
    classifier.add('No encuentro solución a mis problemas', 'desesperanza');
    classifier.add('No encuentro una solución a mis problemas', 'desesperanza');
    classifier.add('No encuentro alguna solución a mis problemas', 'desesperanza');
    classifier.add('No existe solución', 'desesperanza');
    classifier.add('No existe una solución', 'desesperanza');
    classifier.add('No existe ninguna solución', 'desesperanza');
    classifier.add('No existe solución alguna', 'desesperanza');
    classifier.add('No veo ninguna solución', 'desesperanza');
    classifier.add('No veo solución alguna', 'desesperanza');
    classifier.add('No veo alguna solución', 'desesperanza');
    classifier.add('No veía ninguna solución', 'desesperanza');
    classifier.add('No veía solución alguna', 'desesperanza');
    classifier.add('No veía alguna solución', 'desesperanza');
    classifier.add('No vi ninguna solución', 'desesperanza');
    classifier.add('No he visto solución alguna', 'desesperanza');
    classifier.add('No vi alguna solución', 'desesperanza');
    classifier.add('No he visto alguna solución', 'desesperanza');
    classifier.add('No hay alternativa', 'desesperanza');
    classifier.add('No hay alternativas', 'desesperanza');
    classifier.add('No hay otra alternativa', 'desesperanza');
    classifier.add('No hay otras alternativas', 'desesperanza');
    classifier.add('No hay alternativas de solución', 'desesperanza');
    classifier.add('No hay una alternativa de solución', 'desesperanza');
    classifier.add('No hay alternativas alguna de solución', 'desesperanza');
    classifier.add('No hay alternativas de solución a mis problemas', 'desesperanza');
    classifier.add('No hay una alternativa de solución a mis problemas', 'desesperanza');
    classifier.add('No hay alguna alternativa de solución a mis problemas', 'desesperanza');
    classifier.add('No hay alternativas de solución ante esto', 'desesperanza');
    classifier.add('No hay una alternativa de solución ante esta situación', 'desesperanza');
    classifier.add('No hay alternativa alguna de solución ante mis problemas', 'desesperanza');
    classifier.add('No encuentro alternativa de solución', 'desesperanza');
    classifier.add('No encuentro una alternativa de solución', 'desesperanza');
    classifier.add('No encuentro alguna alternativa de solución', 'desesperanza');
    classifier.add('No encuentro alternativa de solución a mis problemas', 'desesperanza');
    classifier.add('No encuentro una alternativa de solución a mis problemas', 'desesperanza');
    classifier.add('No encuentro alguna alternativa de solución a mis problemas', 'desesperanza');
    classifier.add('No encuentro alternativa de solución ante esta situación', 'desesperanza');
    classifier.add('No encuentro una alternativa de solución al hecho de su muerte', 'desesperanza');
    classifier.add('No encuentro alguna alternativa de solución ante esto', 'desesperanza');
    classifier.add('No he encontrado alternativa de solución', 'desesperanza');
    classifier.add('No he encontrado una alternativa de solución', 'desesperanza');
    classifier.add('No he encontrado alguna alternativa de solución', 'desesperanza');
    classifier.add('No he encontrado alternativa de solución a mis problemas', 'desesperanza');
    classifier.add('No encontré una alternativa de solución a mis problemas', 'desesperanza');
    classifier.add('No encontré alguna alternativa de solución a mis problemas', 'desesperanza');
    classifier.add('No encontré alternativa de solución ante esta situación', 'desesperanza');
    classifier.add('No encontré una alternativa de solución al hecho de su muerte', 'desesperanza');
    classifier.add('No encontré alguna alternativa de solución ante esto', 'desesperanza');
    classifier.add('No existe alternativa de solución', 'desesperanza');
    classifier.add('No existe una alternativa de solución', 'desesperanza');
    classifier.add('No existe ninguna alternativa de solución', 'desesperanza');
    classifier.add('No veo ninguna alternativa de solución', 'desesperanza');
    classifier.add('No veo alternativa de solución alguna', 'desesperanza');
    classifier.add('No veo alguna alternativa de solución', 'desesperanza');
    classifier.add('No veo la luz', 'desesperanza');
    classifier.add('No veo la luz al final del tunel', 'desesperanza');
    classifier.add('Todo lo veo obscuro', 'desesperanza');
    classifier.add('Todo lo veo oscuro', 'desesperanza');
    classifier.add('No veo salida', 'desesperanza');
    classifier.add('No veo la salida', 'desesperanza');
    classifier.add('No veo una salida', 'desesperanza');
    classifier.add('No encuentro salida', 'desesperanza');
    classifier.add('No encuentro la salida', 'desesperanza');
    classifier.add('No encuentro una salida', 'desesperanza');
    classifier.add('No encuentro salida a mi problemas', 'desesperanza');
    classifier.add('No encuentro la salida de esto', 'desesperanza');
    classifier.add('No encuentro la salida de mis problemas', 'desesperanza');
    classifier.add('No encuentro una salida a todo esto', 'desesperanza');
    classifier.add('Ya todo está perdido', 'desesperanza');
    classifier.add('Ya no hay nada que hacer', 'desesperanza');
    classifier.add('No puedo más', 'desesperanza');

    //No tener expectativas de futuro 
    classifier.add('No tengo expectativas', 'desesperanza');
    classifier.add('Ya no tengo expectativas', 'desesperanza');
    classifier.add('No tengo expectativas de nada', 'desesperanza');
    classifier.add('Ya no tengo expectativas de nada', 'desesperanza');
    classifier.add('No tengo expectativas del futuro', 'desesperanza');
    classifier.add('Ya no tengo expectativas del futuro', 'desesperanza');

    classifier.add('No me importa el futuro', 'desesperanza');
    classifier.add('No me importa mi futuro', 'desesperanza');
    classifier.add('No me importa lo que vaya a pasar', 'desesperanza');
    classifier.add('No me importa lo que me vaya a pasar', 'desesperanza');
    classifier.add('Ya no me importa el futuro', 'desesperanza');
    classifier.add('Ya no me importa mi futuro', 'desesperanza');
    classifier.add('Ya no me importa lo que vaya a pasar', 'desesperanza');
    classifier.add('Ya no me importa lo que me vaya a pasar', 'desesperanza');

    classifier.add('No me interesa el futuro', 'desesperanza');
    classifier.add('No me interesa mi futuro', 'desesperanza');
    classifier.add('No me interesa lo que vaya a pasar', 'desesperanza');
    classifier.add('No me interesa lo que me vaya a pasar', 'desesperanza');
    classifier.add('Ya no me interesa el futuro', 'desesperanza');
    classifier.add('Ya no me interesa mi futuro', 'desesperanza');
    classifier.add('Ya no me interesa lo que vaya a pasar', 'desesperanza');
    classifier.add('Ya no me interesa lo que me vaya a pasar', 'desesperanza');

    classifier.add('No espero nada', 'desesperanza');
    classifier.add('No espero nada de la vida', 'desesperanza');
    classifier.add('No espero nada del futuro', 'desesperanza');
    classifier.add('No espero nada de mi futuro', 'desesperanza');
    classifier.add('No espero nada de nadie', 'desesperanza');
    classifier.add('Ya no espero nada', 'desesperanza');
    classifier.add('Ya no espero nada de la vida', 'desesperanza');
    classifier.add('Ya no espero nada del futuro', 'desesperanza');
    classifier.add('Ya no espero nada de mi futuro', 'desesperanza');
    classifier.add('Ya no espero nada de nadie', 'desesperanza');

    classifier.add('El futuro sin sentido', 'desesperanza');
    classifier.add('El futuro no tiene sentido', 'desesperanza');

    classifier.add('talvez se la ultima ya que no puedo más con esta agonía', 'desesperanza');
    classifier.add('No lo voy a lograr', 'desesperanza');
    classifier.add('No le encuentro ya sentido a nada', 'desesperanza');
    classifier.add('Nada tiene solución', 'desesperanza');
    classifier.add('no tengo esperanza', 'desesperanza');
    classifier.add('no ninguna esperanza', 'desesperanza');
    classifier.add('no tengo esperanza alguna de nada', 'desesperanza');
    classifier.add('no tengo esperanza alguna de la vida', 'desesperanza');
    classifier.add('no tengo esperanza alguna de que su situación mejore', 'desesperanza');
    classifier.add('El futuro sin sentido', 'desesperanza');
    classifier.add('ya no voy a poder más', 'desesperanza');
    classifier.add('Todo siempre será peor', 'desesperanza');
    classifier.add('Esto solo empeorará', 'desesperanza');
    classifier.add('Las cosas solo van de mal en peor', 'desesperanza');
    classifier.add('Pienso que nunca pasará', 'desesperanza');
    classifier.add('Nunca pasará', 'desesperanza');
    classifier.add('Siento que estoy perdiendo la batalla', 'desesperanza');
    classifier.add('No vale la pena seguir', 'desesperanza');
    classifier.add('Tampoco vale la pena seguir', 'desesperanza');


    //***************************************************************************************************************************************
    //Frases que no contienen la etiqueta
    classifier.add('Llevo esperando mucho tiempo', 'esperanza');
    classifier.add('Espero mucho de las personas', 'esperanza');
    classifier.add('Espero que no pase nada malo', 'esperanza');
    classifier.add('Esperando a que me conteste', 'esperanza');
    classifier.add('La esperanza es lo último que muere', 'esperanza');
    classifier.add('Arriba la esperanza abuelita', 'esperanza');
    classifier.add('Ya no me gusta salir a jugar', 'esperanza');
    classifier.add('Ya no me gusta escribir', 'esperanza');
    classifier.add('Ya no me interesa que digan los demás de mi', 'esperanza');
    classifier.add('Ya no me interesa ese género musical', 'esperanza');
    classifier.add('Ya no me interesa esa persona', 'esperanza');
    classifier.add('El interes tiene pies', 'esperanza');
    classifier.add('La tasa de interes está muy alta', 'esperanza');
    classifier.add('Compré una pantalla a meses sin intereses', 'esperanza');
    classifier.add('Me interesa investigar más sobre el tema', 'esperanza');
    classifier.add('Tengo interes en jugar hockey sobre hielo', 'esperanza');
    classifier.add('En un futuro lo entenderas', 'esperanza');
    classifier.add('Fui a que me leyeran el futuro', 'esperanza');
    classifier.add('La pelicula de la familia del futuro es de mis favoritas', 'esperanza');
    classifier.add('El futuro es hoy viejo', 'esperanza');
    classifier.add('Viendo hacia futuro me parece buena idea', 'esperanza');
    classifier.add('Confio en que me va a ir mejor en el futuro', 'esperanza');
    classifier.add('Ya no me importa que se burlen de mi', 'esperanza');
    classifier.add('Ya no me importa lo que digan de mi', 'esperanza');
    classifier.add('Me importan mis familiares', 'esperanza');
    classifier.add('Me importan mis calificaciones', 'esperanza');
    classifier.add('Me importan que será de mi en un futuro', 'esperanza');
    classifier.add('Me importa mis familia', 'esperanza');
    classifier.add('Ya termine toda mi tarea', 'esperanza');
    classifier.add('Ya termine toda mi trabajo', 'esperanza');
    classifier.add('No encuentro mis llaves', 'esperanza');
    classifier.add('No encuentro donde dejé mi cartera', 'esperanza');
    classifier.add('No encuentro mi playera favorita', 'esperanza');
    classifier.add('No encuentro como mejorar este clasificador', 'esperanza');
    classifier.add('Hay mucha luz', 'esperanza');
    classifier.add('Este día estuvo muy obscuro', 'esperanza');
    classifier.add('Este día estuvo muy oscuro', 'esperanza');
    classifier.add('Existen alternativas', 'esperanza');
    classifier.add('Existen alternativas de solución', 'esperanza');
    classifier.add('Existen muchas alternativas', 'esperanza');
    classifier.add('Existen otras alternativas', 'esperanza');
    classifier.add('Una alternativa es hacer lo que dice mi madre', 'esperanza');
    classifier.add('Otra alternativa es guiarme por el corazón', 'esperanza');
    classifier.add('Esa es la solución', 'esperanza');
    classifier.add('Hay solución', 'esperanza');
    classifier.add('Hay una solución', 'esperanza');
    classifier.add('Hay alguna solución', 'esperanza');
    classifier.add('Hay solución a mis problemas', 'esperanza');
    classifier.add('Hay muchas soluciones a mis problemas', 'esperanza');
    classifier.add('Tiene solución', 'esperanza');
    classifier.add('Tiene una solución', 'esperanza');
    classifier.add('Tiene alguna solución', 'esperanza');
    classifier.add('Tengo solución a mis problemas', 'esperanza');
    classifier.add('Tengo muchas soluciones a mis problemas', 'esperanza');
    classifier.add('Encontré al solución', 'esperanza');
    classifier.add('Al fin encontré al solución', 'esperanza');
    classifier.add('Existe solución', 'esperanza');
    classifier.add('Existe una solución', 'esperanza');
    classifier.add('Existen muchas soluciones', 'esperanza');
    classifier.add('Hay alternativa', 'esperanza');
    classifier.add('Hay otra alternativa', 'esperanza');
    classifier.add('Hay alternativas', 'esperanza');
    classifier.add('Hay otras alternativas', 'esperanza');
    classifier.add('Hay alternativa de solución', 'esperanza');
    classifier.add('Hay otra alternativa de solución', 'esperanza');
    classifier.add('Hay alternativas de solución', 'esperanza');
    classifier.add('Hay otras alternativas de solución', 'esperanza');
    classifier.add('Tengo expectativas', 'esperanza');
    classifier.add('Tengo expectativas', 'esperanza');
    classifier.add('Tengo muchas expectativas', 'esperanza');
    classifier.add('Tengo muchas expectativas de la gente', 'esperanza');
    classifier.add('Tengo muchas expectativas de este proyecto', 'esperanza');
    classifier.add('Tengo muchas expectativas de la vida', 'esperanza');
    classifier.add('Tengo expectativas del futuro', 'esperanza');
    classifier.add('Tengo muchas expectativas del futuro', 'esperanza');
    classifier.add('Que me irá a pasar en el futuro', 'esperanza');
    classifier.add('Mi futuro pinta bien', 'esperanza');
    classifier.add('no me he mantenido estable en el animo', 'esperanza');
    classifier.add('por algunas cosas que no suelo bien', 'esperanza');
    classifier.add('actualmente estoy a punto de ingresar a la universidad', 'esperanza');
    classifier.add('pero no hay día en el cual no piense matarme', 'esperanza');
    classifier.add('me siento fracasada en todo no puedo dormir por las noches', 'esperanza');
    classifier.add('pensar en no querer vivir', 'esperanza');
    classifier.add('aunque la gente siempre intenta decirme lo contrario', 'esperanza');
    classifier.add('simplemente yo no lo creó aunque a veces aparente que lo hago en el fondo', 'esperanza');
    classifier.add('no tengo permitido parecer débil', 'esperanza');
    classifier.add('no ser entendido me odio', 'esperanza');
    classifier.add('esta sera mi salida para todo', 'esperanza');
    classifier.add('la violencia la sufrimos todos', 'esperanza');
    classifier.add('He pensando mucho en quitarme la vida', 'esperanza');
    classifier.add('Su muerte es culpa mía, ya no lo soporto más', 'esperanza');
    classifier.add('No tengo nada de hambre', 'esperanza');
    classifier.add('No quedo satisfecho con nada', 'esperanza');
    classifier.add('Espero no molestar', 'esperanza');
    classifier.add('Desde ayer quiero llorar pero no puedo solo está ahí esperando', 'esperanza');
    classifier.add('Y no, no hablo de quitarse la ropa', 'esperanza');
    classifier.add('Cuando la depresión me tiene incapacitada no solo es mi cabeza mi cuerpo no me responde', 'esperanza');
    classifier.add('No es un buen día', 'esperanza');
    classifier.add('No tengo amigos', 'esperanza');
    classifier.add('A mi familia no le importo', 'esperanza');
    classifier.add('No me da vergüenza decir', 'esperanza');
    classifier.add('no lo soy en lo absoluto', 'esperanza');
    classifier.add('me tienen paciencia', 'esperanza');
    classifier.add('no me tengan lastima', 'esperanza');
    classifier.add('no la', 'esperanza');
    classifier.add('No importa cuando se lea esto', 'esperanza');
    classifier.add('las princesas no trabajan Huitrón', 'esperanza');
    classifier.add('Talvez tienen razon en no querer', 'esperanza');
    classifier.add('no entiendo esta vida y no me gusta', 'esperanza');
    classifier.add('aquí aún no encuentro trabajo', 'esperanza');
    classifier.add('no me hace falta nada material para ser feliz', 'esperanza');
    classifier.add('Todos tienen sus trabajos y yo no', 'esperanza');
    classifier.add('No me importa hablar con gente de cualquier lugar', 'esperanza');
    classifier.add('no lo hicera si en verdad no lo necesitará', 'esperanza');
    classifier.add('perdí interes en aquellas cosas', 'esperanza');
    classifier.add('ya van letios meses sintiendo esto acompañado de unos ataques no se como llamarlos', 'esperanza');
    classifier.add('no puedo hacer nada sin pesar en lo q pasara si lo hago', 'esperanza');
    classifier.add('en q todos seran mejor si no estas', 'esperanza');
    classifier.add('las cosas buenas a mi no tiene', 'esperanza');
    classifier.add('siempre estoy hecho mierda', 'esperanza');
    classifier.add('no vale nada lo unico', 'esperanza');
    classifier.add('nunca pude escuchar bien lo', 'esperanza');
    classifier.add('no merecían conocer mi vida privada', 'esperanza');
    classifier.add('este día los haga sentir más solos', 'esperanza');
    classifier.add('ya no tengo pilas para nada', 'esperanza');
    classifier.add('Ojalá nunca me toque compartir una foto de ustedes', 'esperanza');
    classifier.add('el estar en linea no me hace sentir tan solo', 'esperanza');
    classifier.add('pero ya estoy perdiendo el miedo', 'esperanza');
    classifier.add('no solo en mi mente', 'esperanza');
    classifier.add('mi madre no hacia nada porque decia que no podia ver a su pareja asi', 'esperanza');
    classifier.add('estuve 3 veces en terapia las cuales nunca termine', 'esperanza');
    //classifier.add( '', 'esperanza');
    //classifier.add( '', 'esperanza');
    //classifier.add( '', 'esperanza');
    //classifier.add( '', 'esperanza');
    //classifier.add( '', 'esperanza');
    //classifier.add( '', 'esperanza');

    await classifier.train();
    console.log('Clasificador B6 entrenado');
    return classifier;
}

module.exports = {
    train
}