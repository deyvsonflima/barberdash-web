import React from "react";
import { Container, Grid, Image, Button } from 'semantic-ui-react';

class Index extends React.Component {
    render() {
        const containerStyle = {
            marginTop: '5%',
            backgroundColor: '#ffffff', // Fundo branco
            padding: '50px',
            borderRadius: '25px',
       
        };

        const headerStyle = {
            color: '#014f84', // Azul principal do IFPE
            fontSize: '32px',
            marginBottom: '20px'
        };

        const textStyle = {
            color: '#000000',
            fontSize: '18px',
            marginBottom: '10px'
        };

        const participantsStyle = {
            color: '#000000',
            fontSize: '18px',
            marginTop: '0',
            marginBottom: '10px'
        };

        const logoStyle = {
            width: '2550px',
            height: '300px'
        };

        return (
            <div style={{ overflow: 'hidden', backgroundColor: '#C1EAC1', height: '100vh' }}> {/* Fundo verde forte */}
                <Container style={containerStyle}>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src='/logo-ifpe.png' size='large' style={logoStyle} /> {/* Logotipo do IFPE */}
                            </Grid.Column>
                            <Grid.Column>
                                <h1 style={headerStyle}>Projeto de Projeto e Prática 2 - Criação de uma Barbearia com Spring Boot e React JS</h1>
                                <p style={participantsStyle}>Participantes:</p>
                                <ul style={textStyle}>
                                    <li>ALUNO 1</li>
                                    <li>ALUNO 2</li>
                                    <li>ALUNO 3</li>
                                    <li>ALUNO 4</li>
                                    <li>ALUNO 5</li>
                                </ul>
                                <p style={textStyle}>
                                    Neste projeto de Projeto e Prática 2, temos o objetivo de desenvolver uma aplicação para uma barbearia, utilizando as tecnologias Spring Boot e React JS. O intuito é criar um sistema completo que permita gerenciar os serviços oferecidos pela barbearia, bem como os agendamentos dos clientes.
                                </p>
                                <Button color="blue" onClick={() => window.location.href = '/login'}>
                                    Aperte aqui para ir para o login do projeto
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Index;
