import express from 'express';
import axios from 'axios';

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL + '/classes';
const classesRoutes = express.Router();

const fetchClassesFromExternalAPI = async () => {
	const response = await axios.get(apiUrl, {
		headers: {
			optimist_api_key: apiKey,
		},
	});

	return response.data;
};

const getClasses = async (req, res) => {
	try {
		const classes = await fetchClassesFromExternalAPI();

		res.json({
			classes,
			pagination: {},
		});
	} catch (error) {
		console.error('Error fetching classes:', error.response ? error.response.data : error.message);
		res.status(500).json({
			error: error.message,
		});
	}
};

classesRoutes.route('/').get(getClasses);

export default classesRoutes;
