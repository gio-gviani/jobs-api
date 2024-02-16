import { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
	const [email, setEmail] = useState("");
	const [api, setAPI] = useState(undefined);
	const [counter, setCounter] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (localStorage) {
			if (localStorage.getItem("email") === email) {
				alert("Email has already been used");
			} else {
				try {
					const body = JSON.stringify(email);
					const response = await axios.post(
						"https://jobs-api-server.vercel.app/register",
						{
							email: email,
						}
					);
					setAPI(response.data.data.api_key);
					setCounter(60);
					localStorage.setItem("email", email);
				} catch (err) {
					console.log(err);
				} finally {
					setEmail("");
				}
			}
		} else {
			alert("Your Browser Not Supported");
		}
	};

	useEffect(() => {
		counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
	}, [counter]);

	return (
		<section className="">
			<h1 className="text-white pb-10 text-[2rem] xl:text-[4rem] xl:mt-[10rem]">
				Get your API Key for free now!
			</h1>
			<p className="text-teal-200 pb-10 text-[1rem] xl:text-[2rem]">
				Explore the potential to provide valuable insights into the job market,
				help job seekers tailor their applications, streamline the hiring
				process for companies and recruiters, and improve the efficiency and
				effectiveness of the job market as a whole.
			</p>
			{api && counter ? (
				<div className="bg text-white xl:mb-[8rem] xl:mt-[4rem] w-fit m-auto">
					<h2 className="mb-2 text-lg">
						Your API Key will be displayed here for {counter} seconds
					</h2>
					<div className="border-solid border-teal-200 border-[4px] p-3 text-[1.5rem]">
						<h3>{api}</h3>
					</div>
				</div>
			) : (
				<form className="shadow-md backdrop-blur-md w-fit m-auto xl:mb-[8rem] xl:mt-[4rem]">
					<div className="">
						<input
							className="bg-transparent border-[4px] border-solid border-teal-200 p-3 text-white text-[1rem] sm:text-[1.5rem] focus:outline-0 focus:ring-0"
							placeholder="Enter your Email here: "
							type="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.currentTarget.value)}
							pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
							required
						/>
						<input
							className="bg-teal-200 cursor-pointer text-[1rem] sm:text-[1.5rem] p-4 text-black font-bold my-4 sm:my-0"
							type="submit"
							value="Submit"
							id="submit"
							onClick={handleSubmit}
						/>
					</div>
				</form>
			)}
		</section>
	);
};

export default Register;
