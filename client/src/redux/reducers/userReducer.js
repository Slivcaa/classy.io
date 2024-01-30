const initialState = {
	user: null,
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'USER_LOGIN_SUCCESS':
			return {
				...state,
				user: action.payload,
				error: null,
			};
		case 'USER_LOGIN_FAILURE':
			return {
				...state,
				user: null,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
