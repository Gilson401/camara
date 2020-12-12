export default class Disciplina {
    constructor(nome, ementa) {
       this.nome = nome;
       this.ementa = [`Apresentação de boas vindas à ${nome}`];
    }

    addEmenta(nome) {  
        this.ementa.push(nome);
    }

    editEmenta(nome) {  
        this.ementa = nome;
    }


    removeEmenta(nome) {  
        this.ementa.pull(nome);
    }

    listEmenta() {  
        return this.ementa;
    }

  }