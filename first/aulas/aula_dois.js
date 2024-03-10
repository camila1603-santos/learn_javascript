console.log('Operadores aritméticos')

let num1 = 3
let num2 = 2

console.log(num1 + num2)

console.log(num1 - num2)

console.log(num1 * num2)

console.log(num1 / num2)

// % = desto da divisão
console.log(num1 % num2)

// ** exponencial
console.log(num1 ** num2)

// Operador de incremento = ++ // Operador de decremento ou redução = -- (mesma lógica)

let total = num1 + num2
console.log(++total) //vai somar um ao resultado e imprimir em tela

console.log(total++) /*vai adicionar um depois de mostrar o total, então se rodar
console.log (total) vai imprimir o total + um*/

console.log(total)

// Operador de atribuição

let num3 = 10

num3 += 20                  //vai somar 20 ao número 10 (pode usar com todos os outros operadores)
console.log(num3)

// Operadores de comparação (verifica se valores iguais e se tipos iguais)

console.log(num3 > 0)       //vai imprimir true
console.log(num3 < 9)       //vai imprimir false
console.log(num3 >= 10)     //vai imprimir true
console.log(num3 <= 9)      //vai imprimir false
console.log(num3 === 30)    //true, pois vai verificar se é igual (lembrar que somou 20 antes)
console.log(num3 !== 30)    //false, verifica se é diferente "não é igual a"

//serve para strings também

let myName = 'Camila'
console.log (myName !== 'Camila') //false
console.log(myName === 'Camila')  //true - é case sensitive

// === strict
// == lose (compara o valor somente, não o tipo)

// Operadores ternários (tem uma função semelhante a um if else) Exemplo: velocidade

// Leia-se: a velocidade do motorista é igual a 90. Velocidade = motorista maior que 100 Sim (?) abaixo (:)
let driver = 120
let speed = driver > 110 ? 'Above' : 'Below'
console.log(speed)

// Operadores lógicos E = &&  OR = ||   NOT = !
// Pode utilizar com strings e numbers

// Exemplo: votação (lembrar da tabela verdade)

let temIdadeMinima = true
let temTituloEleitor = true

let podeVotar = temIdadeMinima && temTituloEleitor
console.log(podeVotar)

let podeViajar = !podeVotar
console.log(podeViajar)

// If and Else

let driverSpeed = 109

if (driverSpeed >= 110) {
    console.log('Driving too fast')
}

else if (driverSpeed > 40 && driverSpeed <110) {
    console.log('OK')
}

else
    console.log('Driving too slow')


// Switch and Case (ele não para quando encontra igual o if / else, precisa usar o break)

let airport = 'MCO' 

switch (airport) {
    case 'MCO':
        console.log('Orlando')
        break
    case 'JFK':
        console.log('John F. Kennedy')
        break
    case 'SEA':
        console.log('Seatle')
        break
    default:
        console.log('Unknown')  //para quando a opção não tem em nenhuma sentença        
}

//For loop - for (var condição incremento)

for (i = 1; i <= 10; i++) {
    console.log('Número ', i)
} 

// While - variável vai para fora

j = 1

while (j <= 10) {
    console.log('Número ', j)
    j++
}

// Do while loop - For in loop - For of loop