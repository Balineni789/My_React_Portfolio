
import React from 'react'
import { useState, useEffect} from 'react'

function UseState() {

  const [count, setCount] = useState(0);
  
  useEffect(()=>{}, [count])

  const Increment = () => {
    setCount(count + 1)
  }

  const Decrement = () => {
    if(count > 0) {
    setCount(count - 1)
    }
  }
  
  const Reset = () => {
    setCount(0)
  }

  return (
    <div>
      <h2 style={{margin:'5px'}}>Count: {count}</h2>
      <button onClick = {Increment} style={{margin:'5px', fontSize:'18px'}}>Increment</button>
      <button onClick = {Decrement} style={{margin:'5px', fontSize:'18px'}}>Decrement</button>
      <button onClick = {Reset} style={{margin:'5px', fontSize:'18px'}}>Reset</button>
    </div>
  )
}

export default UseState;