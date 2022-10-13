import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { useGetContactsQuery } from "redux/contactsAPI";
import { useSelector } from "react-redux";
import { getFilter } from "redux/filterSlice";
import { Ul } from "./ContactList.styled";

export const ContactList = () => {
    const {data, isFetching, error} = useGetContactsQuery();
    const filter = useSelector(getFilter);
    const getFiltredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return data?.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    };

    const filteredContacts = getFiltredContacts();

    const isAnyContactsToShow = filteredContacts?.length > 0;
    const isNoMatches = filteredContacts?.length === 0;
    
    return (
    <>
    {isFetching && (<p>Loading your contacts, please wait</p>)}
    {error && (<p>Sorry, something went wrong. Please refresh page</p>)}
    {isAnyContactsToShow &&
        <Ul>
            { filteredContacts.map( contact => { 
            const {_id, name, phone} = contact;
            return <ContactListItem key={_id} id={_id} name={name} phone={phone}/>;})
            }
        </Ul>}
    {isNoMatches && <p>You dont have any contacts or matches</p>}
    </>
    );

};


