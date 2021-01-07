import React, {useState, useEffect, useCallback} from 'react';
import { getData } from './api';
import { Card } from '@material-ui/core';

const PokemonCard = ({name, url}) => {
    const [pokemonData, setPokemonData] = useState({});

    const handlePokemonData = useCallback(async () => {
        const data = await getData(url);
        console.log(data);
        setPokemonData(data);
    }, [url])

    useEffect(() => {
        handlePokemonData();
    }, [url, handlePokemonData])

    return (
        <Card className="pokemonCard">
            <header>
                <img alt='Front Pokemon Sprite' src={pokemonData.sprites && pokemonData.sprites.front_default}></img>
            </header>
            <section>
                {name}
            </section>
        </Card>
    );

}

export default PokemonCard;