import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/react';

const ClassDetailPage = () => {
	const { id } = useParams();
	const classesData = useSelector((state) => state.classes.data); // Access the 'data' property

	const cls = classesData.find((c) => c._id === id);

	if (!cls) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Heading as='h2' size='xl' mb='4'>
				Class Detail
			</Heading>
			<Heading as='h3' size='md'>
				{cls.classname}
			</Heading>
			<Text>Description: {cls.description}</Text>
			<Text>Location: {cls.location}</Text>
			<Text>Date: {cls.date}</Text>
			<Text>Maximum Capacity: {cls.no_of_places}</Text>
			<Text>Created by: {cls.created_by_name}</Text>
		</div>
	);
};

export default ClassDetailPage;
