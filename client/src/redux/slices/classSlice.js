import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api';

const initialState = {
	data: [],
	loading: false,
	error: null,
};

export const fetchClasses = createAsyncThunk('classes/fetchClasses', async (_, { dispatch }) => {
	try {
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

const classSlice = createSlice({
	name: 'classes',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchClasses.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchClasses.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchClasses.rejected, (state, action) => {
				state.data = [];
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { fetchClassesSuccess, fetchClassesFail } = classSlice.actions;
export default classSlice.reducer;
