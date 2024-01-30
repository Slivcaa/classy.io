import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Flex } from '@chakra-ui/react';

const Nav = () => {
	return (
		<Box p='4' width='100%' height='100%' mb='4'>
			<Flex justify='space-between' align='center'>
				<Image src='/Logo.png' alt='Logo' w='94px' h='24px' />

				<span>
					<span style={{ color: '#C9CED3', fontSize: 'sm' }}>Don’t have account?</span>{' '}
					<Link to='/signup' style={{ color: '#949EA8', fontSize: 'sm' }}>
						SIGN UP
					</Link>
				</span>
			</Flex>
		</Box>
	);
};

export default Nav;
