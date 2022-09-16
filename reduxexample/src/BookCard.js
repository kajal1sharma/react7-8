import React from 'react'
import store from "./store";
const BookCard = ({book}) => {


  function cartHandler(id){
    store.dispatch({type:"addToCart",id:id})
  }

  return (
    <div>
      {book.name}
      <img src={""} alt="#"/>
      {book.Author}
      {book.price}

      <button onClick={()=>cartHandler(book.id)}>Add to Cart</button>
    </div>
  )
}

export default BookCard
