import React from 'react'
import ProductCard from './productCard'
import { useSelector } from 'react-redux'
const Product = ({productList}) => {
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

      cartList {cartList}
    </div>
  )
}

export default Product
