import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledAside, StyledFilter } from "./StyledAside";

const prices = [
	{
		name: "$1 to $50",
		value: "1-50",
	},
	{
		name: "$51 to $200",
		value: "51-200",
	},
	{
		name: "$201 to $1000",
		value: "201-1000",
	},
];

const ratings = [
	{
		name: "4stars & up",
		rating: 4,
	},

	{
		name: "3stars & up",
		rating: 3,
	},

	{
		name: "2stars & up",
		rating: 2,
	},

	{
		name: "1stars & up",
		rating: 1,
	},
];

function Aside({ getFilterUrl, category, brand, price }) {
	const [filters, setFilters] = useState({});
	const { categories, brands } = filters;

	useEffect(() => {
		const fetchFilters = async () => {
			try {
				const { data } = await axios.get(`/api/products/filters`);
				setFilters(data);
			} catch (error) {
				toast.error(error);
			}
		};
		fetchFilters();
	}, []);

	return (
		<StyledAside>
			<StyledFilter>
				<h3>Category</h3>
				<ul>
					<li>
						<Link
							className={"all" === category ? "" : ""}
							to={getFilterUrl({ category: "all" })}
						>
							Any
						</Link>
					</li>
					{categories &&
						categories.map((cat) => (
							<li key={cat}>
								<Link
									className={cat === category ? "" : ""}
									to={getFilterUrl({ category: cat })}
								>
									{cat}
								</Link>
							</li>
						))}
				</ul>
			</StyledFilter>
			<StyledFilter>
				<h3>Brand</h3>
				<ul>
					<li>
						<Link
							className={"all" === brand ? "" : ""}
							to={getFilterUrl({ brand: "all" })}
						>
							Any
						</Link>
					</li>
					{brands &&
						brands.map((brand) => (
							<li key={brand}>
								<Link
									className={brand === brand ? "" : ""}
									to={getFilterUrl({ brand: brand })}
								>
									{brand}
								</Link>
							</li>
						))}
				</ul>
			</StyledFilter>

			<StyledFilter>
				<h3>Price</h3>
				<ul>
					<li>
						<Link
							className={"all" === price ? "" : ""}
							to={getFilterUrl({ price: "all" })}
						>
							Any
						</Link>
					</li>
					{prices.map((p) => (
						<li key={p.value}>
							<Link
								to={getFilterUrl({ price: p.value })}
								className={p.value === price ? "" : ""}
							>
								{p.name}
							</Link>
						</li>
					))}
				</ul>
			</StyledFilter>
		</StyledAside>
	);
}

export default Aside;
