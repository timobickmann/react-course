import employees from "./data/employees.json";
import dayjs from "dayjs";
import * as config from "./config";
import cityscape from "./images/cityscape.avif";

function App() {
  const title = "Employee Site";
  const introText = "Welcome to the employee site";
  return (
    <>
      <h1 className="text-3xl mb-3">{title}</h1>
      <p>{introText}</p>
      <img className="h-60" src={cityscape} alt="Cityscape" />
      <div>
        {employees.map((employee) => (
          <div
            className="mt-3 bg-slate-700 p-3 rounded-lg"
            key={employee.employeeID}
          >
            <div className="flex gap-2 pb-2">
              <img
                className="w-40 rounded-lg"
                src={`images/employees/employee_${employee.employeeID}.jpg`}
              />
              <div>
                <h2 className="font-bold">
                  {employee.firstName} {employee.lastName}
                </h2>
                <p className="italic text-slate-900">{employee.title}</p>
                {config.accessGroup === "admin" && (
                  <>
                    <p className="text-red-950">{employee.address.phone}</p>
                    <p className="text-slate-900">
                      {dayjs(employee.birthDate).format("MMM DD YYYY")}
                    </p>
                  </>
                )}
              </div>
            </div>
            <p>{employee.notes}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
