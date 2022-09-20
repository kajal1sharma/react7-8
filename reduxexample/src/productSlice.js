import {createSlice} from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:"product",
    initialState:{
          cart:[],
          product:  [{id:1,name:"Abc",url:"",Author:"abc", price:"100"},
                    {id:2, name:"def",url:"",Author:"abc", price:"200"},
                    {id:3,name:"ghi",url:"",Author:"bcd", price:"300"},
                    {id:4,name:"jkl",url:"",Author:"pqr", price:"400"},
                    {id:5,name:"mno",url:"",Author:"pqr", price:"500"}]
                },
    reducers:{

        product : (state, action )=>{
                        return state;
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