// 19/10/1997 , 25/12/2019 , 02/02/2020
let data = '13/09/2021';
//let data = gets();
const mesTxt = [' de Janeiro de ',' de Fevereiro de ',' de Março',' de Abril de ',' de Maio',' de Junho de ',
' de Julho de ',' de Agosto de ',' de Setembro de ',' de Outubro de ',' de Novembro de ',' de Dezembro de ']
let dataSplit = data.split('/');
let mes = dataSplit[1];

if (mes == 01) {
    mes = mesTxt[0];
}   else if(mes == 02){
    mes = mesTxt[1];
}   else if (mes == 03){
    mes = mesTxt[2];
}   else if(mes == 04){
    mes = mesTxt[3];
}   else if (mes == 05){
    mes = mesTxt[4];
}   else if(mes == 06){
    mes = mesTxt[5];
}   else if (mes == 07){
    mes = mesTxt[6];
}   else if(mes == 08){
    mes = mesTxt[7];
}   else if (mes == 09){
    mes = mesTxt[8];
}   else if(mes == 10){
    mes = mesTxt[9];
}   else if (mes == 11){
    mes = mesTxt[10];
}   else {
    mes = mesTxt[11];
}

dataSplit[1] = mes;

console.log(dataSplit.join(''));
//print(dataSplit.join(''));