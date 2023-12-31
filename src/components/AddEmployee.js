import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddEmployee(props) {
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [img, setImg] = useState("");
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<button
				onClick={handleShow}
				className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-white-200 hover:text-white 
                    hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
				+ Add Employee
			</button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Add Employee</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							props.newEmployee(name, role, img);
							setName("");
							setRole("");
							setImg("");
							handleClose();
						}}
						id='editmodal'
						className='w-full max-w-sm'>
						<div className='md:flex md:items-center mb-6'>
							<div className='md:w-1/3'>
								<label
									className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
									htmlFor='inline-full-name'>
									Full Name
								</label>
							</div>
							<div className='md:w-2/3'>
								<input
									className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
									id='inline-full-name'
									type='text'
									placeholder='Jane Doe'
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className='md:flex md:items-center mb-6'>
							<div className='md:w-1/3'>
								<label
									className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
									htmlFor='inline-password'>
									Role
								</label>
							</div>
							<div className='md:w-2/3'>
								<input
									className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
									id='inline-password'
									type='text'
									placeholder='Scrum master'
									value={role}
									onChange={(e) => {
										setRole(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className='md:flex md:items-center mb-6'>
							<div className='md:w-1/3'>
								<label
									className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
									htmlFor='inline-password'>
									img
								</label>
							</div>
							<div className='md:w-2/3'>
								<input
									className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
									id='img'
									type='text'
									placeholder='"https://images.pexels.com/photos/774909/pexels-photo-774909."'
									value={img}
									onChange={(e) => {
										setImg(e.target.value);
									}}
								/>
							</div>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<button
						onClick={handleClose}
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
						Close
					</button>
					<button
						className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
						type='submit'
						form='editmodal'>
						Add
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddEmployee;
