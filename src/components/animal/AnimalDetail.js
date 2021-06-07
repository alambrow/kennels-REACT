import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import {  useHistory, useParams } from "react-router-dom"


export const AnimalDetail = ({ animal }) => {
    const { releaseAnimal, getAnimalById } = useContext(AnimalContext)
    const history = useHistory()
    const [localAnimalState, setRemoteAnimal] = useState({location: {}, customer: {}})
    const {animalId} = useParams();

    useEffect( () => {
        console.log(animalId)
        if (animalId) {
            getAnimalById(animalId).then( (animalData) => {
                setRemoteAnimal(animalData)
            })
        } else {
            setRemoteAnimal(animal)
        }
    }, [animalId])

    
    const handleRelease = () => {
        releaseAnimal(animal.id)
            .then(() => {
                history.push("/animals")
            })
        }
        
    return (
    <section className="animal">
        <h3 className="animal__name">{ localAnimalState.name }</h3>
        <div className="animal__breed">{ localAnimalState.breed }</div>
        <div className="animal__location">Location: { localAnimalState.location.name }</div>
        <div className="animal__owner">Customer: { localAnimalState.customer.name }</div>
        <button onClick={handleRelease}>Release Animal</button>
        <button onClick={() => {
            history.push(`/animals/edit/${localAnimalState.id}`)
        }}>Edit</button>
    </section>
    )
}