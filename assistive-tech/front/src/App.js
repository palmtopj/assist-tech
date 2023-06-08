import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>Navbar</h1>
      <hr />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>}/>
    </Routes>
    </Router>
  );
}

export default App;
