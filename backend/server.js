import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import path from "path";

dotenv.config();

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("connected to db"))
	.catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/api/keys/paypal", (req, res) => {
	res.setDefaultEncoding(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.use("/api/seed", seedRouter);

app.use("/api/products", productRouter);

app.use("/api/users", userRouter);

app.use("/api/orders", orderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) =>
	res.sendFile(path.join(__dirname, "/frontend/dist/index.html"))
);

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
});
