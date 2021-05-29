import styled from "styled-components";
import css from "@styled-system/css";
import "../../index.css";

export const ContainerPokemon = styled.div`
  background: url(${(props) => props.bg}) no-repeat center center fixed;
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ContainerModal = styled.div`
  /* background: ${(props) => props.bg}; */
  background: linear-gradient(180deg, #732119 42.19%, #d93e30 100%);
  width: 800px;
  height: 375px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`;

export const LeftSideModal = styled("div")(
  css({
    minWidth: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(270deg, #B33327 0.15%, #D93E30 100%)",
    borderRadius: "8px 0px 0px 8px",
    boxShadow: "4px 4px 8px rgba(1, 28, 64, 0.2)",
  })
);

export const RightSideModal = styled("div")(
  css({
    minWidth: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    borderRadius: "0px 8px 8px 0px",
    boxShadow: "4px 4px 8px rgba(1, 28, 64, 0.2)",
  })
);

export const PokemonName = styled("h1")(
  css({
    fontFamily: "Karla",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "42px",
    color: "#212121",
    textShadow: "4px 4px 4px rgba(33, 33, 33, 0.1)",
  })
);

export const PokemonDescription = styled("div")(
  css({
    display: "flex",
    flexDirection: "row",
    h2: {
      fontFamily: "Karla",
      fontSize: "24px",
      lineHeight: "30px",
      color: "#212121",
      marginRight: "10px",
    },
    h3: {
      fontFamily: "Karla",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#212121",
    },
  })
);
