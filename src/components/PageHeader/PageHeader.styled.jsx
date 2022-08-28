import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
    color: #b8d1ce;
    text-decoration: none;
    display: inline-block;
    transition: 250ms linear all;

    &.active {
        color: #0bc9cc;
    };

    &:hover {
        color: #1b9395;
    };
`;

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    font-weight: 700;
    margin: 0px;
    padding: 0px;
`;

export const NavListItem = styled.li`
    margin-right: 20px;
    display: flex;
    justify-content: center;
`;

export const NavContainer = styled.nav`
    min-width: 340px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px;
    background-color: #000;
`;

