import React from 'react';
import { useDispatch } from 'react-redux';
import { unsubscribeFromClass } from '../redux/actions/ClassActions';
import { Button } from '@chakra-ui/react';

const UnsubscribeFromClassButton = ({ classId }) => {
	const dispatch = useDispatch();

	const handleUnsubscribe = () => {
		dispatch(unsubscribeFromClass(classId));
	};

	return (
		<Button colorScheme='orange' onClick={handleUnsubscribe}>
			Unsubscribe
		</Button>
	);
};

export default UnsubscribeFromClassButton;
