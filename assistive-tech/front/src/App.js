import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  // add stAtes here
  return (
    <Router>
      <h1>Navbar</h1>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<h2>login page</h2>} />
        <Route path="/signup" element={<h2>signup page</h2>} />
        <Route path="/category/:id" element={<h2>devices page</h2>} />
        <Route path="/device/:id" element={<h2>device page</h2>} />
        <Route path="/*" element={<h2>404 page not found</h2>} />
    </Routes>
    </Router>
  );
}

export default App;
