import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Header, Message, Segment } from 'semantic-ui-react';
import { ENDERECO_API } from '../util/Constantes';
import { notifyError, notifySuccess } from '../util/Util';

const FormRecuperarSenha = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleRecuperarSenha = () => {
    if (username !== '') {
      let recuperarSenhaRequest = {
        username: username,
      };

      axios
        .post(ENDERECO_API + 'api/recuperar-senha', recuperarSenhaRequest)
        .then(() => {
          notifySuccess('Solicitação de recuperação de senha enviada com sucesso!');
          navigate('/confirmar-codigo'); // Substitua '/success' pela URL desejada da página de sucesso
        })
        .catch((error) => {
          notifyError('Erro ao solicitar recuperação de senha');
        });
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to bottom, #C0C0C0, #DCDCDC)',
    }}>
      <div style={{
        width: '380px',
        padding: '40px',
        borderRadius: '5px',
        boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.1)',
        background: '#ffffff',
      }}>
        <Header as='h2' style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '35px',
          fontWeight: '600',
          color: '#000000',
          marginBottom: '20px',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
        }}>
          Recuperação de Senha
        </Header>
        <Form>
          <Segment stacked>
            <Form.Input
              fluid
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              icon='user'
              iconPosition='left'
              placeholder='Informe seu e-mail ou nome de usuário'
              required
              maxLength='100'
            />
            <Button
              fluid
              size='large'
              color='blue'
              icon='envelope'
              content='Enviar solicitação de recuperação de senha'
              onClick={handleRecuperarSenha}
            />
          </Segment>
        </Form>
        <Message>
          Lembrou da senha?{' '}
          <Link to="/login" style={{ color: 'blue' }}>
            Faça login
          </Link>
        </Message>
      </div>
    </div>
  );
};

export default FormRecuperarSenha;