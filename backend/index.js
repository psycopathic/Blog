import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { connectDB } from './lib/db.js';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    connectDB();
});