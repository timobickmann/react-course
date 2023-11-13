import axios from "axios";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { IEmployee } from "../interfaces";

export const PageSimpleForm = () => {
	const navigate = useNavigate();

	const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const employee: Omit<IEmployee, "id"> = {
			...Object.fromEntries(formData),
			age: Number(formData.get("age")),
		} as Omit<IEmployee, "id">;

		try {
			const response = await axios.post(
				"http://localhost:3021/employees",
				employee,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			if (response.status === 201) {
				navigate("/info");
			} else {
				console.log(`ERROR: ${response.status}`);
			}
		} catch (error) {
			if (axios.isAxiosError(error))
				console.error(
					"Axios error:",
					error.response?.data || error.message
				);
			else console.error(error);
		}
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<fieldset className="border border-gray-500 p-4 w-full sm:w-40 rounded">
				<legend>New Employee</legend>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="firstName">
						First Name:
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						required
					/>
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="lastName">
						Last Name:
					</label>
					<input type="text" id="lastName" name="lastName" required />
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="age">
						Age:
					</label>
					<input type="number" id="age" name="age" required />
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="hireDate">
						Hire Date:
					</label>
					<input type="date" id="hireDate" name="hireDate" required />
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="employeeNumber">
						Employee Number:
					</label>
					<div>
						<input
							type="text"
							id="employeeNumber"
							name="employeeNumber"
							pattern="^[DSM]-\d{4}$"
							required
						/>
						<p className="text-sm">e.g. D-2832, S-7771, M-8123</p>
					</div>
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="notes">
						Notes:
					</label>
					<textarea id="notes" name="notes"></textarea>
				</div>

				<div className="mt-5 flex justify-end pr-3">
					<button>Add Employee</button>
				</div>
			</fieldset>
		</form>
	);
};
