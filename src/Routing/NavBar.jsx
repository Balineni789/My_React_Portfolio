
import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav'>
        <ul>
          <Link to ='/1'><li>Home Page</li></Link>
          <Link to ='/2'><li>About Page</li></Link>
          <Link to ='/3'><li>Info Page</li></Link> 
        </ul>
    </div>
  )
}

export default NavBar