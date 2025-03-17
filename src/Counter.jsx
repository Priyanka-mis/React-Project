import React from 'react'
import { useState } from 'react';

function Counter ()  {

  let [counter, setcounter] = useState(0)

// let counter = 15;

const add = ()=>{
  console.log("clicked", counter);
  setcounter(counter + 1)
}

const remove = ()=>{
  setcounter (counter -1)
}

 const reset = ()=>{
  setcounter (0)
 }

  return (
    <>
    <h1>Counter:{counter}</h1>
    <button onClick={add}>Add</button>
    <button onClick={remove}>Remove</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default Counter

