import React from 'react';
import './contador.css';

const Contador = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div className="contador">
      <p>Eu cliquei {contar} vezes </p>
      <button onClick={() => setContar(contar + 1)}>Clique!</button>
    </div>
  );
};

export default Contador;
