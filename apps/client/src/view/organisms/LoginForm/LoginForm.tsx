import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Root, Controls } from './LoginForm.styles';

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
	const navigate = useNavigate();
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleClick = () => {
		navigate('/home');
	};

	return (
		<Root>
			<Controls>
				<div>Enter your credentials:</div>
				<TextField
					id="outlined-basic"
					label="Login"
					variant="outlined"
					size="small"
					value={login}
					onChange={(e) => setLogin(e.target.value)}
				/>
				<TextField
					id="outlined-basic"
					label="Password"
					variant="outlined"
					size="small"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button variant="contained" onClick={handleClick}>
					Login
				</Button>
			</Controls>
		</Root>
	);
}

export default LoginForm;
