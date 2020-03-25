//estrategia 1 para gerar valor padrão

function soma1(a,b,c){
    a=a || 1
    b=b || 1
    c=c || 1
    return a+b+c
}

console.log(soma1(), soma1(2), soma1(1,2,3), soma1(0,0,0))

//estratagia 2, 3, 4 para gerar valor padrão

function soma2(a,b,c){
    a=a !== undefined ? a:1
    b=1 in arguments ? b:1
    c = isNaN(c)? 1:c
    return a+b+c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))

//valor padrão do es2015

function soma3(a=1,b=1, c=1){
    return a+b+c
}

console.log('Soma 3')
console.log(soma3())
console.log(soma3(3))
console.log(soma3(1,2,3))
console.log(soma3(0,0,0).)
