import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    @media screen and (max-width: 420px) {
        display: block;
        width: 360px;
        margin: 0 auto; 
    }

    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
        margin: 0 auto; 
    }
`;

export const ContactsContainer = styled.div`
    margin-left: 40px;
    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`;

export const Title = styled.h3`
  margin: 0 0 15px;
`;