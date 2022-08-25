import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import registerRoutes from './routes/register.js';
import transactionRoutes from './routes/transaction.js';


const app = express();
dotenv.config();


app.use(cors());
// app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


app.use('/api/transaction', transactionRoutes);
app.use('/api/user', authRoutes);
app.use('/api/register', registerRoutes);


const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log('Server running on port: '+PORT)))
.catch((error) =>console.log(error.message));
// mongoose.set('useFindAndModify', false);