import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import images from '../../assets/images'


function Header() {
  return (
    <header className="all-header">
        <img src={images.Kasa} className="logo-header" alt="Logo Header" />
      <nav className="nav">
        <ul className="nav-list">
          <NavLink to="/" className="text-header">Accueil</NavLink>
          <NavLink to="/about" className="text-header">A Propos</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
