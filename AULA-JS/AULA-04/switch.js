switch (key) {
    case value

    break;

    default:
        break;
}

// 1 - Bom
// 2 - Excelente
// 3 - Regular
// 4 - Ruim
// 5 - Horrível
let atendimento = 2;
switch (atendimento) {
    case 1:
        console.log(`Vc foi avaliado com: Bom`);
        break;
    case 2:
        console.log(`Vc foi avaliado com: Excelente`);
        break;
    case 3:
        console.log(`Vc foi avaliado com: Regular`);
        break;
    case 4:
        console.log(`Vc foi avaliado com: Ruim`);
        break;
    case 5:
        console.log(`Vc foi avaliado com: Horrível`);
        break;

    default:
        console.log(`Vc não foi avaliado.`);
    break;
}

console.log(`Vc foi avaliado como:`)
console.log(atendimento)