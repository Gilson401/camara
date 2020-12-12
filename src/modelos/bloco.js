export default class Bloco {

    constructor(nome) {
       this.nome = nome;
       this.disciplina = []
    }

    addDisciplina(nome) {  
        this.disciplina.push(nome);
    }


    editDisciplina(nome) {  
        this.disciplina = nome;
    }


    removeDisciplina(nome) {  
        this.disciplina.pull(nome);
    }

    listDisciplina() {  
        return this.disciplina;
    }


}