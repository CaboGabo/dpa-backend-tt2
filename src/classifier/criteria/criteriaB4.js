//Identificador de baja autoestima
const {
	NlpManager
} = require('node-nlp');
const manager = new NlpManager({
	languages: ['es']
});
const fs = require('fs');
const classifier = require('../classifier.js');

let modelTag = './modelB4.nlp';
let minOcurrences = 3;

async function trainnlp(manager) {
	if (fs.existsSync(modelTag)) {
		manager.load(modelTag);
		return;
	}

	//Explicito
	manager.addDocument('es', 'Tengo una autoestima muy baja', 'bajaAutoestima');
	manager.addDocument('es', 'Mi autoestima está por los suelos', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo autoestima', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero de baja autoestima', 'bajaAutoestima');
	manager.addDocument('es', 'autoestima', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo muy buena autoestima', 'bajaAutoestima');

	//Me considero...
	//No se valoran, ni sus talentos ni sus posibilidades.

	manager.addDocument('es', 'No me quiero', 'bajaAutoestima');
	manager.addDocument('es', 'No me aprecio', 'bajaAutoestima');
	manager.addDocument('es', 'Me odio', 'bajaAutoestima');
	manager.addDocument('es', 'A veces me odio', 'bajaAutoestima');
	manager.addDocument('es', 'Me desprecio', 'bajaAutoestima');
	manager.addDocument('es', 'Me aborrezco', 'bajaAutoestima');
	manager.addDocument('es', 'No quiero saber nada de mi', 'bajaAutoestima');
	manager.addDocument('es', 'Poco valorado', 'bajaAutoestima');
	manager.addDocument('es', 'Poco valorada', 'bajaAutoestima');
	manager.addDocument('es', 'Me siento poco valorado', 'bajaAutoestima');
	manager.addDocument('es', 'Me siento poco valorada', 'bajaAutoestima');
	manager.addDocument('es', 'No valgo', 'bajaAutoestima');
	manager.addDocument('es', 'No valgo nada', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo valor', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo valor alguno', 'bajaAutoestima');
	manager.addDocument('es', 'Soy malo', 'bajaAutoestima');
	manager.addDocument('es', 'Soy mala', 'bajaAutoestima');
	manager.addDocument('es', 'Soy muy malo', 'bajaAutoestima');
	manager.addDocument('es', 'Soy muy mala', 'bajaAutoestima');
	manager.addDocument('es', 'Soy bastante malo', 'bajaAutoestima');
	manager.addDocument('es', 'Soy bastante malq', 'bajaAutoestima');
	manager.addDocument('es', 'Soy el peor', 'bajaAutoestima');
	manager.addDocument('es', 'Soy la peor', 'bajaAutoestima');
	manager.addDocument('es', 'Soy lo peor', 'bajaAutoestima');
	manager.addDocument('es', 'Soy inferior', 'bajaAutoestima');
	manager.addDocument('es', 'Soy un perdedor', 'bajaAutoestima');
	manager.addDocument('es', 'Soy una perdedora', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero malo', 'bajaAuotestima');
	manager.addDocument('es', 'Me considero mala', 'bajaAuotestima');
	manager.addDocument('es', 'Me considero muy malo', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero muy mala', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero bastante malo', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero bastante mala', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero el peor', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero la peor', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero lo peor', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero inferior', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero un perdedor', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero una perdedora', 'bajaAutoestima');
	manager.addDocument('es', 'Me hace que no valgo nada', 'bajaAutoestima');
	manager.addDocument('es', 'Me hace que no tengo valor', 'bajaAutoestima');
	manager.addDocument('es', 'Me hace sentir el peor', 'bajaAutoestima');
	manager.addDocument('es', 'A veces me hace sentir el peor', 'bajaAutoestima');
	manager.addDocument('es', 'Me hace sentir la peor', 'bajaAutoestima');
	manager.addDocument('es', 'Me hace sentir lo peor', 'bajaAutoestima');
	manager.addDocument('es', 'Me hace sentir inferior', 'bajaAutoestima');
	manager.addDocument('es', 'Me hace sentir un perdedor', 'bajaAutoestima');
	manager.addDocument('es', 'Me hace sentir una perdedora', 'bajaAutoestima');
	manager.addDocument('es', 'Inseguridades', 'bajaAutoestima');
	manager.addDocument('es', 'Mis inseguridades', 'bajaAutoestima');

	manager.addDocument('es', 'Todos son mejores que yo', 'bajaAutoestima');
	manager.addDocument('es', 'Siento que todos son mejores que yo', 'bajaAutoestima');
	manager.addDocument('es', 'Todos son más buenos que yo', 'bajaAutoestima');
	manager.addDocument('es', 'Siento que todos son más buenos que yo', 'bajaAutoestima');
	manager.addDocument('es', 'Todos me ganan', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo nada bueno', 'bajaAutoestima');
	manager.addDocument('es', 'No sirvo para nada', 'bajaAutoestima');
	manager.addDocument('es', 'No soy competente', 'bajaAutoestima');
	manager.addDocument('es', 'Siento que no soy competente', 'bajaAutoestima');
	manager.addDocument('es', 'No me considero competente', 'bajaAutoestima');
	manager.addDocument('es', 'Soy un incompetente', 'bajaAutoestima');
	manager.addDocument('es', 'Siento que soy un incompetente', 'bajaAutoestima');
	manager.addDocument('es', 'A veces siento que soy un incompetente', 'bajaAutoestima');
	manager.addDocument('es', 'Soy un bueno para nada', 'bajaAutoestima');
	manager.addDocument('es', 'Me hace sentir un bueno para nada', 'bajaAutoestima');
	manager.addDocument('es', 'Soy una buena para nada', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero un incompetente', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero una incompetente', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero un bueno para nada', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero una buena para nada', 'bajaAutoestima');
	manager.addDocument('es', 'No soy bueno para nada', 'bajaAutoestima');
	manager.addDocument('es', 'Me hace sentir que no soy bueno para nada', 'bajaAutoestima');
	manager.addDocument('es', 'No soy buena para nada', 'bajaAutoestima');
	manager.addDocument('es', 'No soy bueno', 'bajaAutoestima');
	manager.addDocument('es', 'No soy buena', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo ningun talento', 'bajaAutoestima');
	manager.addDocument('es', 'No soy talentoso', 'bajaAutoestima');
	manager.addDocument('es', 'No soy apto', 'bajaAutoestima');
	manager.addDocument('es', 'No soy apta', 'bajaAutoestima');
	manager.addDocument('es', 'Me hace sentir que no soy apta', 'bajaAutoestima');
	manager.addDocument('es', 'No soy apto para nada', 'bajaAutoestima');
	manager.addDocument('es', 'No soy apta para nada', 'bajaAutoestima');
	manager.addDocument('es', 'No me considero bueno para nada', 'bajaAutoestima');
	manager.addDocument('es', 'No me considero buena para nada', 'bajaAutoestima');
	manager.addDocument('es', 'No me considero bueno', 'bajaAutoestima');
	manager.addDocument('es', 'No me considero buena', 'bajaAutoestima');
	manager.addDocument('es', 'No me considero talentoso', 'bajaAutoestima');
	manager.addDocument('es', 'No me considero talentosa', 'bajaAutoestima');
	manager.addDocument('es', 'No me considero apto', 'bajaAutoestima');
	manager.addDocument('es', 'No me considero apta', 'bajaAutoestima');
	manager.addDocument('es', 'No me considero apto para nada', 'bajaAutoestima');
	manager.addDocument('es', 'No me considero apta para nada', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo aptitudes', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo aptitudes de nada', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo ninguna aptitud', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo posibilidades', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo posibilidades de nada', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo ninguna posibilidad', 'bajaAutoestima');
	manager.addDocument('es', 'Soy poco interesante', 'bajaAutoestima');
	manager.addDocument('es', 'Me considero poco interesante', 'bajaAutoestima');
	manager.addDocument('es', 'No soy interesante', 'bajaAutoestima');
	manager.addDocument('es', 'No le intereso a nadie', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo nada interesante', 'bajaAutoestima');
	manager.addDocument('es', 'No soy original', 'bajaAutoestima');
	manager.addDocument('es', 'No soy diferente', 'bajaAutoestima');
	manager.addDocument('es', 'Nadie me quiere', 'bajaAutoestima');
	manager.addDocument('es', 'Nadie me hace caso', 'bajaAutoestima');
	manager.addDocument('es', 'Nadie me hace pela', 'bajaAutoestima');
	manager.addDocument('es', 'A nadie le agrado', 'bajaAutoestima');
	manager.addDocument('es', 'A nadie le gusto', 'bajaAutoestima');
	manager.addDocument('es', 'Me odio', 'bajaAutoestima');
	manager.addDocument('es', 'Me odio con todo mi ser', 'bajaAutoestima');
	manager.addDocument('es', 'Me odio hasta el punto de querer desaparecer', 'bajaAutoestima');
	manager.addDocument('es', 'Me aborrezco', 'bajaAutoestima');
	manager.addDocument('es', 'A veces me aborrezco ', 'bajaAutoestima');



	//Piensan que no pueden / que no saben nada /  que no lo van a conseguir.

	manager.addDocument('es', 'No puedo', 'bajaAutoestima');
	manager.addDocument('es', 'No se si pueda', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo el poder', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo la capacidad', 'bajaAutoestima');
	manager.addDocument('es', 'No soy capaz', 'bajaAutoestima');
	manager.addDocument('es', 'No me considero capaz', 'bajaAutoestima');
	manager.addDocument('es', 'No me siento capaz', 'bajaAutoestima');

	manager.addDocument('es', 'No sé nada', 'bajaAutoestima');
	manager.addDocument('es', 'No estoy preparado', 'bajaAutoestima');
	manager.addDocument('es', 'No sé absolutamente nada', 'bajaAutoestima');
	manager.addDocument('es', 'Soy un ignorante', 'bajaAutoestima');
	manager.addDocument('es', 'Soy un don nadie', 'bajaAutoestima');

	manager.addDocument('es', 'No conseguiré mis objetivos', 'bajaAutoestima');
	manager.addDocument('es', 'No conseguiré mis metas', 'bajaAutoestima');
	manager.addDocument('es', 'No voy a conseguir nada', 'bajaAutoestima')
	manager.addDocument('es', 'No lo voy a conseguir', 'bajaAutoestima');
	manager.addDocument('es', 'No lo conseguire', 'bajaAutoestima');
	manager.addDocument('es', 'No voy a conseguir nada', 'bajaAutoestima');
	manager.addDocument('es', 'No podré conseguirlo', 'bajaAutoestima');
	manager.addDocument('es', 'No puedo conseguirlo', 'bajaAutoestima');
	manager.addDocument('es', 'No se si pueda conseguirlo', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo el poder de conseguirlo', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo la capacidad para conseguirlo', 'bajaAutoestima');
	manager.addDocument('es', 'No soy capaz de conseguirlo', 'bajaAutoestima');
	manager.addDocument('es', 'No me siento capaz de conseguirlo', 'bajaAutoestima');
	manager.addDocument('es', 'No voy a lograr nada', 'bajaAutoestima')
	manager.addDocument('es', 'No voy a lograrlo', 'bajaAutoestima');
	manager.addDocument('es', 'No lograre mis objetivos', 'bajaAutoestima');
	manager.addDocument('es', 'No lograre mis metas', 'bajaAutoestima');
	manager.addDocument('es', 'No lograre nada', 'bajaAutoestima');
	manager.addDocument('es', 'No lo lograre', 'bajaAutoestima');
	manager.addDocument('es', 'No podré lograrlo', 'bajaAutoestima');
	manager.addDocument('es', 'No puedo lograrlo', 'bajaAutoestima');
	manager.addDocument('es', 'No se si pueda lograrlo', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo el poder de lograrlo', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo la capacidad para lograrlo', 'bajaAutoestima');
	manager.addDocument('es', 'No soy capaz de lograrlo', 'bajaAutoestima');
	manager.addDocument('es', 'No me siento capaz de lograrlo', 'bajaAutoestima');
	manager.addDocument('es', 'No alcanzaré mis objetivos', 'bajaAutoestima');
	manager.addDocument('es', 'No alcanzaré mis metas', 'bajaAutoestima');
	manager.addDocument('es', 'No alcanzaré nada', 'bajaAutoestima');
	manager.addDocument('es', 'No lo alcanzaré', 'bajaAutoestima');
	manager.addDocument('es', 'No podré alcanzarlo', 'bajaAutoestima');
	manager.addDocument('es', 'No puedo alcanzarlo', 'bajaAutoestima');
	manager.addDocument('es', 'No se si pueda alcanzarlo', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo el poder de alcanzarlo', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo la capacidad para alcanzarlo', 'bajaAutoestima');
	manager.addDocument('es', 'No soy capaz de alcanzarlo', 'bajaAutoestima');
	manager.addDocument('es', 'No me siento capaz de alcanzarlo', 'bajaAutoestima');

	//Son muy ansiosos y nerviosos
	manager.addDocument('es', 'Soy ansioso', 'bajaAutoestima');
	manager.addDocument('es', 'Soy muy ansioso', 'bajaAutoestima');
	manager.addDocument('es', 'Tengo ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Tengo mucha ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Tengo tanta ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Me ha creado ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Esto me ha creado ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Esta situacion me ha creado tanta ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Este trabajo me ha creado tanta ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Me provoca ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Me ha provocado ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Me ha provocado bastante ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Sufro de ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy ansioso', 'bajaAutoestima');
	manager.addDocument('es', 'He estado ansioso', 'bajaAutoestima');
	manager.addDocument('es', 'He estado ansioso estos dias', 'bajaAutoestima');
	manager.addDocument('es', 'Ultimamente he estado ansioso', 'bajaAutoestima');
	manager.addDocument('es', 'Ayer estuve ansioso', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy muy ansioso', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy con mucha ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Me encuentro con mucha ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'Soy nervioso', 'bajaAutoestima');
	manager.addDocument('es', 'Soy muy nervioso', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy ansiosa', 'bajaAutoestima');
	manager.addDocument('es', 'Hoy estoy ansiosa', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy muy ansiosa', 'bajaAutoestima');
	manager.addDocument('es', 'He estado ansiosa', 'bajaAutoestima');
	manager.addDocument('es', 'He estado ansiosa estos dias', 'bajaAutoestima');
	manager.addDocument('es', 'Ultimamente he estado ansiosa', 'bajaAutoestima');
	manager.addDocument('es', 'Soy ansiosa', 'bajaAutoestima');
	manager.addDocument('es', 'Soy muy ansiosa', 'bajaAutoestima');
	manager.addDocument('es', 'Soy nerviosa', 'bajaAutoestima');
	manager.addDocument('es', 'Soy muy nerviosa', 'bajaAutoestima');
	manager.addDocument('es', 'Hay nerviosismo', 'bajaAutoestima');
	manager.addDocument('es', 'Hay mucho nerviosismo', 'bajaAutoestima');
	manager.addDocument('es', 'Tengo nerviosismo', 'bajaAutoestima');
	manager.addDocument('es', 'Tengo mucho nerviosismo', 'bajaAutoestima');
	manager.addDocument('es', 'es asi Tengo ansiedad', 'bajaAutoestima');


	//Personas aisladas, tímidas y casi no tienen amigos o muy pocos.
	manager.addDocument('es', 'No tengo amigos', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo ningun amigo', 'bajaAutoestima');
	manager.addDocument('es', 'No tengo a nadie', 'bajaAutoestima');
	manager.addDocument('es', 'Nunca he tenido amigos', 'bajaAutoestima');
	manager.addDocument('es', 'Nunca he tenido ningun amigo', 'bajaAutoestima');
	manager.addDocument('es', 'Nunca he tenido a nadie', 'bajaAutoestima');
	manager.addDocument('es', 'Sin amigos', 'bajaAutoestima');
	manager.addDocument('es', 'Soy hermético', 'bajaAutoestima');
	manager.addDocument('es', 'Me caracterizo por ser hermético', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre me he caracterizado por ser hermético', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre he sido hermético', 'bajaAutoestima');
	manager.addDocument('es', 'Soy hermética', 'bajaAutoestima');
	manager.addDocument('es', 'Me caracterizo por ser hermética', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre he sido hermética', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre me he caracterizado por ser hermética', 'bajaAutoestima');
	manager.addDocument('es', 'Soy bastante hermético', 'bajaAutoestima');
	manager.addDocument('es', 'Soy bastante hermética', 'bajaAutoestima');
	manager.addDocument('es', 'Soy aislado', 'bajaAutoestima');
	manager.addDocument('es', 'He sido aislado', 'bajaAutoestima');
	manager.addDocument('es', 'Soy aislada', 'bajaAutoestima');
	manager.addDocument('es', 'He sido aislada', 'bajaAutoestima');
	manager.addDocument('es', 'Soy muy aislado', 'bajaAutoestima');
	manager.addDocument('es', 'Me caracterizo por ser aislado', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre me he caracterizado por ser aislado', 'bajaAutoestima');
	manager.addDocument('es', 'Soy muy aislada', 'bajaAutoestima');
	manager.addDocument('es', 'Me caracterizo por ser aislada', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre me he caracterizado por ser aislada', 'bajaAutoestima');
	manager.addDocument('es', 'Soy tímido', 'bajaAutoestima');
	manager.addDocument('es', 'Me caracterizo por ser tímido', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre me he caracterizado por ser timido', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre he sido tímido', 'bajaAutoestima');
	manager.addDocument('es', 'He sido algo tímido', 'bajaAutoestima');
	manager.addDocument('es', 'Soy tímida', 'bajaAutoestima');
	manager.addDocument('es', 'Me caracterizo por ser tímida', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre me he caracterizado por ser timida', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre he sido tímida', 'bajaAutoestima');
	manager.addDocument('es', 'He sido algo tímida', 'bajaAutoestima');
	manager.addDocument('es', 'Soy bastante tímido', 'bajaAutoestima');
	manager.addDocument('es', 'Soy bastante tímida', 'bajaAutoestima');
	manager.addDocument('es', 'Me da miedo la gente', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre me ha dado miedo la gente', 'bajaAutoestima');
	manager.addDocument('es', 'Me da miedo acercarme a la gente', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre me ha dado miedo acercarme a la gente', 'bajaAutoestima');
	manager.addDocument('es', 'No soy social', 'bajaAutoestima');
	manager.addDocument('es', 'Nunca he sido social', 'bajaAutoestima');
	manager.addDocument('es', 'Nunca he sido muy social', 'bajaAutoestima');
	manager.addDocument('es', 'No soy muy social', 'bajaAutoestima');
	manager.addDocument('es', 'Soy antisocial', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre he sido antisocial', 'bajaAutoestima');
	manager.addDocument('es', 'Me caracterizo por ser antisocial', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre me he caracterizado por ser antisocial', 'bajaAutoestima');
	manager.addDocument('es', 'Aislado de la gente', 'bajaAutoestima');
	manager.addDocument('es', 'aislado de la gente sumido en tus pensamientos negativos como recuperar amistades pérdidas', 'bajaAutoestima');
	manager.addDocument('es', 'Aislado de las personas', 'bajaAutoestima');
	manager.addDocument('es', 'Aislado de las sociedad', 'bajaAutoestima');
	manager.addDocument('es', 'Aislado de mis familia', 'bajaAutoestima');
	
	manager.addDocument('es', 'Estoy solo', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy siempre solo', 'bajaAutoestima');
	manager.addDocument('es', 'Al final cuando miro a mi alrededor estoy siempre solo', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy muy solo', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy solito', 'bajaAutoestima');
	manager.addDocument('es', 'Me siento solo', 'bajaAutoestima');
	manager.addDocument('es', 'Me siento muy solo', 'bajaAutoestima');
	manager.addDocument('es', 'Me siento solito', 'bajaAutoestima');
	manager.addDocument('es', 'Me he sentido solo', 'bajaAutoestima');
	manager.addDocument('es', 'Me he sentido solo ultimamente', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre me he sentido solo', 'bajaAutoestima');
	manager.addDocument('es', 'Estos días me he sentido solo', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy sola', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy siempre sola', 'bajaAutoestima');
	manager.addDocument('es', 'Al final estoy siempre sola', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy muy sola', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy solita', 'bajaAutoestima');
	manager.addDocument('es', 'Me siento sola', 'bajaAutoestima');
	manager.addDocument('es', 'Me siento muy sola', 'bajaAutoestima');
	manager.addDocument('es', 'Me siento solita', 'bajaAutoestima');
	manager.addDocument('es', 'Me he sentido sola', 'bajaAutoestima');
	manager.addDocument('es', 'Me he sentido sola ultimamente', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre me he sentido sola', 'bajaAutoestima');
	manager.addDocument('es', 'Estos días me he sentido sola', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy en soledad', 'bajaAutoestima');
	manager.addDocument('es', 'No puedo con esta soledad', 'bajaAutoestima');
	manager.addDocument('es', 'Mi soledad', 'bajaAutoestima');
	manager.addDocument('es', 'Esta soledad', 'bajaAutoestima');
	manager.addDocument('es', 'Esta soledad me está matando', 'bajaAutoestima');
	manager.addDocument('es', 'Soy solitario', 'bajaAutoestima');
	manager.addDocument('es', 'Me siento solitario', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre he sido solitario', 'bajaAutoestima');
	manager.addDocument('es', 'Me siento un ser solitario', 'bajaAutoestima');
	manager.addDocument('es', 'Soy solitaria', 'bajaAutoestima');
	manager.addDocument('es', 'Me siento solitaria', 'bajaAutoestima');
	manager.addDocument('es', 'Siempre he sido solitaria', 'bajaAutoestima');

	//Pesimista
	manager.addDocument('es', 'Soy feo', 'bajaAutoestima');
	manager.addDocument('es', 'Soy fea', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy feo', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy fea', 'bajaAutoestima');
	manager.addDocument('es', 'Soy horrible', 'bajaAutoestima');
	manager.addDocument('es', 'No le gusto a nadie', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy deforme', 'bajaAutoestima');
	manager.addDocument('es', 'Todo va a salir mal', 'bajaAutoestima');
	manager.addDocument('es', 'Seguro saldrá mal', 'bajaAutoestima');
	manager.addDocument('es', 'Seguro todo saldrá mal', 'bajaAutoestima');
	manager.addDocument('es', 'Me va a ir mal', 'bajaAutoestima');
	manager.addDocument('es', 'Me irá mal', 'bajaAutoestima');
	manager.addDocument('es', 'Todo irá mal', 'bajaAutoestima');
	manager.addDocument('es', 'Todo saldrá mal', 'bajaAutoestima');
	manager.addDocument('es', 'Lo peor está por venir', 'bajaAutoestima');
	manager.addDocument('es', 'Se aproxima lo peor', 'bajaAutoestima');
	manager.addDocument('es', 'Se acerca lo peor', 'bajaAutoestima');
	manager.addDocument('es', 'Estoy listo para lo peor', 'bajaAutoestima');
	manager.addDocument('es', 'Pero estoy listo para lo peor', 'bajaAutoestima');

	//OTROS
	manager.addDocument('es', 'no me he mantenido estable en el animo', 'bajaAutoestima');
	manager.addDocument('es', 'ahora tengo un gran bajón emocional', 'bajaAutoestima');
	manager.addDocument('es', 'en q todos seran mejor si no estas', 'bajaAutoestima');
	manager.addDocument('es', 'A alguien más le persigue la sensación de que todo siempre será peor', 'bajaAutoestima');
	manager.addDocument('es', 'pero me siento mal', 'bajaAutoestima');
	manager.addDocument('es', 'me siento tan mal y tan triste', 'bajaAutoestima');
	manager.addDocument('es', 'duele saber que a mi familia no le importo ', 'bajaAutoestima');
	manager.addDocument('es', 'No le importo a nadie', 'bajaAutoestima');
	manager.addDocument('es', 'A nadie le importo', 'bajaAutoestima');
	manager.addDocument('es', 'Tengo muchos defectos', 'bajaAutoestima');
	manager.addDocument('es', 'Tengo un gran defecto', 'bajaAutoestima');
	manager.addDocument('es', 'Quisiera ser otra persona', 'bajaAutoestima');
	manager.addDocument('es', 'Me gustaría ser otra persona', 'bajaAutoestima');
	manager.addDocument('es', 'Tengo el autoestima muy bajo', 'bajaAutoestima');
	manager.addDocument('es', 'Tambien con mucha ansiedad', 'bajaAutoestima');
	manager.addDocument('es', 'ha sido muy difícil porqué a pesar de tener muchas amistades siempre me he sentido sola', 'bajaAutoestima');
	manager.addDocument('es', 'Ya no eres importante', 'bajaAutoestima');
	manager.addDocument('es', 'No eres importante', 'bajaAutoestima');
	manager.addDocument('es', 'No eres importante para nadie', 'bajaAutoestima');
	manager.addDocument('es', 'la depresión está en una tensa calma pero estoy listo para lo peor', 'bajaAutoestima');
	//manager.addDocument('es', '', 'bajaAutoestima');
	//manager.addDocument('es', '', 'bajaAutoestima');
	//manager.addDocument('es', '', 'bajaAutoestima');
	//manager.addDocument('es', '', 'bajaAutoestima');


//**********************************************************************************************************
	//Frases que no contienen la etiqueta
	manager.addDocument('es', 'Soy guapo', 'conAutoestima');
	manager.addDocument('es', 'Soy guapa', 'conAutoestima');
	manager.addDocument('es', 'Soy bello', 'conAutoestima');
	manager.addDocument('es', 'Soy bella', 'conAutoestima');
	manager.addDocument('es', 'Le gusto a todos', 'conAutoestima');
	manager.addDocument('es', 'Le gusto a todas', 'conAutoestima');
	manager.addDocument('es', 'Todo va a salir bien', 'conAutoestima');
	manager.addDocument('es', 'Seguro saldrá bien', 'conAutoestima');
	manager.addDocument('es', 'Seguro todo saldrá bien', 'conAutoestima');
	manager.addDocument('es', 'Me va a ir bien', 'conAutoestima');
	manager.addDocument('es', 'Me irá bien', 'conAutoestima');
	manager.addDocument('es', 'Todo irá bien', 'conAutoestima');
	manager.addDocument('es', 'Todo saldrá bien', 'conAutoestima');

	manager.addDocument('es', 'Tengo amigos', 'conAutoestima');
	manager.addDocument('es', 'Tengo amigas', 'conAutoestima');
	manager.addDocument('es', 'Tengo muchos amigos', 'conAutoestima');
	manager.addDocument('es', 'Soy abierto', 'conAutoestima');
	manager.addDocument('es', 'Soy abierta', 'conAutoestima');
	manager.addDocument('es', 'Soy bastante abierto', 'conAutoestima');
	manager.addDocument('es', 'Soy bastante abierta', 'conAutoestima');
	manager.addDocument('es', 'Soy muy social', 'conAutoestima');
	manager.addDocument('es', 'Soy social', 'conAutoestima');
	manager.addDocument('es', 'Soy extrovertido', 'conAutoestima');
	manager.addDocument('es', 'Soy extrovertida', 'conAutoestima');
	manager.addDocument('es', 'Soy bastante extrovertido', 'conAutoestima');
	manager.addDocument('es', 'Soy bastante extrovertida', 'conAutoestima');
	manager.addDocument('es', 'Soy atrevido', 'conAutoestima');
	manager.addDocument('es', 'Soy atrevida', 'conAutoestima');
	manager.addDocument('es', 'Soy bastante atrevido', 'conAutoestima');
	manager.addDocument('es', 'Soy bastante atrevida', 'conAutoestima');
	manager.addDocument('es', 'No me da miedo', 'conAutoestima');
	manager.addDocument('es', 'No me da miedo nada', 'conAutoestima');
	manager.addDocument('es', 'No me da miedo la gente', 'conAutoestima');
	manager.addDocument('es', 'No me da miedo acercarme a la gente', 'conAutoestima');

	manager.addDocument('es', 'No soy ansioso', 'conAutoestima');
	manager.addDocument('es', 'No soy ansiosa', 'conAutoestima');
	manager.addDocument('es', 'No soy nada ansioso', 'conAutoestima');
	manager.addDocument('es', 'No soy nada ansiosa', 'conAutoestima');
	manager.addDocument('es', 'No soy nervioso', 'conAutoestima');
	manager.addDocument('es', 'No soy nerviosa', 'conAutoestima');
	manager.addDocument('es', 'No soy nada nervioso', 'conAutoestima');
	manager.addDocument('es', 'No soy nada nerviosa', 'conAutoestima');

	manager.addDocument('es', 'Conseguiré mis objetivos', 'conAutoestima');
	manager.addDocument('es', 'Conseguiré mis metas', 'conAutoestima');
	manager.addDocument('es', 'Lo voy a conseguir', 'conAutoestima');
	manager.addDocument('es', 'Lo conseguire', 'conAutoestima');
	manager.addDocument('es', 'Podré conseguirlo', 'conAutoestima');
	manager.addDocument('es', 'Puedo conseguirlo', 'conAutoestima');
	manager.addDocument('es', 'Se que puedo conseguirlo', 'conAutoestima');
	manager.addDocument('es', 'Tengo el poder de conseguirlo', 'conAutoestima');
	manager.addDocument('es', 'Tengo la capacidad para conseguirlo', 'conAutoestima');
	manager.addDocument('es', 'Soy capaz de conseguirlo', 'conAutoestima');
	manager.addDocument('es', 'Me siento capaz de conseguirlo', 'conAutoestima');
	manager.addDocument('es', 'Voy a lograrlo', 'conAutoestima')
	manager.addDocument('es', 'Lograre mis objetivos', 'conAutoestima');
	manager.addDocument('es', 'Lograre mis metas', 'conAutoestima');
	manager.addDocument('es', 'Lo lograre', 'conAutoestima');
	manager.addDocument('es', 'Podré lograrlo', 'conAutoestima');
	manager.addDocument('es', 'Puedo lograrlo', 'conAutoestima');
	manager.addDocument('es', 'Se que puedo lograrlo', 'conAutoestima');
	manager.addDocument('es', 'Tengo el poder de lograrlo', 'conAutoestima');
	manager.addDocument('es', 'Tengo la capacidad para lograrlo', 'conAutoestima');
	manager.addDocument('es', 'Soy capaz de lograrlo', 'conAutoestima');
	manager.addDocument('es', 'Me siento capaz de lograrlo', 'conAutoestima');
	manager.addDocument('es', 'Me considero capaz de lograrlo', 'conAutoestima');
	manager.addDocument('es', 'Alcanzaré mis objetivos', 'conAutoestima');
	manager.addDocument('es', 'Alcanzaré mis metas', 'conAutoestima');
	manager.addDocument('es', 'Alcanzaré nada', 'conAutoestima');
	manager.addDocument('es', 'Lo alcanzaré', 'conAutoestima');
	manager.addDocument('es', 'Podré alcanzarlo', 'conAutoestima');
	manager.addDocument('es', 'Puedo alcanzarlo', 'conAutoestima');
	manager.addDocument('es', 'Se que puedo alcanzarlo', 'conAutoestima');
	manager.addDocument('es', 'Tengo el poder de alcanzarlo', 'conAutoestima');
	manager.addDocument('es', 'Tengo la capacidad para alcanzarlo', 'conAutoestima');
	manager.addDocument('es', 'Soy capaz de alcanzarlo', 'conAutoestima');
	manager.addDocument('es', 'Me siento capaz de alcanzarlo', 'conAutoestima');

	manager.addDocument('es', 'Si puedo', 'conAutoestima');
	manager.addDocument('es', 'Se que voy a poder', 'conAutoestima');
	manager.addDocument('es', 'Tengo el poder', 'conAutoestima');
	manager.addDocument('es', 'Tengo la capacidad', 'conAutoestima');
	manager.addDocument('es', 'Soy capaz', 'conAutoestima');
	manager.addDocument('es', 'Me considero capaz', 'conAutoestima');
	manager.addDocument('es', 'Me siento capaz', 'conAutoestima');

	manager.addDocument('es', 'Estoy preparado', 'conAutoestima');
	manager.addDocument('es', 'Estoy preparada', 'conAutoestima');
	manager.addDocument('es', 'Se mucho', 'conAutoestima');
	manager.addDocument('es', 'Se bastante', 'conAutoestima');

	manager.addDocument('es', 'Tengo una autoestima muy alta', 'conAutoestima');
	manager.addDocument('es', 'Tengo autoestima', 'conAutoestima');
	manager.addDocument('es', 'Tengo mucho autoestima', 'conAutoestima');
	manager.addDocument('es', 'Me considero de buen autoestima', 'conAutoestima');

	manager.addDocument('es', 'Me quiero', 'conAutoestima');
	manager.addDocument('es', 'Me aprecio', 'conAutoestima');
	manager.addDocument('es', 'Me amo', 'conAutoestima');
	manager.addDocument('es', 'Valgo mucho', 'conAutoestima');
	manager.addDocument('es', 'Soy bueno', 'conAutoestima');
	manager.addDocument('es', 'Soy buena', 'conAutoestima');
	manager.addDocument('es', 'Soy muy bueno', 'conAutoestima');
	manager.addDocument('es', 'Soy muy buena', 'conAutoestima');
	manager.addDocument('es', 'Soy bastante bueno', 'conAutoestima');
	manager.addDocument('es', 'Soy bastante buena', 'conAutoestima');
	manager.addDocument('es', 'Soy el mejor', 'conAutoestima');
	manager.addDocument('es', 'Soy la mejor', 'conAutoestima');
	manager.addDocument('es', 'Soy lo mejor', 'conAutoestima');
	manager.addDocument('es', 'Soy superior', 'conAutoestima');
	manager.addDocument('es', 'Soy un ganador', 'conAutoestima');
	manager.addDocument('es', 'Soy una ganadora', 'conAutoestima');
	manager.addDocument('es', 'Soy competente', 'conAutoestima');
	manager.addDocument('es', 'Soy bueno para todo', 'conAutoestima');
	manager.addDocument('es', 'Soy buena para todo', 'conAutoestima');
	manager.addDocument('es', 'Me considero bueno', 'conAutoestima');
	manager.addDocument('es', 'Me considero buena', 'conAutoestima');
	manager.addDocument('es', 'Me considero muy bueno', 'conAutoestima');
	manager.addDocument('es', 'Me considero muy buena', 'conAutoestima');
	manager.addDocument('es', 'Me considero bastante bueno', 'conAutoestima');
	manager.addDocument('es', 'Me considero bastante buena', 'conAutoestima');
	manager.addDocument('es', 'Me considero el mejor', 'conAutoestima');
	manager.addDocument('es', 'Me considero la mejor', 'conAutoestima');
	manager.addDocument('es', 'Me considero lo mejor', 'conAutoestima');
	manager.addDocument('es', 'Me considero superior', 'conAutoestima');
	manager.addDocument('es', 'Me considero un ganador', 'conAutoestima');
	manager.addDocument('es', 'Me considero una ganadora', 'conAutoestima');
	manager.addDocument('es', 'Me considero competente', 'conAutoestima');
	manager.addDocument('es', 'Me considero bueno para todo', 'conAutoestima');
	manager.addDocument('es', 'Me considero buena para todo', 'conAutoestima');
	manager.addDocument('es', 'Tengo varios talentos', 'conAutoestima');
	manager.addDocument('es', 'Soy talentoso', 'conAutoestima');
	manager.addDocument('es', 'Soy talentosa', 'conAutoestima');
	manager.addDocument('es', 'Soy apto', 'conAutoestima');
	manager.addDocument('es', 'Soy apta', 'conAutoestima');
	manager.addDocument('es', 'Tengo aptitudes', 'conAutoestima');
	manager.addDocument('es', 'Soy muy interesante', 'conAutoestima');
	manager.addDocument('es', 'Soy interesante', 'conAutoestima');
	manager.addDocument('es', 'Soy original', 'conAutoestima');
	manager.addDocument('es', 'Casi no puedo dormir por estar pensando en cosas malas', 'conAutoestima');
	manager.addDocument('es', 'siquiera hoy siendo un día especial se limita a hacerme menos', 'conAutoestima');
	manager.addDocument('es', 'actualmente estoy a punto de ingresar a la universidad', 'conAutoestima');
	manager.addDocument('es', 'no tolero a las personas', 'conAutoestima');
	manager.addDocument('es', 'pero es tu culpa que todo esto haya salido mal', 'conAutoestima');
	manager.addDocument('es', 'no es correcto ya q tengo una familia muy hermosa q me ama dos hijos q son mi adoracion', 'conAutoestima');
	manager.addDocument('es', 'es horrible tener mil pensamientos', 'conAutoestima');
	manager.addDocument('es', 'aunque la gente siempre intenta decirme lo contrario', 'conAutoestima');
	manager.addDocument('es', 'En lugar de demeritar lo que hacen deberíamos apoyar para que se cree un movimiento más grande', 'conAutoestima');
	manager.addDocument('es', 'No tengo nada de hambre', 'conAutoestima');
	manager.addDocument('es', 'talvez se la ultima ya que no puedo más con esta agonía', 'conAutoestima');
	manager.addDocument('es', 'Como que estos dias no se me antoja nada de comer', 'conAutoestima');
	manager.addDocument('es', 'No sé que me pasa', 'conAutoestima');
	manager.addDocument('es', 'Pero si, dormir ha sido un problema estos días', 'conAutoestima');
	manager.addDocument('es', 'nada de lo que dicen me ayuda un carajo', 'conAutoestima');
	manager.addDocument('es', 'Yo trabajo cuidando dos niños su mamá es nuestra vecina', 'conAutoestima');
	manager.addDocument('es', 'intentar hacer pensar a la gente para que este mundo sea un lugar un poco mejor', 'conAutoestima');
	manager.addDocument('es', 'a pesar de estar sin trabajo', 'conAutoestima');
	manager.addDocument('es', 'Y no, no hablo de quitarse la ropa', 'conAutoestima');
	manager.addDocument('es', 'El futuro sin sentido, el tiempo sin sentido', 'conAutoestima');
	manager.addDocument('es', 'No es un buen día', 'conAutoestima');
	manager.addDocument('es', 'ODIO hacer squats', 'conAutoestima');
	manager.addDocument('es', 'Yo no sabía que ser fría', 'conAutoestima');
	manager.addDocument('es', 'yo no llegue a su casa', 'conAutoestima');
	manager.addDocument('es', 'Nunca he hecho mi rutina del gym con un amigo', 'conAutoestima');
	manager.addDocument('es', 'En un fin de semana lleno de noticias terribles', 'conAutoestima');
	manager.addDocument('es', 'de hecho no merecían', 'conAutoestima');
	manager.addDocument('es', 'un test de VIH', 'conAutoestima');
	manager.addDocument('es', 'No cabe duda que el peor enemigo eres tú', 'conAutoestima');
	manager.addDocument('es', 'No aceptes una forma de vivir que no te llene el alma de gozo', 'conAutoestima');
	manager.addDocument('es', 'No hables como si conocieras la vida de los demás', 'conAutoestima');
	manager.addDocument('es', 'No importa cuando se lea esto', 'conAutoestima');
	manager.addDocument('es', 'una sonrisa que no necesita de nada para mostrarse', 'conAutoestima');
	manager.addDocument('es', 'que no se extiende por ningún espacio', 'conAutoestima');
	manager.addDocument('es', 'Ojalá nunca me toque compartir una foto de ustedes', 'conAutoestima');
	manager.addDocument('es', 'no sentirme tan mal ya que no quiero estarme sintiendo así', 'conAutoestima');
	manager.addDocument('es', 'Poco más de las 10 de la noche', 'conAutoestima');
	manager.addDocument('es', 'no solo en mi mente', 'conAutoestima');
	manager.addDocument('es', 'Bajo las escaleras de mi pequeño hogar', 'conAutoestima');
	manager.addDocument('es', 'sentir un poco de calor', 'conAutoestima');
	manager.addDocument('es', 'sin previo aviso', 'conAutoestima');
	manager.addDocument('es', 'un punzón en mi corazón', 'conAutoestima');
	manager.addDocument('es', 'si a mi no me interesan los problemas de los demas a los demas no les tiene porque interesar mis problemas', 'conAutoestima');
	manager.addDocument('es', 'Estuve 2 años en shock de los cuales tengo muy pocos recuerdos borrosos', 'conAutoestima');
	manager.addDocument('es', 'esta vez que fallecio mi madre no lo quise hacer', 'conAutoestima');
	manager.addDocument('es', 'estoy en un punto donde tomo', 'conAutoestima');
	manager.addDocument('es', 'poco a poco estoy saliendo de esto', 'conAutoestima');
	manager.addDocument('es', 'No sé porque tengo tanto sueño', 'conAutoestima');
	manager.addDocument('es', 'la ansiedad aún no inicia', 'conAutoestima');
	manager.addDocument('es', 'Tome un poco de mas por la depre', 'conAutoestima');
	manager.addDocument('es', 'Alguna vez me sentí tan desesperado que no veía una solución', 'conAutoestima');
	manager.addDocument('es', 'todo iba mal', 'conAutoestima');
	manager.addDocument('es', 'Tuve un entrenamiento de vida', 'conAutoestima');
	manager.addDocument('es', 'no me invitaron', 'conAutoestima');
	manager.addDocument('es', '💔😭😭 No los juzgo', 'conAutoestima');
	manager.addDocument('es', 'No tengo ganas de nada quisiera morirme', 'conAutoestima');
	manager.addDocument('es', 'algo me sale mal', 'conAutoestima');
	manager.addDocument('es', 'lo peor es que cuando alguien me trata mal', 'conAutoestima');
	manager.addDocument('es', 'no soporto las ganas de llorar', 'conAutoestima');
	manager.addDocument('es', 'Me pregunto si existe una Enkarni de verdad', 'conAutoestima');
	manager.addDocument('es', 'no entiendo esta vida y no me gusta', 'conAutoestima');
	manager.addDocument('es', 'el tiempo para contestarme', 'conAutoestima');
	manager.addDocument('es', 'pero he sufrido una recaída', 'conAutoestima');
	manager.addDocument('es', 'No me importa hablar con gente de cualquier lugar', 'conAutoestima');
	manager.addDocument('es', 'quiero ser independiente pero esta maldita ansiedad no me deja', 'conAutoestima');
	manager.addDocument('es', 'Tengo muchas ganas de comer una dona', 'conAutoestima');
	manager.addDocument('es', 'desde niña me crié sin padres', 'conAutoestima');
	manager.addDocument('es', 'aquí aún no encuentro trabajo', 'conAutoestima');
	manager.addDocument('es', 'poco más de dos', 'conAutoestima');
	manager.addDocument('es', 'me den ganas de luchar', 'conAutoestima');
	manager.addDocument('es', 'no sé', 'conAutoestima');
	manager.addDocument('es', 'He caído en una fuerte depresión', 'conAutoestima');
	manager.addDocument('es', 'Desde hace 6 años no tengo una estabilidad laboral', 'conAutoestima');
	manager.addDocument('es', 'el yo no tenerlo me aterra', 'conAutoestima');
	manager.addDocument('es', 'cursos de formación que no te pagan', 'conAutoestima');
	manager.addDocument('es', 'Encima tengo un niño pequeño', 'conAutoestima');
	manager.addDocument('es', 'me cuesta mucho no derrumbarme delante de él', 'conAutoestima');
	manager.addDocument('es', 'ver qué opinan ustedes que no me conocen', 'conAutoestima');
	manager.addDocument('es', 'una muy buena empresa', 'conAutoestima');
	manager.addDocument('es', 'pero no', 'conAutoestima');
	manager.addDocument('es', 'No poder dormir me está matando', 'conAutoestima');
	manager.addDocument('es', 'Hace un mes me tuve que mudar de ciudad por falta  de trabajo', 'conAutoestima');
	manager.addDocument('es', 'la verdad creo que no me hace falta nada material para ser feliz', 'conAutoestima');
	manager.addDocument('es', 'en realidad creo que son cosas mías porque nunca me han dicho nada', 'conAutoestima');
	manager.addDocument('es', 'no quiero hacerles daño', 'conAutoestima');
	manager.addDocument('es', 'hacer lo mismo sin querer', 'conAutoestima');
	manager.addDocument('es', 'solo vendo por internet', 'conAutoestima');
	manager.addDocument('es', 'mentalmente que no se que hacer', 'conAutoestima');
	manager.addDocument('es', 'Ultimamente he sentido mucho odio hacia todo', 'conAutoestima');
	manager.addDocument('es', 'Hoy me desperté sin ganas de nada', 'conAutoestima');
	manager.addDocument('es', 'soñar', 'conAutoestima');
	manager.addDocument('es', 'solo quiero sentir un poco de felicidad en mi', 'conAutoestima');
	manager.addDocument('es', 'Spoiler: No hay máscaras', 'conAutoestima');
	manager.addDocument('es', 'que chingón ha sido compartir tanto contigo', 'conAutoestima');
	manager.addDocument('es', 'Nunca me han gustado los segundos lugares', 'conAutoestima');
	manager.addDocument('es', 'Ahora solo queda seguir alcanzando objetivos', 'conAutoestima');
	manager.addDocument('es', 'también existen personas que solo son pasajeros en tu vida', 'conAutoestima');
	manager.addDocument('es', 'solo saca lo mejor de cada una de ellas', 'conAutoestima');
	manager.addDocument('es', 'Pero nadie entiende lo mal que me siento', 'conAutoestima');
	manager.addDocument('es', 'Y eso me pone mal', 'conAutoestima');
	manager.addDocument('es', 'no he ido al trabajo', 'conAutoestima');
	manager.addDocument('es', 'he estado sin comer ', 'conAutoestima');
	manager.addDocument('es', 'no tengo ganas de de hacer absolutamente nada', 'conAutoestima');
	manager.addDocument('es', 'no encuentro la felicidad', 'conAutoestima');
	manager.addDocument('es', 'para que tengan una sólida introducción a la topología', 'conAutoestima');
	manager.addDocument('es', 'Amigos me siento demasiado mal', 'conAutoestima');
	manager.addDocument('es', 'saber que faltan muchisimas horas para que termine el dia', 'conAutoestima');
	manager.addDocument('es', 'estuve luchando contra un transtorno alimenticio', 'conAutoestima');
	manager.addDocument('es', 'recibi atencion psicologica mas sin embargo no siento alguna mejoria', 'conAutoestima');
	manager.addDocument('es', 'hasta yo me pregunto dónde está ese Omar que todos conocieron', 'conAutoestima');
	manager.addDocument('es', 'estoy bajo medicamento', 'conAutoestima');
	manager.addDocument('es', 'al principio todo iva mejorando pero mis ingresos an bajado demasiado que no puedo comprar el medicamento', 'conAutoestima');
	manager.addDocument('es', 'mis amigos que me acompañaron', 'conAutoestima');
	manager.addDocument('es', 'esa persona muere', 'conAutoestima');
	manager.addDocument('es', 'Casi termina el dia y estoy logrando no sentirme mal', 'conAutoestima');
	manager.addDocument('es', 'Despertar sin ningún problema', 'conAutoestima');
	manager.addDocument('es', 'me siento mal pero no hay razones', 'conAutoestima');
	manager.addDocument('es', 'sin ganas de nada', 'conAutoestima');
	manager.addDocument('es', 'Mañana me operan un ectoprion', 'conAutoestima');
	manager.addDocument('es', 'Estoy teniendo una muy mala noche y eso aumenta mi cansancio', 'conAutoestima');
	manager.addDocument('es', 'Estoy desesperada y no quiero tomar una mala decisión', 'conAutoestima');
	manager.addDocument('es', 'sin energía', 'conAutoestima');
	manager.addDocument('es', 'en un ambiente en el cual se podría considerar inseguro', 'conAutoestima');
	manager.addDocument('es', 'Me parece un ciclo muy monótono', 'conAutoestima');
	manager.addDocument('es', 'siento una envidia rencorosa', 'conAutoestima');
	manager.addDocument('es', 'Estoy terriblemente triste', 'conAutoestima');
	manager.addDocument('es', 'Soy un gordo, me comí un helado grande y una pizza', 'conAutoestima');
	manager.addDocument('es', 'Se me antoja todo ultimamente y no estoy embarazada', 'conAutoestima');
	//manager.addDocument('es', '', 'conAutoestima');
	//manager.addDocument('es', '', 'conAutoestima');
	//manager.addDocument('es', '', 'conAutoestima');

	//Entrenamos el modelo
	console.log('Training...');
	await manager.train();
	console.log('Trained!');

	//Guardamos el modelo

	//manager.save(modelTag, true);
}

async function updateOcurrences(post) {
	let intentTag = "bajaAutoestima";
	//Se envía a analizar el posts con el modelo
	await classifier.phrasesId(post, intentTag, manager);
}

exports.analyzePosts = async function (postsArray) {
	console.log("***********					 			*****************");
	console.log("***********	BAJA AUTOESTIMA				 	*****************");
	console.log("***********					 			*****************");
 						

	let keywords = 	[	
						'baja', 'autoestima', 'deprecio', 'incompetente', 'odio',
						'valor', 'valgo', 'malo', 'peor', 'inferior', 'perdedor',
						'bueno', 'competente', 'conseguir', 'lograr', 'alcanzar',
						'mal', 'capacidad', 'capaz', 'incapaz', 'tímido', 'social',
						'antisocial', 'poder', 'preparado', 'miedo', 'abierto','extrovertido',
						'puedo', 'aprecio', 'desprecio', 'aborrezco', 'posibilidad',
						'aptitud', 'talento', 'metas', 'apto', 'talentoso', 'mejor', 'original',
						'diferente', 'posibilidad', 'interesante', 'ansioso', 'nervioso', 'animo',
						'emocional', 'merecer', 'debil', 'importar', 'defecto', 'ansiedad',
						'nerviosismo', 'inseguro', 'inseguridad'
					];

	let keywordsExceptions = 	[
									'pero'
								];

	//Establecemos los stemms con los que se comparan las utterances
	await classifier.setKeywordsStemms(keywords);

	if(keywordsExceptions.length > 0){
		await classifier.setKeywordsExceptions(keywordsExceptions);
	}

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