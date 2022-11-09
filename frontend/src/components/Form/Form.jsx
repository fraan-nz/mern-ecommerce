import React from "react";
import { StyledSignIn } from "../../styles/StyledSignIn";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useLocation } from "react-router-dom";
import { schema1, schema2 } from "../../utils/schema";
import { useEffect } from "react";

function Form({ submitHandler }) {
	const { search, pathname } = useLocation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver:
			pathname === "/signin" ? yupResolver(schema2) : yupResolver(schema1),
	});

	const redirectInUrl = new URLSearchParams(search).get("redirect");
	const redirect = redirectInUrl ? redirectInUrl : "/";

	return (
		<StyledSignIn>
			<form onSubmit={handleSubmit(submitHandler)}>
				{pathname === "/signup" ? (
					<label>
						<p>Name</p>
						<input type="text" {...register("name")} />
						<p>{errors.name?.message}</p>
					</label>
				) : null}
				<label>
					<p>Email</p>
					<input type="text" {...register("email")} />
					<p>{errors.email?.message}</p>
				</label>
				<label>
					<p>Password</p>
					<input type="password" {...register("password")} />
					<p>{errors.password?.message}</p>
				</label>
				{pathname === "/signup" ? (
					<label>
						<p>Confirm Password</p>
						<input type="password" {...register("confirmPassword")} />
						<p>{errors.confirmPassword?.message}</p>
					</label>
				) : null}
				{pathname === "/signin" ? (
					<button>Sign In</button>
				) : (
					<button>Sign Up</button>
				)}

				{pathname === "/signin" ? (
					<p>
						You do not have an account? <Link to={`/signup`}>Sign Up</Link>
					</p>
				) : (
					<p>
						Already have an account?{" "}
						<Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
					</p>
				)}
			</form>
		</StyledSignIn>
	);
}

export default Form;
