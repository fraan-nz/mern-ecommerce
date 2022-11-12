import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/fetchDataSlice";
import Product from "../components/Product/Product";
import {
	StyledGridProducts,
	StyledPaginate,
} from "../components/Product/StyledProduct";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader/Loader";
import Aside from "../components/Aside/Aside";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StyledSearchInfo } from "../components/Aside/StyledAside";

function HomeScreen() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const category = sp.get("category") || "all";
	const brand = sp.get("brand") || "all";
	const query = sp.get("query") || "all";
	const price = sp.get("price") || "all";
	const order = sp.get("order") || "newest";
	const page = sp.get("page") || 1;

	const { products, loading, pages, countProducts, error } = useSelector(
		(state) => state.fetchData
	);

	const getFilterUrl = (filter) => {
		const filterPage = filter.page || page;
		const filterCategory = filter.category || category;
		const filterBrand = filter.brand || brand;
		const filterQuery = filter.query || query;
		const filterPrice = filter.price || price;
		const sortOrder = filter.order || order;
		return `/search?category=${filterCategory}&brand=${filterBrand}&query=${filterQuery}&price=${filterPrice}&order=${sortOrder}&page=${filterPage}`;
	};

	useEffect(() => {
		dispatch(fetchData({ page, query, category, brand, price, order }));
	}, [category, order, page, price, query]);

	return (
		<>
			<Helmet>
				<title>E-commerce</title>
			</Helmet>
			{loading ? (
				<Loader />
			) : (
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
						<StyledPaginate>
							{[...Array(pages).keys()].map((x) => (
								<Link key={x + 1} to={getFilterUrl({ page: x + 1 })}>
									<button className={Number(page) === x + 1 ? "" : ""}>
										{x + 1}
									</button>
								</Link>
							))}
						</StyledPaginate>
					</div>
				</>
			)}
		</>
	);
}

export default HomeScreen;
