import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js"
import cors from 'cors';

const app = express();
dotenv.config();
app.use(cors());

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI

//connect to mongodb server
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("connected to mongodb server");
} catch (error) {
    console.log("Error: " , error);
}

//defining Routes

app.use('/books', bookRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})