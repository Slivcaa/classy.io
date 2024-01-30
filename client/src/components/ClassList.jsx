import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClasses } from '../redux/actions/сlassActions';
import { Link } from 'react-router-dom';
import { Button, Heading, Text } from '@chakra-ui/react';

const ClassList = () => {
	const dispatch = useDispatch();
	const classes = useSelector((state) => state.classes);

	useEffect(() => {
		dispatch(fetchClasses());
	}, [dispatch]);

	return (
		<div>
			<Heading as='h2' size='xl' mb='4'>
				Class List
			</Heading>
			{classes.length === 0 ? (
				<Text>No classes available. Be the first to create one!</Text>
			) : (
				<ul>
					{classes.map((cls) => (
						<li key={cls._id}>
							<Heading as='h3' size='md'>
								{cls.classname}
							</Heading>
							<Text>{cls.description}</Text>
							<Text>Location: {cls.location}</Text>
							<Text>Date: {cls.date}</Text>
							<Text>Created by: {cls.created_by_name}</Text>
							<Link to={`/class/${cls._id}`}>
								<Button colorScheme='blue'>View Details</Button>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ClassList;
