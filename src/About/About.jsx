
 import React from 'react'
 import './About.css'
 import Theme from '../assets/Theme.svg'
 import Pic from '../assets/mypic.jpg'
 
 const About = () => {
   return (
<div id='about' className='about'>
       <div className="about-title">
         <h1>About me</h1>
         <img src={Theme} alt='' className='Theme'/>
       </div>

    <div className="about-sections">
         <div className="about-left">
           <img src={Pic} alt='' className='Pic'/>
         </div>

        <div className="about-right">
            <div className="about-para">
              <p>I am an Experienced Front Developer With Over 2+ Yrs Experience On Differnt Frame-Works And Technologies In Web-Development With Some libraries.</p>
              <p>My Passion Towards These Web-Development Create a Passion By Designing The Web-Sites With Some Frame-Works</p>
            </div>
            
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'100%'}}/></div>
              <div className="about-skill"><p>Node JS</p><hr style={{width:'20%'}}/></div>
              <div className="about-skill"><p>JAVA SCRIPT</p><hr style={{width:'50%'}}/></div>
              <div className="about-skill"><p>NEXT JS</p><hr style={{width:'30%'}}/></div>
              <div className="about-skill"><p>Mongo Db</p><hr style={{width:'40%'}}/></div>
              <div className="about-skill"><p>React Js</p><hr style={{width:'70%'}}/></div>
            </div>
        </div>
    </div>

       <div className="about-achievements">
         <div className="about-achievement">
           <h1>2+</h1>
           <p>Years OF EXPERIENCE</p>
         </div>
         <hr/>

         <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
         </div>
         <hr/>

         <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
         </div>

       </div>
</div>
   )
 }
 
 export default About