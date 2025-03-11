import React, { useState } from 'react';

function CounterFunction() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h2>Contador usando o Hook useState</h2>
      <p>contagem: {count}</p>
      <button onClick={increment}>Increment</button>
      <br />
    </div>
  );
}

export default CounterFunction;