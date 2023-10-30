import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Button from './componentes/Button';
import Screen from './componentes/Screen';
import ClearButton from './componentes/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = value => {

    setInput(input + value);

  };

  const result = () => {

    setInput(evaluate(input));

  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
        <div className='calculator-container'>
          <Screen input={input}/>
          <div className='line'>
            <Button manejarClic={addInput}>1</Button>
            <Button manejarClic={addInput}>2</Button>
            <Button manejarClic={addInput}>3</Button>
            <Button manejarClic={addInput}>+</Button>
          </div>
          <div className='line'>
            <Button manejarClic={addInput}>4</Button>
            <Button manejarClic={addInput}>5</Button>
            <Button manejarClic={addInput}>6</Button>
            <Button manejarClic={addInput}>-</Button>
          </div>
          <div className='line'>
            <Button manejarClic={addInput}>7</Button>
            <Button manejarClic={addInput}>8</Button>
            <Button manejarClic={addInput}>9</Button>
            <Button manejarClic={addInput}>*</Button>
          </div>
          <div className='line'>
            <Button manejarClic={result}>=</Button>
            <Button manejarClic={addInput}>0</Button>
            <Button manejarClic={addInput}>.</Button>
            <Button manejarClic={addInput}>/</Button>
          </div>
          <div className='line'></div>
            <ClearButton manageClear={() => setInput('')}>
              Clear
            </ClearButton>
        </div>
      </div>
      

    </div>
  );
}

export default App;
