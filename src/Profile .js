import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import { Box,FormControl,FormLabel,TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FacebookIcon,LinkedinIcon,TwitterIcon } from 'react-share';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';

export default function Profile(){
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


    return(
        <>
        <Box
      display="flex"
      flexDirection={"column"} maxWidth={600} alignItems="center"
      justifyContent={"center"}
      margin="auto" marginTop={5} padding={3}
      borderRadius={5}
      boxShadow={"5px 5px 10px #ccc"}
       sx={{":hover":{
        boxShadow:"10px 10px 20px #ccc"
       }}}>
        <Stack direction="row" spacing={2}>
        <Avatar src="/broken-image.jpg" />
        <Typography variant='h4'>User Profile!</Typography>
        </Stack>
        <br></br>
        <br></br>
        <FormControl>
        <Stack direction="row" spacing={2}>
        <FormLabel style={{alignSelf:'flex-start'}}> First Name:</FormLabel>
        <TextField  margin="normal" type={"text"} placeholder="Enter Name" name="firstName" value={values.firstName}
        onChange={handleChange}
         />
         <FormLabel > Last Name:</FormLabel>
        <TextField  margin="normal" type={"text"} placeholder="Enter Name" name="lastName" value={values.lastname}
        onChange={handleChange}
         />
         </Stack>
         <br></br>
         <FormLabel style={{alignSelf:'flex-start'}}> Email:</FormLabel>
        <TextField  margin="normal" type={"text"} placeholder="Enter email" name="email"  value={values.email}
        onChange={handleChange}
         fullWidth /><br></br>
        <FormLabel style={{alignSelf:'flex-start'}}>Contact No:</FormLabel>
        <TextField  margin="normal" type={"text"} placeholder="Enter contact" name="contact" value={values.contact}
        onChange={handleChange}
         fullWidth />
         <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup><br></br>
      <Stack direction="row" style={{display:'flex',alignItems:'center',justifyContent:'center'}} spacing={2}>
      <Link href="#"   >or Share with</Link>
     
      <FacebookIcon size={32}  round={true}/> 
      <LinkedinIcon size={32}  round={true}/>
      <TwitterIcon size={32} round={true}/>
      </Stack>
      <br></br>
      <Button  onClick={handleSubmit} padding={3} type="submit" variant="contained"
        fullWidth>Submit</Button>
         </FormControl>
       </Box>
        </>
    )
}