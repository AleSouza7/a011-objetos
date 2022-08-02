const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
console.log("a)O nome do primeiro ator:",filme.elenco[0])
console.log("b)O nome do ultimo ator:",filme.elenco[3])
console.log("c)O nome de todos os atores:",filme.elenco)
console.log("d)O horário da transmissão do filme:",filme.transmissoesHoje[1])