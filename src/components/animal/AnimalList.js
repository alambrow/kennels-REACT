import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider.js"
import { useHistory } from "react-router-dom"
import "./Animal.css"

export const AnimalList = () => {
    // temp state to store animals data
    const { animals, getAnimals } = useContext(AnimalContext)

    // invocation of react's useEffect() hook, which grabs data that cannot be handled at init render
    // empty array at end is dependency array; it prevents infinite loop by setting the function depedent on iterating on empty array
    useEffect(() => {
        console.log("AnimalList: useEffect - getAnimals")
        getAnimals()
    }, [])

    const history = useHistory()

    return (
        <>
            <h2>animals</h2>
            <button onClick={
                () => history.push("/animals/create")
            }>
                Add Animal
            </button>
            <section className="animals">
            {console.log("AnimalList: Render", animals)}
            {
                animals.map(animal => {
                    return (
                        <div className="animal" id={`animal--${animal.id}`}>
                        <div className="animal__name">
                          Name: { animal.name }
                        </div>
                        <div className="animal__breed">
                          Breed: { animal.breed }
                        </div>
                        </div>
                    )
                })
            }
        </section>
    </>
    )
}