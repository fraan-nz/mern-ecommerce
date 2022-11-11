import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchData } from "../redux/slices/fetchDataSlice";
import Aside from "../components/Aside/Aside";
import { StyledGridProducts } from "../components/Product/StyledProduct";
import Product from "../components/Product/Product";
import { StyledSearchInfo } from "../components/Aside/StyledAside";

function SearchScreen() {
	const navigate = useNavigate();
	const { search } = useLocation();
	const sp = new URLSearchParams(search); // /search?category=Shirts
	const category = sp.get("category") || "all";
	const brand = sp.get("brand") || "all";
	const query = sp.get("query") || "all";
	const price = sp.get("price") || "all";
	const rating = sp.get("rating") || "all";
	const order = sp.get("order") || "newest";
	const page = sp.get("page") || 1;
	const dispatch = useDispatch();

	const { products, loading, pages, countProducts, error } = useSelector(
		(state) => state.fetchData
	);

	useEffect(() => {
		dispatch(fetchData({ page, query, category, brand, price, rating, order }));
	}, [category, order, page, price, query, rating, search]);

	const getFilterUrl = (filter) => {
		const filterPage = filter.page || page;
		const filterCategory = filter.category || category;
		const filterBrand = filter.brand || brand;
		const filterQuery = filter.query || query;
		const filterRating = filter.rating || rating;
		const filterPrice = filter.price || price;
		const sortOrder = filter.order || order;
		return `/search?category=${filterCategory}&brand=${filterBrand}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
	};

	return (
		<>
			<Aside
				getFilterUrl={getFilterUrl}
				category={category}
				brand={brand}
				price={price}
			/>
			<div>
				<StyledSearchInfo>
					<div>
						{countProducts === 0 ? "No" : countProducts} Results
						{query !== "all" && " | " + query}
						{category !== "all" && " | " + category}
						{brand !== "all" && " | " + brand}
						{price !== "all" && " | Price " + price}
						{query !== "all" ||
						category !== "all" ||
						rating !== "all" ||
						price !== "all" ? (
							<button onClick={() => navigate("/search")}>X</button>
						) : null}
					</div>
					<div>
						Sort by
						<select
							value={order}
							onChange={(e) => {
								navigate(getFilterUrl({ order: e.target.value }));
							}}
						>
							<option value="newest">Newest Arrivals</option>
							<option value="lowest">Price: Low to High</option>
							<option value="highest">Price: High to Low</option>
							<option value="toprated">Avg. Customer Reviews</option>
						</select>
					</div>
				</StyledSearchInfo>
				<StyledGridProducts>
					{products.map((product) => (
						<Product product={product} key={product.slug} />
					))}
				</StyledGridProducts>
				{/* <div>
					{[...Array(pages).keys()].map((x) => (
						<Link key={x + 1} to={getFilterUrl({ page: x + 1 })}>
							<button className={Number(page) === x + 1 ? "" : ""}>
								{x + 1}
							</button>
						</Link>
					))}
				</div> */}
			</div>
		</>
	);
}

export default SearchScreen;
