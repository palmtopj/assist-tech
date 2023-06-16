import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import "../../pages/AuthForm/index";
export default function Navbar(props) {
  const [loggedIn, setloggedIn] = useState(false);
  const handLogout=()=>{
    setloggedIn(false)
    localStorage.removeItem("username")
    window.location.reload()
  }
  useEffect(()=>{
    console.log("changing", props.logout)
    if (props.username!=="") {
      console.log(props.username)
      setloggedIn(true)
    }
  },[props.logout])
  useEffect(()=>{
    console.log("changing", loggedIn)
      console.log(props.username)
      setloggedIn(true)
  },[loggedIn])

  console.log(props)
  return (
    <nav className='Navbar'>
      {props.userId>0 ?<span>Welcome, {props.username}!</span>:null}
        <Link to="/">Home</Link> 
        {props.username===""?<Link to="/login">login</Link>:null}
        {props.username===""?<Link to="/signup">signup</Link>:null}
        {props.username? <button onClick={handLogout}>Logout</button>:"hello"}
        <h1>{localStorage.getItem("username")}</h1>
    </nav>
  )
}
