 //Exemplo replace
let texto1 = 'Meu nome é Almir';
let novoTexto1 = texto1.replace('Almir', 'Raul');
console.log(novoTexto1);    //Meu nome é Raul

 //Exemplo com regex
 //g: é uma flag usada para procurar todas as ocorrências
 let texto2 = "sonic é meu amigo, sonic é meu heroi";
 let texto3 = '07/11/2022';
 console.log(texto3);   //07/11/2022
 let novoTexto2 = texto2.replace(/sonic/g, "rammus");
 console.log(novoTexto2);   //rammus é meu amigo, rammus é meu heroi
 let novoTexto3 = texto3.replace(/11/g, " de Novembro de ");
 console.log((novoTexto3.split('/').join(''))); //07 de Novembro de 2022 

 //Exemplo com regex case sensitive
 //gi: é uma flag usada para procurar todas as ocorrências idependente de maiusculo ou minusculo
 let texto4 = 'eu to usando JAVAscrIPT, o JaVaScRiPt é legal'
 let novoTexto4 = texto4.replace(/javascript/gi, "computador")
 console.log(novoTexto4);   //eu to usando computador, o computador é legal