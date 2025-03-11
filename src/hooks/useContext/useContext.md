- **O que faz?**

  Permite acessar e consumir valores armazenados em um contexto criado com `React.createContext()`. Essa abordagem elimina a necessidade de repassar props manualmente por vários níveis de componentes (*prop drilling*), simplificando o compartilhamento de dados em toda a árvore de componentes.

- **Sintaxe:**

  ```jsx
  const valor = useContext(MeuContexto);
  ```

  - **valor**: o valor atual disponibilizado pelo contexto.
  - **MeuContexto**: o contexto previamente criado com `React.createContext(valorInicial)`. O valor retornado pelo `useContext` será o fornecido pelo `Provider` mais próximo na árvore ou, se ausente, o valor padrão definido na criação do contexto.

- **Exemplo:**

  ```jsx
  import React, { createContext, useContext, useState } from 'react';

  // 1. Criação do contexto com um valor padrão "claro"
  const TemaContexto = createContext('claro');

  function BotaoTema() {
    // 3. Consome o valor do contexto TemaContexto
    const tema = useContext(TemaContexto);

    return (
      <button
        style={{
          background: tema === 'escuro' ? '#333' : '#ddd',
          color: tema === 'escuro' ? '#fff' : '#000'
        }}
      >
        Tema Atual: {tema}
      </button>
    );
  }

  function App() {
    // Gerencia o estado do tema na raiz da aplicação
    const [tema, setTema] = useState('claro');

    const alternarTema = () => {
      setTema(tema === 'claro' ? 'escuro' : 'claro');
    };

    return (
      // 2. Fornece o valor do contexto para toda a árvore
      <TemaContexto.Provider value={tema}>
        <div style={{ padding: '20px' }}>
          <BotaoTema />
          <button onClick={alternarTema} style={{ marginTop: '10px' }}>
            Alternar Tema
          </button>
        </div>
      </TemaContexto.Provider>
    );
  }

  export default App;
  ```

  **O que está acontecendo aqui?**

  - **Criação e Fornecimento do Contexto:**
    
    Um contexto chamado `TemaContexto` é criado com o valor padrão `"claro"`. No componente `App`, o `TemaContexto.Provider` engloba outros componentes, fornecendo o valor atual do tema (que é gerenciado via `useState`). Dessa forma, qualquer componente dentro desse Provider pode acessar o tema atual sem precisar receber props diretamente.

  - **Consumo do Contexto:**
    
    No componente `BotaoTema`, o hook `useContext(TemaContexto)` recupera o valor atual do tema, permitindo que o componente ajuste sua aparência com base nesse valor.

- **Considerações Adicionais**

  - **Re-renderizações:**  
    Sempre que o valor passado ao `Provider` mudar, todos os componentes que utilizam o `useContext` para consumir esse valor serão re-renderizados, garantindo que a interface reflita as mudanças de forma consistente.

  - **Evitar Prop Drilling:**  
    Ao utilizar o `useContext`, você centraliza a gestão de dados compartilhados, eliminando a necessidade de repassar informações por diversas camadas de componentes.

  - **Combinação com Outros Hooks:**  
    É comum usar o `useContext` em conjunto com `useState` ou `useReducer` para gerenciar estados globais ou complexos sem recorrer a bibliotecas externas.

  - **Escopo do Provider:**  
    Lembre-se de que, caso um componente que chama `useContext` não esteja envolvido por um `Provider` correspondente, ele retornará o valor padrão definido durante a criação do contexto com `createContext`.

Este resumo destaca como o `useContext` agiliza o compartilhamento de dados na sua aplicação React, proporcionando uma abordagem limpa e eficaz para acessar valores globais. Se quiser avançar, podemos explorar como combinar `useContext` com `useReducer` para gerenciar estados mais complexos ou analisar outros exemplos práticos de contextos em aplicações de larga escala.