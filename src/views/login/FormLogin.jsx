import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Icon, Image, Message, Segment } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';
import { notifyError } from '../../views/util/Util';
import { registerSuccessfulLoginForJwt } from '../util/AuthenticationService';

const FormLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const entrar = () => {
    if (username !== '' && senha !== '') {
      let authenticationRequest = {
        username: username,
        password: senha,
      };

      axios
        .post(ENDERECO_API + 'api/login', authenticationRequest)
        .then((response) => {
          registerSuccessfulLoginForJwt(response.data.token, response.data.expiration);
          navigate('/inicio-tela');
        })
        .catch((error) => {
          notifyError('Usuário não encontrado');
        });
    }
  };

  const handleGoogleLogin = () => {
    // lógica de login com o Google aqui
    
    window.location.href = `${ENDERECO_API}api/google-login`;
  };

  const handleCadastro = () => {
    if (username !== '' && senha !== '') {
      let registrationRequest = {
        username: username,
        password: senha,
      };

      axios
        .post(ENDERECO_API + 'api/cadastro', registrationRequest)
        .then((response) => {
          registerSuccessfulLoginForJwt(response.data.token, response.data.expiration);
          navigate('/inicio-tela');
        })
        .catch((error) => {
          notifyError('Erro ao cadastrar o usuário');
        });
    }
  };

  const handleEsqueceuSenha = () => {
    // lógica para redirecionar para a página de recuperação de senha
    navigate('/form-recuperar-senha');
  };

  return (
    <div>
      <style>{`
        body {
          overflow: hidden;
        }
        
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(to bottom, #C0C0C0, #DCDCDC);
        }
        
        .login-form {
          width: 370px;
          padding: 40px;
          border-radius: 25px;
          box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
          background: #ffffff;
        }
        
        .login-header {
          display: flex;
          align-items: center;
          font-size: 35px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 20px;
          font-family: Arial, sans-serif;
          text-align: center;
        }
        
        .login-logo {
          margin-right: 20px;
          width: 80px;
          height: 80px;
        }
        
        .login-input {
          width: 260px; /* Aumentar a largura desejada */
        }
        
        .login-button {
          background-color: #E8F0FE;
          color: #4285F4;
          font-size: 16px;
          padding: 10px 20px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          font-family: Arial, sans-serif;
          width: 100%;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.10s ease;
        }
        
       
        
      `}</style>
      <div className="login-container">
        <div className="login-form">
          <Header as='h2' className="login-header">
            <Image src='/Logo de Tela.png' className="login-logo" />
            Fazer Login
          </Header>
          <Form>
            <Segment stacked>
              <Form.Input
                fluid
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                icon='user'
                iconPosition='left'
                placeholder='Informe seu e-mail'
                required
                maxLength='100'
                className="login-input"
              />
              <Form.Input
                fluid
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                icon='lock'
                iconPosition='left'
                type={mostrarSenha ? 'text' : 'password'}
                placeholder='Senha'
                required
                maxLength='100'
                action={{
                  icon: mostrarSenha ? 'eye slash' : 'eye',
                  onClick: () => setMostrarSenha(!mostrarSenha),
                }}
                className="login-input"
              />
              <Button
                fluid
                size='large'
                color='blue'
                icon='sign in alternate'
                content='Entrar'
                onClick={entrar}
                className="login-button"
              />
            </Segment>
          </Form>
          <Message>
            Esqueceu a sua senha?{' '}
            <Link to="/recuperar-senha" style={{ color: 'blue' }} onClick={handleEsqueceuSenha}>
              Clique aqui
            </Link>
          </Message>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            fluid
            size='large'
            onClick={handleGoogleLogin}
            style={{
              backgroundColor: '#E8F0FE',
              color: '#4285F4',
              fontSize: '16px',
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif',
              width: '100%',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
              transition: 'box-shadow 0.10s ease',
            }}
          >
            <Image
              src='/Google_icon-icons.com_66793.png'
              style={{
                marginRight: '10px',
                width: '20px',
                height: '20px',
              }}
            />
            Entrar com o Google
          </Button>
        </div>
        
          <Message>
            Ainda não é membro?{' '}
            <Link to="/form-cliente" onClick={handleCadastro} style={{ color: 'blue' }}>
              Inscreva-se
            </Link>
          </Message>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
