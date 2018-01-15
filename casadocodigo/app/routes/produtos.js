//let connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
    app.get('/produtos', function(req, res){
        //res.send("<html><body>Listagem de Produtos </body></html>");
        //let connection = connectionFactory();
        let connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco(connection);

        //connection.query('select * from produtos', function(err, results) {
        produtosBanco.lista( function(err, results) {
            if(err) {
                console.log(err);
            }
            else {
                //res.send(result);
                res.render('produtos/lista', {lista: results});
            }
        });

        connection.end();

        //res.render('produtos/lista');
    });
}