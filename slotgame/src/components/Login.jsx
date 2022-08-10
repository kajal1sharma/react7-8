import React, { useState } from 'react'
import checkCredentials from "../utils/checkCredentials";
import SlotGame from './SlotGame';
const Login = () => {

  
  let LoginObj={username:"", password:""};

  const [userData, setUserData]= useState({credentialsCheck:false, scores:0, chances:0});
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
          
          setUserData({credentialsCheck:true, scores:object.scores, chances:object.chances});
       }
    })
    .catch((error)=>{

    })
  }

  if(userData.credentialsCheck) 
      return (
        <SlotGame chances={userData.chances} scores={userData.scores}/>
      )
  else
      return (
        <div style={{ display:"flex", flexDirection:"column", padding:'100px'}}>
      
          
          <div style={{ display:"flex", flexDirection:"column", padding:"20px"}}>
            <span>Username</span>
            <input onChange={getUsernameHandler} style={{padding:"5px"}}/>
          </div>
          <div style={{ display:"flex", flexDirection:"column", padding:"20px"}}>
            <span>Password</span>
            <input onChange={getPasswordHandler} style={{padding:"5px"}}/>
          </div>
          
          <button style={{margin:"20px", padding:"5px 0px" ,border:'none',backgroundColor:"pink", fontWeight:'900'}} onClick={checkCredentialsHandler}>Login</button>
        
        </div>
      )
}

export default Login
