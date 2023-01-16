// Base file for starting server and setting up port//

import setRoute from './routes'
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';

const MongoClient = require('mongodb').MongoClient;

// const user = new userModel()

dotenv.config();

const bodyparser = require('body-parser')

const app = express()

const PORT = process.env.PORT || 3000;

// Use this before setting routes
app.use(bodyparser.json())



app.use(cors());


mongoose.connect("mongodb+srv://ShadyNitesh:gnvNPf9NinliZUOO@searchable.uhorhow.mongodb.net/?retryWrites=true&w=majority")

setRoute(app)

app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`)
});
