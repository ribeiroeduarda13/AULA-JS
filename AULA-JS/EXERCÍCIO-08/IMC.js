function calcularIMC() {
   
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoElement = document.getElementById('resultado');

    if (peso > 0 && altura > 0) {
       
        const imc = peso / (altura * altura);
        
    
        resultadoElement.innerHTML = `Seu IMC é: <strong>${imc.toFixed(2)}</strong>`;
    } else {
        resultadoElement.innerHTML = "Por favor, insira valores válidos.";
    }
}
