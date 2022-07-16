import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';


export default function DisplayTask({taskName,deleteHandler}) {
    console.log(taskName);
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List>

              {taskName.map((ele, index)=>{
                return <>
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

