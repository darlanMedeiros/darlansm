// Arrow Function
// Sao funcoes anonimas não tem como colocar nome

const soma = (a,b ) => a+b

console.log (soma(2,3))



///Melhorias na notação literal

const nome = 'Carla'

const pessoa = {
    nome,
    ola(){
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())