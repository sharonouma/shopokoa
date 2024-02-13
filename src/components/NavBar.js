import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import img from '../assets/logo.jpg'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
       <img src={img} alt='' className='logo' />
        <div className="nav-links">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/login' className="nav-link">Login</Link>
          <Link to='/dashboard' className="nav-link">Dashboard</Link>
          <Link to='/savings' className="nav-link">Savings</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
