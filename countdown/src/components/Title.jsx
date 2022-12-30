import './Title.css';


const Title = ({ titulo, eventColor }) => {

  return (
    <h1 className='title' style={{color: eventColor}}>{titulo}</h1>
  )
}

export default Title