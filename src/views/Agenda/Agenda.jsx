import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ENDERECO_API } from '../../views/util/Constantes';
const Agenda = () => {
  const navigate = useNavigate();
  //const [cortes, setCortes] = useState([]);
  const [agendamento, setAgendamento] = useState({
    nome: '',
    telefone: '',
    data: '',
    horario: '',
  });

 // useEffect(() => {
   // const fetchCortes = async ('https://sua-api.com/cortesdecabelo/api/agendamento', agendamento) => {
  //    try {
   //     const response = await axios.get();
   //     setCortes(response.data);
   //   } catch (error) {
   //     console.log(error);
  //    }
   // };

    //fetchCortes();
  //}, []);

  const handleAgendamento = (corteId) => {
    const corteSelecionado = cortes.find((corte) => corte.id === corteId);

    setAgendamento({
      ...agendamento,
      corteId,
      nome: corteSelecionado.nome,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fazer a chamada à API para enviar os dados do agendamento
      await axios.post(ENDERECO_API + 'api/cliente/', agendamento);

      // Limpar os campos do formulário e exibir uma mensagem de sucesso
      setAgendamento({
        nome: '',
        telefone: '',
        data: '',
        horario: '',
      });
      alert('Agendamento realizado com sucesso!');
    } catch (error) {
      // Tratar erros de chamada à API
      console.log(error);
      alert('Ocorreu um erro ao realizar o agendamento.');
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>BarberDash</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="shortcut icon" href="img/Dash.ico" type="image/x-icon" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          body {
            background-color: azure;
          }
          .navbar {
            z-index: 999;
          }
          .carousel-control-prev,
          .carousel-control-next {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .carousel-indicators {
            bottom: 10px;
          }
          .card-img-top {
            height: 300px;
            object-fit: cover;
          }
          .modal-dialog {
            max-width: 600px;
          }
          .modal-body img {
            width: 100%;
            height: auto;
          }
          #sobre {
            margin-top: 50px;
          }
          body {
            margin: 0;
            padding: 0;
          }
          /* Estilos para o rodapé */
          footer {
            background-color: #333;
            color: #fff;
            padding: 10px;
          }
          .social-icons {
            margin-top: 10px;
          }
          .social-icons a {
            color: #fff;
            margin-right: 5px;
          }
          .social-icons a:hover {
            color: #ccc;
          }
          .destaque {
            font-weight: bold;
            border: 2px solid rgb(0, 0, 0);
            background-color: rgb(119, 119, 119);
            padding: 5px;
            border-radius: 50px;
            text-align: center;
          }
        `,
        }}
      />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="img/logopequena.png" alt="" style={{ width: 50, height: 50 }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Sair
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={goBack}>
                  Voltar
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar Cortes"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <div className="container mt-5">
        <h2 className="destaque">Cortes de cabelo</h2>
        <div className="row">
          {cortes.map((corte) => (
            <div className="col-md-4" key={corte.id}>
              <div className="card">
                <img src={corte.imagem} className="card-img-top" alt={corte.nome} />
                <div className="card-body">
                  <h5 className="card-title">{corte.nome}</h5>
                  <p className="card-text">{corte.descricao}</p>
                  <a
                    href="#"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal${corte.id}`}
                  >
                    Ver Mais
                  </a>
                  &nbsp;
                  <a
                    href="#"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#modalAgendamento"
                    onClick={() => handleAgendamento(corte.id)}
                  >
                    Agendar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modals */}
      {cortes.map((corte) => (
        <div
          className="modal fade"
          id={`modal${corte.id}`}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          key={corte.id}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {corte.nome}
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <img src={corte.imagem} alt={corte.nome} />
                <p>{corte.descricaoDetalhada}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div
        className="modal fade"
        id="modalAgendamento"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Agendamento
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="inputNome" className="form-label">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputNome"
                    value={agendamento.nome}
                    onChange={(e) => setAgendamento({ ...agendamento, nome: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputTelefone" className="form-label">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="inputTelefone"
                    value={agendamento.telefone}
                    onChange={(e) => setAgendamento({ ...agendamento, telefone: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputData" className="form-label">
                    Data
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputData"
                    value={agendamento.data}
                    onChange={(e) => setAgendamento({ ...agendamento, data: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputHorario" className="form-label">
                    Horário
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="inputHorario"
                    value={agendamento.horario}
                    onChange={(e) => setAgendamento({ ...agendamento, horario: e.target.value })}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Agendar
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.4/dist/umd/popper.min.js" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" />
    </>
  );
};

export default Agenda;
