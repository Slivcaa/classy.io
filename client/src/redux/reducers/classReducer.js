import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	loading: false,
	error: null,
};

const classSlice = createSlice({
	name: 'classes',
	initialState,
	reducers: {
		fetchClassesSuccess: (state, action) => {
			state.data = action.payload;
			state.loading = false;
			state.error = null;
		},
		fetchClassesFail: (state, action) => {
			state.data = [];
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchClassesSuccess, fetchClassesFail } = classSlice.actions;
export default classSlice.reducer;
