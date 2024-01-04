import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const testApi = createAsyncThunk(
    'testApi',
    async (id)=> {
        const res = await axios.get(`https://products-b96cc-default-rtdb.firebaseio.com/products/${id}.json`);
        return res.data
    }
)

const initialState = {
    loading : false,
    error : false,
    viewProducts : {}
}

const productsSlice = createSlice({
    name : 'productsSlice',
    initialState,
    reducers : {
    },
    extraReducers :(builder) =>{
        builder.addCase(testApi.pending, (state)=>{
            state.loading = true
        })
        .addCase(testApi.rejected,(state)=>{
            state.error = true
        })
        .addCase(testApi.fulfilled,(state,actions)=>{
            state.viewProducts = actions.payload
            state.loading = false
        })
    }

})

export {productsSlice}