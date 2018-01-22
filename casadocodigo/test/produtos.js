//let http = require('http');
//let assert = require('assert');

let express = require('../config/express')();
let request = require('supertest')(express);

describe('ProdutosController', function() {

    beforeEach(function(done) {
        //node-database-cleaner
        let conn = express.infra.connectionFactory();
        conn.query("delete from produtos", function(ex, result) {
            if(!ex) {
                done();
            }
        });
    });

    it('#Listagem de produtos JSON', function(done) {
        /*let configuracoes = {
            hostname: 'localhost',
            port:3000,
            path:'/produtos',
            headers: {
                'Accept':'application/json'
            }
        };*/

        /*http.get(configuracoes, function(res) {
            assert.equal(res.statusCode,200);
            assert.equal(res.headers['content-type'],'application/json; charset=utf-8');
            done();
        });*/

        request.get('/produtos')
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200,done);
    });

    it('#Listagem de produtos HTML', function(done) {
        request.get('/produtos')
        .set('Accept', 'text/html')
        .expect('Content-type', /html/)
        .expect(200,done);
    });

    it('#Cadastro de produto válido', function(done) {
        request.post('/produtos')
        .send({titulo:"Test-Automatic",descricao:"Test-Automatic",preco:100})
        .expect(302,done);
    });

    it('#Cadastro de produto inválido', function(done) {
        request.post('/produtos')
        .send({titulo:"",descricao:"Novo livro"})
        .expect(400,done);
    });
});