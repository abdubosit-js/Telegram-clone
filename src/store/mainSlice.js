import { createSlice } from "@reduxjs/toolkit";
import { fetchMessages, signin, signup } from "./actions";

const initialState = {
    messages: [],
    auth: Boolean(localStorage.getItem('token')),
    username: localStorage.getItem("username"),
    token: localStorage.getItem('token')
}

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.fulfilled, (state, actions) => {
            state.messages = actions.payload
        });

        builder.addCase(signup.fulfilled, (state, actions) => {
            
        })

        builder.addCase(signin.fulfilled, (state, actions) => {

        })
    }
})