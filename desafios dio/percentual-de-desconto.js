// formula do desconto : R = preco - (preco * desc / 100);

let M = parseInt(gets());
let D = parseInt(gets());
let R = M - D;
let X = R * 100 / M;

print('O desconto foi de ' + X + '%');