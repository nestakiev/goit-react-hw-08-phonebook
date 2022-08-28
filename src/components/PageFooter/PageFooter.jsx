import {Container, Link, Title, P, GitIcon, LinkedInIcon} from "./PageFooter.styled";


export const PageFooter = () => {
    return (
    <Container>
        <div>
        <Link href='https://github.com/nestakiev' target="_blank"><GitIcon/></Link>
        <Link href='https://www.linkedin.com/in/vadym-storchovyi/' target="_blank"><LinkedInIcon/></Link>
            
        </div>
        <div>
        <Title>PHONEBOOK</Title>
        <P>created by Vadym Storchovyi 2022</P>
        </div>
        <Link href='https://savelife.in.ua/' target="_blank">MakeOrcsCryAgain</Link>
    </Container>)
};