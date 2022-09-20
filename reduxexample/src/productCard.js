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
    <div style={{width: "40vw", border:"1px gray solid ", borderRadius:"10px", margin: "40px" , backgroundColor:"white"}}>
      <h3>{product.name}</h3>
      {console.log(product.imageUrl)}
      <div style={{width:"40vw", height:"30vh", border:"1px solid black ", borderRadius:"10px"}}>
        <img  src={product.imageUrl} alt="#"/>
      </div>
      <h3>{product.color}</h3>
      <h3>{product.price.current.text}</h3>

      <button onClick={()=>cartHandler(product.id)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
/*
brandName
: 
"Public Desire"
colour
: 
"Black"
colourWayId
: 
203384300
groupId
: 
null
hasMultiplePrices
: 
false
hasVariantColours
: 
false
id
: 
203384298
imageUrl
: 
"images.asos-media.com/products/public-desire-chariot-chunky-loafers-in-black/203384298-1-black"
isSellingFast
: 
false
name
: 
"Public Desire chariot chunky loafers in black"
price
: 
{current: {…}, previous: {…}, rrp: {…}, isMarkedDown: false, isOutletPrice: false, …}
productCode
: 
120726653
productType
: 
"Product"
sponsoredCampaignId
: 
null
url
: 
"public-desire/public-desire-chariot-chunky-loafers-in-black/prd/203384298?clr=black&colourWayId=203384300"
videoUrl
: 
null
*/