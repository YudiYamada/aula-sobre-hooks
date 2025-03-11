import React, { createContext, useContext, useState } from 'react';

// Criação do contexto com um valor padrão "claro"
const TemaContexto = createContext('claro');

function BotaoTema() {
  // Gerencia o estado do tema
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema(prevTema => (prevTema === 'claro' ? 'escuro' : 'claro'));
    <br />
  };

  // Componente interno que consome o valor do contexto usando useContext
  const ExibirTema = () => {
    const temaContexto = useContext(TemaContexto);

    return (
      <button
        style={{
          background: temaContexto === 'escuro' ? '#333' : '#ddd',
          color: temaContexto === 'escuro' ? '#fff' : '#000'
        }}
      >
        Tema Atual: {temaContexto}
      </button>
    );
  };

  return (
    <TemaContexto.Provider value={tema}>
      <div style={{ padding: '20px' }}>
        <ExibirTema />
        <button onClick={alternarTema} style={{ marginTop: '10px' }}>
          Alternar Tema
        </button>
      </div>
    </TemaContexto.Provider>
  );
}

export default BotaoTema;
