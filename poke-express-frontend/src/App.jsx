import React from "react";
import {Route, Routes} from 'react-router-dom';
import Pokemons from "./Pokemons";
import Pokemon from "./Pokemon";
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokemons/>}/>
      <Route path="/:pokemonAtIndex" element={<Pokemon/>}/>
    </Routes>
  );
}

export default App;
