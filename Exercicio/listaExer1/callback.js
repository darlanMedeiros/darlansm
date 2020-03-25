let salarioBruto = 3000;
let salarioLiquido;

console.log (getSalario)

//Função de calcula o salário e retorna uma outra 

function getSalario(salarioBruto, callback)
{
    let liquido = 0;
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const fgts = salarioBruto * 0.15;
    const descontos = inss + vr + vt + fgts;
    liquido = salarioBruto - descontos;
    
    return callback(liquido);
}

const result = (resultado) => console.log (`O salário liquido é ${resultado}`)

getSalario(salarioBruto, result)
