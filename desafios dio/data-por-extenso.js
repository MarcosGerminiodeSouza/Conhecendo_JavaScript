//gets(); 19/10/1997 , 25/12/2019 , 02/02/2020
const mesTxt = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

let data = 02/02/2020;
let dataSplit = data
    .split('/')
    .join('')
;

console.log(mesTxt);
//console.log(setReplace("19/10/1997","/10/"," de outubro de "));