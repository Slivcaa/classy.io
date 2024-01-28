import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

//Routes

import classesRoutes from './routes/classesRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/classes', classesRoutes);

//localhost:5000/api/classes
const port = 5000;

app.get('/', (req, res) => {
	res.send('Api is running');
});

app.listen(port, () => {
	console.log(`Server runs on port ${port}`);
});
