let mysql = require('mysql');
//FACTORY METHOD
function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'casadocodigo_nodejs'
    });
}

//wrapper
module.exports = function() {
    return createDBConnection;
}