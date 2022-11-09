import React from "react";
import { StyledSignIn } from "./StyledSignIn";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useLocation } from "react-router-dom";
import { schema1, schema2 } from "../../utils/schema";

function Form({ submitHandler, redirect }) {
	const { pathname } = useLocation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver:
			pathname === "/signin" ? yupResolver(schema2) : yupResolver(schema1),
	});

	return (
		<StyledSignIn>
			<form onSubmit={handleSubmit(submitHandler)}>
				{pathname === "/signup" || pathname === "/profile" ? (
					<label>
						<p>Name</p>
						<input type="text" {...register("name")} />
						<p className="form-error">{errors.name?.message}</p>
					</label>
				) : null}
				<label>
					<p>Email</p>
					<input type="text" {...register("email")} />
					<p className="form-error">{errors.email?.message}</p>
				</label>
				<label>
					<p>Password</p>
					<input type="password" {...register("password")} />
					<p className="form-error">{errors.password?.message}</p>
				</label>
				{pathname === "/signup" || pathname === "/profile" ? (
					<label>
						<p>Confirm Password</p>
						<input type="password" {...register("confirmPassword")} />
						<p className="form-error">{errors.confirmPassword?.message}</p>
					</label>
				) : null}
				{pathname === "/signin" ? (
					<button>Sign In</button>
				) : pathname === "/signup" ? (
					<button>Sign Up</button>
				) : (
					<button>Update</button>
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
