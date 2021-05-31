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
  background: ${(props) => props.bg};
  /* background: linear-gradient(180deg, #732119 42.19%, #d93e30 100%); */
  width: 1000px;
  height: 435px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`;

export const GoBackButton = styled("button")(
  css({
    width: "38px",
    height: "38px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
    alignItems: "center",
    borderRadius: "100%",
    marginRight: "450px",
    outline: "none",

    img: {
      width: "38px",
      height: "38px",
      cursor: "pointer",
    },
  })
);

export const LeftSideModal = styled("div")(
  css({
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    // background: "#212121",
    // backgroundImage: "linear-gradient(270deg, #B33327 0.15%, #D93E30 100%)",
    borderRadius: "8px 0px 0px 8px",
    // boxShadow: "4px 4px 8px rgba(1, 28, 64, 0.2)",
    img: {
      position: "fixed",
    },
  })
);

export const RightSideModal = styled("div")(
  css({
    margin: "0 0 0 20px",
    width: "50%",
    height: "100%",
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    borderRadius: "0px 8px 8px 0px",
    // boxShadow: "4px 4px 8px rgba(1, 28, 64, 0.2)",
  })
);

export const TitleContainer = styled("div")(
  css({
    display: "flex",
    flexDirection: "row",
  })
);

export const PokemonName = styled("h1")(
  css({
    fontFamily: "Karla",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "42px",
    color: "#FDFDFD",
    textShadow: "4px 4px 4px rgba(33, 33, 33, 0.1)",
  })
);

export const PokemonIdCircle = styled("div")(
  css({
    width: "41px",
    height: "41px",
    backgroundColor: "#F2CB07",
    borderRadius: "50%",
    margin: "20px 0px 0 400px ",
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
    h1: {
      fontFamily: "Karla",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#00000",
      paddingLeft: "10px",
    },
  })
);

export const WhiteBoxContainer = styled("div")(
  css({
    display: "flex",
    flexDirection: "row",
    minHeight: "60px",
    minWidth: "250px",
    borderRadius: "8px",
    background: "#FDFDFD",
    boxShadow: "4px 4px 4px rgba(33, 33, 33, 0.1)",
    alignItems: "center",
    padding: "7px 0px",
    paddingLeft: "30px",
    marginBottom: "25px",
  }),
  ({ isProgress }) =>
    isProgress &&
    css({
      padding: "15px 0px",
      paddingLeft: "30px",
    }),
  ({ isPower }) =>
    isPower &&
    css({
      flexDirection: "column",
      minHeight: "69px",
      minWidth: "95px",
      marginRight: "20px",
      marginTop: "10px",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: "0px",
    })
);

export const PokemonData = styled("label")(
  css({
    display: "flex",
    fontFamily: "Karla",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#00000",
  }),
  ({ isSubtitle }) =>
    isSubtitle &&
    css({
      marginBottom: "5px",
      fontWeight: "600",
    })
);

export const PokemonSubdataContainers = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    marginRight: "30px",
  }),
  ({ isPower }) =>
    isPower &&
    css({
      flexDirection: "row",
    })
);

export const PokemonDescription = styled("div")(
  css({
    display: "flex",
    flexDirection: "row",
  }),
  ({ isTypeData }) =>
    isTypeData &&
    css({
      margin: "350px 0px 0px 300px",
    })
);

export const ProgressPower = styled("div")(
  css({
    marginTop: "5px",
    display: "flex",
    minWidth: "140px",
    minHeight: "5px",
    borderRadius: "8px",
    background: "linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)",
  }),
  ({ isExperience }) =>
    isExperience &&
    css({
      background: "linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)",
      minWidth: "120px",
    })
);

export const PowerLevel = styled("div")(
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
    borderRadius: "40px",
    marginBottom: "7px",
  })
);
