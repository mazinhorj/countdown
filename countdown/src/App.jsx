
import './App.css';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { CountdownContext } from './context/CountdownContext';
import Footer from './components/Footer';

function App() {
  const { event } = useContext(CountdownContext);

  let eventImage = null;
  let eventColor = null;

  if (event) {
    eventImage = event.image;
    eventColor = event.color;
  };

  return (
    <div className="App" style={eventImage ? ({ backgroundImage: `url(${eventImage})` }) : ({ backgroundImage: `url("https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2VuZXJpYyUyMHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format")` }) }>
      <div className="container">
        <Outlet />
        <Footer eventColor= {eventColor} />
      </div>
    </div>
  )
}

export default App
