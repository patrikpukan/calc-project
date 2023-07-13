import './Button.css';
import './App.css';


function MinusB({onClick, textValue}) { 
  const buttonValue = '-';
  return (
    <>
      <button onClick={onClick}>
        {textValue}
      </button>
    </>
  )
  }
  export default MinusB;