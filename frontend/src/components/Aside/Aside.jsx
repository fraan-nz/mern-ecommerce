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
							className={"all" === category ? "active" : ""}
							to={getFilterUrl({ category: "all" })}
						>
							Any
						</Link>
					</li>
					{categories &&
						categories.map((cat) => (
							<li key={cat}>
								<Link
									className={cat === category ? "active" : ""}
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
							className={"all" === brand ? "active" : ""}
							to={getFilterUrl({ brand: "all" })}
						>
							Any
						</Link>
					</li>
					{brands &&
						brands.map((bb) => (
							<li key={bb}>
								<Link
									className={bb === brand ? "active" : ""}
									to={getFilterUrl({ brand: bb })}
								>
									{bb}
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
							className={"all" === price ? "active" : ""}
							to={getFilterUrl({ price: "all" })}
						>
							Any
						</Link>
					</li>
					{prices.map((p) => (
						<li key={p.value}>
							<Link
								to={getFilterUrl({ price: p.value })}
								className={p.value === price ? "active" : ""}
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
