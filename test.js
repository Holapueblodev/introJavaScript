const suma = ( num1, num2 ) => num1 + num2
const resta = ( num1, num2 ) => num1 - num2

module.exports = { suma, resta }

const resultado = 2
const esperado = 2

if ( resultado !== esperado ) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` )
}

console.log( '¡Todo OK! 👌' )