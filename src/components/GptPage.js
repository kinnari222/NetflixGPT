import React from 'react';
import { BG_URL } from '../utils/constants';
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';

const GptPage = () => {
  return (
    <div>
    <div className="absolute -z-10">
        <img
          className="w-full"
          src={BG_URL}
          alt="bg-image"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptPage;
