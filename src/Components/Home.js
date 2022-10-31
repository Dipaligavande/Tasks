// import React from 'React';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export default function Home(){

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 13,
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
      
      function createData(id,Empname, email, designation) {
        return {id, Empname, email, designation};
      }
      
      const rows = [
        createData('1', 'Deepali ',"deep@gmail.com", "Trainee Engineer"),
        createData('2', 'Sumit ',"sumit@gmail.com",  "Trainee Engineer"),
        createData('3','Mayur', "mayur@gmail.com", "Manager"),
        createData('4','Mitesh', 'mitesh@gmail.com', "Associate Engineer"),
        
      ];
      


    return(
        <>
        <Typography variant="h4"  padding={3} textAlign="center">Employee List</Typography>
        <TableContainer  style={{ marginTop: '30px' }} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="right">Id</StyledTableCell>
          <StyledTableCell align="right">Employee Name</StyledTableCell>
          <StyledTableCell align="right">Email ID</StyledTableCell>
          <StyledTableCell align="right">Designation</StyledTableCell>
          <StyledTableCell align="right">Actions</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Empname}>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row" align="right">
                {row.Empname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              
              <StyledTableCell align="right">{row.designation}</StyledTableCell>
              <StyledTableCell align="right">
                <EditIcon/>
                <DeleteIcon/>
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
 }