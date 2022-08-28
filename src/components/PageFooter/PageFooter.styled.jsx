import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


export const Container = styled.nav`
    color: #b8d1ce;
    min-width: 340px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px;
    background-color: #000;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #b8d1ce;
  font-weight: 700;
  transition: 250ms linear all;

  &:hover {
        color: #1b9395;
    }
`;

export const Title = styled.h4`
  margin: 0;
  text-align: center;
`;

export const P = styled.p`
    margin: 0px;
    margin-top: 10px;

    @media screen and (max-width: 600px) {
        display: none;
    };
`;

export const GitIcon = styled(AiFillGithub)`
    width: 30px;
    height: 30px;
    fill: #b8d1ce;
    transition: 250ms linear all;

    &:hover {
        fill: #1b9395;
    }
`;

export const LinkedInIcon = styled(AiFillLinkedin)`
    width: 30px;
    height: 30px;
    fill: #b8d1ce;
    transition: 250ms linear all;

    &:hover {
        fill: #1b9395;
    }
`;
