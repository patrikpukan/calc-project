import './Button.css';
import './App.css';


function EqB({onClick, textValue}) { 
  const buttonValue = '=';
  return (
    <>
      <button onClick={onClick}>
        {textValue}
      </button>
    </>
  )
  }
  export default EqB;