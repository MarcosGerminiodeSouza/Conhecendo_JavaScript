
/*    //verificar se há algum número primo. No caso 11 é primo, então é: true
function numPrimo(valor){
    for (let i = 2; i < valor; i++) {
        if (valor % i === 0) {
            return false
        }
    }

    return valor > 1
}

const novoArr = [6, 8, 11, 14, 42]
console.log(novoArr.some(numPrimo));
*/

    //Verificar por condições em valores/objetos. No caso: se tem algum piloto no time
    const time = [
        {id: 12, nome:'Topper Harley', piloto: true},
        {id: 44, nome:'Ramada Thompson', piloto: true},
        {id: 59, nome:'Pete Thompson', piloto: false},
        {id: 122, nome:'Kowalski', piloto: false}
    ]

    console.log( time.some( pessoa => pessoa.piloto) );
