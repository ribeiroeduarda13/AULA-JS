let fruta = ["Abacate","maça","abacaxi","bergamota"]
// valor | index | array
frutas.forEach((fruta, numero, lista)=>{
    console.log(`Fruta: ${fruta}`);
    console.log(`Index: ${numero}`);
    console.log(`Array completo: ${lista}`);

})

let frutasMaior = frutas.map((fruta)=>{
     return fruta.toUpperCase()
})
    console.log(frutas);
    console.log(frutasMaior);

let  idade_alunos = [18, 24, 19, 17]
// 18

let idade_maiores = idade_alunos.filter((idade)=>{
    return idade > 17
})

console.log(idade_maiores);