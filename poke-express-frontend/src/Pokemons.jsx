import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Pokemons = () => {
  const [pokemonCards, setPokemonCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8888/pokemon')
      .then(res => res.json())
      .then(res => setPokemonCards(res));
  }, []);
  return (
    <main className="cards">
      {pokemonCards.map((pokemon, idx) => (
        <Link className='link' key={idx} to={`/${idx}`}>
          {pokemon.name}
        </Link>
      ))}
    </main>
  );
};

export default Pokemons;
