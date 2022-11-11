import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledSearchBox } from "./StyledNavBar";

function SearchBox() {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleSubmit = () => {
		e.preventDefault();
		navigate(query ? `/search/?query=${query}` : "/search");
	};

	return (
		<StyledSearchBox onSubmit={handleSubmit}>
			<input
				type="text"
				name="search"
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search products..."
				aria-describedby="button-search"
			/>
			<button id="button-search">B</button>
		</StyledSearchBox>
	);
}

export default SearchBox;
