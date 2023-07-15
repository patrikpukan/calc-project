import { useState } from 'react';
import './App.css';
import PlusB from './PlusB.jsx';
import NumbersGrid from './NumbersGrid.jsx';
import Field from './Field.jsx';


function App() {
  const [currDisplay, setCurrDisplay] = useState('test text')
  const plus = '+'
  const numbers = [0,1,2,3,4,5,6,7,8,9,3]
  const handleClick = (event) => {
    setCurrDisplay(event.target.textContent);
    // console.log(event)
    // console.log(event.target)
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
