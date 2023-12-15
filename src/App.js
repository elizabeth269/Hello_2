import { useState } from 'react';
import './App.css';
import Employee from './components/Employee';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      <input type='text' onChange={(e) => {console.log(e.target.value)
      setRole(e.target.value)}}/>
      {showEmployees ? (<><Employee/>
        <Employee name='caleb' role='dev'/>
        <Employee  name='card' role='green'/>
        <Employee name='abby' role={role}/>
        <Employee/>
        <Employee/></>): <>you cannot see the employees</>}
        
    </div>
  );
}

export default App;
