import bcrypt from "bcryptjs";

const data = {
	users: [
		{
			name: "gg",
			email: "gg@gg.com",
			password: bcrypt.hashSync("123456"),
		},
		{
			name: "panda",
			email: "panda@panda.com",
			password: bcrypt.hashSync("123456"),
			isAdmin: true,
		},
	],
	products: [
		{
			name: "Nike Slim Shirt",
			slug: "nike-slim-shirt",
			category: "Shirts",
			image: "/images/p1.jpg",
			price: 120,
			countInStock: 0,
			brand: "Nike",
			rating: 4.5,
			numReviews: 10,
			description: "high quality shirt",
		},
		{
			name: "Nike Fit Shirt",
			slug: "nike-fit-shirt",
			category: "Shirts",
			image: "/images/p2.jpg",
			price: 200,
			countInStock: 10,
			brand: "Nike",
			rating: 4,
			numReviews: 15,
			description: "high quality shirt",
		},
		{
			name: "Nike Slim Pant",
			slug: "nike-slim-pant",
			category: "Pants",
			image: "/images/p3.jpg",
			price: 80,
			countInStock: 7,
			brand: "Nike",
			rating: 4.5,
			numReviews: 8,
			description: "high quality shirt",
		},
		{
			name: "Adidas Fit Pant",
			slug: "adidas-fit-pant",
			category: "Pants",
			image: "/images/p4.jpg",
			price: 70,
			countInStock: 9,
			brand: "Adidas",
			rating: 4.5,
			numReviews: 17,
			description: "high quality shirt",
		},
	],
};

export default data;
