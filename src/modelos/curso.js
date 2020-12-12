export default  class Curso {
    constructor(nome, turma) {
      this.nome = nome;
      this.turma = []
    }

    addTurma(nome) {  
        this.turma.push(nome);
    }


    editTurma(nome) {  
        this.turma = nome;
    }


    removeTurma(nome) {  
        this.turma.pull(nome);
    }

    listTurma() {  
        return this.turma;
    }


}