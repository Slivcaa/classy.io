import { Box, Wrap } from '@chakra-ui/react';
import axios from 'axios';
import Classes from '../components/Classes';
import { useEffect, useState } from 'react';

const ClassesPage = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('api/classes')
			.then((response) => {
				setData(response.data.classes);
			})
			.catch((error) => {
				console.error('Error fetching data', error);
			});
	}, []);

	return (
		<>
			{data.length > 0 && (
				<Box>
					<Wrap spacing='30px' justify='center' minHeight='80vh' mx={{ base: '12', md: '20', lg: '32' }}>
						<Classes lesson={data[0]} loading={false} />
					</Wrap>
				</Box>
			)}
		</>
	);
};

export default ClassesPage;
