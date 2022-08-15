
import { useState } from 'react';
import './App.css';
import reducer2 from './redux/reducer2';
import store from "./redux/store";


function App() {


  const [name, setName]=useState("");
  const [count, setCount]=useState(0); 

  // console.log(store);
  store.subscribe(()=>{
    console.log(store.getState());
    setName(store.getState().reducer1.name);
     setCount(store.getState().reducer2.count);
  })

  function changeHandler(e){
      let names=e.target.value;
      let action ={type:"nameChange",name:names};
      store.dispatch(action)
  }

  function clickHandler(){
    let action ={type:"increment"}
    store.dispatch(action);
  }
  function clickHandlerDecrement(){
    let action ={type:"decrement"}
    store.dispatch(action);
  }
  return (
    <div className="App">
     App
     <input onChange={changeHandler}/>
      {name}

       <h1>current count : {count}</h1>
      <button onClick={clickHandler}>Increment</button>
      <button onClick={clickHandlerDecrement}>Decrement</button>
    </div>
  );
}

export default App;
