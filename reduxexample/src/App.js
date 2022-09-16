
import { useState } from 'react';
import './App.css';
import Book from "./Book"
import store from './store'
function App() {

  let bookList =store.getState().bookInfo;
  
   store.subscribe(()=>{
    console.log(store.getState())
   })


  return (
    <div className="App">
        Book Store Application 
        
        <Book bookList={bookList}/>
      
    </div>
  );
}

export default App;
