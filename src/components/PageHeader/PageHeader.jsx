import { NavItem, NavList, NavContainer, NavListItem } from "./PageHeader.styled";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthMenu } from "components/AuthMenu/AuthMenu";
import { useSelector } from "react-redux";
export const PageHeader = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
    <NavContainer>
        <NavList>
            <NavListItem>
                <NavItem to='/'>Home</NavItem>
            </NavListItem>
    {isLoggedIn && <NavListItem>
                <NavItem to='contacts'>Contacts</NavItem>
            </NavListItem>}
        </NavList>
    {isLoggedIn ? <UserMenu/> : <AuthMenu/>}
    </NavContainer>
    )
};