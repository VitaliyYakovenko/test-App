import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = `https://6454e366f803f34576340089.mockapi.io`;

export const addFollowers = createAsyncThunk(
    'add/updateFollowers',
    async function ({id}, { rejectWithValue }) {
        try {
            
            const resp = await fetch(`${BASE_URL}/user/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ follow: true, followers: 100501}), 
            }) 

            if (!resp.ok) throw new Error("not Found");

            const data = await resp.json();
            return data;
        }        
        catch (error) {
            rejectWithValue(error.message)
        }
      }
  );
