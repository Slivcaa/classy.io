// Import dotenv to load environment variables
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import axios from 'axios';

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL + '/classes';
// Disable SSL certificate validation
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const classesRoutes = express.Router();

const getClasses = async (req, res) => {
	try {
		// Add logging to check environment variables
		console.log('API_KEY:', process.env.API_KEY);
		console.log('API_URL:', process.env.API_URL);

		// Fetch data from the external API with the custom header
		const response = await axios.get(apiUrl, {
			headers: {
				optimist_api_key: apiKey,
			},
		});

		const classes = response.data;

		res.json({
			classes,
			pagination: {},
		});
	} catch (error) {
		// Improve error handling to provide more information
		console.error('Error fetching classes:', error.response ? error.response.data : error.message);
		res.status(500).send('Internal Server Error');
	}
};

classesRoutes.route('/').get(getClasses);

export default classesRoutes;
