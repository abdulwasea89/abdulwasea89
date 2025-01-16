"use client"
import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  
  return (
    <>
      You clicked {counter} times.
      <br/>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <br/>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  )
}

export default Counter
