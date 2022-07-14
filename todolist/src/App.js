import './App.css';
import AddTask from './components/AddTask'
import DisplayTask from "./components/DisplayTask"
import {useState} from 'react'

function App() {
  
  const [ taskName, setTaskName] =useState(["df"]);
  let name="some task"
  function textHandler(event){
    console.log(event.target.value)
     name=event.target.value
   
  }

  function setState(event){
   // console.log(event)
      if(event.key==="Enter"){
        // let arr=;
        // arr.push(name);
        // console.log(arr)
        setTaskName([...taskName,name]);
      }
  }
  return (
    <div className="App">
      <AddTask textHandler={textHandler} setState={setState}/>
      <DisplayTask taskName={taskName}/>
    </div>
  );
}

export default App;
