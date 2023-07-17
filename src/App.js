import React, { useState } from 'react';
import { Modal } from 'semantic-ui-react';
import TermosCondicoes from './TermosCondicoes';
import PoliticaPrivacidade from './PoliticaPrivacidade';
import SobreNos from './SobreNos';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Segment } from 'semantic-ui-react';
import './App.css';
import Rotas from './Rotas';


function App() {
  const [openModalTermos, setOpenModalTermos] = useState(false);
  const [openModalPolitica, setOpenModalPolitica] = useState(false);
  const [openModalSobre, setOpenModalSobre] = useState(false);
  const isLoginPage = window.location.pathname === '/login'; // Verifica se é a página de login
  const isFooterVisible = !['/', '/form-cliente'].includes(window.location.pathname);

  const handleOpenModalTermos = () => {
    setOpenModalTermos(true);
  };

  const handleCloseModalTermos = () => {
    setOpenModalTermos(false);
  };

  const handleOpenModalPolitica = () => {
    setOpenModalPolitica(true);
  };

  const handleCloseModalPolitica = () => {
    setOpenModalPolitica(false);
  };

  const handleOpenModalSobre = () => {
    setOpenModalSobre(true);
  };

  const handleCloseModalSobre = () => {
    setOpenModalSobre(false);
  };

  return (
    <div className="App">
      <ToastContainer />

      <Rotas />

      {isLoginPage ? null : (
        isFooterVisible && (
          <div style={{ marginTop: '6%' }}>
            <Segment vertical color='grey' size='tiny' textAlign='center'>
              <footer>
                <div className="row">
                  <div className="col-12 col-sm-4">
                    <h5>Contato</h5>
                    <address>
                      Rua dos Barbudos, 123<br />
                      Cabelolândia - SP<br />
                      <i className="fa fa-phone" />: +55 11 1234-5678<br />
                      <i className="fa fa-fax" />: +55 11 8765-4321<br />
                      <i className="fa fa-envelope" />:{' '}
                      <a href="mailto:contato@barberdash.com">contato@barberdash.com</a>
                    </address>
                  </div>
                  <div className="col-12 col-sm-4">
                    <h5>Nossas Redes Sociais</h5>
                    <div className="social-icons">
                      <a href="http://instagram.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram fa-lg" />
                      </a>
                      <a href="http://facebook.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook fa-lg" />
                      </a>
                      <a href="http://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter fa-lg" />
                      </a>
                      <a href="http://youtube.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube fa-lg" />
                      </a>
                      <a href="mailto:contato@barberdash.com">
                        <i className="fa fa-envelope fa-lg" />
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="text-center">
                      <img src="img/logopequena.png" alt="" style={{ width: 100, height: 100 }} />
                    </div>
                    <div className="text-center">
                      <a href="#" onClick={handleOpenModalSobre}>Sobre Nós</a> |{' '}
                      <a href="#" onClick={handleOpenModalTermos}>Termos e Condições</a> |{' '}
                      <a href="#" onClick={handleOpenModalPolitica}>Política de Privacidade</a>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-auto text-center">
                    <p>&copy; 2023 BarberDash. Todos os direitos reservados.</p>
                  </div>
                </div>
              </footer>
            </Segment>
          </div>
        )
      )}

      <Modal open={openModalTermos} onClose={handleCloseModalTermos} closeIcon>
        <Modal.Header>Termos e Condições</Modal.Header>
        <Modal.Content>
          <TermosCondicoes />
        </Modal.Content>
      </Modal>

      <Modal open={openModalPolitica} onClose={handleCloseModalPolitica} closeIcon>
        <Modal.Header>Política de Privacidade</Modal.Header>
        <Modal.Content>
          <PoliticaPrivacidade />
        </Modal.Content>
      </Modal>

      <Modal open={openModalSobre} onClose={handleCloseModalSobre} closeIcon>
        <Modal.Header>Sobre Nós</Modal.Header>
        <Modal.Content>
          <SobreNos />
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default App;
