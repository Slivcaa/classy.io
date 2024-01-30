import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/actions/authActions';
import { Input, Button, Heading, FormControl, FormLabel } from '@chakra-ui/react';

const SignUpForm = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signupUser(formData));
	};

	return (
		<div>
			<Heading as='h2' size='xl' mb='4'>
				Sign Up
			</Heading>
			<form onSubmit={handleSubmit}>
				<FormControl mb='4'>
					<FormLabel>First Name</FormLabel>
					<Input type='text' name='first_name' onChange={handleChange} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Last Name</FormLabel>
					<Input type='text' name='last_name' onChange={handleChange} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Email</FormLabel>
					<Input type='email' name='email' onChange={handleChange} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Password</FormLabel>
					<Input type='password' name='password' onChange={handleChange} />
				</FormControl>
				<Button type='submit' colorScheme='blue'>
					Sign Up
				</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
