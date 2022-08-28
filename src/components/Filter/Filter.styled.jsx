import styled from "styled-components";

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FilterInput = styled.input`
    border: none;
    border-bottom: 2px solid black;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 290px;

    padding: 5px 20px;

    margin-bottom: 25px;

    background-color: #1b9395;
    transition: 250ms linear all;
    &:focus, :hover {
        background-color: #b8d1ce;
        outline: none;
    }
`;
