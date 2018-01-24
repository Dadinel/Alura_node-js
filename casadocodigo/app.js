//var configura = require ('./config/express');
//let rotasProdutos = require('./app/routes/produtos')(app);

let app = require ('./config/express')();
//Utilização do socket.io
let http = require('http').Server(app);
let io = require('socket.io')(http);

//Disponibiliza a variável do IO pelo express
app.set('io', io);

/*
let porta = process.env.PORT || 3000;
let server = http.listen(porta, function () {

    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
*/

let server = null;
let porta = 3000;

if (process.env.PORT) {
    porta = process.env.PORT;

    server = http.listen(porta, function() {
        let host = server.address().address;
        let port = server.address().port;
        console.log('Example app listening at http://%s:%s', host, port);
    });
}
else {
    server = http.listen(porta, function() {
        let host = server.address().address;
        let port = server.address().port;

        if(host === '::') {
            host = 'localhost';
        }
        console.log('Example app listening at http://%s:%s', host, port);
    });
}

/*http.listen(3000, function(){
    console.log("Servidor rodando");
});*/