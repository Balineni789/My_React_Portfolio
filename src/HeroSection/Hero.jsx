
import React from 'react'
import './Hero.css'
import Profilephoto from '../assets/mypic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import My_Resume from '../assets/Resume Pdf/My Resume.Pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
     <img src = {Profilephoto} alt ='' className='img-prof'/>
     <h1><span>I'm Harsha,</span><br/>Web-Developer Based In India.</h1>
     <p>Iam Front-End Web-Developer From Hyderabad, India With 2+ Yrs Experience</p>
     <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className='hero-resume'>
          <a href={My_Resume} target='_blank' rel='noopener noreferrer'>My Resume</a>
        </div>
     </div>
    </div>
  )
}

export default Hero
