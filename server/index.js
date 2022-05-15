import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';


const dotenv1 = dotenv.config();
const port = 5000;

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://webprojectadmin:webprojectadmin@webproject.pyify.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(()=> app.listen(PORT, ()=> console.log(`Server running on port : ${PORT}`))).catch((error)=>console.log(error.message));