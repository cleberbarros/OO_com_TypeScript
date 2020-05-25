class Cliente{

    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    /*constructor(){
     ISSO NÃO COMPILA, SOMENTE PODE TER 1 CONSTRUTOR
    }*/

    apresentar(){
        return `Ola, eu sou ${this.nome} e tenho ${this.idade} anos`;
    }

}

let joao: Cliente = new Cliente('Cleber', 38);
let apresentacao:string = joao.apresentar();

console.log(apresentacao);

let maria: Cliente = new Cliente('Maria',22);
console.log(maria.apresentar());

