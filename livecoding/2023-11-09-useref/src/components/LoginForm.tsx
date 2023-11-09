import { useState, useRef } from "react";
import * as config from "../config";

const initialFormData = {
	login: "",
	password: "",
};

export const LoginForm = ({
	setIsLoggedIn,
}: {
	setIsLoggedIn: (isLoggedIn: boolean) => void;
}) => {
	const [formData, setFormData] = useState(initialFormData);
	const [legend, setLegend] = useState("Please log in");
	const inputLoginRef = useRef<HTMLInputElement>(null);
	const passwortLoginRef = useRef<HTMLInputElement>(null);

	const handleChange = (fieldName: string, value: string) => {
		setFormData({
			...formData,
			[fieldName]: value,
		});
	};

	const handleFormSubmit = () => {
		if (formData.login !== config.user.login) {
			setLegend("You shall not pass!");
			inputLoginRef.current?.focus();
		}

		if (formData.password !== config.user.password) {
			setLegend("You shall not pass!");
			passwortLoginRef.current?.focus();
		}

		if (
			formData.login === config.user.login &&
			formData.password === config.user.password
		) {
			setIsLoggedIn(true);
		}
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<fieldset className="grid gap-6 mb-6 md:grid-cols-2 rounded bg-slate-500/50 p-5">
				<legend>{legend}</legend>

				<div>
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="login"
					>
						Login:
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value={formData.login}
						onChange={(e) => handleChange("login", e.target.value)}
						type="text"
						id="login"
						autoFocus={true}
						ref={inputLoginRef}
					/>
				</div>

				<div>
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="password"
					>
						Password:
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={formData.password}
						onChange={(e) =>
							handleChange("password", e.target.value)
						}
						type="password"
						id="password"
						ref={passwortLoginRef}
					/>
				</div>

				<button className="place-self-end">Time to run!</button>
			</fieldset>
		</form>
	);
};
