
let diaNumero = 5; 

let diaNome;

switch (diaNumero) {
    case 1:
        diaNome = "Segunda";
        break;
    case 2:
        diaNome = "Terça";
        break;
    case 3:
        diaNome = "Quarta";
        break;
    case 4:
        diaNome = "Quinta";
        break;
    case 5:
        diaNome = "Sexta";
        break;
    case 6:
        diaNome = "Sábado";
        break;
    case 7:
        diaNome = "Domingo";
        break;
    default:
        diaNome = "Dia inválido";
}

console.log(`O dia referente ao número ${diaNumero} é ${diaNome}.`);
