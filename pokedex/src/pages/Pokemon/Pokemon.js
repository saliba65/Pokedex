/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toFirstCharUppercase } from "../../utils/constants";

import * as S from "../Pokedex/PokedexStyle";
import * as T from "./PokemonStyle";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import background from "../../assets/images/backgroundPokemon.png";
import goBackIcon from "../../assets/icons/goBackIcon.png";
import { CircularProgress } from "@material-ui/core";

const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);
  const [backgroundColor, setBackgroundColor] = useState();
  const [secondaryType, setSecondaryType] = useState(false);
  const [typeConter, setTypeConter] = useState(0);
  const goBack = () => history.goBack();

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

  const generateTypeColor = () => {
    console.log("oi");
    if (typeConter % 2 === 0) {
      setSecondaryType(false);
      setTypeConter(typeConter + 1);
    } else {
      setSecondaryType(false);
      setTypeConter(typeConter + 1);
    }
    return secondaryType;
  };

  const generateColor = () => {
    const { id } = pokemon;
    let rest = id % 7;
    switch (rest) {
      case 1:
        setBackgroundColor(
          "radial-gradient(circle at -14.09% 79.88%, #ffff50 0, #ffff52 8.33%, #ebff56 16.67%, #cdfa5b 25%, #aef262 33.33%, #8ee667 41.67%, #6cd86c 50%, #48c970 58.33%, #16bc74 66.67%, #00b179 75%, #00a87f 83.33%, #00a185 91.67%, #009b8c 100%)"
        );
        break;
      case 2:
        setBackgroundColor(
          "radial-gradient(circle at -7.92% 90.56%, #b2eaff 0, #5389f2 50%, #003265 100%)"
        );
        break;
      case 3:
        setBackgroundColor(
          "radial-gradient(circle at -20.44% 43.84%, #ffb629 0, #ffa537 10%, #ff9243 20%, #ff7e4b 30%, #ff6951 40%, #f25353 50%, #d93f53 60%, #c22f54 70%, #ad2355 80%, #9b1b56 90%, #8c1859 100%)"
        );
        break;
      case 4:
        setBackgroundColor(
          "radial-gradient(circle at -3.14% 40.63%, #ffff7c 0, #ffff6f 12.5%, #fff565 25%, #ffda5c 37.5%, #f2bd53 50%, #dda14c 62.5%, #c98a46 75%, #b77642 87.5%, #a8663f 100%)"
        );
        break;
      case 5:
        setBackgroundColor(
          "radial-gradient(circle at -12.05% 72.58%, #fe90c3 0, #ed80bd 25%, #d86cb4 50%, #c259ac 75%, #ae4ba7 100%)"
        );
        break;
      case 6:
        setBackgroundColor(
          "radial-gradient(circle at -20.44% 43.84%, #cfa8ff 0, #9d8bff 25%, #6c6cd8 50%, #3f4ea4 75%, #153375 100%)"
        );
        break;
      default:
        setBackgroundColor(
          "radial-gradient(circle at -11.24% 85.36%, #ffedb0 0, #eed391 25%, #d8b46c 50%, #c39549 75%, #b37c2e 100%)"
        );
    }
    return backgroundColor;
  };

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
          <T.ContainerModal bg={generateColor}>
            <T.LeftSideModal>
              <T.GoBackButton onClick={goBack}>
                <img src={goBackIcon} />
              </T.GoBackButton>
              <img
                style={{ maxWidth: "300px", maxHeight: "300px" }}
                src={fullImageUrl}
              />
              <T.PokemonDescription isTypeData>
                {types.map((typeInfo) => {
                  const { type } = typeInfo;
                  const { name } = type;
                  return (
                    <S.PokemonsDataType
                      isSecondaryType={generateTypeColor}
                    >{`${toFirstCharUppercase(name)}`}</S.PokemonsDataType>
                  );
                })}
              </T.PokemonDescription>
            </T.LeftSideModal>
            <T.RightSideModal>
              <T.TitleContainer>
                <T.PokemonName>{`${toFirstCharUppercase(name)}`}</T.PokemonName>
                <T.PokemonIdCircle>
                  <h1>{id}</h1>
                </T.PokemonIdCircle>
              </T.TitleContainer>
              <T.PokemonDescription>
                <T.WhiteBoxContainer>
                  <T.PokemonSubdataContainers>
                    <T.PokemonData isSubtitle>Species:</T.PokemonData>
                    <T.PokemonData>{`${toFirstCharUppercase(
                      species.name
                    )}`}</T.PokemonData>
                  </T.PokemonSubdataContainers>
                  <T.PokemonSubdataContainers>
                    <T.PokemonData isSubtitle>Height: </T.PokemonData>
                    <T.PokemonData>{height}</T.PokemonData>
                  </T.PokemonSubdataContainers>
                  <T.PokemonSubdataContainers>
                    <T.PokemonData isSubtitle>Weight: </T.PokemonData>
                    <T.PokemonData>{weight}</T.PokemonData>
                  </T.PokemonSubdataContainers>
                </T.WhiteBoxContainer>
              </T.PokemonDescription>
              <T.WhiteBoxContainer isProgress>
                <T.PokemonSubdataContainers>
                  <T.PokemonData isSubtitle>Healthy Points:</T.PokemonData>
                  <T.PokemonData>1 000 000</T.PokemonData>
                  <T.ProgressPower />
                </T.PokemonSubdataContainers>
                <T.PokemonSubdataContainers>
                  <T.PokemonData isSubtitle>Experience:</T.PokemonData>
                  <T.PokemonData>1 000 000</T.PokemonData>
                  <T.ProgressPower isExperience />
                </T.PokemonSubdataContainers>
              </T.WhiteBoxContainer>
              <T.PokemonSubdataContainers isPower>
                <T.WhiteBoxContainer isPower>
                  <T.PowerLevel>165</T.PowerLevel>
                  <T.PokemonData>Attack</T.PokemonData>
                </T.WhiteBoxContainer>
                <T.WhiteBoxContainer isPower>
                  <T.PowerLevel>49</T.PowerLevel>
                  <T.PokemonData>Defense</T.PokemonData>
                </T.WhiteBoxContainer>
                <T.WhiteBoxContainer isPower>
                  <T.PowerLevel>130</T.PowerLevel>
                  <T.PokemonData>Sp Attack</T.PokemonData>
                </T.WhiteBoxContainer>
                <T.WhiteBoxContainer isPower>
                  <T.PowerLevel>271</T.PowerLevel>
                  <T.PokemonData>Sp Defense</T.PokemonData>
                </T.WhiteBoxContainer>
              </T.PokemonSubdataContainers>
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
