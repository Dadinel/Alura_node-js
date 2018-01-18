let http = require('http');
let assert = require('assert');

describe('ProdutosController', function() {
    it('#Listagem JSON', function(done) {
        let configuracoes = {
            hostname: 'localhost',
            port:3000,
            path:'/produtos',
            headers: {
                'Accept':'application/json'
            }
        };

        http.get(configuracoes, function(res) {
            assert.equal(res.statusCode,200);
            assert.equal(res.headers['content-type'],'application/json; charset=utf-8');
            done();
        });
    });
});