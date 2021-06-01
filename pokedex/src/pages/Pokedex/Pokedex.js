/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toFirstCharUppercase } from "../../utils/constants";
import * as S from "./PokedexStyle";
// import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import Logo from "../../assets/images/PokemonLogo.png";
import SkeletonPokedex from "./PokedexSkeleton";

const Pokedex = (props) => {
  const { history } = props;
  const [pokemonData, setPokemonData] = useState({});
  const [backgroundColor, setBackgroundColor] = useState();
  const [filter, setFilter] = useState("");

  const handleSearchingChange = (e) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=884`)
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

  const generateColor = (id) => {
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

  const getPokemonCard = (pokemonId) => {
    const { id, name, fullImageUrl } = pokemonData[pokemonId];
    return (
      <S.PokemonsCard
        key={pokemonId}
        onClick={() => history.push(`/${pokemonId}`)}
      >
        {!pokemonData ? (
          <SkeletonPokedex />
        ) : (
          <>
            <S.PokemonsInfo>
              <S.PokemonsName>{`${toFirstCharUppercase(name)}`}</S.PokemonsName>
              <S.PokemonsDataContainer>
                <S.PokemonsDataCircle>419</S.PokemonsDataCircle>
                <S.PokemonsDataCircle>350</S.PokemonsDataCircle>
              </S.PokemonsDataContainer>
              <S.PokemonsDataContainer>
                <S.PokemonsDataSubTitle>Ataque</S.PokemonsDataSubTitle>
                <S.PokemonsDataSubTitle>Defesa</S.PokemonsDataSubTitle>
              </S.PokemonsDataContainer>
              <S.PokemonsDataContainer>
                <S.PokemonsDataType isSecondaryType>Lutador</S.PokemonsDataType>
                <S.PokemonsDataType>Terrestre</S.PokemonsDataType>
              </S.PokemonsDataContainer>
            </S.PokemonsInfo>
            <S.PokemonsImageContainer bg={() => generateColor(id)}>
              <img src={fullImageUrl} />
            </S.PokemonsImageContainer>
          </>
        )}
      </S.PokemonsCard>
    );
  };

  return (
    <S.PokedexContainer>
      <S.PokedexHeader>
        <img src={Logo} />
        <S.MenuContainer>
          <S.MenuButton>Home</S.MenuButton>
          <S.MenuButton>Pokédex</S.MenuButton>
          <S.MenuButton>Lendários</S.MenuButton>
          <S.MenuButton>Documentação</S.MenuButton>
        </S.MenuContainer>
      </S.PokedexHeader>
      <S.SearchContainer>
        <S.SearchLabel>
          <h2>Mais de 880 Pokemons para você escolher o seu favorito</h2>
        </S.SearchLabel>
        <S.SearchInput
          placeholder={"Busque seu Pokemon"}
          onChange={handleSearchingChange}
        />
      </S.SearchContainer>
      <S.PokemonsContainer>
        {/* Implementar um skeleton no futuro */}
        {Object.keys(pokemonData).map(
          (pokemonId) =>
            pokemonData[pokemonId].name.includes(filter) &&
            getPokemonCard(pokemonId)
        )}
      </S.PokemonsContainer>
    </S.PokedexContainer>
  );
};

export default Pokedex;
