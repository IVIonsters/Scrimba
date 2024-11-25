/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Joke from './components/Joke'
import jokesData from './utils/jokesData'

function App(props) {
  // this allows me to map over the jokesData array and create a new array of Joke components
  // I can then render that array of components in the return statement
  // this makes it so you don't have to manually create a Joke component for each joke in the array
  // you can just import the data and map over it to create the components
  // this is a more scalable solution
  // see jokesData.js for the array of jokes and Joke.jsx for the Joke component
  const jokeComponents = jokesData.map(joke => (
    console.log(joke),
    <Joke 
    // make sure to pass in the setup and finish properties to the Joke component
    setup={joke.setup} 
    finish={joke.finish} 
    />
  ))

  return (
    <div>
      {jokeComponents}
    </div>
  )
}

export default App
