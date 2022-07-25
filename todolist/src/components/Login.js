import React from 'react'

const Login = (props) => {

    const {emailHandler, verifyHandler} = props;
   
  return (
    <div>
      <span>email</span>  
      <input onChange={emailHandler}/>
      <button onClick={verifyHandler}>click</button>
    </div>
  )
}

export default Login
