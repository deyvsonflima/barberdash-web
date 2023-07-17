import React from 'react';
import { Link } from 'react-router-dom';

const PaginaManutencao = () => {
  const estiloContainer = {
    position: 'fixed', // Torna a página fixa na tela
    top: 0,
    left: 0,
    width: '100vw', // Ocupa a largura total da tela
    height: '100vh', // Ocupa a altura total da tela
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1F5FE', // Cor azul leve para a página em manutenção
    fontFamily: 'Arial, sans-serif',
    zIndex: 9999, // Define a ordem de camadas, garantindo que a página esteja sempre acima dos outros elementos
  };

  const estiloTitulo = {
    fontSize: '48px', // Aumentando o tamanho do título
    fontFamily: "'Pacifico', cursive", // Aplicando a fonte "Pacifico" ao título
    color: '#333', // Cor do texto escura para melhor legibilidade
    marginBottom: '20px', // Espaçamento inferior entre o título e o conteúdo
  };

  const estiloImagem = {
    width: '150px',
    animation: 'girar 2s linear infinite', // Adiciona a animação de rotação
  };

  const estiloRedesSociais = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const estiloRedeSocialLink = {
    margin: '10px',
  };

  const estiloRodape = {
    fontSize: '14px', // Aumentando o tamanho do rodapé
    fontFamily: "'Roboto', sans-serif", // Aplicando a fonte "Roboto" ao rodapé
    marginTop: '40px',
    color: '#555', // Cor do texto escura para melhor legibilidade
  };

  return (
    <div style={estiloContainer}>
      <style>{`
        @keyframes girar {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <img src="img/download-removebg-preview.png" alt="Engrenagens Giratórias" style={estiloImagem} />
      <h1 style={estiloTitulo}>Atenção!</h1>
      <p>Nossa equipe está trabalhando muito para trazer novidades incríveis!</p>
      <p>Em breve, você poderá fazer login com o Google e desfrutar de todos os recursos.</p>
      <p>Enquanto isso, fique à vontade para explorar o resto da página.</p>
      <p>Siga-nos nas redes sociais para ficar por dentro das últimas atualizações:</p>
      <div style={estiloRedesSociais}>
        <a href="#" target="_blank" rel="noopener noreferrer" style={estiloRedeSocialLink}>
          <img src="img/social_facebook_box_blue_256_30649.png" alt="Ícone do Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" style={estiloRedeSocialLink}>
          <img src="img/1491579583-yumminkysocialmedia02_83111.png" alt="Ícone do Twitter" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" style={estiloRedeSocialLink}>
          <img src="img/1491580658-yumminkysocialmedia06_83104.png" alt="Ícone do Instagram" />
        </a>
      </div>
      <footer style={estiloRodape}>
        <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button
            style={{
              backgroundColor: '#4285F4',
              color: '#FFFFFF',
              fontSize: '16px',
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif',
              marginTop: '20px',
            }}
          >
            Voltar para o Login
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default PaginaManutencao;
