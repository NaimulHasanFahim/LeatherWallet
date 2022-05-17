import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import registerRoutes from './routes/register.js';

const dotenv1 = dotenv.config();
const port = 5000;


const app = express();

const corsOptions = {
    credentials:true,
    optionSuccessStatus: 200,
    origin :  'http://localhost:3000',

}

app.use(cors());
// app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


app.use('/auth', authRoutes);
app.use('/register', registerRoutes);


const CONNECTION_URL = 'mongodb+srv://webprojectadmin:webprojectadmin@webproject.pyify.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(()=> app.listen(PORT, ()=> console.log(`Server running on port : ${PORT}`))).catch((error)=>console.log(error.message));