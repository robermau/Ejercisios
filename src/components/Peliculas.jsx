import React, {useContext} from "react";
import { movieContext } from "../App";

function Peliculas() {
  
  const movie = useContext(movieContext)

  return (<>
      {movie.map((pelicula,index) =>(
`
<div>Titulo: {}</div>
   <div>Popularidad:  </div>
   <div> Lenguaje :</div>
   <div> Puntos : </div>
   `
      ))}
   
   </>
  );
}

export default Peliculas;