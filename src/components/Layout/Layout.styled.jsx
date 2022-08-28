import styled from "styled-components";

export const Main = styled.main`
  background-color: #0bc9cc;
  min-width: 340px;
  min-height: calc(100vh - 240px);
  padding: 40px 40px;

  @media screen and (max-width: 420px) {
    padding: 40px 10px;
  }

  position: relative;
`;