
import React from 'react'

function FourthComp(Props) {

  const {name, city, area, job} = Props.Users
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>City: {city}</h3>
      <h3>Area: {area}</h3>
      <h3>Job-Role: {job}</h3>
    </div>
  )
}

export default FourthComp