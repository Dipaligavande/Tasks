import Box from "@mui/material/Box";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { TextField } from "@mui/material";



function Otp() {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      maxWidth={400}
      alignItems="center"
      justifyContent={"center"}
      margin="auto"
      marginTop={5}
      padding={3}
      borderRadius={5}
      boxShadow={"5px 5px 10px #ccc"}
      sx={{
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <Typography variant="h6" padding={3} textAlign="center">
        <strong>We sent you code to verify your mobile number</strong>
      </Typography>
      <Typography  variant="h6" style={{color: 'grey'}}>Enter your OTP code here</Typography>
      <br></br>
      <Typography  sx={{ display: 'flex', gap: 2}}>
        {/* <Stack direction="row" spacing={1}> */}
          
            <TextField
             style={{
              height: "50px",
              width: "50px",
              borderRadius: "50px",
              boxShadow: "10px 10px 20px #ccc",
              border:"white"
              
            }}
            type={"text"}
            value={value}
           
            onChange={handleChange}
            
            />
            


         
           <TextField
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50px",
              boxShadow: "10px 10px 20px #ccc",
              
            }}
            type={"text"}
            value={value}
            onChange={handleChange}
          />
         <TextField
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50px",
              boxShadow: "10px 10px 20px #ccc",
            }}
            type={"text"}
            value={value}
            onChange={handleChange}
          />
          <TextField
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50px",
              boxShadow: "10px 10px 20px #ccc",
            }}
            type={"text"}
            value={value}
            onChange={handleChange}
          />
        
      </Typography>
      <br></br>
      <br></br>
      <label style={{color:"grey"}}>I didn't receive a code !</label><br></br>

      <Link href="#" style={{ textAlign: "center",fontSize:"20" }}>
        <strong>Resend OTP</strong>
      </Link>
    </Box>
  );
}
export default Otp;
