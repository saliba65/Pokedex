/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import mockData from "../../mockData/mockData";
import { toFirstCharUppercase } from "../../utils/constants";

import * as S from "../Pokedex/PokedexStyle";
import * as T from "./PokemonStyle";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`]);

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;

    return (
      <S.PokedexContainer>
        <S.PokedexHeader>
          <Logo />
          <S.MenuContainer>
            <S.MenuButton>Home</S.MenuButton>
            <S.MenuButton>Pokédex</S.MenuButton>
            <S.MenuButton>Legendaries</S.MenuButton>
            <S.MenuButton>Documentation</S.MenuButton>
          </S.MenuContainer>
        </S.PokedexHeader>
        <T.PokemonName>{`${toFirstCharUppercase(name)}`}</T.PokemonName>
        <T.PokemonDescription>
          <h2>Species: </h2>
          <h2>{species.name}</h2>
        </T.PokemonDescription>
        <T.PokemonDescription>
          <h2>Height: </h2>
          <h2>{height}</h2>
        </T.PokemonDescription>
        <T.PokemonDescription>
          <h2>Weight: </h2>
          <h2>{weight}</h2>
        </T.PokemonDescription>
        <T.PokemonDescription>
          <h2>Types: </h2>
          {types.map((typeInfo) => {
            const { type } = typeInfo;
            const { name } = type;
            return <h2>{`${name}`}</h2>;
          })}
        </T.PokemonDescription>
        <img
          style={{ maxWidth: "300px", maxHeight: "300px" }}
          src={fullImageUrl}
        />
      </S.PokedexContainer>
    );
  };
  return <>{generatePokemonJSX()}</>;
};

export default Pokemon;
