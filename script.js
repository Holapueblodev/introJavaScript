//Variables
//Reserva de memoria, donde guardo informacion. La informacion puede cambiar (en tiempo de ejecucion)

//var
//var name = "Adrian"

let number = 1

//lets
let pet = "Dog"

//const
const lastName = "Cordoba";

//-----------------------------------------------------------------------------------------------//

//var name = "Diego";

//Incremento y decremento
number++;
number--;


//concatenacion
//console.info("el nombre del facilitador " +  name + " " + "y tengo un " + pet)
 
//interpolacion
//console.info(`mi nombre es ${name} y tengo un ${pet}`)

//-----------------------------------------------------------------------------------------------//

//Ejercicios//
//Escribir una oración o texto por consola (que cuente lo que quieran)
//La oración o texto debe estar compuesto por 3 variables, 3 constantes. Y al menos 3 tipos de datos.

let age = 33


const name = "Carlos"
const firstName = "Sánchez"
const secondName = "Yerga"

let roadType = "Calle"
let street = "Teresina"
number = 27
let floor = 3
let letter = "C" 

let address = `${roadType} ${street}, ${number} ${floor}${letter}`
console.info(`Me llamo ${name} ${firstName} ${secondName}, tengo ${age} años vivo en ${address}`)

//-----------------------------------------------------------------------------------------------//


//Funciones>
//Una función es un bloque de instrucciones que puede ejecutarse tantas veces como desee.
//Una función puede tener parámetros y devolver un valor. Las funciones se pueden definir de diferentes 
//maneras. Quizás la más común es la declaración de función. Comienza con la palabra clave function. Sigue:
//El nombre de la función,los parámetros encerrados entre paréntesis, las afirmaciones encerradas entre corchetes.


function medirSuperficieCuadrado(longitudLado) {
    return longitudLado * longitudLado;
  }

var longitudLado = 6

var resultado = medirSuperficieCuadrado(longitudLado)

console.info(resultado)


let s1 = '2 + 2'              // crea una string primitiva
let s2 = new String('2 + 2')  // crea un objeto String
console.log(eval(s1))         // devuelve el número 4
console.log(eval(s2))         // devuelve la cadena "2 + 2"
console.log(s2)


//-----------------------------------------------------------------------------------------------//

//Ejercicios//
//1
//Defina una función hello que devuelva 'Hello world!'. 
//Imprimirla en consola con un string que nos calare que ejercicio es.



function hello(a , b) {
  return a + b;
}

const h = "Hello"
const w = "World"

console.info(hello(h, w))


//2
//Defina dos funciones.
//La primera función adebería devolver 'Hello a!'y la segunda función bdebería devolver 'Hello b!'.
//Imprimirla en consola con un string que nos calare que ejercicio es.

function HelloA(){
  return 'Hello a!'
}

let resultA = HelloA()

function HelloB(){
  return 'Hello b!'
}

let resultB = HelloB()

console.info(`Resultado ejercicio 2 "Funcion 1"--> ${resultA} "Funcion 2"--> ${resultB}`)

console.info(`Resultado ejercicio 2 "Funcion 1"-->`+ HelloA() + `"Funcion 2"-->` + HelloB())

console.info(HelloA())


//3
//Defina una función greet que devuelva el valor 'Haydo!'.
//Declarar una variable salutation. 
//Llame a la función greety asigne el resultado de la llamada a la variable salutation.
//Imprimirla en consola con un string que nos calare que ejercicio es.

const a = "Haydo"
const b = "!"

function greet(a, b){
  return a + b;
}

let salutation = greet(a, b)

console.log(`Resultado ejercicio 3 --> ${salutation}`)

//Parámetros

function give(input) {
  return input;
}

//definimos una función que simplemente devuelve el parámetro input. Los parámetros son variables. 

let result = give('apple');

//llamamos a la función y le pasamos el argumento 'apple'. La función será ejecutada. 

//El argumento 'apple'se asignará al parámetro input. Input obtiene el valor 'apple'. 
//La variable input se devuelve en la única línea de código de la función. 
//Este retorno se asigna a la variable result. Finalmente, result tiene el valor 'apple'.

console.info(result)

//Ejercicio
//Escribir una función echo que también devuelva el parámetro pasado. 
//echo('Greta') debe volver 'Greta'y echo('CO2') debe volver'CO2'

function echo(a){
  return a;
}

console.info(echo('Greta'))

console.info(echo('CO2'))

let expr = prompt("Escribe una expresión matemática:", '2*3+2');

alert( eval(expr) );

//CONDICIONALES ------- que son???

// let edad = 18
// let nombre = "Raul"

// if(edad>=18){

//   console.info(nombre + " puede conducir")
// }
// else{
//   console.info(nombre + " no puede conducir")
// }


let edadDeRaul = 17;
let edadDeLucia = 20;
let edadDeCarlos = 89;
const nombre = "Raul";

function validarEdad(edad) {
  var resultado;
  switch (true) {
    case (edad >= 18 && edad < 70):
      resultado = " puede conducir";
      break;
    case (edad >= 70 && edad < 80):
      resultado = " deja la herencia y no conduzcas";
      break;
    case (edad >= 80):
      resultado = " deja la herencia y no conduzcas2";
      break;
    default:
      resultado = " no puede conducir tampoco";
  }

  return resultado;
}
console.info(validarEdad(15));






//ARRAYS ------que son??? que funciones existen para maniular Arrays?


// Var no detecta si ya hemos declarado la variable
// var elegante =5
// var elegante = 7

// Sin embargo LET y CONST si detectan que existe un error

// let comida = 7
// let comida = 7

// const cerveza = 'Fria'
// const cerveza = 'Caliente'

//Arrays [] lista o conjunto grupo de datos, los datos pueden ser de varios tipos.


//forEach atado a los Arrays

let listaDeNumeros= [5, 78, 24, 567]

listaDeNumeros.forEach(function(numero){

  if(numero < 50){
    console.info(numero)
  }
  console.info("numero mayor a 50 por eso no lo imprimo")
})

console.info(listaDeNumeros[3])