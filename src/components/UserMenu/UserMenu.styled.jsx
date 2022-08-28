import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    color: #b8d1ce;
    text-decoration: none;
`;

export const UserInfo = styled.p`
  margin: 0;
  margin-right: 15px;

  @media screen and (max-width: 520px) {
    display: none;
  }
`;