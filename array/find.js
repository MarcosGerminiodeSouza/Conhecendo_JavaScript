/*    // vai retornar o valor do primeiro elemento. No caso "Mussarela"
const pizzas = [
    "Mussarela",
    "Calabresa",
    "Portuguesa",
    "Marguerita",
    "Frango c/ Catupiry"
]

const foundPizza = pizzas.find(p => p.startsWith("M") )

console.log(foundPizza);
*/

    //faz a busca e retorna todo o objeto. No caso "cereja"
const frutas = [
    {nome: "jaca", quant: 2},
    {nome: "banana", quant: 0},
    {nome: "cereja", quant: 5}
]

const foundFruta = frutas.find( fruta => fruta.nome === "cereja" )

console.log(foundFruta);
