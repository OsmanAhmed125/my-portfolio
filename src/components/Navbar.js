import { useState } from 'react'
import logo from '../imgs/logo.jpg'
export default function Navbar(){
  const [isOpen , setIsopen]= useState(false)  
  const tggle = ()=>setIsopen(!isOpen)
  return (
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo-navbar" src={logo} />
          </a>
          <button onClick={tggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
           {isOpen ? <i class="bi bi-escape"></i>: <span className="navbar-toggler-icon"></span>}
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      )
}