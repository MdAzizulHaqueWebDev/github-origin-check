/** @format */

import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
const {createUser} = useContext(AuthContext)

	const handleRegisterForm = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const username = formData.get("username");
		const email = formData.get("email");
		const photoUrl = formData.get("photoUrl");
		const password = formData.get("password");
        console.log(username,email,photoUrl,password)
createUser(email,password)
.then(res => {
console.log(res.user)
})
.catch(error => {
console.log(error)
})

	};

	return (
		<div>
			<div className="min-h-screen bg-gray-50 p-8 space-y-4 ">
				<Navbar />

				<h2 className="text-3xl text-center font-bold">
					Register your account
				</h2>
				<div className="flex items-center justify-center text-center dark:bg-gray-50 dark:text-gray-800">
					<form
						onSubmit={handleRegisterForm}
						className="flex flex-col w-full max-w-lg space-y-2 p-12 rounded shadow-lg dark:text-gray-800 "
					>
						<label
							htmlFor="Username"
							className="self-start text-xs font-semibold"
						>
							UserName
						</label>
						<input
							required
							placeholder="Enter Your name"
							id="username"
							type="text"
							name="username"
							className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
						/>
						<label
							htmlFor="PhotoUrl"
							className="self-start text-xs font-semibold"
						>
							Photo Url
						</label>
						<input
							required
							placeholder="Enter Your PhotoUrl"
							id="photoUrl"
							type="text"
							name="photoUrl"
							className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
						/>
						<label htmlFor="email" className="self-start text-xs font-semibold">
							Email
						</label>
						<input
							required
							placeholder="Enter Your Email"
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
							Register
						</button>
						<div className="flex justify-center mt-6 space-x-2 text-xs">
							<span className="dark:text-gray-600">Have an account ?</span>
							<Link to={"/login"}>
								{" "}
								<a
									rel="noopener noreferrer"
									className="dark:text-gray-600 link font-bold text-xs "
								>
									Login
								</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
