import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import ShippingAdressScreen from "./screens/ShippingAdressScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Layout>
				<Routes>
					<Route path="/products/:slug" element={<ProductScreen />} />
					<Route path="/cart" element={<CartScreen />} />
					<Route path="/signin" element={<SignInScreen />} />
					<Route path="/signup" element={<SignUpScreen />} />
					<Route path="/shipping" element={<ShippingAdressScreen />} />
					<Route path="/payment" element={<PaymentScreen />} />
					<Route path="/placeorder" element={<PlaceOrderScreen />} />
					<Route path="/orders/:id" element={<OrderScreen />} />
					<Route path="/" element={<HomeScreen />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
