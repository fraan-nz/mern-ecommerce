import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import data from "./data/data.js";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("connected to db"))
	.catch((err) => console.log(err));

const app = express();

app.use(cors());

app.use("/api/seed", seedRouter);

app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
});
