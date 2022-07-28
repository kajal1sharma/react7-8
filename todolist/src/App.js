import React,{useReducer} from 'react'
import Login from './components/Login'
import TodoContainer from './components/todoContainer'
import useStyle from './cusstomHooks/useStyle'
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

  const [styleObj,setStyle ]=useStyle("style1");

  return (
    <div style={styleObj}>
      <button onClick={()=>{setStyle()}}>changeStyle</button>
      {loginState.status?<TodoContainer/>:<Login emailHandler={emailHandler} verifyHandler= {verifyHandler}/>}
    </div>
  )
}

export default App
