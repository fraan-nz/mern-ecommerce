import React from "react";
import { StyledLoader } from "./StyledLoader";

function Loader() {
	return (
		<StyledLoader>
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</StyledLoader>
	);
}

export default Loader;
