export const login = (formData) => async (dispatch) => {
	try {
		const response = await fetch('https://testproject.optimistinc.com/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			const user = await response.json();

			dispatch({ type: 'USER_LOGIN_SUCCESS', payload: user });
		} else {
			const errorData = await response.json();
			dispatch({ type: 'USER_LOGIN_FAILURE', payload: errorData });
		}
	} catch (error) {
		console.error('Error during login:', error);
	}
};
