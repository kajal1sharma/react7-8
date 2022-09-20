import React from 'react'
import store from "./store";
//import {addToCart} from "./productSlice";
import  AsyncADDToCart from "./AddToCartAsync";
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({product}) => {


 

  const dispatch =useDispatch();

  function cartHandler(id){
    dispatch(AsyncADDToCart(id))
    //store.dispatch({type:"addToCart",id:id})
  }

  return (
    <div>
      {product.name}
      <img src={""} alt="#"/>
      {product.Author}
      {product.price}

      <button onClick={()=>cartHandler(product.id)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
