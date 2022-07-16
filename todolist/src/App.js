import './App.css';
import AddTask from './components/AddTask'
import DisplayTask from "./components/DisplayTask"
import {useState} from 'react'
import TaskModel from './taskModel';

function App() {
  
  const [ taskName, setTaskName] =useState([{name:"first task",status:"active"}]);

  let name="some task"
  function textHandler(event){
    console.log(event.target.value)
     name=event.target.value
   
  }

  function setState(event){
   // console.log(event)
      if(event.key==="Enter"){
        let obj=new TaskModel(name, "active")
        // let arr=;
        // arr.push(name);
        // console.log(arr)
        setTaskName([...taskName,obj]);
      }
  }

  function deleteHandler(index){
    let arr=taskName;
    arr.splice(index,1)
    setTaskName([...arr])
  }

  return (
    <div className="App">
      <AddTask textHandler={textHandler} setState={setState}/>
      <DisplayTask taskName={taskName} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
