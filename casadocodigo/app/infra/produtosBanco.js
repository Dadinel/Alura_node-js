module.exports = function() {
    return function(connection) {
        this.lista = function(callback) {
            connection.query('select * from produtos', callback)
        }

        this.remove = function(produto, callback) {
            //connection.query();
        }

        return this;
    }
}