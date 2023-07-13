import './Button.css';
import './App.css';


function NumbersGrid({onClick}) { 
  return (
    <>
    <button onClick={onClick}>0</button>
    <button onClick={onClick}>1</button>
    <button onClick={onClick}>2</button>
    <button onClick={onClick}>3</button>
    <button onClick={onClick}>4</button>
    <button onClick={onClick}>5</button>
    <button onClick={onClick}>6</button>
    <button onClick={onClick}>7</button>
    <button onClick={onClick}>8</button>
    <button onClick={onClick}>9</button>
    </>
  )
  }
  export default NumbersGrid;