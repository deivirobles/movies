import React from 'react'
import { Link } from 'react-router-dom';

import Logo from './../images/logo.png'
import NavSeries from './NavSeries'

const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand"><img src={Logo} alt="Logo"/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <NavSeries/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;