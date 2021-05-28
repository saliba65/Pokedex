/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toFirstCharUppercase } from "../../utils/constants";
import * as S from "./PokedexStyle";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";

const Pokedex = (props) => {
  const { history } = props;
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            fullImageUrl: `https://pokeres.bastionbot.org/images/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
      });
  }, []);

  const getPokemonCard = (pokemonId) => {
    const { id, name, fullImageUrl } = pokemonData[pokemonId];
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
            <S.PokemonsDataType>Lutador</S.PokemonsDataType>
          </S.PokemonsDataContainer>
        </S.PokemonsInfo>
        <S.PokemonsImageContainer color={"red"}>
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
