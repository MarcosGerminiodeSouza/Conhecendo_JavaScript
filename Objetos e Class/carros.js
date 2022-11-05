class Carro {
    marca;
    cor;
    kmPorLitro;

    constructor (marca, cor, kmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    calcularGastoDoPercurso(distanciaKm, precoCombustivel){
        return distanciaKm * this.kmPorLitro * precoCombustivel;
    }
}

const palio = new Carro('Fiat', 'Prata', 1/11.2);
const uno = new Carro('Fiat', 'Prata', 1/13.2 );
const strada = new Carro('Fiat', 'Branca', 1/12.4);
const montana = new Carro('Chevrolet', 'Branca', 1/9.6);

console.log(palio.calcularGastoDoPercurso(70, 5));
console.log(uno.calcularGastoDoPercurso(70, 5));
console.log(strada.calcularGastoDoPercurso(70, 5));
console.log(montana.calcularGastoDoPercurso(70, 5));