import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  font-size: 24px;
  text-align: center;
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

export const NavItem = styled(NavLink)`
    color: #b8d1ce;
    text-decoration: none;
    font-weight: 700;
    display: inline-block;
    
    transition: 250ms linear all;

    &.active {
        color: #0bc9cc;
    }

    &:hover {
        color: #1b9395;
    }
`;