function require(path) {
    var codigoDoSeuModulo = carregado(path);

    var funcaoDeCarregamento = function() {
        eval(codigoDoSeuModulo);
    }

    var module = {
        exports: {}
    };

    funcaoDeCarregamento(module,module.exports);
    return module;
}