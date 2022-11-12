import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
	const products = await Product.find();
	res.send(products);
});

productRouter.get(
	"/filters",
	expressAsyncHandler(async (req, res) => {
		const categories = await Product.find().distinct("category");
		const brands = await Product.find().distinct("brand");
		res.send({ categories: categories, brands: brands });
	})
);

const PAGE_SIZE = 6;
productRouter.get(
	"/search",
	expressAsyncHandler(async (req, res) => {
		const { query } = req;
		console.log(query);
		const pageSize = query.pageSize || PAGE_SIZE;
		const page = query.page || 1;
		const category = query.category || "";
		const brand = query.brand || "";
		const price = query.price || "";
		const order = query.order || "";
		const searchQuery = query.query || "";

		const queryFilter =
			searchQuery && searchQuery !== "all"
				? {
						name: {
							$regex: searchQuery,
							$options: "i",
						},
				  }
				: {};
		const categoryFilter = category && category !== "all" ? { category } : {};
		const brandFilter = brand && brand !== "all" ? { brand } : {};
		const priceFilter =
			price && price !== "all"
				? {
						// 1-50
						price: {
							$gte: Number(price.split("-")[0]),
							$lte: Number(price.split("-")[1]),
						},
				  }
				: {};
		const sortOrder =
			order === "featured"
				? { featured: -1 }
				: order === "lowest"
				? { price: 1 }
				: order === "highest"
				? { price: -1 }
				: order === "toprated"
				? { rating: -1 }
				: order === "newest"
				? { createdAt: -1 }
				: { _id: -1 };

		const products = await Product.find({
			...queryFilter,
			...categoryFilter,
			...brandFilter,
			...priceFilter,
		})
			.sort(sortOrder)
			.skip(pageSize * (page - 1))
			.limit(pageSize);

		const countProducts = await Product.countDocuments({
			...queryFilter,
			...categoryFilter,
			...brandFilter,
			...priceFilter,
		});
		res.send({
			products,
			countProducts,
			page,
			pages: Math.ceil(countProducts / pageSize),
		});
	})
);

productRouter.get("/:slug", async (req, res) => {
	const product = await Product.findOne({ slug: req.params.slug });

	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: "Product Not Found" });
	}
});

export default productRouter;
