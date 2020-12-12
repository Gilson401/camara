import logo from './logo.svg';
import './App.css';
import { Button, Container, ButtonGroup, Form, ProgressBar, Spinner, ToggleButton, Dropdown } from 'react-bootstrap'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function App() {

    const [partidos, setPartidos] = useState([
        {
            "id": 37905,
            "sigla": "Press Carregar Partidos",
            "nome": "Cidadania",
            "uri": "https://dadosabertos.camara.leg.br/api/v2/partidos/37905"
        }
    ])

    const [deputados, setDeputados] = useState([
        {
            nome : "---"
        }
    ])

    


    const clientHttp = axios.create({
        baseURL: 'https://dadosabertos.camara.leg.br/api/v2/'
    })
    clientHttp.defaults.headers['Content-Type'] = 'application/json';
    // clientHttp.defaults.headers['x-forwarded-proto'] = 'https';

    const getpartidos = () => clientHttp.get(`/partidos`)

    const getDeputados = (sigla) => clientHttp.get(`/deputados?siglaPartido=${sigla}&itens=100&ordem=ASC&ordenarPor=nome`)

    const partidosListados = () => partidos.map((user, index) => (
        <option key={index}>{user.sigla}</option>
    ))

    const deputadosListados = () => deputados.map((user, index) => (
        <p key={index}>{user.nome}</p>
    ))

    useEffect(() => {

        submitForm()
    }, [])

    const submitForm = async (event) => {
        try {
            const result = await getpartidos()
            if (result) {
                setPartidos(result.data.dados)
                // alert('Partdios carregados')
                console.log(result.data.dados)
            }
        } catch (e) {
            alert('Ocorreu um erro no GET de partidos ')
        }
    }


    const loadDeputados = async (sigla) => {
        try {
            const result = await getDeputados(sigla)
            if (result) {
                setDeputados(result.data.dados)
                // alert('Partdios carregados')
                console.log(result.data.dados)
            }
        } catch (e) {
            alert('Ocorreu um erro no GET de partidos ')
        }
    }

    const handleChange = (event) => {

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        console.log("Valor", value)
        loadDeputados(value)
    }

    return (

        <Container>
            <div className="App">
                <header className="App-header">

                    <p> Lista de partidos </p>
                    <div className="mb-2">
                        <Button onClick={submitForm} variant="primary" size="lg">
                            Carregar Partidos
                        </Button>
                    </div>


                    <div className="mb-2">
                        <Button onClick={loadDeputados} variant="primary" size="lg">
                            Carregar Deputados
                        </Button>
                    </div>


                    


                    <Form.Group onChange={handleChange} controlId="exampleForm.ControlSelect1">
                        <Form.Label></Form.Label>
                        <Form.Control as="select">
                            {partidosListados()}
                        </Form.Control>
                    </Form.Group>

                    {deputadosListados()}
                </header>
            </div>

        </Container>
    );
}

export default App;
