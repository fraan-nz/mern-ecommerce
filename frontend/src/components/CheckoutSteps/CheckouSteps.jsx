import React from "react";
import { StyledSteps } from "./StyledSteps";

function CheckouSteps(props) {
	console.log(props);
	return (
		<StyledSteps>
			<div className={props.step1 ? "active" : ""}>Sign In</div>
			<div className={props.step2 ? "active" : ""}>Shipping</div>
			<div className={props.step3 ? "active" : ""}>Payment</div>
			<div className={props.step4 ? "active" : ""}>Place Order</div>
		</StyledSteps>
	);
}

export default CheckouSteps;
