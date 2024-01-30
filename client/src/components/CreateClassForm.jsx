import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createClass } from '../redux/actions/ClassActions';
import { Input, Button, Heading, FormControl, FormLabel } from '@chakra-ui/react';

const CreateClassForm = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		classname: '',
		description: '',
		date: '',
		location: '',
		no_of_places: 0,
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createClass(formData));
	};

	return (
		<div>
			<Heading as='h2' size='xl' mb='4'>
				Create Class
			</Heading>
			<form onSubmit={handleSubmit}>
				<FormControl mb='4'>
					<FormLabel>Class Name</FormLabel>
					<Input type='text' name='classname' onChange={handleChange} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Description</FormLabel>
					<Input type='text' name='description' onChange={handleChange} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Date</FormLabel>
					<Input type='text' name='date' onChange={handleChange} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Location</FormLabel>
					<Input type='text' name='location' onChange={handleChange} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Maximum Capacity</FormLabel>
					<Input type='number' name='no_of_places' onChange={handleChange} />
				</FormControl>
				<Button type='submit' colorScheme='blue'>
					Create Class
				</Button>
			</form>
		</div>
	);
};

export default CreateClassForm;
