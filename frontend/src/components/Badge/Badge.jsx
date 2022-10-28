import React from "react";
import { StyledBadge } from "./StyledBadge";

function Badge({ inCart }) {
	return (
		<StyledBadge>
			<span>{inCart}</span>
		</StyledBadge>
	);
}

export default Badge;
