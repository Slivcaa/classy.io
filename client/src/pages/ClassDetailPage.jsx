import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import JoinClassButton from '../components/JoinClassButton';
import DeleteClassButton from '../components/DeleteClassButton';
import UnsubscribeFromClassButton from '../components/UnsubscribeFromClassButton';
import { Heading, Text, Box, Flex } from '@chakra-ui/react';

const ClassDetailPage = () => {
	const { id } = useParams();
	console.log('ID:', id);
	const classData = useSelector((state) => state.classes.find((c) => c._id === id));

	console.log('ClassData:', classData);

	return (
		<div>
			{classData ? (
				<Box>
					<Heading as='h2' size='xl' mb='4'>
						{classData.classname}
					</Heading>
					<Text>{classData.description}</Text>
					<Text>Date: {classData.date}</Text>
					<Text>Location: {classData.location}</Text>
					<Text>Max Capacity: {classData.no_of_places}</Text>
					{classData.attendees && classData.attendees.length > 0 ? (
						<Box>
							<Heading as='h3' size='lg' mt='4'>
								Attendees
							</Heading>
							<ul>
								{classData.attendees.map((attendee, index) => (
									<li key={index}>{attendee}</li>
								))}
							</ul>
						</Box>
					) : (
						<Text>No attendees yet, be the first to join!</Text>
					)}
					<Flex mt='4'>
						<JoinClassButton classId={id} />
						<DeleteClassButton classId={id} />
						<UnsubscribeFromClassButton classId={id} />
					</Flex>
				</Box>
			) : (
				<Text>Class not found</Text>
			)}
		</div>
	);
};

export default ClassDetailPage;
