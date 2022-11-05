/*
// verdadeiro, o valor procurado realmente está na lista.
console.log( [1, 2, 3, NaN].includes( NaN ) );
*/
    // encontrar pessoas com "au" no nome
const pessoa = [ 
    {id: 11, nome:'Adamastor', idade: 53, grupo: 'Editor'},
    {id: 47, nome:'Joana', idade: 29, grupo: 'Recepcionista'},
    {id: 85, nome:'Mauricio', idade: 38, grupo: 'Editor'},
    {id: 97, nome:'Lalau', idade: 42, grupo: 'Administrador'}
]

const filtroUser = pessoa.filter( p => p.nome.includes( 'au' ) )

console.log( filtroUser );
