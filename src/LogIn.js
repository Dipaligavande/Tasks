import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import validation from './validation';
import Link from '@mui/material/Link';

import Checkbox from '@mui/joy/Checkbox';
import Done from '@mui/icons-material/Done';

// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';



export default function Login() {
    const [values, setValues] = useState({});
    const [errors, setErrors]= useState({});
    
    
  

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues(values => ({...values, [name]: value}))
      }
      
      const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(values.email);
        setErrors(validation(values))
        
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
        
      
        <Typography variant='h2' padding={3} textAlign="center">Login</Typography>
        
        
          <label style={{alignSelf:'flex-start'}}>Email:</label>
        <TextField  margin="normal" type={"text"} placeholder="Email" name="email" value={values.email} 
         onChange={handleChange}
         fullWidth />
         <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
         {errors.email && <p style={{color: "red"}}>{errors.email}</p>}                                                            
         </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
         <label style={{alignSelf:'flex-start'}}>Password:</label> <Link href="#"   style={{alignSelf: 'flex-end'}}>Forgot password?</Link>
        
        <TextField margin="normal"   type={"text"} name="password" value={values.password} 
        onChange={handleChange } 
        fullWidth/>
        
        {errors.password && <p style={{color: "red"}}>{errors.password}</p>}    
        
           <br></br>
           <Checkbox
      uncheckedIcon={<Done />}
      style={{alignSelf:'flex-start'}}
      label="Remember Me"
      componentsProps={{
        root: ({ checked, focusVisible }) => ({
          sx: !checked
            ? {
                '& svg': { opacity: focusVisible ? 0.32 : 0 },
                '&:hover svg': {
                  opacity: 0.32,
                },
              }
            : {},
        }),
      }}
    />
    <br></br>
      
        {/* <Link href="#"   style={{alignSelf: 'flex-end'}}>Forgot password</Link> */}
        <Button disabled={!values} padding={3} type="submit" variant="contained"
        fullWidth>LogIn</Button>
      </Box>
      
    </form>
    
  );
}

                                                                                               

