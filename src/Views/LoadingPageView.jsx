import { HeaderContainer, MainContainer, FooterContainer, Div } from "./LoadingPageView.styled"

export const LoadingPageView = () => {

    return (
        <>
        <HeaderContainer/>
        <MainContainer>
            <Div>
            <h1>PHONEBOOK</h1>
            <h2>loading...</h2>
            </Div>
        </MainContainer>
        <FooterContainer/>
        </>
    )
};

