//Identificador de consumo de sustancia o afección médica

const {
	NlpManager
} = require('node-nlp');
const manager = new NlpManager({
	languages: ['es']
});
const fs = require('fs');
const classifier = require('../classifier.js');

let modelTag = './modelC1.nlp';
let minOcurrences = 3;

async function trainnlp(manager) {
	if (fs.existsSync(modelTag)) {
		manager.load(modelTag);
		return;
	}

	//Consumo de sustancias
	manager.addDocument('es', 'Ingiero drogas', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero medicamentos', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero sustancias', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero pastillas', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero quimicos', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero narcóticos', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero estupefaciente', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero alucinógenos', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero somníferos', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero medicamentos', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero marihuana', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero cocaína', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero alcohol', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero porro', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero tranquilizante', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero anfetaminas', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero éxtasis', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero heroína', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero lsd', 'consumoAfeccion');
	manager.addDocument('es', 'Ingiero ácido', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo drogas', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo medicamentos', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo sustancias', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo pastillas', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo quimicos', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo narcóticos', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo estupefaciente', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo alucinógenos', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo somníferos', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo medicamentos', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo marihuana', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo cocaína', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo alcohol', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo porro', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo tranquilizante', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo anfetaminas', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo éxtasis', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo heroína', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo lsd', 'consumoAfeccion');
	manager.addDocument('es', 'Consumo ácido', 'consumoAfeccion');
	manager.addDocument('es', 'Inhalo cocaina', 'consumoAfeccion');
	manager.addDocument('es', 'Inhalo droga', 'consumoAfeccion');
	manager.addDocument('es', 'Inhalo sustancias', 'consumoAfeccion');
	manager.addDocument('es', 'Inhalo quimicos', 'consumoAfeccion');
	manager.addDocument('es', 'Inhalo narcoticos', 'consumoAfeccion');
	manager.addDocument('es', 'Bebo alcohol', 'consumoAfeccion');

	manager.addDocument('es', 'Fumo marihuana', 'consumoAfeccion');
	manager.addDocument('es', 'Fumo sustancias', 'consumoAfeccion');
	manager.addDocument('es', 'Fumo químicos', 'consumoAfeccion');
	manager.addDocument('es', 'Fumo porro', 'consumoAfeccion');


	//Afección médica
	manager.addDocument('es', 'Estoy enfermo', 'consumoAfeccion');
	manager.addDocument('es', 'Estoy enferma', 'consumoAfeccion');
	manager.addDocument('es', 'Tengo una enfermedad', 'consumoAfeccion');
	manager.addDocument('es', 'Me diagnosticaron una enfermedad', 'consumoAfeccion');
	manager.addDocument('es', 'Tengo una enferemedad diagnosticada', 'consumoAfeccion');
	manager.addDocument('es', 'Es por mi enfermedad', 'consumoAfeccion');
	manager.addDocument('es', 'Seguro es por mi enfermedad', 'consumoAfeccion');
	manager.addDocument('es', 'Mi enfermedad', 'consumoAfeccion');

	manager.addDocument('es', 'Tengo una afección', 'consumoAfeccion');
	manager.addDocument('es', 'Me diagnosticaron una afección', 'consumoAfeccion');
	manager.addDocument('es', 'Tengo una afección diagnosticada', 'consumoAfeccion');
	manager.addDocument('es', 'Es por mi afección', 'consumoAfeccion');
	manager.addDocument('es', 'Seguro es por mi afección', 'consumoAfeccion');
	manager.addDocument('es', 'Mi afección', 'consumoAfeccion');

	manager.addDocument('es', 'Tengo una afección medica', 'consumoAfeccion');
	manager.addDocument('es', 'Me diagnosticaron una afección medica', 'consumoAfeccion');
	manager.addDocument('es', 'Tengo una afección medica diagnosticada', 'consumoAfeccion');
	manager.addDocument('es', 'Es por mi afección medica', 'consumoAfeccion');
	manager.addDocument('es', 'Seguro es por mi afección medica', 'consumoAfeccion');
	manager.addDocument('es', 'Mi afección medica', 'consumoAfeccion');

	manager.addDocument('es', 'Tengo un padecimiento', 'consumoAfeccion');
	manager.addDocument('es', 'Me diagnosticaron un padecimiento', 'consumoAfeccion');
	manager.addDocument('es', 'Tengo un padecimiento diagnosticado', 'consumoAfeccion');
	manager.addDocument('es', 'Es por mi padecimiento', 'consumoAfeccion');
	manager.addDocument('es', 'Seguro es por mi padecimiento', 'consumoAfeccion');
	manager.addDocument('es', 'Mi padecimiento', 'consumoAfeccion');

//**********************************************************************************************************


	//No presentan niguno
	manager.addDocument('es', 'Ingiero comida', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Ingiero papas fritas', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Ingiero refresco', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Ingiero coca cola', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Ingiero golosinas', 'sin_ConsumoAfeccion');

	manager.addDocument('es', 'Consumo comida', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Consumo papas fritas', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Consumo refresco', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Consumo coca cola', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Consumo golosinas', 'sin_ConsumoAfeccion');

	manager.addDocument('es', 'Bebo agua', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Bebo refresco', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Bebo coca cola', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Bebo cafe', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Bebo te', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Bebo jugo', 'sin_ConsumoAfeccion');

	manager.addDocument('es', 'Es una sonrisa tranquilizadora', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'qué es', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'que aún no es', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Cada vez me canso más', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'ya no tengo pilas para nada', 'sin_ConsumoAfeccion');
	manager.addDocument('es', 'Estoy exahusto', 'sin_ConsumoAfeccion');
	

	//Entrenamos el modelo
	console.log('Training...');
	await manager.train();
	console.log('Trained!');

	//Guardamos el modelo

	//manager.save(modelTag, true);
}

async function updateOcurrences(post) {
	let intentTag = 'consumoAfeccion';
	//Se envía a analizar el posts con el modelo
	await classifier.phrasesId(post, intentTag, manager);
}

exports.analyzePosts = async function (postsArray) {
	console.log('***********					 				*****************');
	console.log('***********	EFECTOS FISIOLÓGICOS DE SUSTANCIA 	*****************');
	console.log('***********					 				*****************');
 						
	var keywords = 	[	
						'droga', 'sustancia', 'medicina', 'pastilla', 'químico',
						'narcótico', 'estupefaciente', 'alucinógeno', 'somnífero',
						'medicamento', 'fármaco', 'marihuana', 'cocaína','alcohol',
						'porro', 'cigarro', 'tranquilizante', 'anfetaminas', 'éxtasis',
						'heroína', 'lsd', 'ácido', 'consumir', 'ingerir', 'inhalar',
						'beber', 'fumar', 'afección', 'enfermedad', 'padecimiento',
						'salud', 'médico'
					];

	let keywordsExceptions = 	[
									'por'
								];


	var diseases = 	['Abrasión corneal','Accidentes de tráfico','Accidentes eléctricos','Accidentes en el agua','Accidentes químicos','Acné','Aftas bucales','Albinismo','Alcoholismo','Alergia','Alergia al níquel','Alergia al sol','Alud','Alzhéimer','Amenorrea','Ampollas','Anemia','Aneurisma','Angina de pecho','Anisakiasis','Anorexia','Ansiedad','Apendicitis','Apnea del sueño','Arritmia','Arteriosclerosis','Artritis reumatoide','Artrosis','Ascitis','Asma','Astigmatismo','Ataxia','Atragantamiento','Atrofia vaginal','Autismo','Balanitis','Bartolinitis','Bocio','Botulismo','Bronquiectasias','Bronquiolitis obliterante','Bronquitis','Brucelosis','Bruxismo','Bulimia','Campylobacter','Cáncer','Cáncer de cabeza y cuello','Cáncer de colon','Cáncer de cuello de útero','Cáncer de esófago','Cáncer de estómago','Cáncer de hígado','Cáncer de laringe','Cáncer de mama','Cáncer de ovario','Cáncer de páncreas','Cáncer de pene','Cáncer de piel','Cáncer de próstata','Cáncer de pulmón','Cáncer de riñón','Cáncer de testículo','Cáncer de tiroides','Cáncer de vejiga','Cáncer oral','Cáncer óseo','Candidiasis','Carbunco','Cataratas','Catarro','Celiaquía','Chancroide','Chikungunya','Ciática','Cirrosis','Cistitis','Citomegalovirus','Clamidia','Cólera','Colesteatoma','Cólico nefrítico','Colitis ulcerosa','Colon irritable','Congelamiento','Congestión nasal','Conjuntivitis','Contusiones','Corte de digestión','Crisis de pánico','Cuerpos extraños','Daltonismo','Déficit de la hormona del crecimiento','Degeneración macular','Demencia','Demencia con cuerpos de Lewy','Demencia vascular','Dengue','Dermatitis atópica','Derrame ocular','Deterioro cognitivo leve','Diabetes','Diabetes gestacional','Diabetes insípida','Difteria','Disfunción eréctil','Dislexia','Dismenorrea','Dispepsia','Distonía','Distrofia muscular de Duchenne','Diverticulosis','Ébola','Edema pulmonar','Elefantiasis','Encefalitis','Endocarditis','Endometriosis','Enfermedad de Addison','Enfermedad de Behçet','Enfermedad de Chagas','Enfermedad de Crohn','Enfermedad de Huntington','Enfermedad de Kawasaki','Enfermedad de La Peyronie','Enfermedad de Lyme','Enfermedad de Paget','Enfermedad de Wilson','Enfermedad inflamatoria pélvica','Enfermedades de Transmisión Sexual','Enfermedades raras','Epilepsia','EPOC','Escleritis','Esclerodermia','Esclerosis lateral amiotrófica','Esclerosis múltiple','Escoliosis','Esófago de Barrett','Espondilitis anquilosante','Esquizofrenia','Esteatosis hepática','Estrabismo','Estreñimiento','Eyaculación precoz','Faringitis','Fascitis plantar','Fenilcetonuria','Fibrilación auricular','Fibromialgia','Fibrosis quística','Fiebre amarilla','Fiebre de Lassa','Fiebre de Oropouche','Fiebre del valle del Rift','Fiebre hemorrágica de Crimea-Congo','Fiebre tifoidea','Fístula anal','Fractura de dedo','Fractura nasal','Galactorrea','Galactosemia','Gastritis','Gastroenteritis','Giardiasis','Glaucoma','Golpe de calor','Gonorrea','Gota','Gripe','Hantavirus','Hemocromatosis','Hemofilia','Hemorragia nasal','Hemorroides','Hepatitis','Herida por arma de fuego','Heridas','Hernia de hiato','Hernia discal','Hernia inguinal','Herpes','Herpes zóster','Hidatidosis','Hiperactividad (TDAH)','Hipercolesterolemia','Hipermetropía','Hiperplasia benigna de próstata','Hipertensión arterial','Hipertiroidismo','Hipoacusia','Hipocalcemia','Hipoglucemia','Hipogonadismo','Hipotensión arterial','Hipotermia','Hipotiroidismo','Hirsutismo','Ictus','Impétigo','Incendios','Incontinencia urinaria','Infarto de miocardio','Infecciones urinarias','Insomnio','Insomnio familiar fatal','Insuficiencia cardiaca','Insuficiencia hepática','Insuficiencia mitral','Insuficiencia renal crónica','Intolerancia a la histamina','Intoxicación etílica','Intoxicación por monóxido de carbono','Intoxicaciones','Juanetes','Ladillas','Laringitis','Legionella','Leishmaniasis','Lepra','Leptospirosis','Lesiones maxilares','Leucemia','Lipodistrofia','Lipotimia','Listeriosis','Litiasis biliar','Lumbalgia','Lupus','Luxaciones','Mal agudo de montaña','Malaria','Melanoma','Melasma','Melioidosis','Meningitis','Menopausia','MERS','Mesotelioma','Miastenia gravis','Micoplasma genital','Microcefalia','Mieloma múltiple','Migraña','Miomatosis uterina','Miopía','Molusco contagioso','Mononucleosis','Mordeduras de animales','Narcolepsia','Neumonía','Neumotórax','Neuralgia del trigémino','Neurofibromatosis','Nistagmo','Norovirus','Obesidad','Obesidad infantil','Ojo seco','Oncocercosis','Onicomicosis','Orquitis','Osteomalacia','Osteomielitis','Osteonecrosis','Osteoporosis','Otitis','Palpitaciones cardíacas','Pancreatitis','Paperas','Parálisis cerebral','Párkinson','Patologías benignas de mama','Pericarditis','Peritonitis','Peste','Pian','Picaduras de insectos','Pie de atleta','Pielonefritis','Pitiriasis versicolor','Policitemia vera','Poliomielitis','Pólipos uterinos','Prediabetes','Presbiacusia','Presbicia','Priapismo','Prostatitis','Psoriasis','PTI (trombocitopenia inmune primaria)','Quemaduras','Rabia','Raspaduras y laceraciones','Reacciones alérgicas a medicamentos','Reanimación cardiopulmonar','Reflujo gastroesofágico','Rescate en montaña','Resistencia a la insulina','Retinosis pigmentaria','Rinitis','Rizartrosis','Rosácea','Rubéola','Salmonelosis','Sarampión','Sarcoidosis','Sarcoma de tejidos blandos','Sarna','Sensibilidad química múltiple','Sepsis','Shigelosis','Shock','SIBO','SIDA','Sífilis','Síndrome de Angelman','Síndrome de Cushing','Síndrome de Down','Síndrome de fatiga crónica','Síndrome de Guillain-Barré','Síndrome de Klinefelter','Síndrome de Lynch','Síndrome de Marfan','Síndrome de Noonan','Síndrome de Ovario Poliquístico (SOP)','Síndrome de Patau','Síndrome de piernas inquietas','Síndrome de Rett','Síndrome de Reye','Síndrome de Sanfilippo','Síndrome de Sjögren','Síndrome de Tourette','Síndrome de Turner','Síndrome de Williams','Síndrome de X Frágil','Síndrome del túnel carpiano','Síndrome metabólico','Sinusitis','Siringomielia','Sobredosis','Talasemia','Telangiectasias','Tendinitis','Teniasis','Terremotos','Tétanos','Tinnitus','Tortícolis','Tos ferina','Toxicodermias','Toxoplasmosis','Tracoma','Traqueítis','Trastorno bipolar','Trastorno obsesivo compulsivo','Traumatismo craneal','Tricomoniasis','Tripanosomiasis africana','Tromboembolismo pulmonar','Trombosis venosa','Tuberculosis','Tularemia','Tumores cerebrales','Úlcera','Uretritis','Urticaria','Uveítis','Vaginitis','Vaginosis bacteriana','Varicela','Varices','Varicocele','Vértigo','Virus del Nilo Occidental','Virus Mayaro','Virus Nipah'];

	//Buscamos si en los posts se menciona alguna enfermedad de las registradas en nuestro catálogo
	let isDiseasePresent = await findDiseases(diseases, postsArray);

	//Establecemos los stemms con los que se comparan las utterances
	await classifier.setKeywordsStemms(keywords);

	//Establecemos excepciones
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
	if (classifier.getOcurrences() >= minOcurrences || isDiseasePresent == true){
		classifier.resetOcurrences();
		return true;
	}
	classifier.resetOcurrences();
	return false;

}

async function findDiseases(diseases, postsArray){
	postsArrayLowerCase = postsArray.join('|').toLowerCase().split('|');
	for(let i = 0; i < diseases.length; i++){
		for(let j = 0; j < postsArrayLowerCase.length; j++){
			//Normalizamos ambos string antes de compararlos
			postsArrayLowerCase[j] = postsArrayLowerCase[j].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
			diseases[i] = diseases[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
			if(postsArrayLowerCase[j].includes(diseases[i].toLowerCase())){
				console.log("Enfermedad encontrada:" + diseases[i])
				//console.log("Post en donde se encontró: " + postsArrayLowerCase[j]);
				return true
			}
		}
	}
	return false
}