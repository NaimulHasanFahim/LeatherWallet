import { createSlice } from "@reduxjs/toolkit";


const transactionSlice = createSlice({
    name:"transaction",
    initialState:{
        alltransaction: {},
    },
    reducers : {
        addTransaction : (state, action)=>{
            state.alltransaction = action.payload;
        },
        clearTransaction : (state) =>{
            state.alltransaction = {};
        }
    },
});

export const {addTransaction, cleartransaction} = transactionSlice.actions;
export default transactionSlice.reducer;