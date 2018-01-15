//let app = require('express')();
let express = require('express');
let load = require('express-load');

module.exports = function() {
    let app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
}