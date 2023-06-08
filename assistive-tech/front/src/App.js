import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>Navbar</h1>
      <hr />
      <Routes>
        <Route path="/" element={<h2>assistive technologies</h2>}/>
        <Route path="/login" element={<h2>login page</h2>}/>
        <Route path="/signup" element={<h2>signup page</h2>}/>
        <Route path="/user/:username" element={<h2>profile page</h2>}/>
      
        <Route path="/device/:id" element={<h2>device page</h2>}/>
        <Route path="/*" element={<h2>404 page not found</h2>}/>
    </Routes>
    </Router>
  );
}

export default App;
