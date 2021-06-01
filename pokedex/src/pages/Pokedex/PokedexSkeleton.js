import React from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import Skeleton from "react-loading-skeleton";

export const PokedexContainer = styled("div")(
  css({
    width: "100%",
    height: "100%",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: "30px",
    marginLeft: "30px",
  })
);

export const Container = styled("div")(
  css({
    width: "100%",
    height: "100%",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "30px",
  })
);

const SkeletonPokedex = () => (
  <Container>
    <Skeleton duration={0.8} height={100} width={120} />
    <PokedexContainer>
      <Skeleton duration={0.8} height={18} width={150} count={3} />
    </PokedexContainer>
  </Container>
);

export default SkeletonPokedex;
