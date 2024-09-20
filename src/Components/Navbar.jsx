import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="NavbarContainer">
        <div className="navbarImage"><img src="https://i.ibb.co/jvdy464/logo.png" alt="Logo"/></div>
        <div className="navbarIcon md:flex hidden">Home</div>
        <div className="navbarIcon md:flex hidden">About us<i class="fa-solid fa-angle-down"></i></div>
        <div className="navbarIcon md:flex hidden">Services<i class="fa-solid fa-angle-down"></i></div>
        <div className="navbarIcon md:flex hidden">B2B</div>
        <div className="navbarIcon md:flex hidden">Impact</div>
        <div className="navbarIcon md:flex hidden">News & Media<i class="fa-solid fa-angle-down"></i></div>
        <div className="navbarIcon md:flex hidden">Careers</div>
        <div className="navbarIcon md:flex hidden">Get in Touch</div>
        <div className="navbarIcon md:flex hidden">EN<i class="fa-solid fa-angle-down"></i></div>
        <div className="navbarIcon md:hidden flex"><i class="fa-solid fa-bars"></i></div>
    </div>
    </>
  )
}

export default Navbar
