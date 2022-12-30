import useCountdown from '../hooks/useCountdown';

import Title from '../components/Title';
import Counter from '../components/Counter';

import { CountdownContext } from '../context/CountdownContext';

import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to='/' />;

  const eventTitle = event.title;
  const eventColor = event.color;

  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      <Title titulo={eventTitle} eventColor={eventColor} />
      <div className="countdown_container">
        <Counter titulo={"Dias"} number={day} eventColor={eventColor} />
        <Counter titulo={"Horas"} number={hour} eventColor={eventColor} />
        <Counter titulo={"Minutos"} number={minute} eventColor={eventColor} />
        <Counter titulo={"Segundos"} number={second} eventColor={eventColor} />
      </div>
    </>
  )
}

export default Countdown