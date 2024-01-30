import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import SignUpPage from './pages/SignUpPage';
import ClassesPage from './pages/ClassesPage';
import ClassDetailPage from './pages/ClassDetailPage';
import Nav from '../src/components/Nav';
import UserLoginPage from './pages/UserLoginPage';

function App() {
	return (
		<Router>
			<Provider store={store}>
				<ChakraProvider>
					<Routes>
						<Route path='/signup' element={<SignUpPage />} />
						<Route path='/dashboard' element={<ClassesPage />} />
						<Route path='/classes/:id' element={<ClassDetailPage />} />
						<Route path='/' element={<Nav />} />
						<Route path='/login' element={<UserLoginPage />} />
					</Routes>
				</ChakraProvider>
			</Provider>
		</Router>
	);
}

export default App;
