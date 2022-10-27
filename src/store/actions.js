import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api"

export const fetchMessages = createAsyncThunk("main/fetchMessages",
    async () => await api.fetchMessages()
)

export const signup = createAsyncThunk("main/signup", 
    async (data) => await api.signup(data)
)

export const signin = createAsyncThunk("main/signin",
    async (data) => await api.signin(data)
)

export const messages = createAsyncThunk("main/messages", 
    async (data) => await api.messages(data)
)

export const deleted = createAsyncThunk("main/deleted", 
    async (id) => await api.deleted(id)
)