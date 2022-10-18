import express from "express";
import cors from "cors";
import data from "./data/data.js";

const app = express();

app.use(cors());

app.get("/api/products", (req, res) => {
	res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
});
