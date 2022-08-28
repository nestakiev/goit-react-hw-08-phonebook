import styled from "styled-components";
import { Form, Field } from "formik";

export const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    max-height: 200px;
    border: 1px solid black;
    background-color: #00000016;
    border-radius: 20px;
    padding: 15px;
    width: 330px;
`;

export const InputForm = styled(Field)`
    border: none;
    border-bottom: 2px solid black;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 290px;

    padding: 5px 20px;

    margin-bottom: 25px;

    background-color: #0bc9cc;
    transition: 250ms linear all;
    &:focus, :hover {
        background-color: #b8d1ce;
        outline: none;
    }
`;

export const Label = styled.label`
  font-weight: 700;
  color: #b8d1ce; 
`;