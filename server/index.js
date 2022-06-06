import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import registerRoutes from './routes/register.js';
import transactionRoutes from './routes/transaction.js';


dotenv.config();


const app = express();


app.use(cors());
// app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


app.use('/transaction', transactionRoutes);
app.use('/auth', authRoutes);
app.use('/register', registerRoutes);


const PORT = process.env.PORT || 8000;
// console.log(PORT);
// console.log(process.env.CONNECTION_URL);
const CONNECTION_URL = 'mongodb+srv://nhfahim:nhfahimadmin@cluster0.3difnn9.mongodb.net/bankproject?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log('Server running on port: '+PORT)))
.catch((error) =>console.log(error.message));
// mongoose.set('useFindAndModify', false);