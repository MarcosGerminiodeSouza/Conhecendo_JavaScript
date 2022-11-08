let vetor = [gets(), gets(), gets(), gets(), gets()];
let pares = [];
let impares = [];

for (let i = 0; i <= 4 ; i++){
  if (vetor[i] %2 == 0){
    pares.push(vetor[i]);
  } else {
    impares.push(vetor[i]);
  }
}

print('Vetor: ' + vetor);
print('Par(es): ' + pares);
print('Impar(es): ' + impares);