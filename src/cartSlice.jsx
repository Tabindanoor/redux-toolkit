import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'mycart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            const item = action.payload;
            const existingItem = state.items.find(i=> i.id === item.id)
            if(existingItem)
            {
                existingItem.quantity += 1;
            }
            else {
                state.items.push({...item,quantity:1})
            }
        },
        removeItem:(state,action)=>{
            const id = action.payload;
            const existingItem=state.items.find(i=>i.id === id);
            if(existingItem){
                state.items = state.items.filter(i=>i.id !== id)
            }else{
                existingItem.quantity -=1;
            }
        },
        incrementQuantity:(state,action)=>{
            const id = action.payload;
            const existingItem = state.items.find(i=>i.id=== id)
            if(existingItem){
                existingItem.quantity += 1;
            }
            
        }
        ,
        decrementQuantity:(state,action)=>{
            const id = action.payload;
            const existingItem = state.items.find(i=>i.id === id )
            if(existingItem && existingItem.quantity  >0){
                existingItem.quantity -=1;
            }
        }
    }
})

export const {addItem, removeItem, incrementQuantity, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer