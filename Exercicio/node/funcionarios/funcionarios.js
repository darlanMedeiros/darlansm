const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = (f) => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


// Função para filtrar por query

function porPais(callback,query){

    return callback.filter( f => f.pais === query)

}


axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // mulher chinesa com menor salário?

    const func1 = porPais(funcionarios,'China')

    console.log(func1)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
};

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']


/**
 * Array filters items based on search criteria (query)
 */
function filterItems2(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems2('ap')); // ['apple', 'grapes']
console.log(filterItems2('an')); // ['banana', 'mango', 'orange']\