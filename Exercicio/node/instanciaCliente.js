const contadorA = require( './instanciaUnica')
const contadorB = require( './instanciaUnica')

const contadorC = require( './instanciaNova')()
const contadorD = require( './instanciaNova')()

console.log(contadorD)


contadorA.inc()
contadorA.inc()

console.log(contadorA.valor , contadorB.valor)

contadorC.inc()

console.log(contadorC.valor , contadorD.valor)