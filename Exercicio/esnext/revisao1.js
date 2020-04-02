//let e const
{
    var a=2
    let b = 3
    console.log(b)

}

// let somente funciona no bloco
//console.log(b)

console.log(a)

//Templete String

const produto ='iPad'
console.log (`${produto} é caro`)


//Destruturing

const [ l, e, ...trans] = "Cod3r"

console.log(l,e,trans)

const [x,,y] = [1,2,3]
console.log(x,y)
// idade:i renomeia a variavel
const { idade: i, nome} = {nome:'Ana', idade: 9}

console.log (i,nome)

