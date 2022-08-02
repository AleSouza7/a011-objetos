// 1 parte
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
const pokemon2 = {...pokemon1}
pokemon2.nome="Squirtle"
pokemon2.tipo="Água"

//parte 2
pokemon1.ataques=[]
console.log(pokemon1.ataques)