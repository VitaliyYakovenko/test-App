import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = `https://6454e366f803f34576340089.mockapi.io`;


export const removeFollowers = createAsyncThunk(
    'remove/updateFollowers',
    async function ({ id }, { rejectWithValue }) {
        try {
            const resp = await fetch(`${BASE_URL}/user/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ follow: false, followers: 100500 }), 
            }) 

            if (!resp.ok) throw new Error("not Found");

            const data = await resp.json();
            return data;

        } catch (error) {
             rejectWithValue(error.message)
        }
        
    }

)
