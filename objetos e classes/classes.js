/*
class Pessoa {
    nome;
    idade;
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade ${this.idade} anos.`);
    }
}   //  clase é definição do que deve ser objeto.

const vitor = new Pessoa();     //  instância é uma ocorrência do objeto.
vitor.nome = 'Vitor Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan Paula';
renan.idade = 30;

const marcos = new Pessoa();
marcos.nome = 'Marcos Germinio';
marcos.idade = 26;

vitor.descrever();
renan.descrever();
marcos.descrever();
*/
class Pessoa {
    nome;
    idade;
    nascido;

    // constructor é o que acontece quando uma Pessoa é instaciada.
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.nascido = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade ${this.idade} anos.`);
    }
}

const vitor = new Pessoa('Vitor Gerra', 25);
const renan = new Pessoa('Renan de Paula', 30);
const marcos = new Pessoa('Marcos Germinio', 26);
/*
vitor.descrever();
renan.descrever();
marcos.descrever();
*/
console.log(vitor);
console.log(renan);
console.log(marcos);