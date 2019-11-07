const {
    LogisticRegressionNLU
} = require('node-nlp');


async function train() {
    const classifier = new LogisticRegressionNLU({
        language: 'es'
    });

    classifier.add('Ingiero drogas', 'consumoAfeccion');
    classifier.add('Ingiero medicamentos', 'consumoAfeccion');
    classifier.add('Ingiero sustancias', 'consumoAfeccion');
    classifier.add('Ingiero pastillas', 'consumoAfeccion');
    classifier.add('Ingiero quimicos', 'consumoAfeccion');
    classifier.add('Ingiero narcóticos', 'consumoAfeccion');
    classifier.add('Ingiero estupefaciente', 'consumoAfeccion');
    classifier.add('Ingiero alucinógenos', 'consumoAfeccion');
    classifier.add('Ingiero somníferos', 'consumoAfeccion');
    classifier.add('Ingiero medicamentos', 'consumoAfeccion');
    classifier.add('Ingiero marihuana', 'consumoAfeccion');
    classifier.add('Ingiero cocaína', 'consumoAfeccion');
    classifier.add('Ingiero alcohol', 'consumoAfeccion');
    classifier.add('Ingiero porro', 'consumoAfeccion');
    classifier.add('Ingiero tranquilizante', 'consumoAfeccion');
    classifier.add('Ingiero anfetaminas', 'consumoAfeccion');
    classifier.add('Ingiero éxtasis', 'consumoAfeccion');
    classifier.add('Ingiero heroína', 'consumoAfeccion');
    classifier.add('Ingiero lsd', 'consumoAfeccion');
    classifier.add('Ingiero ácido', 'consumoAfeccion');
    classifier.add('Consumo drogas', 'consumoAfeccion');
    classifier.add('Consumo medicamentos', 'consumoAfeccion');
    classifier.add('Consumo sustancias', 'consumoAfeccion');
    classifier.add('Consumo pastillas', 'consumoAfeccion');
    classifier.add('Consumo quimicos', 'consumoAfeccion');
    classifier.add('Consumo narcóticos', 'consumoAfeccion');
    classifier.add('Consumo estupefaciente', 'consumoAfeccion');
    classifier.add('Consumo alucinógenos', 'consumoAfeccion');
    classifier.add('Consumo somníferos', 'consumoAfeccion');
    classifier.add('Consumo medicamentos', 'consumoAfeccion');
    classifier.add('Consumo marihuana', 'consumoAfeccion');
    classifier.add('Consumo cocaína', 'consumoAfeccion');
    classifier.add('Consumo alcohol', 'consumoAfeccion');
    classifier.add('Consumo porro', 'consumoAfeccion');
    classifier.add('Consumo tranquilizante', 'consumoAfeccion');
    classifier.add('Consumo anfetaminas', 'consumoAfeccion');
    classifier.add('Consumo éxtasis', 'consumoAfeccion');
    classifier.add('Consumo heroína', 'consumoAfeccion');
    classifier.add('Consumo lsd', 'consumoAfeccion');
    classifier.add('Consumo ácido', 'consumoAfeccion');
    classifier.add('Inhalo cocaina', 'consumoAfeccion');
    classifier.add('Inhalo droga', 'consumoAfeccion');
    classifier.add('Inhalo sustancias', 'consumoAfeccion');
    classifier.add('Inhalo quimicos', 'consumoAfeccion');
    classifier.add('Inhalo narcoticos', 'consumoAfeccion');
    classifier.add('Bebo alcohol', 'consumoAfeccion');

    classifier.add('Fumo marihuana', 'consumoAfeccion');
    classifier.add('Fumo sustancias', 'consumoAfeccion');
    classifier.add('Fumo químicos', 'consumoAfeccion');
    classifier.add('Fumo porro', 'consumoAfeccion');


    //Afección médica
    classifier.add('Estoy enfermo', 'consumoAfeccion');
    classifier.add('Estoy enferma', 'consumoAfeccion');
    classifier.add('Tengo una enfermedad', 'consumoAfeccion');
    classifier.add('Me diagnosticaron una enfermedad', 'consumoAfeccion');
    classifier.add('Tengo una enferemedad diagnosticada', 'consumoAfeccion');
    classifier.add('Es por mi enfermedad', 'consumoAfeccion');
    classifier.add('Seguro es por mi enfermedad', 'consumoAfeccion');
    classifier.add('Mi enfermedad', 'consumoAfeccion');

    classifier.add('Tengo una afección', 'consumoAfeccion');
    classifier.add('Me diagnosticaron una afección', 'consumoAfeccion');
    classifier.add('Tengo una afección diagnosticada', 'consumoAfeccion');
    classifier.add('Es por mi afección', 'consumoAfeccion');
    classifier.add('Seguro es por mi afección', 'consumoAfeccion');
    classifier.add('Mi afección', 'consumoAfeccion');

    classifier.add('Tengo una afección medica', 'consumoAfeccion');
    classifier.add('Me diagnosticaron una afección medica', 'consumoAfeccion');
    classifier.add('Tengo una afección medica diagnosticada', 'consumoAfeccion');
    classifier.add('Es por mi afección medica', 'consumoAfeccion');
    classifier.add('Seguro es por mi afección medica', 'consumoAfeccion');
    classifier.add('Mi afección medica', 'consumoAfeccion');

    classifier.add('Tengo un padecimiento', 'consumoAfeccion');
    classifier.add('Me diagnosticaron un padecimiento', 'consumoAfeccion');
    classifier.add('Tengo un padecimiento diagnosticado', 'consumoAfeccion');
    classifier.add('Es por mi padecimiento', 'consumoAfeccion');
    classifier.add('Seguro es por mi padecimiento', 'consumoAfeccion');
    classifier.add('Mi padecimiento', 'consumoAfeccion');

    //**********************************************************************************************************


    //No presentan niguno
    classifier.add('Ingiero comida', 'sin_ConsumoAfeccion');
    classifier.add('Ingiero papas fritas', 'sin_ConsumoAfeccion');
    classifier.add('Ingiero refresco', 'sin_ConsumoAfeccion');
    classifier.add('Ingiero coca cola', 'sin_ConsumoAfeccion');
    classifier.add('Ingiero golosinas', 'sin_ConsumoAfeccion');

    classifier.add('Consumo comida', 'sin_ConsumoAfeccion');
    classifier.add('Consumo papas fritas', 'sin_ConsumoAfeccion');
    classifier.add('Consumo refresco', 'sin_ConsumoAfeccion');
    classifier.add('Consumo coca cola', 'sin_ConsumoAfeccion');
    classifier.add('Consumo golosinas', 'sin_ConsumoAfeccion');

    classifier.add('Bebo agua', 'sin_ConsumoAfeccion');
    classifier.add('Bebo refresco', 'sin_ConsumoAfeccion');
    classifier.add('Bebo coca cola', 'sin_ConsumoAfeccion');
    classifier.add('Bebo cafe', 'sin_ConsumoAfeccion');
    classifier.add('Bebo te', 'sin_ConsumoAfeccion');
    classifier.add('Bebo jugo', 'sin_ConsumoAfeccion');

    classifier.add('Es una sonrisa tranquilizadora', 'sin_ConsumoAfeccion');
    classifier.add('qué es', 'sin_ConsumoAfeccion');
    classifier.add('que aún no es', 'sin_ConsumoAfeccion');
    classifier.add('Cada vez me canso más', 'sin_ConsumoAfeccion');
    classifier.add('ya no tengo pilas para nada', 'sin_ConsumoAfeccion');
    classifier.add('Estoy exahusto', 'sin_ConsumoAfeccion');

    await classifier.train();
    console.log('Clasificador C1 entrenado')
    return classifier;
}

module.exports = {
    train
}