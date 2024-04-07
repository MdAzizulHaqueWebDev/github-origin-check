/** @format */

import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	console.log(location);
	const handleLoginForm = (e) => {
		e.preventDefault();
		console.log(e.target.email.value);
		const formData = new FormData(e.target);
		const email = formData.get("email");
		const password = formData.get("password");
		signIn(email, password)
			.then((res) => {
				navigate(location?.state ? location.state : "/");
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="min-h-screen bg-gray-50 p-8 space-y-4">
			<Navbar />
			<h2 className="text-3xl text-center font-bold">Login Now</h2>
			<div className="flex items-center justify-center text-center dark:bg-gray-50 dark:text-gray-800 m-8">
				<form
					onSubmit={handleLoginForm}
					className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-800 "
				>
					<label htmlFor="email" className="self-start text-xs font-semibold">
						Email
					</label>
					<input
						required
						placeholder="Type Your Email"
						id="email"
						type="email"
						name="email"
						className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
					/>
					<label
						htmlFor="password"
						className="self-start mt-3 text-xs font-semibold"
					>
						Password
					</label>
					<input
						required
						placeholder="Password"
						id="password"
						type="password"
						name="password"
						className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
					/>
					<button
						type="submit"
						className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-600 dark:text-gray-50 btn bg-black text-white btn-outline"
					>
						Login
					</button>
					<div className="flex justify-center mt-6 space-x-2 text-xs">
						<span className="dark:text-gray-600">Do not have an account ?</span>
						<Link to={"/register"}>
							{" "}
							<a
								rel="noopener noreferrer"
								className="dark:text-gray-600 link font-bold text-xs "
							>
								Register
							</a>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
