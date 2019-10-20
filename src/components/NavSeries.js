import React from 'react'
import { NavLink } from 'react-router-dom';


const AllNavigation = () => {
  return(
    <ul className="navbar-nav ml-auto">
         <li class="nav-item"><NavLink to="/" className="nav-link">Movie</NavLink></li>
         <li class="nav-item"><NavLink to="/" className="nav-link">Series</NavLink></li>
         <li class="nav-item"><NavLink to="/" className="nav-link">Favorites</NavLink></li>
    </ul>
  )
}

export default AllNavigation;