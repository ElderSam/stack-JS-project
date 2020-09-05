const express = require('express'); //adiciona o express
const mongoose = require('mongoose');

// Inicia o App
app = express(); 

let resConnectionDB;

var mongoDB = 'mongodb://localhost:27017/nodeapi';
// Inicia o DB
mongoose.connect(
    mongoDB,
    { useNewUrlParser: true,
      useUnifiedTopology: true }

).then((response) => {
    resConnectionDB = 'MongoDB conectado com sucesso!'
    console.warn(resConnectionDB)
})
.catch((err) => {
    resConnectionDB = 'ERRO na conexão com o MongoDB!'
    console.warn(resConnectionDB)
});

// Primeira rota
app.get('/', (req, res) => {
    res.send(resConnectionDB);
});

app.listen(3001); /* inicia o servidor e 'ouve' a porta 3001 do nosso navegador */