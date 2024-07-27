import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            const item = action.payload;
            
        }
    }
})