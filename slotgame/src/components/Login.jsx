import React, { useState } from 'react'
import checkCredentials from "../utils/checkCredentials";
import SlotGame from './SlotGame';
const Login = () => {

  
  let LoginObj={username:"", password:""};
  const [credentialsCheck, setCredentialsCheck]=useState(false);
  function getPasswordHandler(event){
      LoginObj.password=event.target.value;
  }
  function getUsernameHandler(event){
      LoginObj.username=event.target.value;
  }
  
  function checkCredentialsHandler(){
    checkCredentials(LoginObj)
    .then((object)=>{
       if(object.message==="user found"){
          setCredentialsCheck(true);
       }
    })
    .catch((error)=>{

    })
  }

  if(credentialsCheck) 
      return (
        <SlotGame/>
      )
  else
      return (
        <div>
          <input onChange={getUsernameHandler}/>
          <input onChange={getPasswordHandler}/>
          <button onClick={checkCredentialsHandler}>Login</button>
          
        </div>
      )
}

export default Login
