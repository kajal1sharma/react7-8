import { configureStore } from "@reduxjs/toolkit";
import  products  from "./productSlice";

const store = configureStore({
    reducer:{
        products:products,

    }
})

export default store;


// import { createStore , combineReducers} from "redux";
// import productInfo from "./productInfoReducer";
// import cart from "./cartReducer";
// const store =createStore(combineReducers({productInfo, cart}))

// export default store