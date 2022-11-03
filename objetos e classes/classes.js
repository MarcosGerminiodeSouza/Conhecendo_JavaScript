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
