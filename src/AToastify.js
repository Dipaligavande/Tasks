import React from 'react';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material';

// toast.configure()

export default function AToastify(){
	const notify = ()=>{
		toast('Hello Geeks 4',
		{position: toast.POSITION.TOP_CENTER});
		toast.success('successful');
		toast.error('Runtime Error',
		{position: toast.POSITION.BOTTOM_CENTER});
		
	}
	return (
		<>
			<Button    variant="contained" onClick={notify}>Click Me!</Button>
			<ToastContainer/>
			</>
	);
}

