import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SearchBox from "./SearchBox";
import { SearchMenu, FiltersMenu } from "./StyledNavBar";

function SearchMenuNav() {
	const [filtersOpen, setFiltersOpen] = useState(false);
	const [filters, setFilters] = useState({});

	const { categories, brands } = filters;

	const handleOpenFilters = () => {
		setFiltersOpen((open) => !open);
	};

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const { data } = await axios.get(`/api/products/filters`);
				setFilters(data);
			} catch (error) {
				toast.error(error);
			}
		};
		fetchCategories();
	}, []);

	return (
		<SearchMenu>
			<SearchBox />
			<button onClick={handleOpenFilters}>Filters</button>
			<FiltersMenu isOpen={filtersOpen}>
				<span>Category :</span>
				{categories &&
					categories.map((cat) => (
						<li key={cat}>
							<Link to={`/search?category=${cat}`}>{cat}</Link>
						</li>
					))}
				<span>Brand :</span>
				{brands &&
					brands.map((brand) => (
						<li key={brand}>
							<Link to={`/search?brand=${brand}`}>{brand}</Link>
						</li>
					))}
			</FiltersMenu>
		</SearchMenu>
	);
}

export default SearchMenuNav;
