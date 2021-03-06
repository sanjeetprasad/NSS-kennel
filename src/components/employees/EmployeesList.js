import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import { Link } from "react-router-dom"
// import { Employee } from "./Employees"
import "./Employees.css"
// import { LocationContext } from "../location/LocationProvider"


export const EmployeeList = props => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

// export const EmployeeList = (props) => {
//     // This state changes when `getLocations()` is invoked below
//     const { employees, getEmployees } = useContext(EmployeeContext)
//     const {locations, getLocations } = useContext(LocationContext)

//     /*
//         What's the effect this is reponding to? Component was
//         "mounted" to the DOM. React renders blank HTML first,
//         then gets the data, then re-renders.
//     */
//     useEffect(() => {
//         console.log("EmployeeList: Initial render before data")
//         getLocations()
//         .then(getEmployees)
//     }, [])

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


// return (
//     <div className="employees">
//         <h1>Employees</h1>
//         <button className= "add-employee" onClick={() => props.history.push("/employees/create")}>
//             Add Employee
//         </button>
//         <article className="employeeList">
//             {employees.map(employee => {
//             const clinic = locations.find(loc => loc.id === employee.locationId)
            
//             return <Employee key={employee.id} employee={employee} location={clinic} />})}
//         </article>
            
//     </div>


return (
    <div className="employees">
        <h1>Employees</h1>

        <button onClick={() => props.history.push("/employees/create")}>
            Add Employee
        </button>

        <article className="employees">
            {
                employees.map(employee => {
                    return <Link key={employee.id} to={`/employees/${employee.id}`}>
                        <h3>{employee.name}</h3>
                    </Link>
                })
            }
        </article>
    </div>
)
}

// return (
//     <div className="employees"> {
//         employees.map(employee => {

         
        

//             const location = locations.find(l => l.id === employee.locationId)

//             return <Employee key={employee.id} employee={employee} location={location} />
//         }

//         )
//     }

//     </div>
// )
// }





