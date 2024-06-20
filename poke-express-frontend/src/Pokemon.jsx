import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const Pokemon = () => {
  const {pokemonAtIndex} = useParams();
  const [pokemonCard, setPokemonCard] = useState({});
  const {name, img, misc, stats} = pokemonCard;

  useEffect(() => {
    fetch(`http://localhost:8888/pokemon/${pokemonAtIndex}`)
      .then(res => res.json())
      .then(res => setPokemonCard(res));
  }, []);

  return (
    <>
      <Link style={{padding: '2%'}} className="link" to={'/'}>
        Go Back
      </Link>
      <main className="card">
        <img src={img} />
        <p>Name: {name}</p>
        <p>Height: {misc?.height}</p>
        <p>Weight: {misc?.weight}</p>
        <p>HP: {stats?.hp}</p>
        <p>Attack: {stats?.attack}</p>
        <p>Defense: {stats?.defense}</p>
        <p>Special Attack: {stats?.spattack}</p>
        <p>Special Defense: {stats?.spdefense}</p>
        <p>Speed: {stats?.speed}</p>
      </main>
    </>
  );
};

export default Pokemon;
