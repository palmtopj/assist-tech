import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
export default function Navbar(props) {
  return (
    <nav className='Navbar'>
        {props.userId>0 ?<span>Welcome, {props.username}!</span>:null}
        <Link to="/">Home</Link>
        {props.userId>0?<Link to="/newpallet">New Pallet</Link> :<Link to="/login">login</Link>}
        {props.userId>0?<Link to={`/user/${props.username}`}>My profile</Link> :<Link to="/signup">signup</Link>}
        {props.userId>0?<button onClick={props.logout}>Logout</button>:null}
    </nav>
  )
}
