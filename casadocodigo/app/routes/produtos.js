module.exports = function(app) {
    app.get('/produtos', function(req, res){
        //res.send("<html><body>Listagem de Produtos </body></html>");
        let mysql = require('mysql');
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'casadocodigo_nodejs'
        });

        connection.query('select * from livros', function(err, result) {
            if(err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        });

        connection.end();

        //res.render('produtos/lista');
    });
}