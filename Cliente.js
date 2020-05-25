var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    /*constructor(){
     ISSO NÃO COMPILA, SOMENTE PODE TER 1 CONSTRUTOR
    }*/
    Cliente.prototype.apresentar = function () {
        return "Ola, eu sou " + this.nome + " e tenho " + this.idade + " anos";
    };
    return Cliente;
}());
var joao = new Cliente('Cleber', 38);
var apresentacao = joao.apresentar();
console.log(apresentacao);
var maria = new Cliente('Maria', 22);
console.log(maria.apresentar());
