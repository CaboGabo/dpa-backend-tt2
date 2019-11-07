const {
    LogisticRegressionNLU
} = require('node-nlp');


async function train() {
    const classifier = new LogisticRegressionNLU({
        language: 'es'
    });

    classifier.add('No tengo sueño', 'insomnio');
    classifier.add('No puedo dormir', 'insomnio');
    classifier.add('No duermo', 'insomnio');
    classifier.add('No he podido dormir', 'insomnio');
    classifier.add('No puedo dormir por estar pensando en cosas malas', 'insomnio');
    classifier.add('Estoy desvelado', 'insomnio');
    classifier.add('Estoy muy desvelado', 'insomnio');
    classifier.add('Estoy bastante desvelado', 'insomnio');
    classifier.add('Tengo trastornos de sueño', 'insomnio');
    classifier.add('Quiero tomar una siesta pero no puedo', 'insomnio');
    classifier.add('Necesito dormir y no puedo', 'insomnio');
    classifier.add('Estuve despierto toda la noche', 'insomnio');
    classifier.add('He estado despierto toda la noche', 'insomnio');
    classifier.add('Ultimamente dormir ha sido un problema', 'insomnio');
    classifier.add('Dormir ha sido un problema', 'insomnio');
    classifier.add('Dormir es un problema', 'insomnio');
    classifier.add('Ya quiero descansar, ayuda', 'insomnio');
    classifier.add('Estoy bastante cansado pero no puedo dormir', 'insomnio');
    classifier.add('Dormí menos de dos horas', 'insomnio');
    classifier.add('No dormí nada', 'insomnio');
    classifier.add('Llevo despierto desde hace 3 días', 'insomnio');
    classifier.add('Tengo insomnio', 'insomnio');
    classifier.add('Me causa insomnio', 'insomnio');
    classifier.add('El insomnio no me deja', 'insomnio');
    classifier.add('Mi insomnio no me deja dormir', 'insomnio');
    classifier.add('Porque tengo insomnio', 'insomnio');
    classifier.add('He tenido insomnio', 'insomnio');
    classifier.add('insomnio', 'insomnio');
    classifier.add('Dormí muy poco', 'insomnio');
    classifier.add('Dormí poco', 'insomnio');
    classifier.add('Dormí mal', 'insomnio');
    classifier.add('Dormí bastante mal', 'insomnio');
    classifier.add('Dormí muy mal', 'insomnio');
    classifier.add('Qué triste que cualquier tontería me cause insomnio', 'insomnio');
    classifier.add('Ansío poder dormir', 'insomnio');
    classifier.add('Ansío poder dormir un poco', 'insomnio');
    classifier.add('Ansío poder dormir aunque sea una hora', 'insomnio');
    classifier.add('Ansío poder descansar', 'insomnio');
    classifier.add('Espero poder dormir', 'insomnio');
    classifier.add('Espero poder dormir un rato', 'insomnio');
    classifier.add('Espero poder dormir aunque sea un poco', 'insomnio');
    classifier.add('Espero poder descansar', 'insomnio');
    classifier.add('Nada me ayuda a dormir', 'insomnio');
    classifier.add('Ojalá pueda dormir', 'insomnio');
    classifier.add('Ojalá pueda descansar', 'insomnio');
    classifier.add('Ojalá pueda dormir algo', 'insomnio');
    classifier.add('Ojalá pueda descansar algo', 'insomnio');
    classifier.add('Ojalá pueda dormir un poco', 'insomnio');
    classifier.add('Ojalá pueda descansar un poco', 'insomnio');
    classifier.add('Tuve una mala noche', 'insomnio');
    classifier.add('Tengo muy malas noches', 'insomnio');
    classifier.add('He tenido muchas malas noches', 'insomnio');
    classifier.add('Ultimamaente he tenido muchas malas noches', 'insomnio');
    classifier.add('He tenido muy malas noches', 'insomnio');
    classifier.add('He tenido muy malas noches ultimamente', 'insomnio');
    //classifier.add( '', 'insomnio');
    //classifier.add( '', 'insomnio');
    //classifier.add( '', 'insomnio');
    //classifier.add( '', 'insomnio');



    //**********************************************************************************************************


    classifier.add('Dormí mucho ayer', 'no_insomnio');
    classifier.add('Dormir no es problema para mí', 'no_insomnio');
    classifier.add('Tengo mucho sueño', 'no_insomnio');
    classifier.add('Tengo bastantes cosas que hacer', 'no_insomnio');
    classifier.add('No tengo ganas de ir a la escuela', 'no_insomnio');
    classifier.add('Adios, ya me voy a dormir', 'no_insomnio');
    classifier.add('No entiendo a la mayoría de la gente', 'no_insomnio');
    classifier.add('Dormí como 10 horas ayer', 'no_insomnio');
    classifier.add('Estoy feliz', 'no_insomnio');
    classifier.add('Las siestas son lo mejor del mundo', 'no_insomnio');
    classifier.add('Mi hermano y yo dormimos como bebés', 'no_insomnio');
    classifier.add('pero no hay día en el cual no piense matarme', 'no_insomnio');
    classifier.add('ahora tengo un gran bajón emocional', 'no_insomnio');
    classifier.add('no puedo hacer nada sin pesar en lo q pasara si lo hago', 'no_insomnio');
    classifier.add('en lo q no pasara', 'no_insomnio');
    classifier.add('está depresión lleva consumiendome desde secundaria por lo mismo', 'no_insomnio');
    classifier.add('todos sean negativos', 'no_insomnio');
    classifier.add('pensar en no querer vivir', 'no_insomnio');
    classifier.add('Tengo muchos problemas', 'no_insomnio');
    classifier.add('No tengo nada de hambre', 'no_insomnio');
    classifier.add('No tengo nada de dinero', 'no_insomnio');
    classifier.add('Me siento incapaz de sobresalir', 'no_insomnio');
    classifier.add('Siempre busco sentirme mal', 'no_insomnio');
    classifier.add('No tengo permitido parecer débil', 'no_insomnio');
    classifier.add('talvez se la ultima ya que no puedo más con esta agonía', 'no_insomnio');
    classifier.add('al fin sentí una pequeña esperanza pero no fue así', 'no_insomnio');
    classifier.add('pero no puedo', 'no_insomnio');
    classifier.add('yo soy una persona demasiado antisocial', 'no_insomnio');
    classifier.add('No importa cuando se lea esto', 'no_insomnio');
    classifier.add('no sentirme tan mal ya que no quiero estarme sintiendo así', 'no_insomnio');
    classifier.add('igual he perdido el gusto por mis hobbies', 'no_insomnio');
    classifier.add('poco demostrativa era un gran defecto', 'no_insomnio');
    classifier.add('Quiero cambiar', 'no_insomnio');
    classifier.add('Gracias X tomar la molestia', 'no_insomnio');
    classifier.add('estoy bastante fastidiada', 'no_insomnio');
    classifier.add('Desde hace 6 años no tengo una estabilidad laboral', 'no_insomnio');
    classifier.add('Desde entonces no levanto cabeza', 'no_insomnio');
    classifier.add('Llevaba 6 meses muy bien', 'no_insomnio');
    classifier.add('necesito ayuda', 'no_insomnio');
    classifier.add('no quiero tomar mala decisión', 'no_insomnio');
    classifier.add('Soy un gordo, me comí un helado grande y una pizza', 'no_insomnio');
    classifier.add('Se me antoja todo ultimamente y no estoy embarazada', 'no_insomnio');

    await classifier.train();
    console.log('Clasificador A4 entrenado');
    return classifier;

}

module.exports = {
    train
}