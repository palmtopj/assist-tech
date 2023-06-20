import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Devices from "./pages/Devices";
import "./app.css";
import AuthForm from "./pages/AuthForm";
import Navbar from "./components/Navbar";
// import API from './utils/API';

function App() {
  // add stAtes here
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");
  // const [loggedIn, setloggedIn] = useState(false);

  // useEffect(()=>{
  //   const storedusername = localStorage.getItem("username");
  //   (storedusername).then(data=>{
  //     // setToken(storedToken);
  //     setUserId(data.id);
  //     setUsername(data.username);
  //   }).catch(err=>{
  //     console.log("oh noes")
  //     console.log(err)
  //  logout();
  //   })
  // },[])

  // logout={logout}


  const logout = () => {
    localStorage.removeItem("username");

    // setToken(null);
    // setUsername(null);
    // setUserId(0);
  };
  return (
    <Router>
      <div className="App">
        <Navbar userId={userId} username={username} logout={logout} />
        <h1>Assistive Technologies</h1>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <AuthForm
              usage="Login"
              setUserId={setUserId}
              setUsername={setUsername}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <AuthForm
              usage="Signup"
              setUserId={setUserId}
              setUsername={setUsername}
            />
          }
        />
        <Route path="/category" element={<Devices />} />
        <Route path="/device/:id" element={<h2>Details</h2>} />
        <Route path="/*" element={<h2>404 page not found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
// setUserId={setUserId} setUsername={setUsername} setToken={setToken} userId={userId} username={username}
