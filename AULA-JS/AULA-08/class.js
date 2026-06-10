class Aluno {
    constructor(_nome, _ra, _curso, _matricula){
    this.nome = _nome
    this.ra = _ra
    this.curso = _curso
    this._matricula = _matricula
    }

    alonoFaz(){
        return `${this.nome} Fala GABRIELLL`
    }
}

let aluno1 = new Aluno("Ermeson", 1234, "Zendesk", false)
let aluno2 = new Aluno("Yasmin", 1235, 'gestão ERP', true )
let aluno3 = new Aluno("ben-hur", 1236, 'Power B.I', true)

console.log(`None Alun(@): ${alunol.nome}`);
console.log(`Curso Alun(@): ${alunol.curso}`);
console.log(`Alun(@) matriculado: ${alunol.matricula}`);
console.log(alunol.alunoFaz());

console.log(`========================` );

console.log(`Nome Alun(@): ${aluno2.nome}`);
console.log(`Curso Alun(@): ${aluno2.curso}`);
console.log(`Alun(@) matrículado: ${aluno2.matricula}`);
console.log(aluno2.alunoFaz());

console.log(`========================` );

console.log(`Nome Alun(@): ${aluno3.nome}`);
console.log(`Curso Alun(@): ${aluno3.curso}`);
console.log(`Alun(@) matrículado: ${aluno3.matricula}`);
console.log(aluno3.alunoFaz());