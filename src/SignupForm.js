import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
export default function SignupForm() {
    const [values, setValues] = useState({});
    
    
    
  

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues(values => ({...values, [name]: value}))
      }
      
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
    }
      
      
    
     

  return (
    
    <form onSubmit={handleSubmit}>
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
        
      
        <Typography variant='h3' padding={3} textAlign="center">SignUp!</Typography>
        <label style={{alignSelf:'flex-start'}}>First Name:</label>
        <TextField  margin="normal" type={"text"} placeholder="Enter FirstName" variant="filled" name="firstname" 
        value={values.firstname} 
        onChange={handleChange}
        fullWidth/>
        
        <label style={{alignSelf:'flex-start'}}>Last Name:</label>
        <TextField  margin="normal" type={"text"} placeholder=" Enter LastName" variant="filled" name="lastname" value={values.lastname}
         onChange={handleChange}
         fullWidth/>
       
       <label style={{alignSelf:'flex-start'}}>Contact No.:</label>
        <TextField  margin="normal" type={"text"} placeholder=" Enter Contact No." variant="filled" name="contactnum" value={values.contactnum}
         onChange={handleChange}
         fullWidth/>
       
       <label style={{alignSelf:'flex-start'}}>Email:</label>
        <TextField  margin="normal" type={"email"} placeholder=" Enter Email" variant="filled" name="email" value={values.email} 
        onChange={handleChange}
        fullWidth/>
        <br></br>
        
        <Button  type="submit" variant="contained" fullWidth>SignUp</Button>
      </Box>
      
    </form>
    
  );
}
