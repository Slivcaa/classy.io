import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api';

export const createClass = createAsyncThunk('classes/createClass', async (id, { dispatch }) => {
	try {
		const response = await axiosInstance.post(`https://testproject.optimistinc.com/api/classes/${id}`);
		return response.data;
	} catch (error) {
		throw new Error(error.message);
	}
});

// Action to fetch all classes
export const fetchClasses = createAsyncThunk('classes/fetchClasses', async (_, { dispatch }) => {
	try {
		// Make a GET request to fetch all classes
		const response = await axiosInstance.get('https://testproject.optimistinc.com/api/classes', {
			headers: {
				optimist_api_key: 'lKKWvthyNiEp7GaZ2zqh',
			},
		});

		console.log('API Response (fetchClasses):', response.data);

		return response.data;
	} catch (error) {
		console.error('Error in fetchClasses:', error);
		throw new Error(error.message);
	}
});

// Action to delete a class
export const deleteClass = createAsyncThunk('classes/deleteClass', async (classId, { dispatch }) => {
	try {
		await axiosInstance.delete(`https://testproject.optimistinc.com/api/class/${classId}`);
		return classId;
	} catch (error) {
		console.error('Error deleting class:', error);

		throw new Error(error.message);
	}
});

// Action to join a class
export const joinClass = createAsyncThunk('classes/joinClass', async (classId, { dispatch }) => {
	try {
		await axiosInstance.post(`https://testproject.optimistinc.com/api/class/join/${classId}`);
		return classId;
	} catch (error) {
		console.error('Error joining class:', error);

		throw new Error(error.message);
	}
});

// Action to unsubscribe from a class
export const unsubscribeFromClass = createAsyncThunk('classes/unsubscribeFromClass', async (classId, { dispatch }) => {
	try {
		await axiosInstance.post(`https://testproject.optimistinc.com/api/class/unsubscribe/${classId}`);
		return classId;
	} catch (error) {
		console.error('Error unsubscribing from class:', error);

		throw new Error(error.message);
	}
});
