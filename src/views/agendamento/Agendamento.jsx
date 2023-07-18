import React, { useState } from 'react';
import axios from 'axios';
import { ENDERECO_API } from '../../views/util/Constantes';

const Agendamento = () => {
  const [corte, setCorte] = useState('');
  const [dataDoCorte, setDataDoCorte] = useState('');
  const [tipoServico, setTipoServico] = useState('cabelo'); // Valor padrão é "cabelo"

  const handleAgendamentoSubmit = async (e) => {
    // O código para enviar o agendamento permanece o mesmo
  };

  return (
    <div style={styles.container}>
      <h2>Agendamento</h2>
      <form onSubmit={handleAgendamentoSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="corte" style={styles.label}>
            Tipo de corte:
          </label>
          <input
            type="text"
            id="corte"
            value={corte}
            onChange={(e) => setCorte(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="dataDoCorte" style={styles.label}>
            Data e hora:
          </label>
          <input
            type="datetime-local"
            id="dataDoCorte"
            value={dataDoCorte}
            onChange={(e) => setDataDoCorte(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="tipoServico" style={styles.label}>
            Cabelo, barba ou produtos:
          </label>
          <select
            id="tipoServico"
            value={tipoServico}
            onChange={(e) => setTipoServico(e.target.value)}
            style={styles.input}
          >
            <option value="cabelo">Cabelo</option>
            <option value="barba">Barba</option>
            <option value="produtos">Produtos</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>
          Agendar
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Agendamento;
