import Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField';

// function AddTask({textHandler,setState}){
    function AddTask(props){ 
        //let textHandler= props.textHandler; 
        let {textHandler,setState} =props;
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