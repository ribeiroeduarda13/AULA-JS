// =========================
// 1 – Criando Variáveis
// =========================

let num1 = 10;
let num2 = 5;

console.log("Soma:", num1 + num2);

let texto = "Olá, mundo!";
console.log("Texto:", texto);

let ativo = true;
console.log("Ativo:", ativo);

let pi = 3.1415;
console.log("PI:", pi);


// =========================
// 2 – Perguntando ao usuário
// =========================

let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual sua idade?");
let bairro = prompt("Qual bairro você mora?");

console.log("Nome:", nome.toUpperCase());
console.log("Idade:", idade);
console.log("Bairro:", bairro);

alert("Nome: " + nome.toUpperCase());
alert("Idade: " + idade);
alert("Bairro: " + bairro);


// Soma de dois números
let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));

let soma = numero1 + numero2;

console.log("Resultado da soma:", soma);
alert("Resultado da soma: " + soma);


// =========================
// 3 – Aplicando métodos
// =========================

// Nome vindo do usuário (sem exemplo fixo)
let nomeCompleto = prompt("Digite seu nome completo:");

let novoNome = nomeCompleto;

console.log("Nome:", novoNome);


// =========================
// 4 – Desconto
// =========================

let preco = 100;
let desconto = 0.2;

let precoFinal = preco - (preco * desconto);

console.log("Preço final:", precoFinal);


// =========================
// 5 – Verificar idade
// =========================

let idadeUsuario = parseInt(prompt("Digite sua idade:"));

if (idadeUsuario < 18) {
    console.log("Você é menor de idade.");
    alert("Você é menor de idade.");
} else if (idadeUsuario < 60) {
    console.log("Você é adulto.");
    alert("Você é adulto.");
} else {
    console.log("Você é idoso.");
    alert("Você é idoso.");
}


// =========================
// 6 – Pode dirigir?
// =========================

let idadeDirigir = parseInt(prompt("Digite sua idade para dirigir:"));

if (idadeDirigir >= 18) {
    console.log("Você pode dirigir.");
    alert("Você pode dirigir.");
} else {
    console.log("Você ainda não pode dirigir.");
    alert("Você ainda não pode dirigir.");
}


// =========================
// 7 – Número positivo, negativo ou zero
// =========================

let numero = parseInt(prompt("Digite um número inteiro:"));

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}


// =========================
// 8 – Cálculo do IMC
// =========================

let altura = parseFloat(prompt("Digite sua altura em metros:"));
let peso = parseFloat(prompt("Digite seu peso em kg:"));

let imc = peso / (altura * altura);

console.log("IMC:", imc.toFixed(2));

if (imc >= 18.5 && imc <= 24.9) {
    console.log("IMC dentro do intervalo saudável.");
} else {
    console.log("IMC fora do intervalo saudável.");
}