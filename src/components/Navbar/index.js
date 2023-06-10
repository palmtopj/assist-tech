import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
export default function Navbar() {
  return (
    <nav className='Navbar'>
        <Link to="/">Home</Link> 
    </nav>
  )
}
