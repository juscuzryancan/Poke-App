import './App.css';
import React, {useState, useEffect} from 'react';
import {getData} from './api';
import {default as PokemonCard} from './PokemonCard';
import {Button} from '@material-ui/core';

//asdfjaklsdfjlkasdjf

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [prevUrl, setPrevUrl] = useState('');
  const [nextUrl, setNextUrl] = useState('');

  const handleLoad = async (url) => {
    const data = await getData(url);
    setPokemon(data.results);
    (data.next) ? setNextUrl(data.next) : setNextUrl('');
    (data.previous) ? setPrevUrl(data.previous) : setPrevUrl('');
  }

  useEffect(() => {
    handleLoad('https://pokeapi.co/api/v2/pokemon/');
  }, []);

  return (
    <div className="App">
      <div className="pokemon">
        {
          pokemon.length > 0 && pokemon.map(({ name, url }, index) => <PokemonCard key={index} name={name} url={url} />)
        }
      </div>
    <Button disabled={(!prevUrl) ? true : false} onClick={() => {
      handleLoad(prevUrl);
    }}>Previous</Button>

    <Button disabled={(!nextUrl) ? true : false} onClick={() => {
      handleLoad(nextUrl);
    }}>Next</Button>

    </div>
  );
}

export default App;
