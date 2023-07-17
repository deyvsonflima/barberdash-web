import React from 'react';

const SobreNos = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '50px',
      textAlign: 'center',
      background: '#f9f9f9',
      backgroundImage: "linear-gradient(to bottom, #e9e9e9, #f9f9f9)",
      color: '#333333',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Sobre Nós</h2>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        A Barbearia BarberDash é o lugar perfeito para homens que valorizam seu estilo e bem-estar. Com uma equipe de barbeiros altamente qualificados e um ambiente acolhedor, proporcionamos uma experiência única de cuidados pessoais.
      </p>
      <img src="img/img1.jpg" alt="Imagem 1" style={{ float: 'left', width: '200px', height: '200px', margin: '0 20px 20px 0' }} />
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Nossos barbeiros são especialistas em cortes de cabelo modernos, barbas estilosas e cuidados faciais. Utilizamos os melhores produtos e técnicas para garantir resultados excepcionais e a satisfação total dos nossos clientes.
      </p>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Além dos serviços de barbearia, também oferecemos tratamentos capilares, massagens relaxantes e produtos de cuidados masculinos de alta qualidade. Tudo isso para que você se sinta renovado, confiante e com uma aparência impecável.
      </p>
      <img src="img/img2jpg.jpg" alt="Imagem 2" style={{ float: 'right', width: '200px', height: '200px', margin: '0 0 20px 20px' }} />
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Valorizamos o atendimento personalizado e buscamos entender as necessidades individuais de cada cliente. Nossa missão é superar as expectativas e proporcionar uma experiência única, tornando a Barbearia BarberDash o seu lugar de confiança para cuidados pessoais.
      </p>
      <img src="img/img4.jpg" alt="Imagem 3" style={{ float: 'left', width: '200px', height: '200px', margin: '0 20px 20px 0' }} />
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Venha nos visitar e descubra por que somos a escolha preferida dos homens que buscam estilo, qualidade e excelência em serviços de barbearia. Estamos ansiosos para recebê-lo e proporcionar momentos de cuidado e bem-estar em um ambiente descontraído e acolhedor.
      </p>
     
      <img src="img/img4.4.jpg" alt="Imagem 4" style={{ float: 'right', width: '200px', height: '200px', margin: '0 0 20px 20px' }} />
    </div>
  );
};

export default SobreNos;
