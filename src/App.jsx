import { useState } from "react"
import './App.css'

import AnimalsShow from './Animalshow'

function gerRandomAnimal(){
  const animals = ['cat','bird','cow','dog','gator','horse',]

  return animals[Math.floor(Math.random() * animals.length)]
}

function App() { 
  const[animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, gerRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalsShow type={animals} key={index}/>
  })


  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className="animals-list">
        {renderedAnimals}
      </div>
    </div>    
  )
}

export default App