import '../App.css';
import AddTask from './AddTask'
import DisplayTask from "./DisplayTask"
import {useState, useEffect} from 'react'
import TaskModel from '../taskModel';
import getDataFirebase from "../firebase/getdataFirebase"
import Context1 from './context';
function TodoContainer() {

  let arr=[];
  const [ taskName, setTaskName] = useState([]);
  const [status, setStatus] =useState(true);
  const [a , seta]=useState(0)
  async function getData(){
    arr=await getDataFirebase();
    seta(90)

    setTaskName(arr);
    
  }
  useEffect(()=>{
    console.log("useeffect1"); 
  },[a,taskName]);
  
  useEffect(()=>{
    console.log("useeffect 2")
    getData();
  },[]);

 

  let name="some task"
  function textHandler(event){
    console.log(event.target.value)
     name=event.target.value
   
  }
 
//   getData();
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
    setStatus(status?false:true);
  }

  return (
    <Context1.Provider value={{status:status}}>
    <div className="App">
       {console.log(a+"-----------------------")}
      
      <AddTask textHandler={textHandler} setState={setState}/>
      <DisplayTask taskName={taskName} deleteHandler={deleteHandler}/>
    </div>
    </Context1.Provider>
  );
}

export default TodoContainer;
