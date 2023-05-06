import React, { useEffect, useState, useContext } from 'react';
import Peliculas from './components/Peliculas';
import axios from 'axios';

export const movieContext = React.createContext()

function App() {
  
  const [movie, setMovie] = useState({})

  console.log(movie)
  useEffect(() => {
    movies()
  }, [])


  function movies() {
    const respuesta = axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1')
      .then((respuesta) => {
     
        setMovie(respuesta.data.results) 
      })
    }

    return (
      <movieContext.Provider value ={movie}>

         <Peliculas/ >
        </movieContext.Provider>
    )





}
export default App








