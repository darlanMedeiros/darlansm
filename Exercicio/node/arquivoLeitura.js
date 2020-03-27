const fs = require('fs')

//sincrono

// __dirname é variavel da pasta do sistema

console.log(__dirname)
console.log(__filename)


const caminho = __dirname + '/arquivo.json'

//sincrono

const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

//assincrono

fs.readFile(caminho,'utf-8',(err,conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
}

)

