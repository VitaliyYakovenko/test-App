import { createSlice } from "@reduxjs/toolkit";
import { fetchFollowers } from "../mockAPI/getFollowers";

export const getFollowers = createSlice({
    name: "followers",
    initialState: {
        items: [],
        isLoading: false,
    },
    extraReducers: {
        [fetchFollowers.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchFollowers.fulfilled]: (state, action) => {
            state.items.push(...action.payload);
            state.isLoading = false;
        }
    }
});


