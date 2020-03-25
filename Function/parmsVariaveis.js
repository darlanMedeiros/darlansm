//Toda função tem um array com arguments

function soma(){
    let soma =0
    for (i in arguments){
        soma += arguments[i]
    }

    return soma
}


console.log (soma())
console.log(soma(2,3))
console.log(soma(2.1,3.3,4.3))
console.log(soma(2,3, 'Teste'))





