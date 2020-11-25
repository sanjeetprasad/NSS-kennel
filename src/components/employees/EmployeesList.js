import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import { Employee } from "./Employees"
import "./Employees.css"
import { LocationContext } from "../location/LocationProvider"

export const EmployeeList = () => {
    // This state changes when `getLocations()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
    const {locations, getLocations } = useContext(LocationContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getLocations()
        .then(getEmployees)
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    // useEffect(() => {
    //     console.log("CustomerList: Location state changed")
    //     console.log(employees)
    // }, [employees])

//     return (
//         <div className="employees"> {

//             employees.map(singleEmployee => <Employee key={singleEmployee.id} employee={singleEmployee} />)
//         }
//         </div>
//     )
// }

return (
    <div className="employees"> {
        employees.map(employee => {
            const location = locations.find(l => l.id === employee.locationId)

            return <Employee key={employee.id} employee={employee} location={location} />
        }

        )
    }

    </div>
)
}





