import React from 'react';
import { connect } from 'react-redux';
import UserLogin from '../components/UserLogin';

const LoginPage = ({ user }) => {
	return (
		<div>
			<UserLogin />
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.user.user,
	error: state.user.error,
});

export default connect(mapStateToProps)(LoginPage);
