import React from 'react';

const InicioTela = () => {

  const handleLogout = () => {
    window.location.href = '/login';
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
      <link rel="shortcut icon" href="public/img/Dash.ico" type="image/x-icon" />
      
      <style
        dangerouslySetInnerHTML={{
          __html:
            `
      /* Estilos para o corpo do documento */
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: azure;
      }
    
      /* Estilos para o cabeçalho */
      header {
        background-color: #333;
        color: #fff;
        padding: 20px;
      }
    
      header h1 {
        margin: 0;
      }
    
    
    
      nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    
      nav ul li {
        display: inline-block;
        margin-right: 10px;
      }
    
      nav ul li a {
        color: #fff;
        text-decoration: none;
      }
    
      /* Estilos para o carrossel */
      .carousel {
        width: 100%;
      }
    
      .carousel .carousel-inner .carousel-item {
        height: 400px;
      }
    
      .carousel .carousel-inner .carousel-item img {
        height: 100%;
        object-fit: cover;
      }
    
      /* Estilos para as seções de conteúdo */
      section {
        padding: 40px 0;
      }
    
      section h2 {
        margin-bottom: 20px;
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
    
      .logo {
        width: 200px;
        height: 200px;
      }
    
      .img-fluid {
        -webkit-box-shadow: 25px 14px 6px 4.5px #dddddd;
        -moz-box-shadow: 25px 14px 6px 4.5px #dddddd;
        box-shadow: 25px 14px 6px 4.5px #dddddd;
        width: 600px;
        border-radius: 125px;
      }
    
      .col-lg-6 img {
        float: left;
        border: thin solid;
        padding: 5px;
        margin: 0px 10px 10px 0;
      }
      `,
        }}
      />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark top fixed-top " >
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img
              src="img/logopequena.png"
              alt=""
              style={{width: 50, height: 50 }}
            />
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
              <li className="nav-item"></li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogout}>
                  Sair
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "25vh",
        }}
      >
        <img src="img/Logo de Tela.png" className="logo" alt="logo" />
      </div>
      <section id="anchor" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="display-4">Cortes de cabelo para todos os estilos</h2>
              <p className="lead">
                Na Barbearia BarberDash, oferecemos uma ampla variedade de cortes de
                cabelo para atender a todos os estilos e preferências. Nossos
                barbeiros experientes garantem que você saia com um visual impecável
                e confiante.
              </p>
              <a className="btn btn-primary" href="form-agenda" role="button">
                Agendar um horário
              </a>
            </div>
            <br />
            <br />
            <br />
            <div className="col-lg-6">
              <img
                src="img/cortes.jpg"
                className="img-fluid"
                alt="Corte de cabelo"
              />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section id="sobre" className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="img/sobre.jpg"
                className="img-fluid"
                alt="Sobre a barbearia"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-4">Sobre BarberDash</h2>
              <p className="lead">
                A Barbearia BarberDash é o lugar perfeito para homens que valorizam
                seu estilo e bem-estar. Com uma equipe de barbeiros altamente
                qualificados e um ambiente acolhedor, proporcionamos uma experiência
                única de cuidados pessoais.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
};

export default InicioTela;
