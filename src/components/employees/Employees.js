
import React from "react"
import "./Employees.css"

export const Employee = ({employee}) => (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__department">{employee.department}</div>
            <div className="employee__locationId">LocationId: {employee.locationId}</div>
            </section>
    )
