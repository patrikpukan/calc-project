import './App.css';

function Field({currentDisplay}) {

  return (
    <>
      <div className='numberField'>
        <p className='shownText'>
          {currentDisplay}
        </p>
      </div>
    </>
  )
}

export default Field;