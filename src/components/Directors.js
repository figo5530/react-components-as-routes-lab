import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
        <h1>Directors Page</h1>
        {directors.map((d, index) => 
        <div key={index}>
          Name: {d.name}
          Movies: <ul>{d.movies.map((m, index) => <li key={index}>{m}</li>)}</ul>
        </div>)}
        
    </div>
  );
}

export default Directors
