import React, { useState, useRef } from 'react';
import Page from './components/Page';
import Primes from './components/Primes';

import './App.css';

// Collatz stuff!

export const collatzStep = (n: number) => n % 2 === 0 ? n / 2 : (n * 3) + 1;
export const isCollatzDone = (n: number) => n === 1;

const getRandom = (s: number, e: number) => (
  Math.floor(Math.random() * (e - s + 1)) + s
);

const Settings = ({ 
  setValue,
  setIterate,
  iterate,
} : { 
  setValue: (v: number) => void;
  setIterate: (iterate: boolean) => void;
  iterate: boolean;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current && inputRef.current.value !== '') {
      const value = parseInt(inputRef.current.value);
      if (value !== NaN) {
        setValue(value);
      }
    }
  };
  
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIterate(e.target.checked);
  };
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button type="button" onClick={handleClick}>Set Start Value</button>
      <label> Iterate: </label>
      <input type="checkbox" onChange={handleCheckbox} checked={iterate}/>
    </div>
  );
};

const App = () => {
  const [value, setValue] = useState(getRandom(3, 100));
  const [iterate, setIterate] = useState(true);
  return (
    <Page title="Collatz Tools">
      <Settings setValue={setValue} setIterate={setIterate} iterate={iterate}/>
      <Primes nextValue={collatzStep} start={value} isDone={isCollatzDone} iterate={iterate}/>
    </Page>
  );
};

export default App;
