
import { useEffect, useState } from 'react';
import './App.css';
import Product from "./Product"
import store from './store'
import AsyncADDToCart from './AddToCartAsync';
import  {useDispatch, useSelector} from "react-redux";
function App() {
let dispatch =useDispatch();
  //let productList =store.getState().productInfo;
  
  //  store.subscribe(()=>{
  //   console.log(store.getState())
  //  })

let productList =useSelector((state)=>{
                    //console.log(state.products.product);
                    return state.products.product
                })
useEffect(()=>{
  dispatch(AsyncADDToCart(1))
},[])
  return (
    <div className="App">
         Store Application 
        {/* <button onClick={()=>{dispatch(AsyncADDToCart(1)) }} > Click</button> */}
        <Product productList={productList}/>
      
    </div>
  );
}

export default App;
