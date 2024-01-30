import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signup: (state, action) => {
			state.user = action.payload;
		},
		login: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { signup, login } = authSlice.actions;
export default authSlice.reducer;
