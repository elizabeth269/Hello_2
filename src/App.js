import { useState } from "react";
import "./index.css";
import Employee from "./components/Employee";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
// import EditEmployee from "./components/EditEmployee";
import employeeList from "./constants/employeeList.json";

function App() {
	const [role, setRole] = useState("dev");
	const [employees, setEmployees] = useState(employeeList);

	function updateEmployee(id, newName, newRole) {
		console.log("Updating employee", id, newName, newRole);
		const updatedEmployees = employees.map((employee) => {
			if (id === employee.id) {
				return { ...employee, name: newName, role: newRole };
			}
			return employee;
		});
		setEmployees(updatedEmployees);
	}
	function newEmployee(name, role, img) {
		console.log("adding a new employee", name, role, img);
		const newEmployee = {
			id: uuidv4(),
			name: name,
			role: role,
			img: img,
		};
		setEmployees([...employees, newEmployee]);
	}
	const showEmployees = true;
	return (
		<div className='App'>
			{showEmployees ? (
				<div className='flex flex-wrap justify-center'>
					<input
						type='text'
						onChange={(e) => {
							// console.log(e.target.value);
							setRole(e.target.value);
						}}
					/>

					<div className='flex flex-wrap justify-center'>
						{employees.map((employee) => {
							// const editEmployee = <EditEmployee />;
							return (
								<Employee
									key={employee.id}
									id={employee.id}
									name={employee.name}
									role={employee.role}
									img={employee.img}
									updateEmployee={updateEmployee}
								/>
							);
						})}
					</div>
					<AddEmployee newEmployee={newEmployee} />
				</div>
			) : (
				<p>you cannot see the employees</p>
			)}
		</div>
	);
}
export default App;
