/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import axios from "axios";
import mockData from "../../mockData/mockData";
import { toFirstCharUppercase } from "../../utils/constants";

import * as S from "../Pokedex/PokedexStyle";
import * as T from "./PokemonStyle";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import background from "../../assets/images/backgroundPokemon.png";
import { CircularProgress } from "@material-ui/core";

const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

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
        <T.ContainerPokemon bg={background}>
          <T.ContainerModal>
            <T.LeftSideModal>
              <img
                style={{ maxWidth: "300px", maxHeight: "300px" }}
                src={fullImageUrl}
              />
              <T.PokemonDescription>
                <h2>Types: </h2>
                {types.map((typeInfo) => {
                  const { type } = typeInfo;
                  const { name } = type;
                  return <h2>{`${name}`}</h2>;
                })}
              </T.PokemonDescription>
            </T.LeftSideModal>
            <T.RightSideModal>
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
            </T.RightSideModal>
          </T.ContainerModal>
        </T.ContainerPokemon>
      </S.PokedexContainer>
    );
  };
  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX()}
      {/* Adicionar botao goBack */}
      {pokemon === false && (
        <T.PokemonName>Pokemon nao encontrado</T.PokemonName>
      )}
    </>
  );
};

export default Pokemon;
