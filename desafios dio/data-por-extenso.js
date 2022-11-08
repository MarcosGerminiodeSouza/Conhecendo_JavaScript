/* função setReplace
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

console.log(setReplace("19/10/1997","/10/"," de outubro de "));
*/
//gets(); 19/10/1997 , 25/12/2019 , 02/02/2020
let data = 19/10/1997;
let dataSplit = data
    .split('/')
    .replace(mes, novoMes)
    .join('')
;
function dataReplace(data, mes, mesTxt){
    //dataSplit[1] = mes
}

console.log(dataSplit);
//print(dataSplit);

const mesTxt = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
                'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
];