import React from 'react';
import { useDispatch } from 'react-redux';
import { joinClass } from '../redux/actions/ClassActions';
import { Button } from '@chakra-ui/react';

const JoinClassButton = ({ classId }) => {
	const dispatch = useDispatch();

	const handleJoin = () => {
		dispatch(joinClass(classId));
	};

	return (
		<Button colorScheme='green' onClick={handleJoin}>
			Join Class
		</Button>
	);
};

export default JoinClassButton;
