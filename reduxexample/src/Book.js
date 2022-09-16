import React from 'react'
import BookCard from './BookCard'
const Book = ({bookList}) => {
  return (
    <div>
      <ul>
        {bookList.map(book => {
            return <BookCard  book={book }/>
        })}
      </ul>
    </div>
  )
}

export default Book
