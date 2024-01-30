import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { Box, Badge, Flex, Skeleton, Button, Text } from '@chakra-ui/react';

const Classes = ({ lesson, loading, onSignUp }) => {
	const [occupiedPlaces, setOccupiedPlaces] = useState(0);

	const handleSignUp = () => {
		if (occupiedPlaces < lesson.no_of_places) {
			setOccupiedPlaces((prevPlaces) => prevPlaces + 1);
			// Call the onSignUp function with the lesson ID
			onSignUp(lesson._id);
		} else {
			alert('Sorry, all seats in the lesson are taken.');
		}
	};

	const formattedDate = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(new Date(lesson.date));

	return (
		<Skeleton isLoaded={!loading}>
			<Box
				borderWidth='1px'
				overflow='hidden'
				p='4'
				shadow='md'
				bg='white'
				flex='1'
				maxW='390px'
				width='100%'
				maxH='296px'
				height='100%'>
				<Flex direction='column' justifyContent='space-between' h='100%'>
					<Flex justifyContent='space-between' alignItems='flex-start' mb='2'>
						<Text fontSize='sm' color='#6B7280'>
							{formattedDate}
						</Text>
					</Flex>
					<Text fontSize='xl' fontWeight='bold' mb='2'>
						{lesson.classname}
					</Text>
					<Text color='#6B7280' mb='2' minH='100px' minW='250px' overflow='hidden' textOverflow='ellipsis'>
						{lesson.description}
					</Text>

					<Flex justifyContent='space-between' alignItems='center'>
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
				</Flex>
			</Box>
		</Skeleton>
	);
};

export default Classes;
