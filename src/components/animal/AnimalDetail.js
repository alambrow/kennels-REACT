import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"


export const AnimalDetail = () => {
    const { animals, releaseAnimal } = useContext(AnimalContext)
    const [ animal, setFiltered ] = useState({ location: {}, customer: {} })
    const history = useHistory()

    // hook function useParams() allows code to read route parameter from URL
    // const { animalId } = useParams();
    // we are no longer accessing the animalId from the URL string

    // dependency stops once animal id is found
    // useEffect(() => {
    //     const thisAnimal = animals.find(a => a.id === parseInt(animalId)) || { location: {}, customer: {} }
    //     setAnimal(thisAnimal)
    // }, [animalId])


    const handleRelease = () => {
        releaseAnimal(animal.id)
            .then(() => {
                history.push("/animals")
            })
        }
        
    return (
    <section className="animal">
        <h3 className="animal__name">{ animal.name }</h3>
        <div className="animal__breed">{ animal.breed }</div>
        <div className="animal__location">Location: { animal.location.name }</div>
        <div className="animal__owner">Customer: { animal.customer.name }</div>
        <button onClick={handleRelease}>Release Animal</button>
        <button onClick={() => {
            history.push(`/animals/edit/${animal.id}`)
        }}>Edit</button>
    </section>
    )
}