import React from 'react'
import ProductCard from './productCard'
import { useSelector } from 'react-redux'
const Product = ({productList}) => {
  console.log("inside product list", productList)
  const cartList =useSelector(state=>{
    return state.products.cart;
  })
  return (
    <div>
      <ul>
        {productList.map(product => {
            return <ProductCard  product={product }/>
        })}
      </ul>

      {/* cartList {cartList} */}
    </div>
  )
}

export default Product
