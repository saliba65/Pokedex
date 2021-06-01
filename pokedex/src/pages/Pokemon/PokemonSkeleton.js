import React from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import Skeleton from "react-loading-skeleton";

export const PokemonContainer = styled("div")(
  css({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",

    marginRight: "30px",
    marginLeft: "30px",
    marginBottom: "20px",
  })
);

export const Container = styled("div")(
  css({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

export const SubContainer = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
  })
);

export const ModalContainer = styled.div`
  width: 1000px;
  height: 435px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  background-color: #dcdcdc;
  padding-left: 40px;
`;

const SkeletonPokemon = () => (
  <Container>
    <ModalContainer>
      <Skeleton duration={0.8} height={380} width={400} />
      <SubContainer>
        <PokemonContainer>
          <Skeleton duration={0.8} height={80} width={350} />
        </PokemonContainer>
        <PokemonContainer>
          <Skeleton duration={0.8} height={100} width={500} />
        </PokemonContainer>
        <PokemonContainer>
          <Skeleton duration={0.8} height={60} width={300} />
        </PokemonContainer>
        <PokemonContainer>
          <Skeleton duration={0.8} height={60} width={300} />
        </PokemonContainer>
      </SubContainer>
    </ModalContainer>
  </Container>
);

export default SkeletonPokemon;
