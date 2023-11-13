import employeesData from "../data/db.json";

export const PageEmployees = () => {
	const employees = employeesData.employees;
	return (
		<div className="relative overflow-x-auto mt-4 rounded w-full">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							ID
						</th>
						<th scope="col" className="px-6 py-3">
							First Name
						</th>
						<th scope="col" className="px-6 py-3">
							Last Name
						</th>
						<th scope="col" className="px-6 py-3">
							Age
						</th>
						<th scope="col" className="px-6 py-3">
							Hire Date
						</th>
						<th scope="col" className="px-6 py-3">
							Employee Number
						</th>
						<th scope="col" className="px-6 py-3">
							Notes
						</th>
					</tr>
				</thead>
				<tbody>
					{employees.map((employee) => {
						return (
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">{employee.id}</td>
								<td className="px-6 py-4">
									{employee.firstName}
								</td>
								<td className="px-6 py-4">
									{employee.lastName}
								</td>
								<td className="px-6 py-4">{employee.age}</td>
								<td className="px-6 py-4">
									{employee.hireDate}
								</td>
								<td className="px-6 py-4">
									{employee.employeeNumber}
								</td>
								<td className="px-6 py-4">{employee.notes}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
