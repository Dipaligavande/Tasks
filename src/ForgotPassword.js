import React ,{useState}from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import validation from "./validationForget";


function ForgotPassword(){
    const[reset,setReset]=useState({
        password:'',
        showpassword:false,
    });
    const [errors, setErrors]= useState({});

    const handleChange=(e)=>{
        setReset({...reset,[e.target.name]:e.target.value} );
        console.log(reset);
    } 

    const handleClickShowPassword = () => {
        setReset({
          ...reset,
          showpassword: !reset.showpassword,
        });
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

     const resetPass=()=>{
        setErrors(validation(reset));
        alert("Password is reset successfully");
        console.log(reset.password);
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
        
      
        <Typography variant='h4' padding={1}   textAlign="center">Reset Password</Typography>
        
        {/* <TextField id="filled-basic" margin="normal"  label="Reset Password" variant="filled" name="email"  
          type={values.showPassword ? 'text' : 'password'} 
          value={reset.password} onChange={handleChange}
          <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
          /> */}
          <InputLabel htmlFor="outlined-adornment-password"> Reset Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            type={reset.showpassword ? 'text' : 'password'}
            value={reset.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {reset.showpassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Reset Password"
          />
          {errors.password && <p style={{color: "red"}}>{errors.password}</p>} 
          <br></br>
        
        <Button   type="submit" onClick={resetPass} variant="contained">Reset Password</Button>
      </Box>
    )
}
export default ForgotPassword;