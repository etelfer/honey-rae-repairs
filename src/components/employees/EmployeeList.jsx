import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import { User } from "../../users/User"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
        const [employees, setEmployees] = useState([])

        useEffect(() => {
            getStaffUsers().then((employeeArray) => {
                setEmployees(employeeArray)
            })
        }, [])

        return (
            <div className="employees">
                    <h2>Employees</h2>
                {employees.map((employeeObj) => {
                    return <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
                    <User user={employeeObj} key={employeeObj.id} /> 
                    </Link>
                })}
            </div>
        )
    
}