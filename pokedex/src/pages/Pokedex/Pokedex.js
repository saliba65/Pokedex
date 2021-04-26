/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import mockData from "../../mockData/mockData";
import * as S from "./PokedexStyle";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import pikachu from "../../assets/images/pikachu.png";

const Pokedex = (props) => {
  const [pokemonData, setPokemonData] = useState(mockData);
  const { history } = props;

  const toFirstCharUppercase = (name) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  const getPokemonCard = (pokemonId) => {
    // console.log(pokemonData[`${pokemonId}`]);
    const { id, name, species, height, weight, types, sprites } = pokemonData[
      `${pokemonId}`
    ];
    const { front_default } = sprites;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    return (
      <S.PokemonsCard
        key={pokemonId}
        onClick={() => history.push(`/${pokemonId}`)}
      >
        <S.PokemonsInfo>
          <S.PokemonsName>{`${toFirstCharUppercase(name)}`}</S.PokemonsName>
          <S.PokemonsDataContainer>
            <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
          </S.PokemonsDataContainer>
          <S.PokemonsDataContainer>
            <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
            <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
          </S.PokemonsDataContainer>
          <S.PokemonsDataContainer>
            {types.map((typeInfo) => {
              const { type } = typeInfo;
              const { name } = type;
              //Fazer switch para mudar cores do type
              return (
                <S.PokemonsDataType key={name}>{`${name}`}</S.PokemonsDataType>
              );
            })}
          </S.PokemonsDataContainer>
        </S.PokemonsInfo>
        <S.PokemonsImageContainer>
          <img src={fullImageUrl} />
        </S.PokemonsImageContainer>
      </S.PokemonsCard>
    );
  };

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
      <S.SearchContainer>
        <S.SearchLabel>
          <h2>800 Pokemons for you to choose your favorite</h2>
        </S.SearchLabel>
        <S.SearchInput placeholder={"Busque seu Pokemon"} />
      </S.SearchContainer>
      <S.PokemonsContainer>
        {/* Implementar um skeleton no futuro */}
        {/* {!pokemonData ? <Skeleon/> : } */}
        {Object.keys(pokemonData).map((pokemonId) => getPokemonCard(pokemonId))}
      </S.PokemonsContainer>
    </S.PokedexContainer>
  );
};

export default Pokedex;
