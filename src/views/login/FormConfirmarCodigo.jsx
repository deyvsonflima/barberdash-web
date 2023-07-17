import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Message, Segment } from 'semantic-ui-react';
import { ENDERECO_API } from '../util/Constantes';
import { notifyError, notifySuccess } from '../util/Util';

const FormConfirmarCodigo = () => {
  const [codigo, setCodigo] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  const handleConfirmarCodigo = () => {
    if (codigo !== '' && novaSenha !== '') {
      let confirmarCodigoRequest = {
        username: getUsernameFromLocalStorage(),
        codigoVerificacao: codigo,
      };

      axios
        .post(ENDERECO_API + 'api/recuperar-senha/verificar-codigo', confirmarCodigoRequest)
        .then((response) => {
          if (response.data === 'Código de verificação correto. Redefinir senha.') {
            // Código de verificação correto, redirecionar para a página de troca de senha
            handleRedefinirSenha();
          } else {
            notifyError('Código de verificação incorreto. Tente novamente.');
          }
        })
        .catch((error) => {
          notifyError('Erro ao verificar código de recuperação');
        });
    }
  };

  const handleRedefinirSenha = () => {
    let redefinirSenhaRequest = {
      username: getUsernameFromLocalStorage(),
      novaSenha: novaSenha,
    };

    axios
      .post(ENDERECO_API + 'api/recuperar-senha/redefinir-senha', redefinirSenhaRequest)
      .then(() => {
        notifySuccess('Senha redefinida com sucesso!');
        // Redirecionar para a página de sucesso ou página de login
      })
      .catch((error) => {
        notifyError('Erro ao redefinir senha');
      });
  };

  const getUsernameFromLocalStorage = () => {
    // Implemente a função para obter o username do local storage ou de qualquer outra fonte
    // Exemplo: return localStorage.getItem('username');
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
          Confirmação de Código
        </Header>
        <Form>
          <Segment stacked>
            <Form.Input
              fluid
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              icon='lock'
              iconPosition='left'
              placeholder='Código de verificação'
              required
              maxLength='4'
            />
            <Form.Input
              fluid
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              icon='lock'
              iconPosition='left'
              placeholder='Nova senha'
              type='password'
              required
              minLength='6'
            />
            <Button
              fluid
              size='large'
              color='blue'
              icon='check'
              content='Confirmar código e redefinir senha'
              onClick={handleConfirmarCodigo}
            />
          </Segment>
        </Form>
        <Message>
          Lembrou da senha?{' '}
          <Link to="/" style={{ color: 'blue' }}>
            Faça login
          </Link>
        </Message>
      </div>
    </div>
  );
};

export default FormConfirmarCodigo;
