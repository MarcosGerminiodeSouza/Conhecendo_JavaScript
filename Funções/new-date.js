// função para exibir data no padrão brasileiro
let data = new Date();
function formatarData(data){
    let newDate = new Date(data);
    return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear() }`;
}
// somar dias a uma data
//let quantDias = 10;
//data.setDate(data.getDate() + quantDias);
//console.log(formatarData(data));

//verificar primeiro e ultimo dia do mês
let primeiroDia = new Date(data.getFullYear(), data.getMonth() , 1);
let ultimoDia = new Date(data.getFullYear(), data.getMonth() +1, 0);
console.log(formatarData(primeiroDia), formatarData(ultimoDia));

/* Calcular a diferênça de dias entre datas
let diaAtual = new Date();
let dataPassada = new Date(2022, 10, 1);
let dataEmMilissegundos = Math.abs(diaAtual.getTime() - dataPassada.getTime());
let diasDeDiferenca = Math.ceil(dataEmMilissegundos / (1000 * 60 * 60 * 24));
console.log(`A diferença de dias é ${diasDeDiferenca}`);
*/
/* replace
let  data1 = '19/10/1997';
let  data2 = '25/12/2019';
let  data3 = '02/02/2020';
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

console.log(setReplace("19/10/1997","/10/"," de outubro de "));
*/
/* Os 12 Meses
let dataGets = '19/10/1997';
const mesTxt = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];
function dataEntrada(dia, mes, ano){
    return dataGets.replace(mes, mesTxt);
    for (let mesTxt = 0; mesTxt < mes.length; mesTxt++) {
                
    }
}
*/



