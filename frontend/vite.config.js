import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api/orders": "http://localhost:5000/",
			"/api/products": "http://localhost:5000/",
			"/api/users": "http://localhost:5000/",
		},
	},
});
