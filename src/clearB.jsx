import './Button.css';
import './App.css';


function clearB({onClick, textValue}) { 
  const buttonValue = 'c';
  return (
    <>
      <button onClick={onClick}>
        {textValue}
      </button>
    </>
  )
  }
  export default clearB;