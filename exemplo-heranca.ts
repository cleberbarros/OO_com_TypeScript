class Funcionario{
    nome: string;
    salario: number;


    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    pagarImposto(taxa: number = 7.5){
        console.log(`Pagando ${this.salario* taxa /100} de imposto`);
        
    }

}

class Secretario extends Funcionario{

}


class Executivo extends Funcionario{

    pagarImposto(taxa: number = 27.5){
        console.log('Executando Executivo!');
        super.pagarImposto(taxa);
        
    }
}

let sara = new Secretario('Sara',2000);
sara.pagarImposto();

let jorge = new Executivo('Jorge',37000);
jorge.pagarImposto();