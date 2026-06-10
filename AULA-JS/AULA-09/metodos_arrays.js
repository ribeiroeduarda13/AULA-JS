let nomes = ["João", "helena", "Pietro", "Eduardo", "Duda", "Brum"]
//           0         1         2          3          4       5
let idades [10, 58, 7, 18, 19 , 15]
// Item | String
// Index Number
// Array ["João", "helena", "Pietro", "Eduardo", "Duda", "Brum"]

nomes.forEach(function enviarEmail(nome, numero, turma01){
    console.log(`E-mail foi enviado para: ${nome}`);
    console.log(`Número da chamada: ${numero}`);
    console.log(`Alunos da Turma 01: ${turma01}`);
    console.log("--------------------------");
})
