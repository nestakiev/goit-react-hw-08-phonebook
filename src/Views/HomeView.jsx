import { Container, Link, NavItem } from "./HomeView.styled";
import { useSelector } from "react-redux";

const HomeView = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
    <Container>
        <h2>Welcome to the PHONEBOOK</h2>
        {isLoggedIn ? <p>Enjoy this application and check your <NavItem to='/contacts'>contacts</NavItem>.</p> : <p>To access your contacts just <NavItem to='/register'>register</NavItem> or <NavItem to="/login">login</NavItem> with your account.</p>}
        <p> And also you can donate a little bit for our victory and <Link href='https://savelife.in.ua/' target="_blank">MakeOrcsCryAgain</Link></p>
    </Container>
    
    )
}

export default HomeView;
