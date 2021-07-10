// template string

"Simara é";
let role = "transformadora";
console.log(`Simara é ${role}`); // interpolação (ecmascript 6)

//operador ternário

function calculaIdade(idade){
    
    return idade >= 18 ? 'Maior de idade': 'Menor de idade';
    
    /*a linha acima é o mesmo que
    if(idade>=18){
        return 'Maior de idade';
    }
    else{
        return 'Menor de idade';
    }*/
}

console.log(calculaIdade(10));

//arrow functions - mais indicado para funções anônimas ou callbacks

const soma = (num1, num2) => num1 + num2;
console.log(soma(4,9));

const sayHello = name => `Hello ${name}`
console.log(sayHello('Ari'));

//arrays

const alunasGama = ["Paula", "Maria", "Estela", "Clara"];

console.log(alunasGama[2]); //Estela

//operador spread (...)
const alunasXp = [...alunasGama, "Simara"];
console.log(alunasXp);

//métodos de iteração
for (let i=0; i<alunasXp.length; i++){
    console.log(alunasXp[i]);
}

//map
alunasXp.map(aluna => console.log(aluna));

//filter
const numeros = [34, 45, 67, 90, 55, 76];
const numImpares =  numeros.filter(numero => numero%2 != 0);
console.log(numImpares);

//find
const produtos = ["geladeira", "fogao", "cama", "mesa"];
console.log(produtos.find(produto => produto === "cama"));
console.log(produtos.find(produto => produto === "cadeira"));

//sort
const numerosOrdenadosCrescente = numeros.sort();
console.log(numerosOrdenadosCrescente);

const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a);
console.log(numerosOrdenadosDecrescente);

//reduce - reduz o array a um resultado de uma operação matemática

const numbers = [1,34,35];
const somarNum = numbers.reduce((valorAnterior, valorAtual)=>{
    return valorAnterior + valorAtual;
}, 5)

console.log(somarNum); //75 - pegou todos os valores do array e somou com 5

//Objetos

const pessoa = {
    nome: "Ari",
    idade: 26,
    cidade: "Dubai"
}

//notação de ponto
//console.log(pessoa.nome);

//notação de colchetes
//console.log(pessoa['idade']);

//Como desestruturar objetos - object destructuring
const {nome, idade, cidade} = pessoa;
console.log(nome);
console.log(idade);
console.log(cidade);

//outro exemplo
const filmes = [
    {
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Documentário sobre tecnologia",
        duracao: 120
    },
    {
        id: 2,
        titulo: "Para todos os garotos que já amei",
        descricao: "Comédia Romântica",
        duracao: 125
    },
    {
        id: 3,
        titulo: "Os fantasmas se divertem",
        descricao: "Comédia",
        duracao: 130
    }
]

const [{id, titulo, descricao, duracao}] = filmes;

filmes.map(filme => console.log(filme.descricao));
