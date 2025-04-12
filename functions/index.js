import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import newsRouter from "./routes/news.js";

const app = express();
app.use(cors());
dotenv.config();

app.use("/news", newsRouter);

export const api = functions.https.onRequest(app);

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
