import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { HelmetProvider } from "react-helmet-async";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<HelmetProvider>
					<PayPalScriptProvider
					// deferLoading={true}
					// options={{
					// 	"client-id": "test",
					// 	components: "buttons",
					// 	currency: "USD",
					// }}
					>
						<App />
					</PayPalScriptProvider>
				</HelmetProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
