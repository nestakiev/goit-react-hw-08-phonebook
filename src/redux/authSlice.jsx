import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from './authAPI';

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshUser: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:{
        [authAPI.singUp.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authAPI.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authAPI.logOut.fulfilled](state) {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        },
        [authAPI.fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshUser = false;
        },
        [authAPI.fetchCurrentUser.pending](state) {
            state.isRefreshUser = true;
        },
        [authAPI.fetchCurrentUser.rejected](state) {
            state.isRefreshUser = false;
        },
    }
});

