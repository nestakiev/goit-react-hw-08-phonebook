import styled from "styled-components";

export const HeaderContainer = styled.nav`
min-width: 420px;
height: 60px;
background-color: #000;
`;

export const MainContainer = styled.main`
  background-color: #0bc9cc;
  min-width: 420px;
  min-height: calc(100vh - 160px);
  position: relative;
`;

export const FooterContainer = styled.footer`
    min-width: 420px;
    height: 100px;
    background-color: #000;
`;

export const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:#b8d1ce;
  text-align: center;
  font-size: 30px;
  @media screen and (max-width: 420px) {
    font-size: 24px;
  }
`;