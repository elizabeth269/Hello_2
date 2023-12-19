import { useState } from "react";
import "./index.css";
import Employee from "./components/Employee";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [role, setRole] = useState("dev");
	const [employees, setEmployees] = useState([
		{
			id: 1,
			name: "caleb",
			role: "dev",
			img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
		},

		{
			id: 2,
			name: "caleb",
			role: "dev",
			img: "https://media.istockphoto.com/id/1327495437/photo/excited-woman-wearing-rainbow-cardigan.jpg?b=1&s=612x612&w=0&k=20&c=_YXRt77CAUp5vILnBqd7u3Gb6Z6K3fwTKp5bLfzL414=",
		},
		{
			id: 3,
			name: "caleb",
			role: "dev",
			img: "https://www.istockphoto.com/photo/beautiful-woman-smiling-with-crossed-arms-gm1289220545-384962432?utm_campaign=srp_photos_10&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhappy%2520portrait%2F&utm_medium=affiliate&utm_source=pexels&utm_term=happy%20portrait",
		},
		{
			id: 4,
			name: "caleb",
			role: "dev",
			img: "https://www.istockphoto.com/photo/beautiful-woman-smiling-with-crossed-arms-gm1289220545-384962432?utm_campaign=srp_photos_10&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhappy%2520portrait%2F&utm_medium=affiliate&utm_source=pexels&utm_term=happy%20portrait",
		},
		{
			id: 5,
			name: "caleb",
			role: "dev",
			img: "https://www.istockphoto.com/photo/beautiful-successful-latin-woman-smiling-gm1369508766-439254112?utm_campaign=srp_photos_10&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhappy%2520portrait%2F&utm_medium=affiliate&utm_source=pexels&utm_term=happy%20portrait",
		},
		{
			id: 6,
			name: "caleb",
			role: "dev",
			img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			id: 7,
			name: "caleb",
			role: "dev",
			img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			id: 8,
			name: "caleb",
			role: "dev",
			img: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
		},
		{
			id: 9,
			name: "caleb",
			role: "dev",
			img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			id: 10,
			name: "caleb",
			role: "dev",
			img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/alex-vladi-konovalov.jpg",
		},
	]);
	function updateEmployee(id, newName, newRole) {
		const updatedEmployees = employees.map((employee) => {
			if (id == employee.id) {
				return { ...employee, name: newName, role: newRole };
			}
			return employee;
		});
		setEmployees(updatedEmployees);
	}
	const showEmployees = true;
	return (
		<div className='App'>
			{showEmployees ? (
				<>
					<input
						type='text'
						onChange={(e) => {
							console.log(e.target.value);
							setRole(e.target.value);
						}}
					/>

					<div className='flex flex-wrap justify-center'>
						{employees.map((employee) => {
							console.log(employee);
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
				</>
			) : (
				<p>you cannot see the employees</p>
			)}
		</div>
	);
}
export default App;
