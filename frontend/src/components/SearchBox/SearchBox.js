import React from 'react';
import './SearchBox.css';

export const SearchBox = ({ city, handleChangeCity, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="search-input"
        type="text"
        value={city}
        onChange={handleChangeCity}
        placeholder="City..."
      />
      <button type='submit'>Search</button>
    </form>
  );
};