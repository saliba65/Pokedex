import React, { useState } from "react";
import mockData from "../../mockData/mockData";

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`]);

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;

    return <h1>This is {name} page !</h1>;
  };
  return <>{generatePokemonJSX()}</>;
};

export default Pokemon;
