
import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import logo from '../assets/icon.jpg'
import logoline from '../assets/logo.svg'
import menu_open from '../assets/Openmenu.svg'
import menu_close from '../assets/Closemenu.svg'

const Navbar = () => {
  const [menu, setMenu] = useState('about') 
  const menuRef = useRef();

  const openMenu = ()=> {
    menuRef.current.style.right = '0';
  }

 const closeMenu = ()=> {
    menuRef.current.style.right = '-350px';
  }

  return (
    <div className='navbar'>
      <img src={logo} alt='' className='img-icon'/>
      <img src= {menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
       <img src= {menu_close} onClick={closeMenu} alt='' className='nav-mob-close'/>
        <li onClick={() => setMenu('home')}>
          <AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink>
          {menu==='home' ? <img src={logoline} alt=''/> : <></>}
        </li>
        <li onClick={() => setMenu('about')}>
         <AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink>
          {menu==='about' ? <img src={logoline} alt=''/> : <></>}
        </li>
        <li onClick={() => setMenu('services')}>
          <AnchorLink className='anchor-link' offset={50} href='#services'><p>Services</p></AnchorLink>
          {menu==='services' ? <img src={logoline} alt=''/> : <></>}
        </li>
        <li onClick={() => setMenu('portfolio')}>
          <AnchorLink className='anchor-link' offset={50} href='#work'><p>Portfolio</p></AnchorLink>
          {menu==='portfolio' ? <img src={logoline} alt=''/> : <></>}
        </li>
        <li onClick={() => setMenu('contact')}>
         <AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink>
          {menu==='contact' ? <img src={logoline} alt=''/> : <></>}
        </li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar