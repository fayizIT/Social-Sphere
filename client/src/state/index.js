import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    mode: "light",
    user: null,
    toke: null,
    posts: [],
};


export const authSlice = createSlice({
    name: "auth",
    initialState,
    
})