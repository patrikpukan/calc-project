import './Button.css';
import './App.css';


function NumbersGrid({onClick}) { 
  return (
    <>
    <div className="numRow1">
      <button onClick={onClick}>1</button>
      <button onClick={onClick}>2</button>
      <button onClick={onClick}>3</button>
    </div>
    <div className="numRow2">
      <button onClick={onClick}>4</button>
      <button onClick={onClick}>5</button>
      <button onClick={onClick}>6</button>
    </div>
    <div className="numRow3">
      <button onClick={onClick}>7</button>
      <button onClick={onClick}>8</button>
      <button onClick={onClick}>9</button>
    </div>
    </>
  )
  }
  export default NumbersGrid;