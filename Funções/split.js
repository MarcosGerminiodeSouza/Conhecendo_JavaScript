/*const str = 'Tulio/0/Faria';
const partes = str.split('/');
console.log(partes); //"Tulio","0","Faria"*/
/*const str = 'Tulio 0 Faria';
const partes = str.split(' ').filter(p => p!= '0');
console.log(partes); //'Tulio','Faria'*/
/*const str = 'Tulio Faria';
const vogais = 'aeiou'.split('');
const partes = str
                .split('')
                .filter(letra => vogais.indexOf(letra) < 0)
                .join('')
console.log(partes); //Tl Fr  */
/*const str = 'Tulio Faria';
const partes = str
                .split('')
                .reverse()
                .join('')
console.log(partes); //airaF oiluT */
/*const str = 'ovo';
console.log(
    str, str
            .split('')
            .reverse()
            .join('')===str
); // ovo true*/