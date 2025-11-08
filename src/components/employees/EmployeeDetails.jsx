import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../../services/employeeService"
import "./Employee.css"

export const EmployeeDetails = () => {
    // /employee/3
    // path="/employees/:employeeId"
    const [employee, setEmployee] = useState({})
    const { employeeId } = useParams() // { employeeId: 3 }


    useEffect(() => {
        getEmployeeByUserId(employeeId).then((data) => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    }, [employeeId])


    return <section className="employee">
        <header className="employee-header">{employee.user?.fullName}</header>
        <div>
            <span className="employee-info">Email : </span>
            {employee.user?.email}
        </div>
        <div>
            <span className="employee-info">Specialty : </span>
            {employee.specialty}
        </div>
        <div>
            <span className="employee-info">Rate : $</span>
            {employee.rate}
        </div>
        <div>
            <span className="employee-info"></span>
            Currently working on {employee.employeeTickets?.length || 0} tickets
        </div>
    </section>


}