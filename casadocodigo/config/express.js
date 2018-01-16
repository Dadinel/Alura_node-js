//let app = require('express')();
let express = require('express');
let load = require('express-load');
let bodyParser = require('body-parser');

module.exports = function() {
    let app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //MiddleWare
    app.use(bodyParser.urlencoded({extended: true}));

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
}