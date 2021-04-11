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
      <div>This is the Pokedex page</div>
    </S.PokedexContainer>
  );
};

export default Pokedex;
