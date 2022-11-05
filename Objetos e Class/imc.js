class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc (){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc (){
        const imc = this.calcularImc();
        if (imc < 18.5){
            return 'Abaixo do peso';
        }   else if (imc >= 18.5 && imc < 25){
            return 'Peso normal';
        }   else if (imc >= 25 && imc < 30){
            return 'Acima do peso';
        }   else if (imc >=30 && imc < 40){
            return 'Obesidade';
        }   else{
            return 'Obesidade Grave';
        }
    }
}

const marcos = new Pessoa('Marcos', 75, 1.75);
const renan = new Pessoa('Renan', 85, 1.75);
const vitor = new Pessoa('Vitor', 60, 1.69);

console.log(marcos.classificarImc());
console.log(renan.classificarImc());
console.log(vitor.classificarImc());