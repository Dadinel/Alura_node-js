//http é uma biblioteca nativa do node

//Versão 1
/*var http = require('http');

var server = http.createServer( function(req,res) {
    res.end("<html><head><title>Produtos</title></head><body><h1>Listando os produtos</h1></body></html>");
});

server.listen(3000);

console.log("Servidor rodando");*/

//Versão 2
/*var http = require('http');
var porta = 3000;
var ip = "localhost";

var server = http.createServer(function(req, res) {
    console.log("Recebendo request");
    res.writeHead( 200, {'Content-Type': 'text/html'} );
    res.end('<html><body>Request recebido!</body></html>');
});

server.listen(porta, ip);

console.log("Server running at http://" + ip + ":" + porta + "/");*/

//Versão 3
var http = require('http');

http.createServer(function(request,response){
    if(request.url =="/produtos"){
      response.end("<html><body>listando os produtos da loja</body>");
    } else {
      response.end("<html><body>home da casa do codigo</body></html>");
    }
}).listen(3000,"localhost");

console.log("servidor está rodando");