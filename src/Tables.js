import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';

const countries = [
  { Empname: 'Deepali Gavande', email: 'deep@gmail.com', salary: '20000' ,designation:"Trainee Engineer"},
  { Empname: 'Sumit ', email: 'sumit@gmail.com', salary: '10000' ,designation:"Trainee Engineer"},
  { Empname: 'Mayur', email: 'mayur@gmail.com', salary: '40000' ,designation:"Manager"},
  { Empname: 'Mitesh', email: 'mitesh@gmail.com', salary: '50000' ,designation:"Associate Engineer"},
];


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Empname, email, salary, designation) {
  return { Empname, email, salary, designation};
}

const rows = [
  createData('Deepali Gavande',"deep@gmail.com", 20000, "Trainee Engineer"),
  createData('Sumit ',"sumit@gmail.com", 10000, "Trainee Engineer"),
  createData('Mayur', "mayur@gmail.com", 40000, "Manager"),
  createData('Mitesh', 'mitesh@gmail.com', 50000,"Associate Engineer"),
  
];

export default function Tables() {
  return (
    <>
    <Autocomplete  style={{ marginTop: '50px',marginRight:'60px',marginLeft:'400px'}}
    id="country-select-demo"
    sx={{ width: 300,alignItems:'center' }}
    options={countries}
    // autoHighlight
    // getOptionLabel={(option) => option.label}
    // renderOption={(props, option) => (
    //   <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
    //     <img
    //       loading="lazy"
    //       width="20"
    //       src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
    //       srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
    //       alt=""
    //     />
    //     {option.label} ({option.code}) +{option.phone}
    //   </Box>
    // 
  
    renderInput={(params) => (
      <TextField
        {...params}
        label="Search a Employee"
        
        id="input-with-icon-textfield"
        InputProps={{
          ...params.InputProps,
          autoComplete:'new-password',
          startAdornment: (
            <InputAdornment position="start">
             <SearchRoundedIcon/>
            </InputAdornment>
          ),
        }}
      
      />
    )}

/>

    <TableContainer  style={{ marginTop: '30px' }} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Employee Name</StyledTableCell>
            <StyledTableCell align="right">Email ID</StyledTableCell>
            <StyledTableCell align="right">Salary</StyledTableCell>
            <StyledTableCell align="right">Designation</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Empname}>
              <StyledTableCell component="th" scope="row">
                {row.Empname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.salary}</StyledTableCell>
              <StyledTableCell align="right">{row.designation}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
