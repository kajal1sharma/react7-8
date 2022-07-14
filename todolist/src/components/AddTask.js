import Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField';

function AddTask({textHandler,setState}){
    
    return (
        <Box>
            <TextField id="filled-basic" 
            label="Filled" 
            variant="filled"
             onChange={textHandler}
             onKeyPress={setState}
            />
        </Box>
    )
}

export default AddTask;