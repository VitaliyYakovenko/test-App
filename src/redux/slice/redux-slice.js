import { createSlice } from "@reduxjs/toolkit";
import { fetchFollowers } from "../mockAPI/getFollowers";
import { addFollowers } from "../mockAPI/addFollowers";
import { removeFollowers } from "../mockAPI/removeFollowers";

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
        },
        [addFollowers.fulfilled]: (state, action) => {
            const indexEl = state.items.findIndex(item => item.id === action.payload.id);   
            state.items.filter((item, index) => index === indexEl ? item.follow = true : null);
            state.items.filter((item, index) => index === indexEl ? item.followers = 100501 : null);
        },
        [removeFollowers.fulfilled]: (state, action) => {
            const indexEl = state.items.findIndex(item => item.id === action.payload.id);
            state.items.filter((item, index) => index === indexEl ? item.follow = false : null);
            state.items.filter((item, index) => index === indexEl ? item.followers = 100500 : null);
        }
    }
});


