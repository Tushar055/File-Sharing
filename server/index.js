import express from 'express';
import router from './routes/routes.js';
import DBConnection from './database/db.js';

// frontend and backend are on two different servers so the data cannot be shared 
import cors from 'cors';    
const app = express();

app.use(cors());
app.use('/',router);


const PORT = 8000;

DBConnection();

app.listen(PORT,()=> console.log(`Server is running on ${PORT}`));