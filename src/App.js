import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/AuthForm"
import "./app.css";
import AuthForm from "./pages/AuthForm";
import Navbar from "./components/Navbar";

function App() {
  // add stAtes here
  return (
    <Router>
      {/* <div className="Navbar">  */}
      <div className="App"> 
        <Navbar />
        <h1>Assistive Technologies</h1>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<AuthForm usage="Login"/>} />
        <Route path="/signup" element={<AuthForm usage="Signup"/>} />
        <Route path="/category/:id" element={<h2>Devices</h2>} />
        <Route path="/device/:id" element={<h2>Details</h2>} />
        <Route path="/*" element={<h2>404 page not found</h2>} />
    </Routes>
    </Router>
  );
}

export default App;
