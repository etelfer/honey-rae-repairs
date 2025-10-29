import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService"
import { User } from "../../users/User"
import "./Customer.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

        useEffect(() => {
            getNonStaffUsers().then((customerArray) => {
                setCustomers(customerArray)
            })
        }, [])
    

        return (
            <div className="customers">
                    <h2>Customers</h2>
                {customers.map((customerObj) => {
                    return <User user={customerObj} key={customerObj.id} />
                })}
        </div>
        )
}