import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signup = createAsyncThunk('auth/signup', async (userData, { dispatch }) => {
	try {
		const response = await axios.post('https://testproject.optimistinc.com/api/signup', userData);
		return response.data;
	} catch (error) {
		throw new Error(error.message);
	}
});

// Action to log in an existing user
export const login = createAsyncThunk('auth/login', async (userData, { dispatch }) => {
	try {
		const response = await axios.post('https://testproject.optimistinc.com/api/login', userData);
		return response.data;
	} catch (error) {
		throw new Error(error.message);
	}
});
