import './Counter.css';

const Counter = ({ titulo, number, eventColor }) => {
  return (
    <div className='counter'>
      <p className='counter_number' style={{backgroundColor: eventColor}}>{number}</p>
      <h2 className='counter_text' style={{color: eventColor}}>{titulo}</h2>
    </div>
  )
}

export default Counter