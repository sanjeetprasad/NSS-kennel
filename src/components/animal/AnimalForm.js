import React, { useContext, useRef, useEffect } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { Customer } from "../customer/Customer"

export const AnimalForm = (props) => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    

    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
  
    const location = useRef(null)
    const name = useRef(null)
    const breed = useRef(null)


    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
       getLocations()
    }, [])

    const constructNewAnimal = () => {

        /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const locationId = parseInt(location.current.value)
        const customerId = parseInt(localStorage.getItem("kennel_customer"))
        // const customerId = parseInt(customer.current.value)
        const animalName = name.current.value
        
        if (locationId === 0 || animalName === "") {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: animalName,
                locationId,
                customerId,
                breed: breed.current.value
            })
            .then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Aniaml name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Animal breed: </label>
                    <input type="text" id="animalBreed" ref={breed} required autoFocus className="form-control" placeholder="Aniaml breed" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
           
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAnimal()
                     
                }}
                className="btn btn-primary">
                Save Animal
            </button>
        </form>
    )
}