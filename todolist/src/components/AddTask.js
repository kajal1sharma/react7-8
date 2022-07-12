import Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField';

function AddTask(){
    
    return (
        <Box>
            <TextField id="filled-basic" 
            label="Filled" 
            variant="filled"
            // onchange={textHandler}
            />
        </Box>
    )
}

export default AddTask;