import React,{useReducer} from 'react'
import Login from './components/Login'
import TodoContainer from './components/todoContainer'

function reducerFn(statePrevious,action ){
 
  if(action.type==="CHECK"){
    return {...statePrevious, email:action.payload}
  }
  else if(action.type==="VERIFY"){
    if(statePrevious.email.includes("@")){
      return {...statePrevious, status:true}
    }

  }
  return {...statePrevious}
}

const App = () => {

  const [loginState, dispatchFn] = useReducer( reducerFn,{email:"", status:false})
 
  const emailHandler=(event)=>{
      let email = event.target.value;
      let action={type:"CHECK", payload:email}
      dispatchFn(action);
  } 
  const verifyHandler=()=>{
      let action  = {type :"VERIFY"}
      dispatchFn(action);
  }
  return (
    <div>
      
      <Login emailHandler={emailHandler} verifyHandler= {verifyHandler}/>
      {loginState.status?<TodoContainer/>:<></>}
    </div>
  )
}

export default App
