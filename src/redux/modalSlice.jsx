import { createSlice } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
    name: 'modal',
    initialState: '',
    reducers: {
        setIdforEditModal (_, action) {
            return action.payload;
        }
    },
});

export const {setIdforEditModal} = modalSlice.actions;
export const getIdforEditModal = state => state.modal;