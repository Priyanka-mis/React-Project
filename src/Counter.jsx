// import React from 'react'
// import { useState } from 'react';

// function Counter ()  {

//   let [counter, setcounter] = useState(0)

// // let counter = 15;

// const add = ()=>{
//   console.log("clicked", counter);
//   setcounter(counter + 1)
// }

// const remove = ()=>{
//   setcounter (counter -1)
// }

//  const reset = ()=>{
//   setcounter (0)
//  }

//   return (
//     <>
//     <h1>Counter:{counter}</h1>
//     <button onClick={add}>Add</button>
//     <button onClick={remove}>Remove</button>
//     <button onClick={reset}>reset</button>
//     </>
//   )
// }

// export default Counter



//2.  MAKE COUNTER BY USING USEREF HOOK
// useRef ka state update component ko re-render nahi karta. Is wajah se, hume useState aur useRef ko milakar istemal karna padega.

import React,{useRef, useState} from "react";

function Counter(){

  const counterRef = useRef(0) // useref se current value to track karna 
  const [counter, setcounter] = useState(0) //re-render ke liye 

  const add = () =>{
    counterRef.current += 1
    setcounter(counterRef.current)
  }

  const remove = ()=>{
    counterRef.current -= 1
    setcounter(counterRef.current)
  }

  const reset = ()=>{
    counterRef.current = 0
    setcounter(counterRef.current)
  }

  return(
    <div>
      <h1>Counter UseRef: {counter}</h1>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter