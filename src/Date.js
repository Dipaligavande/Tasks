
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import './App.css';
import './Date.css';
import Select from "react-select";
import { Paper } from '@mui/material';
import { TextFields } from '@mui/icons-material';

export default function Date() {
  return (
    <Autocomplete
      
     
      options={timeSlots}
      aria-haspopup="true" 
      sx={{
        '& .MuiAutocomplete-options': {
          backgroundColor: 'black',
        },
        '& .Mui-focused': {
          backgroundColor: 'red',
        },
      }}
      open
     
      popupIcon={<ArrowDropDownCircleIcon />}
    
     renderInput={(params) => <TextField {...params} />}
     
    />
  
  );
}
// const colourStyles = {
//     options: (styles, { data, isDisabled, isFocused, isSelected }) => {
//       // const color = chroma(data.color);
//       console.log({ data, isDisabled, isFocused, isSelected });
//       return {
//         ...styles,
//         backgroundColor: isFocused ? "red" : null,
//         color: "blue"
//       };
//     }
//   };


const timeSlots=["12:00",
"12:10",
"12:20",
"01:10",
"01:20",
"01:30","01:40","01:50","02:00","02:10","02:20"];

// const customStyles = {
//     option: (base, { data, isDisabled, isFocused, isSelected }) => {
//     return {
//       ...base,
//       backgroundColor: isFocused ? "red" : "blue",
//     };
//   }
// };
// forcePopupIcon={false}
// inputProps={{ style: colourStyles }}

const theme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          '&[aria-selected="true"]': {
            backgroundColor: '#e3abed',
          },

          '&:hover': {
            backgroundColor: '#9c27b0',
          },
          backgroundColor: '#fff',
        },
      },
    },
  },
})

// const Listbox = styled('ul')(({ theme }) => ({
//     width: 200,
//     margin: 0,
//     padding: 0,
//     zIndex: 1,
//     position: 'absolute',
//     listStyle: 'none',
//     backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
//     overflow: 'auto',
//     maxHeight: 200,
//     border: '1px solid rgba(0,0,0,.25)',
//     '& li.Mui-focused': {
//       backgroundColor: '#4a8df6',
//       color: 'white',
//       cursor: 'pointer',
//     },
//     '& li:active': {
//       backgroundColor: '#2977f5',
//       color: 'white',
//     },
//   }));
  
//   sx={{ width: 150 }}

// renderOption={( timeSlots) => {
//     return (
//       <li {...timeSlots}>
//         <div
//           sx={{
//             backgroundColor: "red",
//             color: "orange"
//           }}
//         >
//           {timeSlots}
//         </div>
//       </li>
//     );
//         }}