import logo from './logo.svg';
import './App.css';
import { Button, Container, ButtonGroup, Form, ProgressBar, Spinner, ToggleButton, Dropdown } from 'react-bootstrap'
import axios from 'axios'
import React, { useState, useEffect } from 'react'


import Disciplina from "./modelos/disciplina"
import Bloco from "./modelos/bloco"
import Turma from "./modelos/turma"
import Curso from "./modelos/curso"

function App() {


    const [state, setState] = useState("Clique no botão")


const showDisciplina = () =>{
    const disc = new Disciplina("Disciplina 1", "Ementa Disciplina 1")
    
    const bloco = new Bloco("Nome", "Ementa nova")
    bloco.addDisciplina(disc)
    
    const turma = new Turma("Turma 1")
    turma.addBloco(bloco)

    const curso = new Curso("Curso 1")
    curso.addTurma(turma)
    
    
    // console.log(disc.listEmenta())
    // console.log(bloco.listDisciplina())
    // console.log(turma.listBloco())
    console.log(curso.listTurma())
    setState(curso)
}

   




    return (

        <Container>
            <div className="App">
                <header className="App-header">

                    <p> Clique no botão e veja abaixo e no console log do terminal a estrutura de dados </p>
                    <div className="mb-2">
                        <Button onClick={showDisciplina} variant="primary" size="lg">
                            Load CLass  estructure
                        </Button>
                    </div>

                    { JSON.stringify( state)}
           
                </header>
            </div>

        </Container>
    );
}

export default App;
