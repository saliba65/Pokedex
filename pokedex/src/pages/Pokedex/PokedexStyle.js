import styled from "styled-components";
import css from "@styled-system/css";
import "../../index.css";

export const PokedexContainer = styled("div")(
  css({
    backgroundImage: "linear-gradient(180deg, #FFFF 30.32%, #F5F5F5 100%)",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  })
);

export const PokedexHeader = styled("div")(
  css({
    width: "100vw",
    height: "93px",
    backgroundColor: "#F5DB13",
    boxShadow: "0px 4px 16px rgba(1, 28, 64, 0.2)",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10%",

    svg: {
      width: "157.17px",
      height: "63px",
    },
  })
);

export const MenuContainer = styled("div")(
  css({
    width: "100%",
    height: "100%",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "@media (max-width: 910px)": {
      display: "none",
    },
  })
);

export const MenuButton = styled("button")(
  css({
    padding: "5px 0px",
    margin: "0 60px 0px 0",
    backgroundColor: "transparent",
    display: "flex",
    border: "none",
    outline: "none",
    fontFamily: "Karla",
    fontWeight: "normal",
    fontSize: "23px",
    lineHeight: "29px",
    color: "#212121",

    ":hover": {
      borderBottom: "3px solid #212121",
      borderWidth: "10%",
    },
  })
);

export const SearchContainer = styled("div")(
  css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
  })
);

export const SearchLabel = styled("div")(
  css({
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    h1: {
      fontFamily: "Karla",
      fontWeight: "600",
      fontSize: "32px",
      lineHeight: "40px",
      letterSpacing: "3px",
      color: "#212121",
    },
    h2: {
      fontFamily: "Karla",
      fontWeight: "normal",
      fontSize: "32px",
      lineHeight: "40px",
      letterSpacing: "3px",
      color: "#212121",
      alignItems: "center",
    },
  })
);

export const SearchInput = styled("input")(
  css({
    backgroundColor: "#F2F2F2",
    maxWidth: "1100px",
    width: "70%",
    height: "50px",
    display: "flex",
    fontSize: "16px",
    lineHeight: "20px",
    marginTop: "10px",
    boxShadow: "0px 4px 16px rgba(1, 28, 64, 0.2)",
    border: "none",
    outline: "none",
    borderRadius: "40px",
    justifyContent: "center",
    paddingLeft: "30px",
  })
);
