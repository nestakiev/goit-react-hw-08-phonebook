import PropTypes from "prop-types";
import { P, Li, ButtonsContainer, PhoneIcon, UserIcon } from "./ContactListItem.styled";
import { useDeleteContactMutation } from "redux/contactsAPI";
import { toast } from 'react-toastify';
import { ContactBtn } from "components/Buttons/Buttons";
import { useDispatch } from "react-redux";
import { setIdforEditModal } from "redux/modalSlice";

export const ContactListItem = ({id, name, number}) => {
    const [deleteContact, {isLoading, isSuccess}] = useDeleteContactMutation();
    const dispatch = useDispatch();
    if(isSuccess) {
        toast.success(`${name} delete from contacts successfully`)
    };
    
    return (
    <Li>
        <div>
        <P><UserIcon/>{name}</P>
        <P><PhoneIcon/>{number}</P>
        </div>

        <ButtonsContainer>
        <ContactBtn onClick={() => deleteContact(id)} disabled={isLoading} text="Delete"/>
        <ContactBtn onClick={() => dispatch(setIdforEditModal(id))} text="Edit"/>
        </ButtonsContainer> 
    </Li>
    )

};

ContactListItem.propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.node.isRequired,
    };
