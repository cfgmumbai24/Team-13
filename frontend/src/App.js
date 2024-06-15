import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Landing from "./pages/landing";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          {/* <Route exact path="/home" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
