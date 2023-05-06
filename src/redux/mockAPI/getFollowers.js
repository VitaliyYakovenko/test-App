import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchFollowers = createAsyncThunk(
    'items/fetchFollowers', 
    async function (page ,{rejectWithValue}) {
        try {
            const url = new URL(`https://6454e366f803f34576340089.mockapi.io/user`);    
            url.searchParams.append('page', page)
            url.searchParams.append('limit', 3);
            const resp = await fetch(url)

            if (!resp.ok) throw new Error("not Found")
            const data = await resp.json();
            return data;
           
         } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)




