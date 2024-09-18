import React, { useState } from 'react';

const CounterButton: React.FC = () => {
  const [count, setCount] = useState(5);

  const handleIncrement = () => {
    setCount(count + 50);
  };

  const handleReset = () => {
    setCount(5);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button
        onClick={handleIncrement}
        style={{
          fontSize: '16px',
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: '#00ff',
          color: 'white', // Color del texto del botón
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
      >
        Contador: {count}
      </button>
      <button
        onClick={handleReset}
        style={{
          fontSize: '16px',
          padding: '10px 20px',
          margin: '5px', // Espacio entre botones
          backgroundColor: '#6c757d', // Color de fondo del botón de reset
          color: 'white', // Color del texto del botón de reset
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
      >
        Resetear
      </button>
    </div>
  );
};

export default CounterButton;
