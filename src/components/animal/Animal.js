import React from "react"
import "./Animal.css"

export const Animal = ({animal}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__customerId">CustomerId: {animal.customerId}</div>
        <div className="animal__locationId">LocationId: {animal.locationId}</div>
    </section>
)