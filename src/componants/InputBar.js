import React from 'react';

// Main Input Bar

const InputBar = ({ current, newCountry }) => {
  const onInputChange = event => {
    if (event.target.value === current.capital) {
      event.target.value = '';
      newCountry();
    }
  };
  return (
    <div>
      <form>
        <label htmlFor="enter-capital">Enter capital </label>
        <input onChange={onInputChange} id="enter-capital" type="text"></input>
      </form>
    </div>
  );
};

export default InputBar;
