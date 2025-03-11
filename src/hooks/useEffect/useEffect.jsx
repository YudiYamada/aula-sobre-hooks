import React, { useState, useEffect } from 'react';

function Contador() {
  // Declara um novo estado chamado "contador" com valor inicial 0
  const [contador, setContador] = useState(0);

  // useEffect atualiza o título do documento sempre que o "contador" muda
  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`;

    // Função de cleanup opcional (não necessária neste exemplo)
    return () => {
      // Aqui poderia ficar um código de limpeza, se necessário
    };
  }, [contador]);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default Contador;