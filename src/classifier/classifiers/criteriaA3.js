const {
    LogisticRegressionNLU
} = require('node-nlp');


async function train() {
    const classifier = new LogisticRegressionNLU({
        language: 'es'
    });

    classifier.add('Bajé de peso', 'modPeso');
    classifier.add('Ahora peso menos', 'modPeso');
    classifier.add('Peso menos', 'modPeso');
    classifier.add('Peso menos de lo que pesaba hace unos días', 'modPeso');
    classifier.add('Peso menos que ayer', 'modPeso');
    classifier.add('He bajado de peso', 'modPeso');
    classifier.add('He bajado mucho de peso', 'modPeso');
    classifier.add('He bajado mucho de peso estos meses', 'modPeso');
    classifier.add('He estado bajando de peso', 'modPeso');
    classifier.add('He estado bajando mucho de peso', 'modPeso');
    classifier.add('He estado bajando mucho de peso estos meses', 'modPeso');
    classifier.add('Estoy bajando de peso', 'modPeso');
    classifier.add('Estoy bajando demasiado de peso', 'modPeso');
    classifier.add('Estoy cada vez bajando más de peso', 'modPeso');
    classifier.add('Estoy ya muy flaco', 'modPeso');
    classifier.add('Estoy flaco', 'modPeso');
    classifier.add('Estoy cada vez más flaco', 'modPeso');
    classifier.add('He disminuido mucho mi peso', 'modPeso');
    classifier.add('Disminuí de peso', 'modPeso');
    classifier.add('La ropa ya no me queda', 'modPeso');
    classifier.add('Ya no me queda mi ropa', 'modPeso');
    classifier.add('Tengo que comprar nueva ropa, ya no me queda nada', 'modPeso');
    classifier.add('Estoy muy delgado', 'modPeso');
    classifier.add('He adelgazado mucho', 'modPeso');
    classifier.add('He estado adelgazando mucho', 'modPeso');
    classifier.add('He adelgazado mucho estos días', 'modPeso');
    classifier.add('He estado adelgazando mucho estos días', 'modPeso');
    classifier.add('Necesito comer más', 'modPeso');
    classifier.add('Bajé 10 kilos', 'modPeso');
    classifier.add('Bajé 2 kilos', 'modPeso');
    classifier.add('Bajé 6 kilos', 'modPeso');
    classifier.add('He bajado 20 kilos', 'modPeso');
    classifier.add('He bajado 10 kilos en lo que va del año', 'modPeso');
    classifier.add('Di un bajón de peso', 'modPeso');
    classifier.add('He dado un bajón de peso', 'modPeso');
    classifier.add('Estoy dando un bajón de peso', 'modPeso');
    //Aumentar de peso
    classifier.add('Subí de peso', 'modPeso');
    classifier.add('Aumente de peso', 'modPeso');
    classifier.add('Incremente de peso', 'modPeso');
    classifier.add('Ahora peso más', 'modPeso');
    classifier.add('Peso más', 'modPeso');
    classifier.add('He subido de peso', 'modPeso');
    classifier.add('He subido mucho de peso', 'modPeso');
    classifier.add('He subido mucho de peso estos meses', 'modPeso');
    classifier.add('He aumentado de peso', 'modPeso');
    classifier.add('He aumentado mucho de peso', 'modPeso');
    classifier.add('He aumentado mucho de peso estos meses', 'modPeso');
    classifier.add('He estado aumentando de peso', 'modPeso');
    classifier.add('He estado aumentando mucho de peso', 'modPeso');
    classifier.add('He estado aumentando mucho de peso estos meses', 'modPeso');
    classifier.add('He estado subiendo de peso', 'modPeso');
    classifier.add('He estado subiendo mucho de peso', 'modPeso');
    classifier.add('He estado subiendo mucho de peso estos meses', 'modPeso');
    classifier.add('Estoy subiendo de peso', 'modPeso');
    classifier.add('Estoy subiendo demasiado de peso', 'modPeso');
    classifier.add('Estoy aumentando de peso', 'modPeso');
    classifier.add('Estoy aumentando demasiado de peso', 'modPeso');
    classifier.add('Estoy ya muy gordo', 'modPeso');
    classifier.add('Estoy gordo', 'modPeso');
    classifier.add('He aumentado mucho mi peso', 'modPeso');
    classifier.add('Aumenté de peso', 'modPeso');
    classifier.add('Estoy muy gordo', 'modPeso');
    classifier.add('He engordado mucho', 'modPeso');
    classifier.add('He engordado mucho estos días', 'modPeso');
    classifier.add('Necesito dejar de comer', 'modPeso');
    classifier.add('Subí 10 kilos', 'modPeso');
    classifier.add('Subí 2 kilos', 'modPeso');
    classifier.add('Subí 6 kilos', 'modPeso');
    classifier.add('He subido 20 kilos', 'modPeso');
    classifier.add('He subido 10 kilos en lo que va del año', 'modPeso');
    classifier.add('Di un subidón de peso', 'modPeso');
    classifier.add('He dado un subidón de peso', 'modPeso');
    classifier.add('Estoy dando un subidón de peso', 'modPeso');
    //Bajo apetito
    classifier.add('No tengo apetito', 'modPeso');
    classifier.add('Casi no tengo apetito', 'modPeso');
    classifier.add('No tengo hambre', 'modPeso');
    classifier.add('Casi no tengo hambre', 'modPeso');
    classifier.add('No se me antoja nada', 'modPeso');
    classifier.add('No tengo antojo de nada', 'modPeso');
    classifier.add('No he comido nada', 'modPeso');
    classifier.add('No he comido nada hoy', 'modPeso');
    classifier.add('No comí nada', 'modPeso');
    classifier.add('No comí', 'modPeso');
    classifier.add('No comí nada ayer', 'modPeso');
    classifier.add('No he comido mucho', 'modPeso');
    classifier.add('No quiero comer nada', 'modPeso');
    classifier.add('No quiero comer', 'modPeso');
    classifier.add('No como', 'modPeso');
    classifier.add('Me lleno con cualquier cosa', 'modPeso');
    classifier.add('Estoy lleno todo el tiempo', 'modPeso');
    classifier.add('Pensar en comida me da nauseas', 'modPeso');
    classifier.add('No tengo ganas de comer', 'modPeso');
    classifier.add('Ultimamente no tengo ganas de comer', 'modPeso');
    classifier.add('No tengo ganas de comer mariscos', 'modPeso');
    classifier.add('No tengo muchas ganas de comer', 'modPeso');
    classifier.add('No tengo muchas ganas de comer nada', 'modPeso');
    classifier.add('No tengo muchas ganas de comer una pizza', 'modPeso');
    classifier.add('No he tenido ganas de comer', 'modPeso');
    classifier.add('Ultimamente no he tenido ganas de comer mariscos', 'modPeso');
    classifier.add('Estos días no he tenido muchas ganas de comer', 'modPeso');
    classifier.add('No he tenido muchas ganas de comer una pizza', 'modPeso');

    //Aumento apetito
    classifier.add('Tengo mucho apetito', 'modPeso');
    classifier.add('Tengo hambre', 'modPeso');
    classifier.add('Tengo mucha hambre', 'modPeso');
    classifier.add('Se me antoja todo', 'modPeso');
    classifier.add('Tengo antojo de todo', 'modPeso');
    classifier.add('Tengo antojo', 'modPeso');
    classifier.add('He comido muchas veces en el día', 'modPeso');
    classifier.add('He comido mucho hoy', 'modPeso');
    classifier.add('Comí mucho', 'modPeso');
    classifier.add('Comí', 'modPeso');
    classifier.add('Comí mucho ayer', 'modPeso');
    classifier.add('He comido mucho', 'modPeso');
    classifier.add('Quiero comer de todo', 'modPeso');
    classifier.add('Quiero comer', 'modPeso');
    classifier.add('No quedo satisfecho', 'modPeso');
    classifier.add('No quedo satisfecho con nada', 'modPeso');
    classifier.add('Pienso en comida todo el tiempo', 'modPeso');
    classifier.add('Pienso en comida', 'modPeso');
    classifier.add('Pienso en comer todo el tiempo', 'modPeso');
    classifier.add('Pienso en comer', 'modPeso');
    classifier.add('Tengo ganas de comer', 'modPeso');
    classifier.add('Ultimamente tengo ganas de comer', 'modPeso');
    classifier.add('Tengo ganas de comer mariscos', 'modPeso');
    classifier.add('Tengo muchas ganas de comer', 'modPeso');
    classifier.add('Tengo muchas ganas de comer una pizza', 'modPeso');
    classifier.add('He tenido ganas de comer', 'modPeso');
    classifier.add('Ultimamente he tenido ganas de comer mariscos', 'modPeso');
    classifier.add('Estos días he tenido muchas ganas de comer', 'modPeso');
    classifier.add('He tenido muchas ganas de comer una pizza', 'modPeso');

    //**********************************************************************************************************

    //Frases con etiqueta sinModPeso
    classifier.add('Me gusta bastante el futbol', 'sinModPeso');
    classifier.add('Suelo cansarme bastante depues de ir a correr', 'sinModPeso');
    classifier.add('Pienso en cosas malas todo el tiempo', 'sinModPeso');
    classifier.add('Desde ayer no tengo ganas de nada', 'sinModPeso');
    classifier.add('Ayer el metro estaba muy lleno', 'sinModPeso');
    classifier.add('He aumentado de estatura estos ultimos días', 'sinModPeso');
    classifier.add('He aumentado mi score en este juego', 'sinModPeso');
    classifier.add('Estoy subiendo unas fotos', 'sinModPeso');
    classifier.add('No me gusta tener que subir esas escaleras', 'sinModPeso');
    classifier.add('me lo impide', 'sinModPeso');
    classifier.add('es como si mi subconsciente me negara la felicidad', 'sinModPeso');
    classifier.add('como si dentro de mi supiera que no merezco ser feliz', 'sinModPeso');
    classifier.add('por que no lo valgo', 'sinModPeso');
    classifier.add('por que soy tonto', 'sinModPeso');
    classifier.add('incapaz de sobresalir', 'sinModPeso');
    classifier.add('siempre estoy hecho mierda', 'sinModPeso');
    classifier.add('A veces quisiera hablarlo con alguien', 'sinModPeso');
    classifier.add('No tengo permitido parecer débil', 'sinModPeso');
    classifier.add('Así que me lo guardo', 'sinModPeso');
    classifier.add('Crece hasta que me abrasa', 'sinModPeso');
    classifier.add('a veces honestamente pienso que nunca pasara', 'sinModPeso');
    classifier.add('Talvez se la ultima ya que no puedo más con esta agonía', 'sinModPeso');
    classifier.add('esta desesperación ya me canse de llorar', 'sinModPeso');
    classifier.add('no ser entendido me odio', 'sinModPeso');
    classifier.add('esta sera mi salida para todo', 'sinModPeso');
    classifier.add('la violencia la sufrimos todos', 'sinModPeso');
    classifier.add('se manifiestan contra la violencia', 'sinModPeso');
    classifier.add('defendernos entre todos', 'sinModPeso');
    classifier.add('solo quiero morir para que desaparezca todo mis problemas ya que no se que hacer enserio', 'sinModPeso');
    classifier.add('He pensando mucho en quitarme la vida ', 'sinModPeso');
    classifier.add('Tengo Depresión severa', 'sinModPeso');
    classifier.add('dificil estoy con Venalafaxina', 'sinModPeso');
    classifier.add('ahora tengo un gran bajón emocional', 'sinModPeso');
    classifier.add('a pesar de la Psiquiatría', 'sinModPeso');
    classifier.add('Chicos necesito algún consejo', 'sinModPeso');
    classifier.add('Suele compararme mucho', 'sinModPeso');
    classifier.add('Ya no siento pasión por nada', 'sinModPeso');
    classifier.add('Pienso suicidarme cuando tenga 26', 'sinModPeso');
    classifier.add('No me considero perfeccionista', 'sinModPeso');
    classifier.add('No me soporto', 'sinModPeso');
    classifier.add('Estoy exahusto', 'sinModPeso');
    classifier.add('En un fin de semana lleno de noticias terribles', 'sinModPeso');
    classifier.add('una vez más', 'sinModPeso');
    classifier.add('mientras esperaba reflexionaba con mi amiga cómo luego una es bien ingenua', 'sinModPeso');
    classifier.add('ya no tengo pilas para nada', 'sinModPeso');
    classifier.add('Así como algunas marcas cambian de nombre en países diferentes', 'sinModPeso');
    classifier.add('como: “Este tiempo es más largo que aquel otro”', 'sinModPeso');
    classifier.add('como: “Este es doble que aquél”', 'sinModPeso');
    classifier.add('al menos tienes hijos', 'sinModPeso');
    classifier.add('Ya me quede sin dinero', 'sinModPeso');
    classifier.add('es como si estoy en una fiesta donde hay de todo', 'sinModPeso');
    classifier.add('comidas', 'sinModPeso');
    classifier.add('no queda nada más que quieras disfrutar', 'sinModPeso');
    classifier.add('no sé', 'sinModPeso');
    classifier.add('no daba explicaciones un día quedaba conmigo', 'sinModPeso');
    classifier.add('Hola soy nueva en esta página y no sé cómo funciona', 'sinModPeso');
    classifier.add('Todos tienen sus trabajos y yo no', 'sinModPeso');
    classifier.add('se puede', 'sinModPeso');
    classifier.add('por mi trabajo no me da tiempo de dedicarle como quisiera', 'sinModPeso');
    classifier.add('quiere quedarse conmigo ', 'sinModPeso');
    classifier.add('No stoy enferma es solo k no me compensa despertar', 'sinModPeso');
    classifier.add('No me importa hablar con gente de cualquier lugar', 'sinModPeso');
    classifier.add('quiero ser independiente pero esta maldita ansiedad no me deja', 'sinModPeso');
    classifier.add('un solo dia a pesar de tomar mis medicamentos no puedo salir sola', 'sinModPeso');
    classifier.add('todo me marea no puedo estar entre tanta gente no aguanto a caminar mucho todo el tiempo tiemblo toda', 'sinModPeso');
    classifier.add('ha sido muy difícil porqué a pesar de tener muchas amistades  siempre me he sentido sola', 'sinModPeso');
    classifier.add('quiero contar que aparentemente no tengo problemas de tipo economico', 'sinModPeso');
    classifier.add('Necesito algo que me motivara, pero no encuentro nada', 'sinModPeso');
    classifier.add('no quiero hacerles daño', 'sinModPeso');
    classifier.add('me cuesta mucho no derrumbarme delante de él', 'sinModPeso');
    classifier.add('actualmente estoy en otro país ejerciendo', 'sinModPeso');
    classifier.add('de verdad no termino de adaptarme', 'sinModPeso');
    classifier.add('pero no renuncio porque tengo gastos', 'sinModPeso');
    classifier.add('quiero reunir', 'sinModPeso');
    classifier.add('Ultimamente he sentido mucho odio hacia todo', 'sinModPeso');
    classifier.add('mi primera experiencia como Director Técnico', 'sinModPeso');
    classifier.add('verás como todo se vuelve más sencillo', 'sinModPeso');
    classifier.add('A pesar de todo', 'sinModPeso');
    classifier.add('Estoy como zombie tomandome un té', 'sinModPeso');
    classifier.add('ya empecé con adicciones', 'sinModPeso');
    classifier.add('estoy bajo medicamento', 'sinModPeso');
    classifier.add('como acabada ya no me arreglo como antes para salir', 'sinModPeso');
    classifier.add('sentir cada paso como retumba en mi cabeza', 'sinModPeso');
    classifier.add('ni siquiera yo mismo sería alguien con quien quiera estar', 'sinModPeso');
    classifier.add('aislado de la gente sumido en tus pensamientos negativos como recuperar amistades pérdidas', 'sinModPeso');
    classifier.add('no se cómo expresar aquello', 'sinModPeso');
    classifier.add('No sé cómo escribir esto', 'sinModPeso');
    classifier.add('Quiero llorar y gritar pero no puedo', 'sinModPeso');
    classifier.add('que tu familia no confía en ti requiero quiero compartir', 'sinModPeso');
    classifier.add('bipolaridad no me puedo acostumbrar', 'sinModPeso');
    classifier.add('Tengo miedo no puedo más', 'sinModPeso');
    classifier.add('No quiero seguir', 'sinModPeso');
    classifier.add('he perdido las ganas', 'sinModPeso');
    classifier.add('Como antes', 'sinModPeso');
    classifier.add('tantos pensamientos toxicos que solo llenan me cabeza', 'sinModPeso');
    classifier.add('me comía la cabeza por cualquier asunto por tonto que fuera', 'sinModPeso');
    classifier.add('No quiero saber nada de nadie', 'sinModPeso');
    classifier.add('Estoy bien de animo, pero no tengo ganas de nada', 'sinModPeso');
    classifier.add('Por eso me llena de rabia que otros tengan algo que yo quiero', 'sinModPeso');
    classifier.add('Noticias de ultimo minuto: América ganó el juicio contra [@Independiente](https://twitter.com/Independiente) y el rojo debe pagar cerca de 2MDD. Los argentinos no quieren y van a apelar la sanción.', 'sinModPeso');
    classifier.add('Eres mexicano? Trabaja con Nosotros!: EMPLEO DESDE CASA! En LIONBRIDGE una de las empresas mas prestigiosas según FORBES, estamos buscando colaboradores para un proyecto de traducción y transcripción de contenido, las tareas son sumamente sencillas, 100% desde casa y flexible. Es simple, nada mas debes aplicar acá: [http://datacollectiones-MX.register-lionbridge.com](http://datacollection_es-mx.register-lionbridge.com/)', 'sinModPeso');
    classifier.add('¿Ya listos para tomar las armas ahora que Estados Unidos invada México?: ¿Y como serían los niños héroes del siglo XXI? Van a hacer Facebook Live de enredarse en la bandera para caer desde la Estela de Luz?', 'sinModPeso');
    //classifier.add('', 'sinModPeso');
    //classifier.add('', 'sinModPeso');
    //classifier.add('', 'sinModPeso');
    //classifier.add('', 'sinModPeso');
    //classifier.add('', 'sinModPeso');
    //classifier.add('', 'sinModPeso');
    





    await classifier.train();
    console.log('Clasificador A3 entrenado');
    return classifier;
}

module.exports = {
    train
}