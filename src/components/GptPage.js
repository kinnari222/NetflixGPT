import React from 'react';
import { BG_URL } from '../utils/constants';
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';

const GptPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="logo" />
        {/* <img className='h-screen object-cover' src={BG_URL} alt="logo" /> */}
      </div>
      <div className=''>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  )
}

export default GptPage;
