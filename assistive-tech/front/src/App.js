import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./app.css";

function App() {
  // add stAtes here
  return (
    <Router>
      <h1>Navbar</h1>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<h2>Login</h2>} />
        <Route path="/signup" element={<h2>Signup</h2>} />
        <Route path="/category/:id" element={<h2>Devices</h2>} />
        <Route path="/device/:id" element={<h2>Details</h2>} />
        <Route path="/*" element={<h2>404 page not found</h2>} />
    </Routes>
    </Router>
  );
}

export default App;
