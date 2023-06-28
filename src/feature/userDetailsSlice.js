import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//create action
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

    try {
        const res = await axios.post("https://649c1b910480757192377721.mockapi.io/crud", data)
        return res;
    } catch (error) {
        return rejectWithValue(error)
    }
});

//read action 
export const readUser = createAsyncThunk("readUser", async (args, { rejectWithValue }) => {
    try {
        const res = await fetch("https://649c1b910480757192377721.mockapi.io/crud")
        const result = await res.json();
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})
//delete user
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    try {
        const res = await axios.delete(`https://649c1b910480757192377721.mockapi.io/crud/${id}`)
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})
//update user
export const updateUser = createAsyncThunk("deleteUser", async (data, { rejectWithValue }) => {
    try {
        const res = await axios.put(`https://649c1b910480757192377721.mockapi.io/crud/${data.id}`, data)
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchUser: [],
    },
    reducers: {
        searchUser: (state, action) => {
            state.searchUser = action.payload;
        }
    },
    extraReducers: {
        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message

        },
        [readUser.pending]: (state) => {
            state.loading = true;
        },
        [readUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [readUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload

        },
        [deleteUser.pending]: (state) => {
            state.loading = true;
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
                state.users = state.users.filter((ele) => ele.id !== id)
            }
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload

        },
        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = state.users.map((ele) =>
                ele.id === action.payload.id ? action.payload : ele
            );
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    }

})

export default userDetail.reducer;
export const { searchUser } = userDetail.actions;