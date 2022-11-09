import * as yup from "yup";

export const schema1 = yup
	.object({
		name: yup.string().required("Name is required"),
		email: yup.string().email("Invalid email").required("Email is required"),
		password: yup.string().required("Password is required"),
		confirmPassword: yup
			.string()
			.required("Password is required")
			.oneOf([yup.ref("password")], "Your passwords do not match"),
	})
	.required();

export const schema2 = yup
	.object({
		email: yup.string().email("Invalid email").required("Email is required"),
		password: yup.string().required("Password is required"),
	})
	.required();
