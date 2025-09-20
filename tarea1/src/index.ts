import express from "express";
import * as dotenv from 'dotenv';
import axios from "axios";
import routes from "./app/routes";
dotenv.config();

export const API_KEY = process.env.NEWS_API_KEY;
export const url = "";
const port = 3000;
const app = express();

app.use(routes);

export const news = axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {"X-Api-Key": API_KEY}
})

app.get("", (req, res) => {
    res.send("Working...");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
