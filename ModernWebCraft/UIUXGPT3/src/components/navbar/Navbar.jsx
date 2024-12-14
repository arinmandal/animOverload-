import React from 'react'
import logo from "../../assets/logo.svg"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import "./navbar.css"
const Navbar = () => {
  return (
    <div
    className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navar-links_logo">
          <img src={logo} alt="logo" />
          Hello World
        </div>
        </div>
    </div>
  )
}

export default Navbar