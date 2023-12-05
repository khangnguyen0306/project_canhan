import express from "express";
import bodyParser from "body-parser";
import viewEngine from './config/viewEngine';
import initWebRoute from './route/web';
import dotenv from 'dotenv';
import connectDb from "./config/connectDB";
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoute(app);

connectDb();

const port = process.env.PORT || 9999;

app.listen(port, () => {
    console.log("Backend Node.js is running on Port: " + port);
});
