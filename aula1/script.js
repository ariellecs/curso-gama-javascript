var myName = "Arielle"; //tipo string

console.log(myName)

let language ="Javascript";

const pattern = "ECMAScript";
//const tem sempre que ter o valor inicializado na declaração e o valor não pode ser mudado
{
    var height = 1.80 // tipo number
    var age = 26 //tipo number
    //let age = 25
    //null objeto vazio
    //undefined dado não definido
    var isStudent = false //tipo boolean
}
console.log(age)

//hoisting

//objeto, array e function

var person = {
    "name": "Ari",
    "age": 26
}

var students = [ "Antonio", "João", "André" ]

function sum(a,b){
    return a+b
}

//operador typeof mostra o tipo do dado
console.log(typeof students)
console.log(typeof person)

/*operadores aritméticos
adição +
subtração -
multiplicação *
divisão /
módulo ou resto de uma divisão %
incremento ++
decremento --

operadores de atribuição
= atribuição
+= atribuição de soma
-= atribuição de subtração
*= atribuição de multiplicação
/= atribuição de divisão
%= atribuição de módulo

operadores de comparação
== igual
=== compara valor e tipo
!= diferente
< ou <= maior ou maior igual
> ou >= menor ou menor igual

operadores lógicos
&& e
ou ||
negação !
*/

//condicionais
var num = 1;
num = 5;

if(num === 1){
    console.log("num é igual a 1")
}
else if(num === 2){
    console.log("num é igual a 2")
}
else {
    console.log("num é 5")
}

var mes = "janeiro"

switch(mes){
    case "fevereiro":
        console.log("mes 2");
        break;
    case "março":
        console.log("mes 3");
        break;
    case "janeiro":
        console.log("mes 1");
        break;
    default:
        console.log("nenhum dos casos atendido!");
}

//estruturas de repetição

var colors = ["black", "white", "yellow", "green", "blue"];

for (var i=0; i<colors.length; i++){
    console.log(colors[i]);
}

for (var i=0; i<=10; i++){
    console.log(i);
}

var i = 0;
while(i<=10){
    console.log(i);
    i++;
}

var a = 0;
do{
    console.log(a);
    a++;
} while(a <= 10);

//funções
function sayHello(nome, sobrenome){
    console.log("Hello " + nome + " " + sobrenome);
}

sayHello("Arielle", "Cardoso");

function somar(a,b){
    return a + b;
}

console.log(somar(40, 60));

//classes

class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read(){
        return `Estou lendo ${this.title}`
    }
}

let book = new Book('Algoritmos para viver', 'Brian', 500);
let otherBook = new Book('Meu livro', 'Arielle', 1000);


console.log(book.read());
console.log(otherBook.read());

console.log(book, otherBook);

class itBook extends Book{ // extends == herança
    constructor(title, author, pages, technology){
        super(title, author, pages);
        this.technology = technology;
    }
}

let itBook1 = new itBook('Meu livro tech', 'Arielle', 1200, 'Algoritmos');

console.log(itBook1);

//encapsulamento (getters e setters)
class Person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

}

let person1 = new Person('Lara Jean');
console.log(person1.name);
person1.name = "Ari"
console.log(person1.name);