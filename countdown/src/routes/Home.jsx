import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CountdownContext } from '../context/CountdownContext';

import './Home.css';

const Home = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [color, setColor] = useState();

  const { setEvent } = useContext(CountdownContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventObject = {
      title,
      date,
      image,
      color
    };
    console.log(eventObject);
    if (eventObject.color === undefined) eventObject.color = "#000";
    if (eventObject.image === undefined) eventObject.image = "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2VuZXJpYyUyMHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format";

    setEvent(eventObject);
    navigate('/countdown');
  };

  return (
    <div className='home'>
      <h2>Crie a sua contagem regressiva!</h2>
      <form className='countdown_form' onSubmit={handleSubmit}>
        <label htmlFor="title">
          <span>Título:</span>
          <input
            type="text"
            name="title"
            placeholder='Digite o título do evento'
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label htmlFor="date">
          <span>Data do evento:</span>
          <input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label htmlFor="img">
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            placeholder='Digite a URL da imagem'
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label htmlFor="color" id='color'>
          <span>Cor do tema:</span>
          <input
            type="color"
            name="color"
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <input type="submit" id='criar' value="Criar evento" />
      </form>
    </div>
  )
}

export default Home