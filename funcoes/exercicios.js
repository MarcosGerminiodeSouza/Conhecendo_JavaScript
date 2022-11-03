/*
function digaMeuNome(nome){
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade){
    if (idade >= 18){
        console.log(digaMeuNome('Marcos \n') + 'Maior de idade!');
    }   else{
        console.log('Menor de idade');
    }
}

verificarIdade(26);
*/

function aplicarDesconto(valor, desconto){
    return valor - valor * (desconto / 100);
}

function aplicarJuros(valor, juros){
    return valor + valor * (juros / 100);
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10) + ' reais, com desconto');
}   else if (formaDePagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15) + ' reais, com desconto');
}   else if (formaDePagamento === 3){
    console.log(precoEtiqueta + ' reais');
}   else {
    console.log(aplicarJuros(precoEtiqueta, 10) + ' reais, com juros');
}

//  console.log(200 * (10 / 100));