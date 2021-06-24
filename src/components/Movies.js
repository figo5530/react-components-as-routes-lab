import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => 
        <div key={index}>
          Title: {movie.title}
          Time: {movie.time}
          Genres: <ul>{movie.genres.map((g, index) => <li key={index}>{g}</li>)}</ul>
        </div>)}
        
    </div>
    
  );
};

export default Movies;
