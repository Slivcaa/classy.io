import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { Box, Heading, Flex, FormControl, FormLabel, Input, Button, Text, Link, Center } from '@chakra-ui/react';

const AuthPage = () => {
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
		<Flex width='100%' height='100vh' flexDirection={['column', 'column', 'row']}>
			<Box position='relative' color='white' width={['100%', '100%', '30%']} overflow='hidden'>
				<img
					src='/classy.png'
					alt='Background'
					style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center', maxHeight: '100vh' }}
				/>
				<img
					src='/Logo.png'
					alt='Logo'
					style={{ width: '70px', height: '18px', position: 'absolute', top: '10px', left: '10px', zIndex: '1' }}
				/>
				<Text
					minW=' 270px'
					position='absolute'
					bottom='10px'
					left='50%'
					transform='translateX(-50%)'
					textAlign='center'>
					<Text fontSize={['14px', '18px', '25px']} mb='2'>
						“Intelligence is like a four-wheel drive. It allows you to get stuck in more remote places.”
					</Text>
					<Text fontSize={['12px', '14px', '18px']} color='#FF0000'>
						-
					</Text>
					<Text fontSize={['12px', '14px', '18px']} color='#323C46'>
						Garrison Keillor
					</Text>
				</Text>
			</Box>

			<Flex
				flex='1'
				p='4'
				maxW={['100%', '100%', '400px']}
				width={['100%', '100%', '70%']}
				m='auto'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				textAlign='left'>
				<Box p='2' position='absolute' top='5px' right='10px' color='#C9CED3' fontSize='sm' textAlign='right'>
					<Text>
						Don’t have an account?{' '}
						<Link to='/signup' color='#949EA8' fontSize='sm'>
							SIGN UP
						</Link>
					</Text>
				</Box>

				<Center>
					<Flex flexDirection='column' alignItems='left' textAlign='left'>
						<Heading as='h4' size={['md', 'lg', 'xl']} mb='1' color='#323C46'>
							Sign in to Classy.
						</Heading>
						<Text fontSize={['14px', '16px', '18px']} color='#D2D6DA' mb='4'>
							Enter your details below.
						</Text>
						<form onSubmit={handleSubmit} style={{ width: '100%' }}>
							<FormControl mb='4'>
								<FormLabel fontSize={['12px', '14px', '16px']} color='#D2D6DA'>
									Email
								</FormLabel>
								<Input
									type='email'
									name='email'
									onChange={handleChange}
									required
									border='none'
									borderBottom='1px solid #D2D6DA'
									width={['100%', '100%', '100%']}
								/>
							</FormControl>
							<FormControl mb='4'>
								<FormLabel fontSize={['12px', '14px', '16px']} color='#D2D6DA'>
									Password
								</FormLabel>
								<Input
									type='password'
									name='password'
									onChange={handleChange}
									required
									border='none'
									borderBottom='1px solid #D2D6DA'
									width={['100%', '100%', '100%']}
								/>
							</FormControl>
							<Button type='submit' bg='#22D486' color='white' width={['100%', '100%', '100%']} height='57px'>
								SIGN IN
							</Button>
						</form>
					</Flex>
				</Center>
			</Flex>
		</Flex>
	);
};

export default AuthPage;
