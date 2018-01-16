function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
    this._connection.query('select * from produtos', callback);
}

ProdutosDAO.prototype.salva = function(produto, callback) {
    this._connection.query('insert into produtos set ?', produto, callback);
}

ProdutosDAO.prototype.deleta = function(id, callback) {
    this._connection.query('delete from produtos where ?', id, callback);
}

module.exports = function() {
    return ProdutosDAO;
    /*return function(connection) {
        this.lista = function(callback) {
            connection.query('select * from produtos', callback);
        }
        return this;
    }*/
}