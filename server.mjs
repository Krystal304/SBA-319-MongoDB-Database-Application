//imports

import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/conn.mjs';


//setup
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001

//db connection
connectDB()

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

//routes

//listener

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});
