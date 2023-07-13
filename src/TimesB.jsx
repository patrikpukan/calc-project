import './Button.css';
import './App.css';


function TimesB({onClick, textValue}) { 
  const buttonValue = '*';
  return (
    <>
      <button onClick={onClick}>
        {textValue}
      </button>
    </>
  )
  }
  export default TimesB;