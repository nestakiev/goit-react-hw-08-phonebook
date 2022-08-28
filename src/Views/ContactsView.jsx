import { Container, ContactsContainer, Title } from "./ContactsView.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

const ContactsView = () => {
    return (
    <Container>
      <ContactForm/>
      <ContactsContainer>
      <Title>Contacts</Title>
      <Filter/>
      <ContactList/>
      </ContactsContainer>
    </Container>
    );
};

export default ContactsView;