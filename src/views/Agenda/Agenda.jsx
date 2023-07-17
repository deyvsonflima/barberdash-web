import React from 'react';
import { useNavigate } from 'react-router-dom';

const Agenda = () => {
  const navigate = useNavigate();

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
                <a  className="nav-link" href="inicio-tela">
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
          <div className="col-md-4">
            <div className="card">
              <img src="img/corte americano.jpg" className="card-img-top" alt="Corte 1" />
              <div className="card-body">
                <h5 className="card-title">Corte Americano</h5>
                <p className="card-text">Descrição do corte americano.</p>
                <a
                  href="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal1"
                >
                  Ver Mais
                </a>
                &nbsp;
                <a
                  href="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAgendamento"
                >
                  Agendar
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="img/corte2.jpeg" className="card-img-top" alt="Corte 2" />
              <div className="card-body">
                <h5 className="card-title">Corte Clássico</h5>
                <p className="card-text">Descrição do corte clássico.</p>
                <a
                  href="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal2"
                >
                  Ver Mais
                </a>
                &nbsp;
                <a
                  href="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAgendamento"
                >
                  Agendar
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="img/corte reflexo.jpg" className="card-img-top" alt="Corte 3" />
              <div className="card-body">
                <h5 className="card-title">Corte Descolado</h5>
                <p className="card-text">Descrição do corte descolado.</p>
                <a
                  href="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal3"
                >
                  Ver Mais
                </a>
                &nbsp;
                <a
                  href="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAgendamento"
                >
                  Agendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 1 */}
      <div
        className="modal fade"
        id="modal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Corte Americano
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <img src="img/corte americano.jpg" alt="Corte Americano" />
              <p>
                Descrição detalhada do corte americano. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Phasellus eleifend risus et massa tincidunt, sed congue erat
                malesuada. Nam ut libero lorem. Morbi gravida tincidunt lectus, vel suscipit dolor
                pellentesque id. Sed varius nunc ut eros consequat, ac tincidunt elit interdum. Duis
                auctor nulla sed vestibulum lobortis.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 2 */}
      <div
        className="modal fade"
        id="modal2"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Corte Clássico
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <img src="img/corte2.jpeg" alt="Corte Clássico" />
              <p>
                Descrição detalhada do corte clássico. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Phasellus eleifend risus et massa tincidunt, sed congue erat
                malesuada. Nam ut libero lorem. Morbi gravida tincidunt lectus, vel suscipit dolor
                pellentesque id. Sed varius nunc ut eros consequat, ac tincidunt elit interdum. Duis
                auctor nulla sed vestibulum lobortis.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 3 */}
      <div
        className="modal fade"
        id="modal3"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Corte Descolado
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <img src="img/corte reflexo.jpg" alt="Corte Descolado" />
              <p>
                Descrição detalhada do corte descolado. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Phasellus eleifend risus et massa tincidunt, sed congue erat
                malesuada. Nam ut libero lorem. Morbi gravida tincidunt lectus, vel suscipit dolor
                pellentesque id. Sed varius nunc ut eros consequat, ac tincidunt elit interdum. Duis
                auctor nulla sed vestibulum lobortis.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Agendamento */}
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
              <form>
                <div className="mb-3">
                  <label htmlFor="inputNome" className="form-label">
                    Nome
                  </label>
                  <input type="text" className="form-control" id="inputNome" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputTelefone" className="form-label">
                    Telefone
                  </label>
                  <input type="tel" className="form-control" id="inputTelefone" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputData" className="form-label">
                    Data
                  </label>
                  <input type="date" className="form-control" id="inputData" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputHorario" className="form-label">
                    Horário
                  </label>
                  <input type="time" className="form-control" id="inputHorario" required />
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
