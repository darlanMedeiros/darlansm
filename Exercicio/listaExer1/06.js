function jurosSimpres(capitalInicial, juros, tempoAplicacao) {

    juros = juros / 100
    return capitalInicial + (capitalInicial * juros * tempoAplicacao)

}

function jurosCompostos(capitalInicial, juros, tempoAplicacao) {

    juros = juros / 100
    return capitalInicial * (1 + juros) ** tempoAplicacao

}

console.log(jurosSimpres(1000, 2, 12))
console.log(jurosCompostos(1000,2,12))