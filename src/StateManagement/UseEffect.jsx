
import React from 'react'
import { useState, useEffect } from 'react'

function UseEffect() {

    const [city, setCity] = useState('Hyderabad');
    
    useEffect(()=> {
      if(city.toLowerCase() == "hyderabad") {
        setCity('Ongole')
      }else {
        setCity('Vizag')
      }
    }, [])

  return (
    <div>
       <h3>Current-City: {city}</h3>
    </div>
  )
}

export default UseEffect;
