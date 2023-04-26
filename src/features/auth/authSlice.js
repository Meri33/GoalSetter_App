import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
// create the initialstate
const initialState ={
    user: user ? user :null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:"",
};


// create suthSlice

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset:(state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.message ="";
        }
    },
    extraReducers:() => {},
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;

