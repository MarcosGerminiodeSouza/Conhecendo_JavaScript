class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

function comnpararPessoa(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome} `);
    }   else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome} `);
    }   else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!! `);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);
const marcos = new Pessoa('Marcos', 26);
const alice = new Pessoa('Alice', 24);
const joao = new Pessoa('João', 24);

comnpararPessoa(alice, joao);