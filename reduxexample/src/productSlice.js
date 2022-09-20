import {createSlice} from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:"product",
    initialState:{
          cart:[],
          product:  []
                },
    reducers:{

        product : (state, action )=>{
                        console.log("inside product", action)
                        state.product=action.payload;
                        return state
                    },
       addToCart:(state, action )=>{
            console.log(action)
            
            let arr= [...state.cart]
            arr.push(action.payload);
            return {...state,cart : arr};
           
       }

    }
})




export const {product, addToCart} = productSlice.actions;

export default productSlice.reducer;