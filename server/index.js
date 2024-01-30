import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import classesRoutes from './routes/classesRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/classes', classesRoutes);

app.get('/', (req, res) => {
	res.send('API is running');
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
