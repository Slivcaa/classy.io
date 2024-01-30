import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Wrap, WrapItem, Center } from '@chakra-ui/react';
import { fetchClasses } from '../redux/slices/classSlice';
import { useParams } from 'react-router-dom';
import Classes from '../components/Dashboard'; 
import Nav from '../components/Nav'; 

const ClassesPage = () => {
	const dispatch = useDispatch();
	const classes = useSelector((state) => state.classes.data);
	const loading = useSelector((state) => state.classes.loading);
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchClasses());
	}, [dispatch, id]);

	
	const handleSignUp = (lessonId) => {
	
		console.log(`Sign up for class with ID: ${lessonId}`);
	};

	return (
		<>
			<Nav />
			{loading ? (
				<Box>Loading...</Box>
			) : (
				<Box>
					{Array.isArray(classes) && classes.length > 0 ? (
						<Wrap spacing='10px' justify='center' minHeight='80vh' mx={{ base: '12', md: '20', lg: '32' }}>
							{classes.map((classItem) => (
								<WrapItem key={classItem._id}>
									<Center w='296px' h='390px'>
										
										<Classes lesson={classItem} loading={false} onSignUp={handleSignUp} />
									</Center>
								</WrapItem>
							))}
						</Wrap>
					) : (
						<Box>No lessons available.</Box>
					)}
				</Box>
			)}
		</>
	);
};

export default ClassesPage;
