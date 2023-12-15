function Employee (props){
    return <>
    <h3>Employee {props.name}</h3>
    <p>{props.role ? props.role: <p>no role</p>}</p>
    
    </> 
}

export default Employee;