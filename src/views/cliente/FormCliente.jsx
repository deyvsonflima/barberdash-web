import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';
import { mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';

export default function FormCliente() {
  const { state } = useLocation();
  const navigate = useNavigate(); // Acessa a função navigate

  const [idCliente, setIdCliente] = useState();
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [foneCelular, setFoneCelular] = useState();
  const [foneFixo, setFoneFixo] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    if (state != null && state.id != null) {
      axios.get(ENDERECO_API + 'api/cliente/' + state.id)
        .then((response) => {
          setIdCliente(response.data.id)
          setNome(response.data.nome)
          setCpf(response.data.cpf)
          setDataNascimento(formatarData(response.data.dataNascimento))
          setFoneCelular(response.data.foneCelular)
          setFoneFixo(response.data.foneFixo)
        })
    }
  }, [state])

  function salvar() {
    let clienteRequest = {
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimento,
      foneCelular: foneCelular,
      foneFixo: foneFixo,
      password: password,
      email: email
    }

    if (idCliente != null) { // Alteração:
      axios.put(ENDERECO_API + 'api/cliente/' + idCliente, clienteRequest)
        .then((response) => {
          console.log('Cliente alterado com sucesso.')
          navigate('/login') // Redireciona para a página de login
        })
        .catch((error) => { console.log('Erro ao alterar um cliente.') })
    } else { // Cadastro:
      axios.post(ENDERECO_API + 'api/cliente', clienteRequest)
        .then((response) => {
          notifySuccess('Cliente cadastrado com sucesso.')
          navigate('/login') // Redireciona para a página de login
        })
        .catch((error) => {
          if (error.response) {
            notifyError(error.response.data.errors[0].defaultMessage)
          } else {
            notifyError(mensagemErro)
          }
        })
    }
  }

  function formatarData(dataParam) {
    if (dataParam == null || dataParam === '') {
      return ''
    }

    let dia = dataParam[2]
    let mes = dataParam[1]
    let ano = dataParam[0]
    let dataFormatada = dia + '/' + mes + '/' + ano

    return dataFormatada
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ marginTop: '3%' }}>
        <Container textAlign='justified'>
          {idCliente === undefined &&
            <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
          }
          {idCliente != undefined &&
            <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
          }
          <Divider />
          <div style={{ marginTop: '4%' }}>
            <div className={idCliente === undefined ? 'cadastro-form' : 'alteracao-form'}>
              <Form>
                <Form.Field>
                  <label>Nome</label>
                  <input
                    required
                    maxLength="100"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>CPF</label>
                  <InputMask
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  >
                    {(inputProps) => <input {...inputProps} />}
                  </InputMask>
                </Form.Field>
                <Form.Field>
                  <label>Senha</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Fone Celular</label>
                  <InputMask
                    mask="(99) 9999.9999"
                    value={foneCelular}
                    onChange={(e) => setFoneCelular(e.target.value)}
                  >
                    {(inputProps) => <input {...inputProps} />}
                  </InputMask>
                </Form.Field>
                <Form.Field>
                  <label>Fone Fixo</label>
                  <InputMask
                    mask="(99) 9999.9999"
                    value={foneFixo}
                    onChange={(e) => setFoneFixo(e.target.value)}
                  >
                    {(inputProps) => <input {...inputProps} />}
                  </InputMask>
                </Form.Field>
                <Form.Field>
                  <label>Data Nascimento</label>
                  <InputMask
                    mask="99/99/9999"
                    maskChar={null}
                    placeholder="Ex: 20/03/1985"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                  >
                    {(inputProps) => <input {...inputProps} />}
                  </InputMask>
                </Form.Field>
                <Button
                  type="button"
                  inverted
                  circular
                  icon
                  labelPosition='left'
                  color='orange'
                >
                  <Icon name='reply' />
                  <Link to={'/login'}>Voltar</Link>
                </Button>
                <Button
                  inverted
                  circular
                  icon
                  labelPosition='left'
                  color='blue'
                  floated='right'
                  onClick={() => salvar()}
                >
                  <Icon name='save' />
                  Salvar
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
