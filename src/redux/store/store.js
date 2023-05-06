import { configureStore } from "@reduxjs/toolkit";
import { getFollowers } from "../slice/redux-slice";

export const store = configureStore({
    reducer: {
     follower: getFollowers.reducer,
    }
});