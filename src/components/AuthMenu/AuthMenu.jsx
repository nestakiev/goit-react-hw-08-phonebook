import { NavItem, NavList, NavListItem } from "./AuthMenu.styled";


export const AuthMenu = () => {

    return (
        <NavList>
            <NavListItem>
                <NavItem to='register'>SingUp</NavItem>
            </NavListItem>
            <NavListItem>
                <NavItem to='login'>Login</NavItem>
            </NavListItem>
        </NavList>
    )
}