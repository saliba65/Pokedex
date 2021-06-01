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
    overflowY: "auto",
    overflowX: "hidden",
  })
);

export const PokedexHeader = styled("div")(
  css({
    width: "100vw",
    height: "93px",
    backgroundImage:
      "radial-gradient(circle at -7.92% 90.56%, #b2eaff 0, #5389f2 50%, #003265 100%)",
    boxShadow: "0px 4px 16px rgba(1, 28, 64, 0.2)",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10%",

    img: {
      width: "160px",
      height: "100%",
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
    width: "95%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    "@media (max-width: 500px)": {
      width: "100%",
      justifyContent: "flex-start",
      padding: "30px 0px",
    },
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
    "@media (max-width: 500px)": {
      marginLeft: "20px",
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

export const PokemonsContainer = styled("div")(
  css({
    width: "95%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    overflow: "scroll",
    marginTop: "10px",
    "::-webkit-scrollbar": {
      width: "0px",
    },
    "@media (max-width: 500px)": {
      width: "100%",
      justifyContent: "flex-start",
    },
  })
);

export const PokemonsCard = styled("div")(
  css({
    maxWidth: "100%",
    width: "350px",
    height: "140px",
    display: "flex",
    flexDirection: "row",
    margin: "0px 5px 30px 45px",
    backgroundColor: "#F6F7F9",
    borderRadius: "8px",
    "@media (max-width: 500px)": {
      width: "250px",
      margin: "0px 0px 30px 0px",
    },
    ":hover": {
      boxShadow: "0px 5px 20px rgba(1, 28, 64, 0.2)",
      cursor: "pointer",
    },
  })
);

export const PokemonsInfo = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "10px 15px 0px 15px",
  })
);

export const PokemonsName = styled("a")(
  css({
    fontFamily: "Karla",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "21px",
    marginBottom: "18px",
    marginRight: "40px",
    color: "#212121",
    textShadow: "4px 4px 4px rgba(33, 33, 33, 0.1)",
  })
);

export const PokemonsDataContainer = styled("div")(
  css({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: "7px",
  })
);

export const PokemonsDataCircle = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "35px",
    height: "35px",
    border: "3px solid #212121",
    boxSizing: "border-box",
    fontFamily: "Karla",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "18px",
    padding: "7px",
    marginRight: "7px",
    marginLeft: "10px",
    borderRadius: "40px",
  })
);

export const PokemonsDataSubTitle = styled("a")(
  css({
    fontFamily: "Karla",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#4B4B4B",
    padding: "0px 7px",
  })
);

export const PokemonsDataType = styled("div")(
  css({
    height: "15px",
    boxShadow: "inset 0px -2px 0px rgba(0, 0, 0, 0.18)",
    borderRadius: "11px",
    alignItems: "center",
    justifyContent: "center",
    padding: "3px 10px",
    fontFamily: "Karla",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#4B4B4B",
    marginLeft: "5px",
  }),
  ({ isSecondaryType }) =>
    isSecondaryType
      ? css({
          backgroundColor: "#73D677",
        })
      : css({
          backgroundColor: "#07D6F2",
        })
);

export const PokemonsImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 0px 8px 8px 0px;
  padding-left: 30px;
  padding-right: 15px;
  background: ${(props) => props.bg};

  img {
    max-width: 170px;
    max-height: 100%;
    object-fit: fill;
  }
`;
