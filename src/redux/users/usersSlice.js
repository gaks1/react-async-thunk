import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: false,
    error: undefined,
}

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        console.log(data)
        return data.results;
    }
);


export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        [fetchUsers.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    },


})

export default usersSlice.reducer;