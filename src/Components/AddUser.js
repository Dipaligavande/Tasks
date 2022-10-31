import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import { Box,FormControl,FormLabel,TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

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
        <Typography variant='h4'>Add User!</Typography>
        </Stack>
        <br></br>
        <br></br>
        <FormControl>
       
        <FormLabel style={{alignSelf:'flex-start'}}> User Name:</FormLabel>
        <TextField  margin="normal" type={"text"} placeholder="Enter Name" name="username" value={values.username}
        onChange={handleChange}
         />
         <FormLabel > Email:</FormLabel>
        <TextField  margin="normal" type={"text"} placeholder="Enter Name" name="email" value={values.email}
        onChange={handleChange}
         />
         
         <br></br>
         <FormLabel style={{alignSelf:'flex-start'}}> Phone No.:</FormLabel>
        <TextField  margin="normal" type={"text"} placeholder="Enter email" name="phone"  value={values.phone}
        onChange={handleChange}
         fullWidth /><br></br>
        <FormLabel style={{alignSelf:'flex-start'}}>Salary:</FormLabel>
        <TextField  margin="normal" type={"text"} placeholder="Enter contact" name="salary" value={values.salary}
        onChange={handleChange}
         fullWidth />
         
      <Stack direction="row" style={{display:'flex',alignItems:'center',justifyContent:'center'}} spacing={2}>
      <Link href="#"   >or Share with</Link>
     
      <FacebookIcon size={32}  round={true}/> 
      <LinkedinIcon size={32}  round={true}/>
      <TwitterIcon size={32} round={true}/>
      </Stack>
      <br></br>
      <Button  onClick={handleSubmit} padding={3} type="submit" variant="contained"
        fullWidth>Add User</Button>
         </FormControl>
       </Box>
        </>
    )
}