//var configura = require ('./config/express');
//let rotasProdutos = require('./app/routes/produtos')(app);

let app = require ('./config/express')();
//Utilização do socket.io
let http = require('http').Server(app);
let io = require('socket.io')(http);

//Disponibiliza a variável do IO pelo express
app.set('io', io);

http.listen(3000, function(){
    console.log("Servidor rodando");
});