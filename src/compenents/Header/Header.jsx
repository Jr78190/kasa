import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import '../../../public/Kasa.png'

function Header() {
  return (
    <header className="all-header">
        <img src= '../' className="logo-header" alt="Logo Header" />
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
