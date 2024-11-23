import React from 'react'
import './Footer.css'
import images from '../../assets/images'

function Footer() {
  return (
    <footer className="footer-all">
            <img className="footer-logo" src={images.Kasa2} alt="Logo" />
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
