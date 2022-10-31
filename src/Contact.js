import React,{useState} from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Contact(){
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues(values => ({...values, [name]: value}))
      }
      
    return(
        <Box
      display="flex"
      flexDirection={"column"} maxWidth={400} alignItems="center"
      justifyContent={"center"}
      margin="auto" marginTop={5} padding={3}
      borderRadius={5}
      boxShadow={"5px 5px 10px #ccc"}
       sx={{":hover":{
        boxShadow:"10px 10px 20px #ccc"
       }}}>
        <Typography variant='h4' padding={3} textAlign="center">Contact Form!</Typography>
        <label style={{alignSelf:'flex-start'}}>Name:</label>
        <TextField  margin="normal" type={"text"} placeholder="Enter Name" name="name" value={values.name} 
         onChange={handleChange}
         fullWidth />
        <label style={{alignSelf:'flex-start'}}>Email:</label>
        <TextField  margin="normal" type={"text"} placeholder="Email" name="email" value={values.email} 
         onChange={handleChange}
         fullWidth />
         <label style={{alignSelf:'flex-start'}}>Message:</label>
         <TextField margin="normal"
          id="outlined-multiline-flexible"
          placeholder="Enter message" 
          multiline
          maxRows={4}
          name="message"
          value={values.message}
          onChange={handleChange}
          fullWidth
        /><br></br>
         <Button  padding={3} type="submit" variant="contained"
        fullWidth>Send</Button>
       </Box>
    )
}
export default Contact;