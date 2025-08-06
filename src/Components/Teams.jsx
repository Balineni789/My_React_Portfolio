import React from 'react'

const Team = ({name,role}) => {
    return (
        <>
         <h3>Name: {name}</h3>
         <h3>Role: {role}</h3>
        </>
    )
}

const Teams = () => {
  return (
    <div>
       <Team name= "Harsha" role= "Developer"/>
    </div>
  )
}

export default Teams;