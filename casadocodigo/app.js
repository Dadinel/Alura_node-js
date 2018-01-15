//var configura = require ('./config/express');
//let rotasProdutos = require('./app/routes/produtos')(app);

let app = require ('./config/express')();

app.listen(3000, function(){
    console.log("Servidor rodando");
});