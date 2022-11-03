const pessoa = {
    nome: 'Marcos G Souza',
    idade: 26,
    descreva: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}; // objetos literias {chave e valor, chave e valor...}
/*
pessoa.descreva = function (){
    console.log(`Meu nome é ${this.nome}`)
}
*/
pessoa.nome = 'Renan';
pessoa.idade = 30;
pessoa.descreva();


//  pessoa.altura = 1.75;
//  delete pessoa.nome;

//  console.log(pessoa);

//const atributo = 'idade';
//console.log(pessoa['idade']);
//pessoa['nome'] = 'teste';   // atributo
// pessoa.nome = 'teste';      // direto