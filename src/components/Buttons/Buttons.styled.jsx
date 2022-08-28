import styled from "styled-components";

export const Button = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    background-color: #b8d1ce;
    padding: 10px 25px;
    border-radius: 15px;
    outline: none;
    border: 1px solid #1b9395;
    display: block;
    margin: 0 auto;

    transition: 250ms linear all;


    &:hover, :focus {
        background-color: #1b9395;
        color: #b8d1ce;
        border: 1px solid #b8d1ce;

    }
`;


export const ContactButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    background-color: #b8d1ce;
    padding: 5px 10px;
    border-radius: 15px;
    outline: none;
    border: 1px solid #1b9395;

    transition: 250ms linear all;


    &:hover, :focus {
        background-color: #1b9395;
        color: #b8d1ce;
        border: 1px solid #b8d1ce;

    }

    &:first-child{
        margin-bottom: 5px;
    }
`;