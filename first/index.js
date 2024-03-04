console.log('Javascript funcionando');

let firstname = 'Camila'
let lastname= 'Santos'

// Variável não pode começar com número, não pode conter espaços, underscore não é boa prática, usar CamelCase
// exemplo firstName


console.log(firstname)
console.log(lastname)

//variável não pode ser trocada
const price = 30
console.log(price)

// Tipos de variáveis
// Tipo primitivo: string, number, boolean,undefined, null

let itemName = 'Pen'        //tipo string
let itemPrice = 3           //tipo number
let itemAvailable = true    //tipo boolean
let itemColor               //tipo undefined 
let itemColor2 = 'Red'     
itemName = null

console.log(itemColor)
console.log(itemName)

// É uma linguagem dinâmica, não precisa dizer o tipo da variável

console.log(typeof itemPrice)   // mostra o tipo da variável

// Tipo variáveis de referência

/* OBJETO 
São as propriedades de um objeto
Exemplo: carro é um objeto - constituído por vários outros objetos, itens dentro
do objeto são chamados de properties (true, red, pen) */

let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor2: 'Red'
}

console.log(pen)

// Como alterar properties dentro do meu objeto?

pen.itemColor2 = 'Blue'
console.log (pen)
console.log(pen.itemName)  // para visualizar apenas esta propertie

/* ARRAY
Uma lista de objetos que coloco dentro de uma variável. Dentro de colchetes significa lista. Dentro podem ser
number, string, boolean
*/

let friends = ['Marcos', 'Silvia', 'Elisa']   //index da minha lista = começa do zero
friends[2] = 'Junior'  //para substituir um item da lista/index

console.log(friends)
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

/* FUNÇÕES
Grupo de instruções, tarefas ou cálculos */


/* Dentro do () pode ser vazio. Dentro do () é o parâmetro pode ter mais de um parâmetro,
para cada parâmetro ter um argumento */    

function saleStatus(status, total) {   //saleStatus é o nome da função
 console.log('Transação ' + status + '! Total amount: $' + total)
}

saleStatus('Approved', 30)  // approved e 30 são os argumentos


// Funções com cálculos

function percent10(price) {
    return price - (price * 10 / 100)  //return para armazenar resultado
}

console.log(percent10(20))


