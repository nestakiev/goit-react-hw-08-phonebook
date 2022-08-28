import styled from "styled-components";
import { AiFillPhone, AiFillIdcard } from "react-icons/ai";


export const P = styled.p`
    display: flex;
    align-items: center;
    margin: 0;
    padding-left: 15px;
`;

export const Li = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    background-color: #00000016;
    border: 1px solid black;
    border-radius: 20px;
    padding: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PhoneIcon = styled(AiFillPhone)`
  fill: #b8d1ce;
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const UserIcon = styled(AiFillIdcard)`
  fill: #b8d1ce;
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;
