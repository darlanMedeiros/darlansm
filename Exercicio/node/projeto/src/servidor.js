//@ts-check
const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const bancoDeDados = require('./bancoDados')




app.use (bodyParser.urlencoded({extended:true}))

app.get ('/produtos', (req,res,next)=>{
    res.send(bancoDeDados.getProdutos()) //Converter para Json
})

app.get ('/produtos/:id', (req,res,next)=>{
    res.send(bancoDeDados.getProduto(req.params.id)) //Converter para Json
})

app.post ('/produtos', (req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        name: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //Converter para Json
})

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}.`)
})