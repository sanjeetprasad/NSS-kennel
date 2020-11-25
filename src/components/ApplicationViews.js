import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employees/EmployeesProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employees/EmployeesList"
import { CustomerList } from "./customer/CustomerList"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>
             {/* Render the animal list when http://localhost:3000/animals */}
             {/* <AnimalProvider>
                
                <Route path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>   */}

            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
          
          {/* Render the animal list when http://localhost:3000/animals */}
            {/* <EmployeeProvider>
                
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider> */}

            <EmployeeProvider>
                <LocationProvider>
                   <Route path="/employees">
                       <EmployeeList />
                  </Route>
                </LocationProvider>
          </EmployeeProvider>

            <AnimalProvider>
               <LocationProvider>
                 <CustomerProvider>
                    <Route exact path="/animals">
                        <AnimalList />
                    </Route>
                 </CustomerProvider>
               </LocationProvider>
            </AnimalProvider>

        </>
    )
}