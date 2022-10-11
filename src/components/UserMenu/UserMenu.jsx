import { useSelector } from "react-redux";
import { authAPI } from "redux/authAPI";
import { Container, UserInfo } from "./UserMenu.styled";
import { useDispatch } from "react-redux";
import { Btn } from "components/Buttons/Buttons";

export const UserMenu = () => {
    const email = useSelector(state => state.auth?.user?.email);
    const dispatch = useDispatch();
    
    return (
        <Container>
        {email && <UserInfo>{email}</UserInfo>}
        <Btn type='button' onClick={() => dispatch(authAPI.logOut())} text="Logout"/>
        </Container>
    )
};