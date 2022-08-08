
import React, { useEffect, useRef, useState } from 'react'
import user from '../utils/databaseUserInfo';

const Registration = () => {
  const regObject={username:"", password:"", dob:""}
  const [re, setrender]=useState({});

 const rerender= useRef(0);
  const usernameRef= useRef(null);
  const passwordRef=useRef(null);
  const dobRef=useRef(null);

  

function submitHandler(event){
  event.preventDefault();
  setrender({});
  regObject.username=usernameRef.current.value;
  regObject.password=passwordRef.current.value;
  regObject.dob=dobRef.current.value;
  console.log(regObject)
}

function inputHandler(event){
  
    //regObject[event.target.name]=event.target.value;
}

function validation(){
  if(usernameRef.current.value.length>10){
    usernameRef.current.style.backgroundColor="pink";
  }
}
  return (
    <form onSubmit={submitHandler}>
      {rerender.current+=1}
      {console.log("how many timer rerendered",rerender.current)}
      <div style={{display:"flex", flexDirection:"column"}}>
        Registration<br/><br/>
        <div style={{display:"flex", flexDirection:"column"}}>
          <span>Usernames</span>
          <input ref={usernameRef} name="username" onChange={validation} />
          {console.log(usernameRef.current)}
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
          <span>Password</span>
          <input ref={passwordRef} name='password'/>
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
          <span>dob</span>
          <input ref={dobRef} name="dob" />
        </div>
      <input type="submit"/>
      </div>
    </form>
  )
}

export default Registration



/*
<form onSubmit={submitHandler}>
      <div style={{display:"flex", flexDirection:"column"}}>
        Registration<br/><br/>
        <div style={{display:"flex", flexDirection:"column"}}>
          <span>Username</span>
          <input name="username" onChange={inputHandler}/>
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
          <span>Password</span>
          <input name='password' onChange={inputHandler}/>
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
          <span>dob</span>
          <input name="dob" onChange={inputHandler}/>
        </div>
      <input type="submit"/>
      </div>
    </form>
    */