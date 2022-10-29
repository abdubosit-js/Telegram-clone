import { createSlice } from "@reduxjs/toolkit";
import { deleted, fetchMessages, messages, signin, signup } from "./actions";

const initialState = {
    message: [],
    auth: Boolean(localStorage.getItem('token')),
    username: localStorage.getItem("username"),
    token: localStorage.getItem('token'),
}

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        logout: (state, action) => {
            localStorage.removeItem("token")
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchMessages.fulfilled, (state, actions) => {
            state.message = actions.payload
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

        builder.addCase(messages.fulfilled, (state, action) => {
            
        })

        builder.addCase(deleted.fulfilled, (state, action) => {
            
        })
    }
})

export const { logout } = mainSlice.actions

export default mainSlice.reducer