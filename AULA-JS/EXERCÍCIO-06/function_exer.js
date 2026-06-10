function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 16.9) {
        classificacao = "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.4) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else {
        classificacao = "Fora das três primeiras faixas";
    }

    return `IMC: ${imc.toFixed(2)} - Classificação: ${classificacao}`;
}

console.log(calcularIMC(65, 1.70)); 
