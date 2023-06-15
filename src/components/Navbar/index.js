import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
export default function Navbar() {
  return (
    <nav className='Navbar'>
        <Link to="/">Home</Link> 
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
    </nav>
  )
}
