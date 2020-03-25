function expoente(base,expoente) {

let aux  = base

    for (let i = 1; i < expoente; i++) {
               aux = base * aux
    }

    return aux
    
}

console.log(expoente(2,128))