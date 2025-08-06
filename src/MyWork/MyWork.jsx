
import React from 'react'
import './MyWork.css'
import Theme from '../assets/Theme.svg'
import { mywork_Data } from '../assets/mywork_data'
import RA from '../assets/RightArrow.jpg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src ={Theme} alt='' className='Theme'/>
      </div>

      <div className='mywork-container'>
        {mywork_Data.map((work, index)=>{
         return <img key ={index} src ={work.w_img} alt=''/>
        })}
      </div>
      <div className="mywork-showmore">
        <a href='http://github.com/Balineni789'><p>Show More</p></a>
        <img src ={RA} alt='' className='R-Arrow2'/>
      </div>
    </div>
  )
}

export default MyWork
