import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='container'>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/savings'>Savings</Link>
        </div>
    </nav>
  )
}

export default NavBar;
