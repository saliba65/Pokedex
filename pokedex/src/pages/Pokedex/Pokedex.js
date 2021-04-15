import React from "react";
import * as S from "./PokedexStyle";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";

const Pokedex = () => {
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
    </S.PokedexContainer>
  );
};

export default Pokedex;
