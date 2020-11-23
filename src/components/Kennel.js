import React from "react"
// import { Animal } from "./animal/Animal"
import { AnimalList} from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"

import { CustomerList} from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"

import { EmployeeList} from "./employees/EmployeesList"
import { EmployeeProvider } from "./employees/EmployeesProvider"

import { LocationList} from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
// import { Customer } from "./customer/Customer"
import "./Kennel.css"


export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        
        <h2>Animals</h2>
           <AnimalProvider>
               <AnimalList />
           </AnimalProvider>

           <h2>Employees</h2>
           <EmployeeProvider>
               <EmployeeList />
           </EmployeeProvider>
           
           <h2>Locations</h2>
              <LocationProvider>
                  <LocationList />
              </LocationProvider>
              
          <h2>Customers</h2>
           <CustomerProvider>
            <CustomerList />
          </CustomerProvider>
    </>    

       
)
