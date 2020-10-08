import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {

  const APP_ID ='697c2c87'
  const APP_KEY = '26985e81fbdff8fdd13ae40f7a0e1601'

  const request = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {
    getRecipes()
  },)

  const getRecipes = async () => {
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" />
        <button className="search-button" type="submit"> Search </button>
      </form>
    </div>
  );
}

export default App;
