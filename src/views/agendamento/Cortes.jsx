import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f8ff; /* Azul leve */
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const HaircutCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  h3 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 10px;
  }

  button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
`;

const haircutsData = [
    {
      id: 1,
      type: 'Corte Moderno',
      description: 'Corte de cabelo moderno e estiloso.',
      price: 'R$ 50,00',
      image: 'cortes-modernos-masculinos-25.jpg',
    },
    {
      id: 2,
      type: 'Corte Clássico',
      description: 'Corte de cabelo tradicional e elegante.',
      price: 'R$ 40,00',
      image: 'corte-de-cabelo-masculino-crespo-afro-line-up (3).jpg',
    },
    {
      id: 3,
      type: 'Undercut',
      description: 'Corte de cabelo undercut com laterais raspadas.',
      price: 'R$ 55,00',
      image: 'corte-masculino-undercut-risco-moicano-unsplash.jpg',
    },
    {
      id: 4,
      type: 'Degradê',
      description: 'Corte de cabelo degradê com transições suaves.',
      price: 'R$ 45,00',
      image: 'degrade-cabelo-masculino.jpeg',
    },
    {
      id: 5,
      type: 'Franja Longa',
      description: 'Corte de cabelo com franja longa e despojada.',
      price: 'R$ 48,00',
      image: 'franja-longa-5-730x913.webp',
    },
    {
      id: 6,
      type: 'Moicano',
      description: 'Corte de cabelo moicano com laterais baixas.',
      price: 'R$ 60,00',
      image: 'moicano-moderno-19_10.jpg',
    },
    {
      id: 7,
      type: 'Buzz Cut',
      description: 'Corte de cabelo estilo "buzz cut" curto.',
      price: 'R$ 35,00',
      image: 'cortes-de-cabelo-curto-masculino-man-short-hair-cut-ideias-48.webp',
    },
    {
      id: 8,
      type: 'Corte com Textura',
      description: 'Corte de cabelo masculino com textura.',
      price: 'R$ 42,00',
      image: 'Spiky-Hair-2.jpg',
    },
  ];
  
  const beardsData = [
    {
      id: 1,
      type: 'Barba Cheia',
      description: 'Barba cheia e bem cuidada.',
      price: 'R$ 25,00',
      image: 'images.jpeg',
    },
    {
      id: 2,
      type: 'Barba Desenhada',
      description: 'Barba com desenho e estilo personalizado.',
      price: 'R$ 30,00',
      image: 'barba-degrade-desenhada-300x297.webp',
    },
    {
      id: 3,
      type: 'Barba Raspada',
      description: 'Barba raspada e alinhada.',
      price: 'R$ 20,00',
      image: 'como-crescer-sua-barba-01.webp',
    },
    {
      id: 4,
      type: 'Barba Lenhador',
      description: 'Barba estilo lenhador, cheia e comprida.',
      price: 'R$ 35,00',
      image: 'barba-lenhador.jpg',
    },
    {
      id: 5,
      type: 'Barba Curta',
      description: 'Barba curta e bem aparada.',
      price: 'R$ 22,00',
      image: 'barba-curta.jpg',
    },
    {
      id: 6,
      type: 'Barba Desalinhada',
      description: 'Barba com aspecto desalinhado e casual.',
      price: 'R$ 28,00',
      image: 'barba-desalinhada.jpg',
    },
    {
      id: 7,
      type: 'Barba Bigode',
      description: 'Barba com foco no bigode e laterais aparadas.',
      price: 'R$ 24,00',
      image: 'barba-bigode.jpg',
    },
    {
      id: 8,
      type: 'Barba Curvada',
      description: 'Barba curta com formato curvado.',
      price: 'R$ 26,00',
      image: 'barba-curvada.jpg',
    },
  ];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHaircuts = haircutsData.filter((haircut) =>
    haircut.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBeards = beardsData.filter((beard) =>
    beard.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1>Barbearia - Cortes de Cabelo e Barba</h1>
      <SearchBar
        type="text"
        placeholder="Pesquisar corte de cabelo ou barba..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2>Cortes de Cabelo</h2>
      <CardGrid>
        {filteredHaircuts.map((haircut) => (
          <HaircutCard key={haircut.id}>
            <img src={`img/${haircut.image}`} alt={haircut.type} />
            <h3>{haircut.type}</h3>
            <p>{haircut.description}</p>
            <p>Valor: {haircut.price}</p>
            <button>Agendar</button>
          </HaircutCard>
        ))}
      </CardGrid>

      <h2>Barbas</h2>
      <CardGrid>
        {filteredBeards.map((beard) => (
          <HaircutCard key={beard.id}>
            <img src={`img/${beard.image}`} alt={beard.type} />
            <h3>{beard.type}</h3>
            <p>{beard.description}</p>
            <p>Valor: {beard.price}</p>
            <button>Agendar</button>
          </HaircutCard>
        ))}
      </CardGrid>
    </Container>
  );
}

export default App;
