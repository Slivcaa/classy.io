import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/reducers/userReducer';

import { combineReducers } from 'redux';

import classReducer from './slices/classSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
	classes: classReducer,
	auth: authReducer,
	user: userReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
