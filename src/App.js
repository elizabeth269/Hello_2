import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      <input type='text' onChange={(e) => {console.log(e.target.value)
      setRole(e.target.value)}}/>
      {showEmployees ? (<div className='flex flex-wrap justify-center'>
        <Employee name='caleb' role='dev' img= 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'/>
        <Employee  name='card' role='green' img= 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'/>
        <Employee name='abby' role={role} img= 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'/>
        <Employee  name='card' role='green' img= 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'/>
        <Employee name='abby' role={role} img= 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'/>
        <Employee  name='card' role='green' img= 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'/>
        <Employee name='abby' role={role} img= 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'/>
        <Employee name='abby' role={role} img= 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'/>
        <Employee name='abby' role={role} img= 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'/>
        <Employee/></div>): <>you cannot see the employees</>}
        
    </div>
  );
}

export default App;
