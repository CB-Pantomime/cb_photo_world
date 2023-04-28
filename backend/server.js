
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import connectDB from './config/db.js';
import gradient from 'gradient-string';
import cors from 'cors';
// middleware
import requestLogger from './middleware/requestLogger.js';

// routes
import imageRoutes from './routes/imageRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// helmet also includes .hidePoweredBy()
app.disable('X-Powered-By');

// The top-level helmet function is a wrapper around 14 smaller middlewares
app.use(helmet());

// log all requests
app.use(requestLogger);

// routes
app.use('/api/v1', imageRoutes);

// app.get('/', (req, res) => {
//     res.send('application programming interface is running...')
// });

app.listen(PORT, console.log(gradient.pastel(
    `***** Server running in ${process.env.NODE_ENV} mode on port ${PORT} *****`
)));