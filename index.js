const express = require('express'); // importando o express
const app = express(); // iniciando o express 

app.get("/", function(req, res) {
    res.send("Bem-vindo ao pato");
});

app.get("/blog/:artigo?", function(req, res) {
    var artigo = req.params.artigo;

    if (artigo) {
        res.send("Artigo " + artigo);
    } else {

        res.send("Bem-vindo ao blog");
    }
})

app.get("/canal/youtube", function(req, res) {
    var canal = req.query[canal]
    if (canal) {
        res.send(canal);
    } else {
        res.send("Nenhum canal fornecido!");
    }
})

app.get("/ola/:nome/:empresa", function(req, res) {
    var nome = res.send(req.params.nome);
    var empresa = res.params.empresa;
    res.send("oi" + nome + empresa);
})











app.listen(4000, function(erro) {
    if (erro) {
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})