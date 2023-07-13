import './Button.css';
import './App.css';


function DivideB({onClick, textValue}) { 
  const buttonValue = '/';
  return (
    <>
      <button onClick={onClick}>
        {textValue}
      </button>
    </>
  )
  }
  export default DivideB;