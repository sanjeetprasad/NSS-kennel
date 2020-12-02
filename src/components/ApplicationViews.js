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
import {EmployeeForm} from "./employees/EmployeeForm"
import {AnimalForm} from "./animal/AnimalForm"
import {EmployeeDetail} from "./employees/EmployeeDetail"
import {LocationDetail} from "./location/LocationDetail"

export const ApplicationViews = (props) => {
    return (
        <>
        <AnimalProvider>
            <EmployeeProvider>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
                <Route path="/locations/:locationId(\d+)" render={
                   props => <LocationDetail {...props} />
                 } />
            </LocationProvider>
            </EmployeeProvider>
            </AnimalProvider>
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

            {/* <EmployeeProvider>
                <LocationProvider>
                    <AnimalProvider>
                  <Route exact path="/employees" render={
                    props => <EmployeeList {...props} />
                       } />

                       <Route path="/employees/create" render={
                     props => <EmployeeForm {...props} />
                    } />
                    </AnimalProvider>
                </LocationProvider>
            </EmployeeProvider> */}
            
            <EmployeeProvider>
               <LocationProvider>
                   <AnimalProvider>
                       <Route exact path="/employees" render={
                           props => {
                           return <EmployeeList {...props} />
                          } }/>
                          <Route path="/employees/create" render={
                     props => <EmployeeForm {...props} />
                    } />
                          {/* New route for showing employee details */}
                       <Route path="/employees/:employeeId(\d+)" render={
                           props => {
                           return <EmployeeDetail {...props} />
                          }} />
                    </AnimalProvider>
                </LocationProvider>
            </EmployeeProvider>


            <AnimalProvider>
               <LocationProvider>
                 <CustomerProvider>
                    <Route exact path="/animals" render={
                        props => <AnimalList {...props} />
                    }/>
                        
                    <Route path="/animals/create" render={
                        props => <AnimalForm {...props} />
                    } />
                 </CustomerProvider>
               </LocationProvider>
            </AnimalProvider>

        </>
    )
}