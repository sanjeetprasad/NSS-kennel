
import React from "react"
import "./Employees.css"

export const Employee = ({employee, location}) => (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__department">{employee.department}</div>
            <div className="employee__location">Location: {location.name}</div>
            {/* <div className="animal__location">Location: { location.name }</div> */}
            </section>
    )
