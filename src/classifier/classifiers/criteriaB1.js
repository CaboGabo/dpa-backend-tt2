const {
    LogisticRegressionNLU
} = require('node-nlp');


async function train() {
    const classifier = new LogisticRegressionNLU({
        language: 'es'
    });

//Malestar clínicamente significativo
    classifier.add('Tengo un malestar','malestar');
    classifier.add('Tengo un malestar que no se quita','malestar');
    classifier.add('Este malestar','malestar');
    classifier.add('Este malestar que no me deja','malestar');
    classifier.add('Mucho malestar','malestar');
    classifier.add('Bastante malestar','malestar');
    classifier.add('Siento malestar','malestar');
    classifier.add('Siento un malestar','malestar');
    classifier.add('Siento un malestar en mi estómago','malestar');
    classifier.add('Siento un malestar en mi ser','malestar');

    classifier.add('Me siento mal','malestar');
    classifier.add('Me siento raro','malestar');
    classifier.add('Me siento estresado','malestar');
    classifier.add('Me siento mal desde hace tiempo','malestar');
    classifier.add('Me siento muy mal','malestar');
    classifier.add('Me siento muy raro','malestar');
    classifier.add('Me siento bastante mal','malestar');
    classifier.add('Me siento bastante raro','malestar');
    classifier.add('Me siento demasiado mal','malestar');
    classifier.add('Me siento demasiado estresado','malestar');
    classifier.add('Siento que estoy mal','malestar');
    classifier.add('Hoy me siento mal','malestar');
    classifier.add('Hoy me siento raro','malestar');
    classifier.add('Ayer me sentí mal','malestar');
    classifier.add('Ayer me sentí extraño','malestar');
    classifier.add('Esta semana me he sentido mal','malestar');
    classifier.add('Esta semana me he sentido raro','malestar');
    classifier.add('Esta semana me he sentido extraño','malestar');
    classifier.add('Estos días me he sentido mal','malestar');
    classifier.add('Ultimamente me siento muy mal','malestar');
    classifier.add('Ultimamente me siento muy raro','malestar');
    classifier.add('Ultimamente me siento muy extraño','malestar');
    classifier.add('Hay veces que me siento bastante mal','malestar');
    classifier.add('En ocasiones me siento demasiado mal','malestar');
    classifier.add('En ocasiones me siento raro','malestar');

    classifier.add('Me he sentido mal','malestar');
    classifier.add('Me he sentido extraño','malestar');
    classifier.add('Me he sentido mal estos días','malestar');
    classifier.add('Me he sentido raro estos días','malestar');
    classifier.add('Me he sentido muy mal','malestar');
    classifier.add('Ultimamente me he sentido muy mal','malestar');
    classifier.add('Me he sentido bastante mal','malestar');
    classifier.add('Me he sentido bastante estresado','malestar');
    classifier.add('Me he sentido demasiado mal','malestar');
    classifier.add('Hoy me he sentido mal','malestar');
    classifier.add('Ultimamente me he sentido muy mal','malestar');
    classifier.add('Hay veces que me he sentido bastante mal','malestar');
    classifier.add('En ocasiones me he sentido demasiado mal','malestar');
    classifier.add('Me hace sentirme mal','malestar');
    classifier.add('Todo me hace sentirme mal','malestar');


    classifier.add('No me siento bien', 'malestar');
    classifier.add('No me siento muy bien', 'malestar');
    classifier.add('No me siento nada bien', 'malestar');
    classifier.add('Ultimamente no me siento nada bien', 'malestar');
    classifier.add('No me he sentido bien desde hace tiempo', 'malestar');
    classifier.add('No me he sentido bien estos días', 'malestar');

    classifier.add('Me sentí mal','malestar');
    classifier.add('Me sentí muy mal','malestar');
    classifier.add('Me sentí bastante mal','malestar');
    classifier.add('Me sentí demasiado mal','malestar');

    classifier.add('Todo está mal','malestar');
    classifier.add('No me siento bien','malestar');
    classifier.add('No me siento nada bien','malestar');
    classifier.add('Me causa mucho malestar','malestar');


    classifier.add('Deterioro social', 'malestar');
    classifier.add('Deterioro laboral', 'malestar');
    classifier.add('Deterioro en mis actividades diarias', 'malestar');

    //Dolores
    classifier.add('Dolor de cabeza','malestar');
    classifier.add('Dolor de cabeza y pecho','malestar');
    classifier.add('Dolor de espalda y pecho','malestar');
    classifier.add('Dolor de espalda y cabeza','malestar');
    classifier.add('Me duele la cabeza','malestar');
    classifier.add('Me duele el pecho','malestar');
    classifier.add('Me duele la espalda','malestar');
    classifier.add('Me duele el cuerpo','malestar');
    classifier.add('Me duele todo','malestar');
    classifier.add('Tengo dolor de cabeza','malestar');
    classifier.add('Tengo dolor de pecho','malestar');
    classifier.add('Tengo dolor de espalda','malestar');
    classifier.add('Tengo el cuerpo cortado','malestar');
    classifier.add('Tengo un dolor en el pecho','malestar');
    classifier.add('Tengo migraña','malestar');
    classifier.add('No soporto el dolor','malestar');
    classifier.add('No soporto el dolor de cabeza','malestar');
   
    classifier.add('Tengo escalofríos','malestar');
    classifier.add('A veces tengo escalofríos','malestar');
    classifier.add('He estado con escalofríos','malestar');
    classifier.add('Siento escalofríos','malestar');
    classifier.add('Estoy temblando','malestar');
    classifier.add('Todo el tiempo estoy temblando','malestar');
    classifier.add('Tiemblo todo el tiempo','malestar');
    classifier.add('Me tiembla mi cuerpo','malestar');
    classifier.add('Mi mandíbula se pone rígida','malestar');  

    classifier.add('Estoy mareado','malestar');    
    classifier.add('Me siento mareado','malestar');    
    classifier.add('Tengo ganas de vomitar','malestar');    
    classifier.add('Tengo nauseas','malestar');    
    classifier.add('Tengo muchas nauseas','malestar');    
    classifier.add('Tengo muchos mareos','malestar');    
    classifier.add('mareos','malestar');    
    classifier.add('nauseas','malestar');    
    classifier.add('vomito','malestar');    


//Deterioro social
    classifier.add('Me afecta socialmente', 'malestar');
    classifier.add('Me afecta en el ambito social', 'malestar');
    classifier.add('Me afecta con mi familia', 'malestar');
    classifier.add('Me afecta con mis padres', 'malestar');
    classifier.add('Me afecta con mi padre', 'malestar');
    classifier.add('Me afecta con mi madre', 'malestar');
    classifier.add('Me afecta con mis amigos', 'malestar');
    classifier.add('Me afecta con mis amigas', 'malestar');
    classifier.add('Me afecta con mis compañeros', 'malestar');
    classifier.add('Me afecta con mi compañero', 'malestar');
    classifier.add('Me afecta con mi compañera', 'malestar');

    classifier.add('Me está afectando socialmente', 'malestar');
    classifier.add('Me está afectando en el ambito social', 'malestar');
    classifier.add('Me está afectando con mi familia', 'malestar');
    classifier.add('Me está afectando con mis padres', 'malestar');
    classifier.add('Me está afectando con mi padre', 'malestar');
    classifier.add('Me está afectando con mi madre', 'malestar');
    classifier.add('Me está afectando con mis amigos', 'malestar');
    classifier.add('Me está afectando con mis amigas', 'malestar');
    classifier.add('Me está afectando con mis compañeros', 'malestar');
    classifier.add('Me está afectando con mi compañero', 'malestar');
    classifier.add('Me está afectando con mi compañera', 'malestar');

    classifier.add('Influye de manera negativa socialmente', 'malestar');
    classifier.add('Influye de manera negativa en el ambito social', 'malestar');
    classifier.add('Influye de manera negativa con mi familia', 'malestar');
    classifier.add('Influye de manera negativa con mis padres', 'malestar');
    classifier.add('Influye de manera negativa con mi padre', 'malestar');
    classifier.add('Influye de manera negativa con mi madre', 'malestar');
    classifier.add('Influye de manera negativa con mis amigos', 'malestar');
    classifier.add('Influye de manera negativa con mis amigas', 'malestar');
    classifier.add('Influye de manera negativa con mis compañeros', 'malestar');
    classifier.add('Influye de manera negativa con mi compañero', 'malestar');
    classifier.add('Influye de manera negativa con mi compañera', 'malestar');

    classifier.add('Esta influyendo de manera negativa socialmente', 'malestar');
    classifier.add('Esta influyendo de manera negativa en mi socialmente', 'malestar');
    classifier.add('Esta influyendo de manera negativa en mi ambito social', 'malestar');
    classifier.add('Esta influyendo de manera negativa en el ambito social', 'malestar');
    classifier.add('Esta influyendo de manera negativa con mi familia', 'malestar');
    classifier.add('Esta influyendo de manera negativa con mis padres', 'malestar');
    classifier.add('Esta influyendo de manera negativa con mi padre', 'malestar');
    classifier.add('Esta influyendo de manera negativa con mi madre', 'malestar');
    classifier.add('Esta influyendo de manera negativa con mis amigos', 'malestar');
    classifier.add('Esta influyendo de manera negativa con mis amigas', 'malestar');
    classifier.add('Esta influyendo de manera negativa con mis compañeros', 'malestar');
    classifier.add('Esta influyendo de manera negativa con mi compañero', 'malestar');
    classifier.add('Esta influyendo de manera negativa con mi compañera', 'malestar');

    classifier.add('Me causa problemas socialmente', 'malestar');
    classifier.add('Me causa problemas en mi ambito social', 'malestar');
    classifier.add('Me causa problemas con mi familia', 'malestar');
    classifier.add('Me causa problemas con mis padres', 'malestar');
    classifier.add('Me causa problemas con mi padre', 'malestar');
    classifier.add('Me causa problemas con mi madre', 'malestar');
    classifier.add('Me causa problemas con mis amigos', 'malestar');
    classifier.add('Me causa problemas con mis amigas', 'malestar');
    classifier.add('Me causa problemas con mis compañeros', 'malestar');
    classifier.add('Me causa problemas con mi compañero', 'malestar');
    classifier.add('Me causa problemas con mi compañera', 'malestar');

    classifier.add('Me está causando problemas socialmente', 'malestar');
    classifier.add('Me está causando problemas en mi ambito social', 'malestar');
    classifier.add('Me está causando problemas con mi familia', 'malestar');
    classifier.add('Me está causando problemas con mis padres', 'malestar');
    classifier.add('Me está causando problemas con mi padre', 'malestar');
    classifier.add('Me está causando problemas con mi madre', 'malestar');
    classifier.add('Me está causando problemas con mis amigos', 'malestar');
    classifier.add('Me está causando problemas con mis amigas', 'malestar');
    classifier.add('Me está causando problemas con mis compañeros', 'malestar');
    classifier.add('Me está causando problemas con mi compañero', 'malestar');
    classifier.add('Me está causando problemas con mi compañera', 'malestar');


    classifier.add('Me ha causado problemas socialmente', 'malestar');
    classifier.add('Me ha causado problemas en mi ambito social', 'malestar');
    classifier.add('Me ha causado problemas con mi familia', 'malestar');
    classifier.add('Me ha causado problemas con mis padres', 'malestar');
    
    classifier.add('Me empieza a causar problemas con mi padre', 'malestar');
    classifier.add('Me empieza a causar problemas con mi madre', 'malestar');
    classifier.add('Me empieza a causar problemas con mis amigos', 'malestar');
    classifier.add('Me empieza a causar problemas con mis amigas', 'malestar');

    classifier.add('Me provoca problemas con mis compañeros', 'malestar');
    classifier.add('Me provoca problemas con mi compañero', 'malestar');
    classifier.add('Me provoca problemas con mi compañera', 'malestar');

    classifier.add('Me empieza a provocar problemas socialmente', 'malestar');
    classifier.add('Me empieza a provocar problemas en mi ambito social', 'malestar');
    classifier.add('Empieza a provocarme problemas con mi familia', 'malestar');
    classifier.add('Empieza a provocarme problemas con mis padres', 'malestar');
    classifier.add('Comienza a provocarme problemas con mi padre', 'malestar');
    classifier.add('Comienza a provocarme problemas con mi madre', 'malestar');

//Deterioro laboral
    classifier.add('Me afecta laboralmente', 'malestar');
    classifier.add('Me afecta en el trabajo', 'malestar');
    classifier.add('Me afecta en la oficina', 'malestar');
    classifier.add('Me afecta en la escuela', 'malestar');

    classifier.add('Me está afectando laboralmente', 'malestar');
    classifier.add('Me está afectando en el trabajo', 'malestar');
    classifier.add('Me está afectando en la oficina', 'malestar');
    classifier.add('Me está afectando en la escuela', 'malestar');

    classifier.add('Influye de manera negativa laboralmente', 'malestar');
    classifier.add('Influye de manera negativa en el trabajo', 'malestar');
    classifier.add('Influye de manera negativa en la oficina', 'malestar');
    classifier.add('Influye de manera negativa en la escuela', 'malestar');

    classifier.add('Está influyendo de manera negativa laboralmente', 'malestar');
    classifier.add('Está influyendo de manera negativa en el trabajo', 'malestar');
    classifier.add('Está influyendo de manera negativa en la oficina', 'malestar');
    classifier.add('Está influyendo de manera negativa en la escuela', 'malestar');

    classifier.add('Me causa problemas laborales', 'malestar');
    classifier.add('Me causa problemas en el trabajo', 'malestar');
    classifier.add('Me causa problemas en la oficina', 'malestar');
    classifier.add('Me causa problemas en la escuela', 'malestar');

    classifier.add('Me está causando problemas laborales', 'malestar');
    classifier.add('Me está causando problemas en el trabajo', 'malestar');
    classifier.add('Me está causando problemas en la oficina', 'malestar');
    classifier.add('Me está causando problemas en la escuela', 'malestar');

    classifier.add('Me ha causado problemas laborales', 'malestar');
    classifier.add('Me ha causado problemas en el trabajo', 'malestar');
    classifier.add('Me ha causado problemas en la oficina', 'malestar');
    classifier.add('Me ha causado problemas en la escuela', 'malestar');

    classifier.add('Me empieza a causar problemas laborales', 'malestar');
    classifier.add('Me empieza a causar problemas en el trabajo', 'malestar');
    classifier.add('Me empieza a causar problemas en la oficina', 'malestar');
    classifier.add('Me empieza a causar problemas en la escuela', 'malestar');

    classifier.add('Me provoca problemas laborales', 'malestar');
    classifier.add('Me provoca problemas en el trabajo', 'malestar');
    classifier.add('Me provoca problemas en la oficina', 'malestar');
    classifier.add('Me provoca problemas en la escuela', 'malestar');

    classifier.add('Me empieza a provocar problemas laborales', 'malestar');
    classifier.add('Me empieza a provocar problemas en el trabajo', 'malestar');
    classifier.add('Empieza a provocarme problemas en la oficina', 'malestar');
    classifier.add('Empieza a provocarme problemas en la escuela', 'malestar');
    classifier.add('Comienza a provocarme problemas laborales', 'malestar');
    classifier.add('Comienza a provocarme problemas en el trabajo', 'malestar');

    classifier.add('No me concentro en el trabajo', 'malestar');
    classifier.add('No me deja concentrarme en el trabajo', 'malestar');
    classifier.add('No me puedo concentrar en el trabajo', 'malestar');
    classifier.add('No puedo concentrarme en el trabajo', 'malestar');



    // Sin malestar


    classifier.add('Me siento bien','sinMalestar');
    classifier.add('Me siento muy bien','sinMalestar');
    classifier.add('Me siento bastante relajado','sinMalestar');
    classifier.add('Hoy me siento normal','sinMalestar');
    classifier.add('Ayer me sentí tranquilo','sinMalestar');
    classifier.add('Esta semana me he sentido bien','sinMalestar');
    classifier.add('Estos días me he sentido bastante bien','sinMalestar');
    classifier.add('Ultimamente me siento muy bien','sinMalestar');
    classifier.add('Hay veces que me siento bastante normal','sinMalestar');
    classifier.add('Me siento bien', 'sinMalestar');
    classifier.add('Me siento contento', 'sinMalestar');
    classifier.add('Me siento feliz', 'sinMalestar');
    classifier.add('Siento que no voy a poder', 'sinMalestar');
    classifier.add('Me siento feliz de estar en casa', 'sinMalestar');
    classifier.add('Ultimamente siento que todo va bien', 'sinMalestar');
    classifier.add('Me siento bastante bien', 'sinMalestar');

    classifier.add('Me he sentido bien','sinMalestar');
    classifier.add('Me he sentido relajado estos días','sinMalestar');
    classifier.add('Me he sentido muy bien','sinMalestar');
    classifier.add('Ultimamente me he sentido muy tranquilo','sinMalestar');
    classifier.add('Me he sentido bastante ','sinMalestar');
    classifier.add('Hoy me he sentido vacío','sinMalestar');
    classifier.add('Ultimamente me he sentido muy fatigado','sinMalestar');
    classifier.add('Hay veces que me he sentido bastante loco','sinMalestar');
    classifier.add('En ocasiones me he sentido demasiado normal','sinMalestar');
    classifier.add('Me hace sentirme bien','sinMalestar');

    classifier.add('Hoy me tuve que salir temprano del trabajo', 'sinMalestar');
    classifier.add('Me ha causado un gran alivio', 'sinMalestar');
    classifier.add('Me ha causado cierta tristeza el no poder jugar', 'sinMalestar');
    classifier.add('No me deja de seguir', 'sinMalestar');
    classifier.add('No me puedo rendir', 'sinMalestar');
    classifier.add('Me provoca mucho enojo el no poder hacerlo', 'sinMalestar');
    classifier.add('Me provoca felicidad el saber que hay gente que me apoya', 'sinMalestar');
    classifier.add('Así que llegando tarde al trabajo', 'sinMalestar');
    classifier.add('Comienza el juego', 'sinMalestar');
    classifier.add('Comienza el partido', 'sinMalestar');
    classifier.add('Que tiene en la cabeza ese sujeto?', 'sinMalestar');
    classifier.add('Me pegué en la cabeza', 'sinMalestar');

    classifier.add('Consejos basicos 1: Nutrirnos a nosotros mismos de vez en cuando con instantes de soledad, ocio y bienestar es sinónimo de salud.', 'sinMalestar');
    classifier.add('¿Ya listos para tomar las armas ahora que Estados Unidos invada México?: ¿Y como serían los niños héroes del siglo XXI? Van a hacer Facebook Live de enredarse en la bandera para caer desde la Estela de Luz?', 'sinMalestar');
    classifier.add('Ya no me quedó claro, entonces, Donar a los Topos es bueno o malo? Frida Sofía fue un invento de Televisa, o del Estado? Donar y tomar selfies inspira a otros, o es nomás presumir?: Por favor ayúdenme a decidirme qué pensar de todas estas controversias que trajo el sismo, porque quiero ocupar mi tiempo en criticar en vez de ayudar a los damnificados...', 'sinMalestar');
    //classifier.add('', 'sinMalestar');
    //classifier.add('', 'sinMalestar');
    //classifier.add('', 'sinMalestar');
    //classifier.add('', 'sinMalestar');
    //classifier.add('', 'sinMalestar');



    await classifier.train();
    console.log('Clasificador B1 entrenado')
    return classifier;
}

module.exports = {
    train
}