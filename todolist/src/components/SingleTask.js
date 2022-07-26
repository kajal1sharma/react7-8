import React,{useContext} from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import Context1 from './context';
import { containerClasses } from '@mui/system';



const SingleTask = ({ele, deleteHandler, index}) => {
    const contextObject=useContext(Context1);
   
  return (
       <>
       
            {console.log(contextObject.status,"+++++++++++++++++++++++++++")}
            <ListItem>
              <ListItemButton>
              <ListItemText primary={ele.name}></ListItemText>

              </ListItemButton>  
                  {ele.status}
              <Button onClick={(event)=>{deleteHandler(index)}}>
                Delete
              </Button>  
            </ListItem>
            <Divider/>
         </>
   
  )
}
export {SingleTask}

//export default SingleTask






// return (
//     <Context1.Consumer>

//         {(contextObject)=>{
//             return <>
//             {console.log(contextObject.status,"+++++++++++++++++++++++++++")}
//             <ListItem>
//               <ListItemButton>
//               <ListItemText primary={ele.name}></ListItemText>

//               </ListItemButton>  
//                   {ele.status}
//               <Button onClick={(event)=>{deleteHandler(index)}}>
//                 Delete
//               </Button>  
//             </ListItem>
//             <Divider/>
//          </>
//         }}
                
//     </Context1.Consumer>
//   )