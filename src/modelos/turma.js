export default class Turma {
    constructor(nome) {
       this.nome = nome;
       this.bloco = []
    }


    addBloco(nome) {  
        this.bloco.push(nome);
    }


    editBloco(nome) {  
        this.bloco = nome;
    }


    removeBloco(nome) {  
        this.bloco.pull(nome);
    }

    listBloco() {  
        return this.bloco;
    }



  }