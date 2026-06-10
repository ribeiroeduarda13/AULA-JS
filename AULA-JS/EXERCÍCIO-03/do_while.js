let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}


let soma = 0;
let numero;

do {
    numero = Number(prompt("Digite um número (0 para sair):"));
    soma += numero;
} while (numero !== 0);

console.log("Soma total:", soma);

let numeroTabuada = Number(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}