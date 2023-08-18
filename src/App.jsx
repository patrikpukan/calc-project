import { useState } from 'react';
import './App.css';
import PlusB from './PlusB.jsx';
import NumbersGrid from './NumbersGrid.jsx';
import Field from './Field.jsx';


function App() {
  const [currDisplay, setCurrDisplay] = useState('Enter numbers')
  const plus = '+'
  const numbers = [0,1,2,3,4,5,6,7,8,9,3]
  const handleNumbers = (event) => {
    setCurrDisplay(event.target.textContent);
    // console.log(event)
    // console.log(event.target)
  }
  const handleClick = (event) => {

  }

  return (
    <>
      <Field currentDisplay={currDisplay}></Field>
      <PlusB onClick={handleClick} textValue='+'></PlusB>
      <clearB onClick={handleClick}></clearB>
      <NumbersGrid onClick={handleNumbers}></NumbersGrid>
    </>
    )
  }
export default App;
