const {
    LogisticRegressionNLU
} = require('node-nlp');


async function train() {
    const classifier = new LogisticRegressionNLU({
        language: 'es'
    });

    classifier.add('Deterioro social', 'malestar');
    classifier.add('Deterioro laboral', 'malestar');
    classifier.add('Deterioro en mis actividades diarias', 'malestar');


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

    await classifier.train();
    console.log('Clasificador B1 entrenado')
    return classifier;
}

module.exports = {
    train
}