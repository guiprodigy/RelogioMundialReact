import React from 'react';
import './App.css';
import WorldClock from './RelogioMundial';

function App() {
  return (
    <div className="App">
      <h1>Relógio Mundial</h1>
      <br></br>
      <img src="/relogio.gif" alt="Relógio Mundial" />
      <br></br>
      <div className="world-clocks">
        <WorldClock timezone="America/Sao_Paulo" location="São Paulo" />
        <WorldClock timezone="America/New_York" location="Nova Iorque" />
        <WorldClock timezone="Asia/Shanghai" location="Pequim" />
      </div>
    </div>
  );
}

export default App;
