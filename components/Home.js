import Pokemon from './Pokemon';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

function Home() {

  const [pokeData, setPokeData] = useState([]);
  const [index, setIndex] = useState(1);
  const [pause, setPause] = useState(15);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + index)
      .then(response => response.json())
      .then(data => {
        setPokeData([...pokeData, data]);
        if (index <= pause) {
          setIndex(index + 1);
        }
      })
  }, [index]);

  const addPokemon = () => {
    setPause(pause + 15);
    setIndex(index +1);
    console.log(pause);
    console.log(index);
  }

  const pokemons = pokeData.map((data, i) => {
    return <Pokemon key={i} type={data.types[0].type.name} image={data.sprites.front_default} name={data.name} />;
  });
  
  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Pokedex</h1>
      <div className={styles.poke}>
        {pokemons}
        <button onClick={() => addPokemon()} className={styles.next}>Next</button>
      </div>
    </div>
  );
}

export default Home;
