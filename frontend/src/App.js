import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Landing from "./pages/landing";
import Display from "./pages/display";
import DairyFarmingContent from "./pages/study/agriculture";
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessList from "./components/BusinessList";
import UserProfileForm from "./components/UserProfile";
import LocationComponent from "./pages/Location";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          {/* <Route exact path="/home" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/display" element={<Display />} />
          <Route path="/location" element={<LocationComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
