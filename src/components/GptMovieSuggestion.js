import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const gpt = useSelector(store => store.gpt);
  const { movieResults, MovieName } = gpt;

  if(!MovieName) return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        {MovieName.map((movie, index) => <MovieList key={movie} title={MovieName} movies={movieResults[index]} />)}
      </div>
    </div>
  )
}

export default GptMovieSuggestion
