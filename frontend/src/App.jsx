import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Layout>
				<Routes>
					<Route path="/product/:slug" element={<ProductScreen />} />
					<Route path="/cart" element={<CartScreen />} />
					<Route path="/" element={<HomeScreen />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
