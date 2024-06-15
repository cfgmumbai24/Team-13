import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Landing from "./pages/landing";
import Display from "./pages/display";
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessList from "./components/BusinessList";
import UserProfileForm from "./components/UserProfile";
import LocationComponent from "./pages/home/Components/LocationComponent";
import DairyFarmingContent from "./pages/study/agriculture";
import NatureGuideContent from "./pages/study/nature";
import PineNeedleGasificationContent from "./pages/study/renewable";
import EcoTourismContent from "./pages/study/house";


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
          <Route path="/agriculture" element={<DairyFarmingContent />} />
          <Route path="/nature" element={<NatureGuideContent />} />
          <Route path="/renewable" element={<PineNeedleGasificationContent />} />
          <Route path="/ecohouse" element={<EcoTourismContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
