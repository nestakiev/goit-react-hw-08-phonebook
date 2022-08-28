import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormWrapper, Label, InputForm } from "./RegisterForm.styled";
import { authAPI } from "redux/authAPI";
import { useDispatch } from "react-redux";
import { Btn } from "components/Buttons/Buttons";


const schema = Yup.object().shape({
    name: Yup.string().min(3, `Name must be at least 3 characters`).required(),
    email: Yup.string().email(`Please, enter correct email address`).required(),
    password: Yup.string().min(6, `Password must be at least 6 characters`).required(),
});

export const RegisterForm = () => {
    const dispath = useDispatch();
    
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };
    
    const handleSubmit = async (data, {resetForm}) => {
        dispath(authAPI.singUp(data))
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
                <Label htmlFor="email"> Email</Label>
                    <InputForm type='email' name="email"/>
                    <ErrorMessage name='email' component='div' />
                <Label htmlFor="password"> Password</Label>
                    <InputForm type='password' name="password"/>
                    <ErrorMessage name='password' component='div' />
                    <Btn type="submit" text='SignUp'/>
            </FormWrapper>
        </Formik>
    )
}