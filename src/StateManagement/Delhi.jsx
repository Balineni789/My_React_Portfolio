
import React from 'react'
import Gujurat from './Gujurat'
import { useData } from './UseContext'

function Delhi({gift}) {

  const {state} = useData()

  return (
    <div>
    <h1>My Name Is {state.name}</h1> 
    <h1>Iam From {state.city}</h1>
    <h2>Delhi To Gujurat<Gujurat gift={gift}/></h2>
    </div>
  ) 
}

export default Delhi