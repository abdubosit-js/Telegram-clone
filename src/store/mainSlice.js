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

        builder.addCase(signup.fulfilled, (state, action) => {
            
        })

        builder.addCase(signin.fulfilled, (state, action) => {
            state.auth = true
            state.username = action.payload.username
            state.token = action.payload.token
            
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("username", action.payload.username)
        })
    }
})

export default mainSlice.reducer