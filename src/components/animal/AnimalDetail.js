import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import {  useHistory } from "react-router-dom"


export const AnimalDetail = ({ animal }) => {
    const { releaseAnimal } = useContext(AnimalContext)
    const [ animals, setAnimal ] = useState({ location: {}, customer: {} })
    const history = useHistory()

    const animalId = parseInt(animal.id)

    useEffect(() => {
        setAnimal(animal)
    }, [animalId])


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