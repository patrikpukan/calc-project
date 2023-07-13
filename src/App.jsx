import { useState } from 'react';
import './App.css';
import PlusB from './PlusB.jsx';
import NumbersGrid from './NumbersGrid.jsx';
import Field from './Field.jsx';


function App() {
  const [currDisplay, setCurrDisplay] = useState('test text')
  const plus = '+'
  const handleClick = () => {
    setCurrDisplay('test');
  }

  return (
    <>
      <Field currentDisplay={currDisplay}></Field>
      <PlusB onClick={handleClick} textValue='+'></PlusB>
      <NumbersGrid onClick={handleClick}></NumbersGrid>
    </>
    )
  }
export default App;
