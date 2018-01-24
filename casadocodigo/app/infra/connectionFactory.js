let mysql = require('mysql');
//FACTORY METHOD
function createDBConnection() {
    if(!process.env.NODE_ENV || process.env.NODE_ENV === 'dev') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'casadocodigo_nodejs'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'casadocodigo_nodejs_test'
        });
    }

    if(process.env.NODE_ENV == 'production') {
        let urlDeConexao = process.env.CLEARDB_DATABASE_URL;
        let grupos = urlDeConexao.match(/mssql:\/\/(.*):(.*)@(.*)\/(.*)\?/);

        return mysql.createConnection({
                host: grupos[3],
                user: grupos[1],
                password: grupos[2],
                database: grupos[4]
        });

        /*return mysql.createConnection({
                host: 'us-cdbr-iron-east-03.cleardb.net',
                user:'b2d77da8735e14',
                password:'e7e23a40',
                database:'heroku_fa1317dbe7cfacc'
        });*/
    }    
}

//wrapper
module.exports = function() {
    return createDBConnection;
}