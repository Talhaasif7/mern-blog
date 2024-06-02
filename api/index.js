import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'


dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDb is connected');
    })
    .catch((err) => {
        console.log(err);
    });


app.listen(port, () => {
    console.log("App listening on port 3000 ");
})


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error!';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })

})