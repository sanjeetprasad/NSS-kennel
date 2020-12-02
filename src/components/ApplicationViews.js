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
import {AnimalDetails} from "./animal/AnimalDetail"
import {AnimalSearch} from "./animal/AnimalSearch"

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
              props => {
                console.log("props", props)
                return <LocationDetail {...props} />
              }
            } />
          </LocationProvider>
        </EmployeeProvider>
      </AnimalProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals" render={
              props => <>
                <AnimalSearch />
                <AnimalList {...props} />
              </>
            } />
            <Route path="/animals/:animalId(\d+)" render={
              props => <AnimalDetails {...props} />
            } />
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <AnimalProvider>
        <LocationProvider>
          <EmployeeProvider>
            <Route exact path="/employees" render={
              props => {
                console.log("props from react router dom", props)
                return <EmployeeList {...props} message="Hello C44" />
                // <EmployeeList history={props.history} location={props.location} match={props.match} message="Hello C44" />
              }
            } />
            <Route path="/employees/create" render={
              props => <EmployeeForm {...props} />
            } />
            {/* New route for showing employee details */}
            <Route path="/employees/:employeeId(\d+)" render={
              props => {
                console.log("Dynamic route for employee matched", props.match.params)
                return <EmployeeDetail {...props} />
              }
            } />
          </EmployeeProvider>
        </LocationProvider>
      </AnimalProvider>

            <CustomerProvider>
                {/* Render the customer list when http://localhost:3000/customer */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}