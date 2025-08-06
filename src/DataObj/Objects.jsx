
import React from 'react'
// import { userData } from './Obj' - (2nd Method)

let userData = [
  {
    "id": 101,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "address": {
      "steet": "Nikp Bango Palace",
      "zipcode": "2345889",
      "city": "Vinedenmur",
      "Loacality": {
        "Area" : "Buionghil"
      }
    }
  },
  {
    "id": 102,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
     "address": {
      "steet": "Nikp Bango Palace",
      "zipcode": "2345889",
      "city": "Vinedenmur",
      "Loacality": {
        "Area" : "Buionghil"
      }
    }
  },
  {
    "id": 103,
    "name": "John Doe",
    "email": "john.d@example.com",
     "address": {
      "steet": "Nikp Bango Palace",
      "zipcode": "2345889",
      "city": "Vinedenmur",
      "Loacality": {
        "Area" : "Buionghil"
      }
    }
  },
  {
    "id": 104,
    "name": "Emily Davis",
    "email": "emily.davis@example.com",
     "address": {
      "steet": "Nikp Bango Palace",
      "zipcode": "2345889",
      "city": "Vinedenmur",
      "Loacality": {
        "Area" : "Buionghil"
      }
    }
  },
  {
    "id": 105,
    "name": "Jane Smith",
    "email": "j.smith@example.com",
     "address": {
      "steet": "Nikp Bango Palace",
      "zipcode": "2345889",
      "city": "Vinedenmur",
      "Loacality": {
        "Area" : "Buionghil"
      }
    }
  }
];

function Objects() {
  return (
    <div>
       {userData.map((user)=> {
        return (
        <div style={{color:"blue", fontWeight:'bold'}}><hr/>
          <h2>Id: {user.id}</h2>
          <h2>Name: {user.name}</h2>
          <h2>Email: {user.email}</h2>
          <h2>City: {user.address.city}</h2>
          <h2>Street: {user.address.steet}</h2>
          <h2>Area: {user.address.Loacality.Area}</h2><hr/>
        </div>
        )
       })}
    </div>
  )
}

export default Objects;