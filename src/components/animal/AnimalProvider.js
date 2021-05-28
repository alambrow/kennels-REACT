import React, { useState, createContext } from "react"

// A context stores a certain kind of data to be used in your application
// this function invocation creates empty but formatted data structure to fill
export const AnimalContext = createContext()

// this function allows other components to use the data that will occupy the context
// single property per provider; components that invoke this function are 'children' components
export const AnimalProvider = (props) => {
    
    // invokes useState hook to hold and set animal array
    const [animals, setAnimals] = useState([])
    
    // function to grab animal data from API; defined within Provider function
    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location")
        .then (res => res.json())
        .then(setAnimals)
    }
    
    // function to post animal objects to API
    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }

    // returns context provider which provides "animals" state, getAnimals(),
    // and addAnimal for children components
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}