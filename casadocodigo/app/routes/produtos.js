//let connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
    app.get('/produtos', function(req, res){
        //res.send("<html><body>Listagem de Produtos </body></html>");
        //let connection = connectionFactory();
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        //connection.query('select * from produtos', function(errors, results) {
        produtosDAO.lista( function(errors, results, next) {
            if(errors) {
                return next(erros);
                //console.log(errors);
                //throw new Error(errors);
            }
            else {
                res.format({
                    html: function() {
                        //res.send(result);
                        res.render('produtos/lista', {lista: results});
                    },
                    json: function() {
                        res.json(results);
                    },
                    default: function() {
                        res.send(results);
                    }
                });
            }
        });

        connection.end();
        //res.render('produtos/lista');
    });

    //API para retorno de json, permitindo se comunicar com qualquer aplicação
    /*app.get('/produtos/json', function(req, res){
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista( function(err, results) {
            if(err) {
                console.log(err);
            }
            else {
                res.json(results);
            }
        });

        connection.end();
    });*/

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form',{errosValidacao:null,produto:{}});
    });

    app.post('/produtos', function(req, res) {
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);
        let produto = req.body;

        //let validadorTitulo = req.assert('titulo', 'Título é obrigatório');
        //validadorTitulo.notEmpty();

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();

        let erros = req.validationErrors();

        if(erros) {
            res.format({
                html: function() {
                    //res.send(result);
                    res.status(400).render('produtos/form',{errosValidacao:erros,produto:produto});
                },
                json: function() {
                    res.status(400).json(erros);
                },
                default: function() {
                    res.status(400).send(erros);
                }
            });

            //console.log(erros);
            return;
        }

        produtosDAO.salva(produto, function(err, res) {
            if(err) {
                console.log(err);
            }
        });

        connection.end();
        res.redirect('/produtos');
        //res.render('produtos/salvar');
    });

    //Query
    app.delete('/produtos', function(req, res) {
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);
        let id = res.req.query;

        produtosDAO.deleta(id, function(err, res) {
            if(err) {
                console.log(err);
            }
        });

        connection.end();
        res.render('produtos/form',{errosValidacao:null,produto:{}});
    });

    //Param
    app.delete('/produtos/:id', function(req, res) {
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);
        let id = res.req.params;

        //_deleta(id, res, app);
        produtosDAO.deleta(id, function(err, res) {
            if(err) {
                console.log(err);
            }
        });

        connection.end();
        res.render('produtos/form',{errosValidacao:null,produto:{}});
    });
}

/*function _deleta(id, res, app) {
    let connection = app.infra.connectionFactory();
    let produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.deleta(id, function(err, res) {
        if(err) {
            console.log(err);
        }
    });

    connection.end();
    res.render('produtos/form',{errosValidacao:null,produto:{}});
}*/