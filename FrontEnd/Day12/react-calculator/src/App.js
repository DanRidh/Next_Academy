import logo from './logo.svg';
import React, { useState } from 'react';
import CalculatorDisplay from './components/CalculatorDisplay';
import Keypad from './components/Keypad';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const calculate = () => {
    try {
      setResult((eval(result) || '') + '');
    } catch (e) {
      setResult('error');
    }
  };

  const reset = () => {
    setResult('');
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const performCalculation = key => {
    if(key === '=') {
      calculate();
    } else if (key === 'AC') {
      reset();
    } else if (key === 'C') {
      backspace();
    } else {
      setResult(result + key)
    }
  };

  const displayResult = () => {
    return result;
  }


  return (
    <>
      <div style={{width: '100%'}}>
        <div style={{
          width: '350px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
          }}
        >
          <CalculatorDisplay displayResult={displayResult} />
          <Keypad performCalculation={performCalculation} />
        </div>
      </div>
    </>
  );
}

export default App;
