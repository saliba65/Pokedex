import styled from "styled-components";

export const Container = styled.div`
  background: url(${(props) => props.bg}) no-repeat center center fixed;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;

  min-width: 100%;
  min-height: 100%;
  padding: 0 10px;

  @media (min-width: 500px) {
    padding: 0 42px;
  }
  @media (min-width: 1024px) {
    padding: 0px 115px;
  }
  display: flex;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 400px;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 100%;
  margin-right: 30px;
`;

export const Title = styled.img`
  width: 100px;
  height: 100%;
`;

export const InputContainer = styled.div`
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  border-radius: 4px;
  margin-bottom: ${(props) => (props.hasMensage ? "0px" : "16px")};
  padding: 8px 16px;
  max-width: 320px;
  flex-direction: row;
  align-items: center;
  display: flex;

  @media (min-width: 500px) {
    max-width: 368px;
  }
`;

export const InsideInputContainer = styled.div`
  width: ${(props) => (props.hasInput ? "75%" : "100%")};
  padding-right: ${(props) => (props.hasInput ? "8px" : "0")};
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  position: fixed;
`;

export const ContentVetor = styled.div`
  margin-left: 20px;
  width: 16px;
  height: 8px;
  line-height: 1;
`;

export const Vetor = styled.img`
  position: absolute;
`;

export const BackgroundError = styled.div`
  width: 239px;
  height: 48px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 4px;
  align-items: center;
  display: flex;
`;

export const ErrorLabel = styled.label`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: black;
  opacity: 80%;
  margin-left: 10px;
`;
