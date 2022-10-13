import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormWrapper, Label, InputForm } from "./EditContactForm.styled";
import { useEditContactMutation, useGetContactsQuery } from "redux/contactsAPI";
import { toast } from 'react-toastify';
import { Btn } from "components/Buttons/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { getIdforEditModal, setIdforEditModal } from "redux/modalSlice";

const schema = Yup.object().shape({
    name: Yup.string().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`).required(),
    phone: Yup.string().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required(),
});

export const EditContactForm = () => {
    const dispatch = useDispatch();
    const id = useSelector(getIdforEditModal);
    const {data: contacts} = useGetContactsQuery();
    const [editContact] = useEditContactMutation();
    const contactToEdit = contacts.find(a => a._id === id);

    const initialValues = {
        name: contactToEdit.name,
        phone: contactToEdit.phone,
    };

    const handleSubmit = async (data, {resetForm}) => {
        const updatedContact = [id,data];
        await editContact(updatedContact);
        toast.success(`${data.name} edited successfully`);
        await dispatch(setIdforEditModal(''));
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
                <Label htmlFor="phone"> Number</Label>
                    <InputForm type='tel' name="phone"/>
                    <ErrorMessage name='phone' component='div' />
                <Btn type="submit" text='Confirm edit'/>
            </FormWrapper>
        </Formik>
    )
}