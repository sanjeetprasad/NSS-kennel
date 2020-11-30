import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = (props) => {
    // This state changes when `getLocations()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    // useEffect(() => {
    //     console.log("AnimalList: Location state changed")
    //     console.log(animals)
    // }, [animals])

    return (
        <div className="animals"> 
            <h1>Animals</h1>
            <button className= "add-animal" onClick={() => props.history.push("/animals/create")}>
            Make Appointment
        </button>
        <article className="animalList">
            {animals.map(animal => {
            const owner = customers.find(c => c.id === animal.customerId)
            const clinic = locations.find(l => l.id === animal.locationId)

        return <Animal key={animal.id} animal={animal} customer={owner} location={clinic} />})}
        </article>  
        </div>
    )

    
}


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
// )