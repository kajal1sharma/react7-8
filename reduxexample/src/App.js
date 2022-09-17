
import { useState } from 'react';
import './App.css';
import Product from "./Product"
import store from './store'
import  {useSelector} from "react-redux";
function App() {

  //let productList =store.getState().productInfo;
  
  //  store.subscribe(()=>{
  //   console.log(store.getState())
  //  })

let productList =useSelector((state)=>{
                    
                    return state.products.product
                })

  return (
    <div className="App">
         Store Application 
        
        <Product productList={productList}/>
      
    </div>
  );
}

export default App;
