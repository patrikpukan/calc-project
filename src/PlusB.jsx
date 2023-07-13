import './Button.css';
import './App.css';


function PlusB({onClick, textValue}) { 
  const buttonValue = '+';
  return (
    <>
      <button onClick={onClick}>
        {textValue}
      </button>
    </>
  )
  }
  export default PlusB;