import Navbar from '../src/componentes/Navbar';
import Personajes from '../src/componentes/Personajes';
import Paginacion from './componentes/Paginacion';
import React, { useState, useEffect } from 'react';

function App() {

  const [personajes, setpersonajes] = useState([]);
  const [info, setInfo] = useState([]);

  const urlAPI = 'https://rickandmortyapi.com/api/character';
  
  
  const fetchPersonajes = (urlAPI) => {
    fetch(urlAPI)
      .then(response => response.json())
      .then(data => {
        setpersonajes(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))

  };

  const onPrevious = () => {
    fetchPersonajes(info.prev);
  }

  const onNext = () => {
    fetchPersonajes(info.next);
  }

  useEffect(() => {
    fetchPersonajes(urlAPI);
  }, []);

  return (
    <>
      <Navbar brand="Rick+ and Morty App" />

      <div className='container mt-5'>
        <Paginacion prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Personajes personajes={personajes} />
        <Paginacion prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>

    </>
  );
}


export default App;
