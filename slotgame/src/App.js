import { useState } from 'react';
import './App.css';
import {Login, Registration, Home, SlotGame} from "./components";
function App() {
const [ButtonPressed, setButtonPressed]=useState({loginButton:false, registrationButton:false});
 function loginHandler(){

  setButtonPressed({loginButton:true, registrationButton:false})
  
  }
  function registrationHandler(e){
    
    setButtonPressed({loginButton:false, registrationButton:true})
   
  }

  return (
    <div className="App">
     {ButtonPressed.loginButton &&  <Login/>}
     {ButtonPressed.registrationButton && <Registration/>}
     {!ButtonPressed.registrationButton && !ButtonPressed.loginButton && 
     <Home loginHandler={loginHandler} 
     registrationHandler={registrationHandler}/>}
    </div>
  );
}

export default App;
