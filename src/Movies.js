import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';


const Movies = () => {
  const {movie} =useGlobalContext();

  return (
  <section className='movie-page'>
    <div className='container grid grid-4-col'>
    
  {movie.map((currMovie) => {
   const{imdbID,Title,Poster}=currMovie
   return(
    <NavLink to= {`movie/${imdbID}`}>
      <div className='card'>\
      <div className='card-info'>
        <h2>{Title}</h2>
        <img src={Poster}></img>
        </div>
        </div>

    </NavLink>
   ) 
    })}
      
      </div>
      </section>
  
  )
  
}

export default Movies
