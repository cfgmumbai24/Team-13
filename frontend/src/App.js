import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Landing from "./pages/landing";
import Display from "./pages/display";
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessList from "./components/BusinessList";
import UserProfileForm from "./components/UserProfile";
import LocationComponent from "./pages/Location";
import DairyFarmingContent from "./pages/study/agriculture";
import NatureGuideContent from "./pages/study/nature";
import PineNeedleGasificationContent from "./pages/study/renewable";
import EcoTourismContent from "./pages/study/house";


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/display" element={<Display />} />
          <Route path="/location" element={<LocationComponent />} />
          <Route path="/dairy" element={<DairyFarmingContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
