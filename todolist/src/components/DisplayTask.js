import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import {SingleTask} from './SingleTask';
export default function DisplayTask({taskName}) {
    console.log(taskName);
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List>

              {taskName.map((ele, index)=>{
                return <SingleTask ele={ele}  index={index}/>
              })}
                {/* <ListItem>
                    <ListItemButton>
                    <ListItemText primary={taskName}></ListItemText>

                    </ListItemButton>    
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemButton>
                    <ListItemText primary="hey this is second task"></ListItemText>

                    </ListItemButton>    
                </ListItem> */}
            </List> 

    </Box>
   
  );
}

