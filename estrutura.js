import Disciplina from "./src/modelos/disciplina"
import Bloco from "./src/modelos/bloco"
import Turma from "./src/modelos/turma"
import Curso from "./src/modelos/curso"

const disc = new Disciplina("Disciplina 1", "Ementa Disciplina 1")
    
const bloco = new Bloco("Nome", "Ementa nova")
bloco.addDisciplina(disc)

const turma = new Turma("Turma 1")
turma.addBloco(bloco)

const curso = new Curso("Curso 1")
curso.addTurma(turma)

console.log(curso.listTurma())