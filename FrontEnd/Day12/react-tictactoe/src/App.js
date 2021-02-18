import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState([
    '', '', '',
    '', '', '', 
    '', '', ''
  ]);

  const [turn, setTurn] = useState('X');

  const [gameState, setGameState] = useState(true);



  return (
    <>
      <div className="container">
        <div className="board">
          {board.map((value, index) => {
            return (
              <div key={index} id={index} className="cell">{value}</div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
