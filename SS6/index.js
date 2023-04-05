import express from 'express';
import dbConnect from './config/db/index.js';
import restaurentRouter from './routes/restaurentRouter.js';

const app = express(); 
dbConnect();

app.use('/restaurent', restaurentRouter);

app.listen(8080, () => {
    console.log('app listening on port 8080!!!')
})