import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteClass } from '../redux/actions/ClassActions';
import { Button } from '@chakra-ui/react';

const DeleteClassButton = ({ classId }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteClass(classId));
	};

	return (
		<Button colorScheme='red' onClick={handleDelete}>
			Delete Class
		</Button>
	);
};

export default DeleteClassButton;
