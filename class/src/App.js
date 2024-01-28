import { ChakraProvider } from '@chakra-ui/react';
import ClassesPage from './pages/ClassesPage';

function App() {
	return (
		<ChakraProvider>
			<div style={{ fontFamily: 'Hind, sans-serif', backgroundColor: '#F5F5F5' }}>{<ClassesPage />}</div>
		</ChakraProvider>
	);
}

export default App;

