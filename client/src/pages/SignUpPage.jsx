import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { Box, Heading, Flex, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import Nav from '../components/Nav';

const UserLogin = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(formData));
	};

	return (
		<Flex flexDirection={['column', 'column', 'row']} w='100%' h='100vh' overflow='hidden' position='relative'>
			<Nav />

			{/* Right side with the form */}
			<Box p='4' maxW='400px' width={['100%', '100%', '50%']}>
				<Heading as='h2' size='xl' mb='4'>
					User Login
				</Heading>
				<form onSubmit={handleSubmit}>
					<FormControl mb='4'>
						<FormLabel>Email</FormLabel>
						<Input type='email' name='email' onChange={handleChange} required />
					</FormControl>
					<FormControl mb='4'>
						<FormLabel>Password</FormLabel>
						<Input type='password' name='password' onChange={handleChange} required />
					</FormControl>
					<Button type='submit' colorScheme='blue'>
						Login
					</Button>
				</form>
			</Box>
		</Flex>
	);
};

export default UserLogin;
