import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormWrapper, Label, InputForm } from "./ContactForm.styled";
import { useAddContactMutation, useGetContactsQuery } from "redux/contactsAPI";
import { toast } from 'react-toastify';
import { Btn } from "components/Buttons/Buttons";


const schema = Yup.object().shape({
    name: Yup.string().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`).required(),
    phone: Yup.string().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required(),
});

export const ContactForm = () => {
    const [addContact, {isLoading}] = useAddContactMutation();
    const {data: contacts} = useGetContactsQuery();
    const initialValues = {
        name: '',
        phone: '',
    };
    
    const handleSubmit = async (data, {resetForm}) => {
        const isDuplicate = contacts.map(a => a.name).includes(data.name);
        if (isDuplicate) {
        toast.warning(`${data.name} is already in your contacts`)
        return
        };
        
        const response = await addContact(data);
        if(response.data?.name === data.name) {
            toast(`${data.name} added to your contacts successfully`)
        };
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} 
        validationSchema={schema} 
        onSubmit={handleSubmit}> 
        
            <FormWrapper>
                <Label htmlFor="name"> Name</Label>
                    <InputForm type="text" name="name"/>
                    <ErrorMessage name='name' component='div' />
                <Label htmlFor="number"> Number</Label>
                    <InputForm type='tel' name="phone"/>
                    <ErrorMessage name='number' component='div' />
                <Btn type="submit" disabled={isLoading} text='Add contact'/>
            </FormWrapper>
        </Formik>
    )
}
