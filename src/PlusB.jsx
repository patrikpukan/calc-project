import Button from './Button.jsx';
import './App.css';


function PlusB() {
  
  const handleClick = () => {
    console.log('Button clicked');
  }
  const buttonValue = '+';
  return (
    <>
      <Button onclick={handleClick} text={buttonValue}>
        <p className="mathButton"></p>
      </Button>
    </>
  )
  }
  export default PlusB;