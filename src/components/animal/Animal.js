import React from "react"
import { Link } from "react-router-dom"
import "./Animal.css"

// export const Animal = ({animal, customer, location }) => (
//     <section className="animal">
//         <h3 className="animal__name">{animal.name}</h3>
//         <div className="animal__breed">{animal.breed}</div>
//         <div className="animal__location">Location: { location.name }</div>
//         <div className="animal__owner">Customer: { customer.name }</div>
//     </section>
// )

export const Animal = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
            <Link to={`/animals/${animal.id}`}>
                { animal.name }
            </Link>
        </h3>
        <div className="animal__breed">{ animal.breed }</div>
    </section>
)