let notas = [29,30,35, 44, 55, 66, 78, 45, 81]


function aprovacao(numero) {

    console.log(numero)
    
    for (let index = 0; index < numero.length; index++) {

       
        arredondar(numero[index])
        if(verificaNumero(arredondar(numero[index]))){
            console.log(`Sua nota foi: ${arredondar(numero[index])} você foi aprovado`)
        }else{
            console.log(`Sua nota foi: ${arredondar(numero[index])} você foi reprovado`)
        }

        
        
    }

}


function verificaNumero(numero) {

    if (numero   >= 40) {
        return true
    } else {
        return false
    }

}

function arredondar(nota) {

    if(nota % 5 > 2){
        return nota + (5-(nota%5))
        
    }else{
        return nota
    }
    
}

aprovacao(notas)
