import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { Box, Text, Badge, Flex, Skeleton, Button } from '@chakra-ui/react';

const Classes = ({ lesson, loading }) => {
	const [occupiedPlaces, setOccupiedPlaces] = useState(0);

	const handleSignUp = () => {
		if (occupiedPlaces < lesson.no_of_places) {
			setOccupiedPlaces((prevPlaces) => prevPlaces + 1);
			// here logic to send a request to the server for registration
		} else {
			alert('Sorry, all seats in the lesson are taken.');
		}
	};

	return (
		<Skeleton isLoaded={!loading}>
			<Box borderWidth='1px' overflow='hidden' p='4' shadow='md' bg='white'>
				<Text fontSize='14px' fontWeight='normal' color='#CACDD0' noOfLines={1}>
					{new Date(lesson.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}
				</Text>
				<Text fontSize='22px' fontWeight='bold' color='#323C46' noOfLines={1} mt='2'>
					{lesson.classname}
				</Text>
				<Text fontSize='16px' fontWeight='normal' color='#949EA8' noOfLines={2} mt='2'>
					{lesson.description}
				</Text>
				<Flex justifyContent='space-between' alignItems='center' mt='2'>
					<Flex alignItems='center'>
						<BiUser style={{ marginRight: '5px', color: '#949EA8' }} />
						<Badge style={{ background: 'white', color: '#949EA8' }}>
							{occupiedPlaces} <span style={{ textTransform: 'lowercase' }}>of</span> {lesson.no_of_places}
						</Badge>
					</Flex>
					<Button color='white' bg='#22D486' size='sm' width='100px' height='32px' onClick={handleSignUp}>
						Join
					</Button>
				</Flex>
			</Box>
		</Skeleton>
	);
};

export default Classes;
