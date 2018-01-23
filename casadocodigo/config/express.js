//let app = require('express')();
let express = require('express');
let load = require('express-load');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');

module.exports = function() {
    let app = express();

    //Arquivos estáticos
    app.use(express.static('./app/public'));

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //MiddleWares
    //Requisição para o express -> function -> function -> function -> ... -> rota
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    //Tratativa de endereços inválidos
    app.use(function(req, res, next) {
        res.status(404).render('erros/404');
        next();
    });

    //Tratativa de erros no servidor
    app.use(function(error, req, res, next) {
        if(process.env.NODE_ENV == 'production') {
            res.status(500).render('erros/500');
            return;
        }

        next(error);
    });

    //tem que colocar na ordem, caso contrário ele passa pelo middleware e 
    //ainda não vai ter acontecido nenhum erro.

    return app;
}