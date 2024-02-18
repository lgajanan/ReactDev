import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'state',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action) => {
            //Mutating the state here
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length = 0;
        }
    }
})

export const {addItems,removeItem,clearCart} = cartSlice.actions;  
export default cartSlice.reducer;