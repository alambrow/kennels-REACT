import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider.js"
import { useHistory } from "react-router-dom"
import "./Animal.css"
import { Link } from 'react-router-dom'

export const AnimalList = () => {
    // temp state to store animals data
    const { animals, getAnimals } = useContext(AnimalContext)

    // invocation of react's useEffect() hook, which grabs data that cannot be handled at init render
    // empty array at end is dependency array; it prevents infinite loop by setting the function depedent on iterating on empty array
    useEffect(() => {
        getAnimals()
    }, [])

    const history = useHistory()

    return (
        <>
            <h2>animals</h2>
            <button onClick={
                () => history.push("/animals/create")
            }>
                Make Reservation
            </button>

            <div className="animals">
                {
                    animals.map(animal => 
                        <div className="animal" id={`animal--${animal.id}`}>
                        <div className="animal__name">
                        <Link to={`/animals/detail/${animal.id}`}>
                          { animal.name }
                        </Link>
                        </div>
                        <div className="animal__breed">
                          Breed: { animal.breed }
                        </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}