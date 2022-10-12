import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


axios.defaults.baseURL = "https://phonebook-backend-nodejs.herokuapp.com/api";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
}


const singUp = createAsyncThunk('/auth/signup', async credentials => {
    try {
        const { data } = await axios.post('/users/register', credentials);
        token.set(data.token);
        toast.success(`${data.user.name} successfully register. Enjoy!`)
        return data;
    } catch (error) {
        toast.error(`User with this email already existing. Please, login`)
        console.log(error)
    }
});

const logIn = createAsyncThunk('/auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        toast.success(`${data.user.name} successfully login. Enjoy!`)
        return data;
    } catch (error) {
        toast.error(`Somethings wrong. Please check your email and password`)
        console.log(error)
    }
});

const logOut = createAsyncThunk('/auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        toast.success(`Logout successfully. Comeback soon!`)
        token.unset();
    } catch (error) {
        console.log(error)
    }
});

const fetchCurrentUser = createAsyncThunk('/auth/current', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    
    if(!persistedToken) {
        return thunkAPI.rejectWithValue({name: null, email: null});
    };

    token.set(persistedToken);

    try {
        const {data} = await axios.get('/users/current');
        return data;
    } catch (error) {
        console.log(error)
    }
});

export const authAPI = {
    singUp,
    logIn,
    logOut,
    fetchCurrentUser
};

