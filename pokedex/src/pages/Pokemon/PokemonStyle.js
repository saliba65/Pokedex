import styled from "styled-components";
import css from "@styled-system/css";
import "../../index.css";

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
