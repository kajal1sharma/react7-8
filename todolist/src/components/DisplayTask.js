import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


export default function DisplayTask() {
    
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List>
                <ListItem>
                    <ListItemButton>
                    <ListItemText primary="hey this is first task"></ListItemText>

                    </ListItemButton>    
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemButton>
                    <ListItemText primary="hey this is second task"></ListItemText>

                    </ListItemButton>    
                </ListItem>
            </List>

    </Box>
   
  );
}

