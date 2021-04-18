/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import * as S from "./PokedexStyle";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import pikachu from "../../assets/images/pikachu.png";

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
      <S.PokemonsContainer>
        <S.PokemonsCard>
          <S.PokemonsInfo>
            <S.PokemonsName>Pikachu</S.PokemonsName>
            <S.PokemonsDataContainer>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
              <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataType>Electric</S.PokemonsDataType>
              <S.PokemonsDataType isSecondaryType>Fighting</S.PokemonsDataType>
            </S.PokemonsDataContainer>
          </S.PokemonsInfo>
          <S.PokemonsImageContainer>
            <img src={pikachu} />
          </S.PokemonsImageContainer>
        </S.PokemonsCard>
        <S.PokemonsCard>
          <S.PokemonsInfo>
            <S.PokemonsName>Pikachu</S.PokemonsName>
            <S.PokemonsDataContainer>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
              <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataType>Electric</S.PokemonsDataType>
              <S.PokemonsDataType isSecondaryType>Fighting</S.PokemonsDataType>
            </S.PokemonsDataContainer>
          </S.PokemonsInfo>
          <S.PokemonsImageContainer>
            <img src={pikachu} />
          </S.PokemonsImageContainer>
        </S.PokemonsCard>
        <S.PokemonsCard>
          <S.PokemonsInfo>
            <S.PokemonsName>Pikachu</S.PokemonsName>
            <S.PokemonsDataContainer>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
              <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataType>Electric</S.PokemonsDataType>
              <S.PokemonsDataType isSecondaryType>Fighting</S.PokemonsDataType>
            </S.PokemonsDataContainer>
          </S.PokemonsInfo>
          <S.PokemonsImageContainer>
            <img src={pikachu} />
          </S.PokemonsImageContainer>
        </S.PokemonsCard>
        <S.PokemonsCard>
          <S.PokemonsInfo>
            <S.PokemonsName>Pikachu</S.PokemonsName>
            <S.PokemonsDataContainer>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
              <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataType>Electric</S.PokemonsDataType>
              <S.PokemonsDataType isSecondaryType>Fighting</S.PokemonsDataType>
            </S.PokemonsDataContainer>
          </S.PokemonsInfo>
          <S.PokemonsImageContainer>
            <img src={pikachu} />
          </S.PokemonsImageContainer>
        </S.PokemonsCard>
        <S.PokemonsCard>
          <S.PokemonsInfo>
            <S.PokemonsName>Pikachu</S.PokemonsName>
            <S.PokemonsDataContainer>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
              <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataType>Electric</S.PokemonsDataType>
              <S.PokemonsDataType isSecondaryType>Fighting</S.PokemonsDataType>
            </S.PokemonsDataContainer>
          </S.PokemonsInfo>
          <S.PokemonsImageContainer>
            <img src={pikachu} />
          </S.PokemonsImageContainer>
        </S.PokemonsCard>
        <S.PokemonsCard>
          <S.PokemonsInfo>
            <S.PokemonsName>Pikachu</S.PokemonsName>
            <S.PokemonsDataContainer>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
              <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataType>Electric</S.PokemonsDataType>
              <S.PokemonsDataType isSecondaryType>Fighting</S.PokemonsDataType>
            </S.PokemonsDataContainer>
          </S.PokemonsInfo>
          <S.PokemonsImageContainer>
            <img src={pikachu} />
          </S.PokemonsImageContainer>
        </S.PokemonsCard>
        <S.PokemonsCard>
          <S.PokemonsInfo>
            <S.PokemonsName>Pikachu</S.PokemonsName>
            <S.PokemonsDataContainer>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
              <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataType>Electric</S.PokemonsDataType>
              <S.PokemonsDataType isSecondaryType>Fighting</S.PokemonsDataType>
            </S.PokemonsDataContainer>
          </S.PokemonsInfo>
          <S.PokemonsImageContainer>
            <img src={pikachu} />
          </S.PokemonsImageContainer>
        </S.PokemonsCard>
        <S.PokemonsCard>
          <S.PokemonsInfo>
            <S.PokemonsName>Pikachu</S.PokemonsName>
            <S.PokemonsDataContainer>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
              <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataType>Electric</S.PokemonsDataType>
              <S.PokemonsDataType isSecondaryType>Fighting</S.PokemonsDataType>
            </S.PokemonsDataContainer>
          </S.PokemonsInfo>
          <S.PokemonsImageContainer>
            <img src={pikachu} />
          </S.PokemonsImageContainer>
        </S.PokemonsCard>
        <S.PokemonsCard>
          <S.PokemonsInfo>
            <S.PokemonsName>Pikachu</S.PokemonsName>
            <S.PokemonsDataContainer>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
              <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataType>Electric</S.PokemonsDataType>
              <S.PokemonsDataType isSecondaryType>Fighting</S.PokemonsDataType>
            </S.PokemonsDataContainer>
          </S.PokemonsInfo>
          <S.PokemonsImageContainer>
            <img src={pikachu} />
          </S.PokemonsImageContainer>
        </S.PokemonsCard>
        <S.PokemonsCard>
          <S.PokemonsInfo>
            <S.PokemonsName>Pikachu</S.PokemonsName>
            <S.PokemonsDataContainer>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
              <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataType>Electric</S.PokemonsDataType>
              <S.PokemonsDataType isSecondaryType>Fighting</S.PokemonsDataType>
            </S.PokemonsDataContainer>
          </S.PokemonsInfo>
          <S.PokemonsImageContainer>
            <img src={pikachu} />
          </S.PokemonsImageContainer>
        </S.PokemonsCard>
        <S.PokemonsCard>
          <S.PokemonsInfo>
            <S.PokemonsName>Pikachu</S.PokemonsName>
            <S.PokemonsDataContainer>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
              <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataType>Electric</S.PokemonsDataType>
              <S.PokemonsDataType isSecondaryType>Fighting</S.PokemonsDataType>
            </S.PokemonsDataContainer>
          </S.PokemonsInfo>
          <S.PokemonsImageContainer>
            <img src={pikachu} />
          </S.PokemonsImageContainer>
        </S.PokemonsCard>
        <S.PokemonsCard>
          <S.PokemonsInfo>
            <S.PokemonsName>Pikachu</S.PokemonsName>
            <S.PokemonsDataContainer>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
              <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataSubTitle>Attack</S.PokemonsDataSubTitle>
              <S.PokemonsDataSubTitle>Defense</S.PokemonsDataSubTitle>
            </S.PokemonsDataContainer>
            <S.PokemonsDataContainer>
              <S.PokemonsDataType>Electric</S.PokemonsDataType>
              <S.PokemonsDataType isSecondaryType>Fighting</S.PokemonsDataType>
            </S.PokemonsDataContainer>
          </S.PokemonsInfo>
          <S.PokemonsImageContainer>
            <img src={pikachu} />
          </S.PokemonsImageContainer>
        </S.PokemonsCard>
      </S.PokemonsContainer>
    </S.PokedexContainer>
  );
};

export default Pokedex;
