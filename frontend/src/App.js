import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Landing from "./pages/landing";
import Display from "./pages/display";
import BusinessFormComponent from "./pages/jobopening";
import LocationComponent from "./pages/Location";
import DairyFarmingContent from "./pages/study";
import NatureGuideContent from "./pages/nature/nature";
import PineNeedleGasificationContent from "./pages/renewable/renewable";
import EcoTourismContent from "./pages/ecohome/house";
import Upscale from "./pages/upscale";
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/display" element={<Display />} />
          <Route path="/jobopening" element={<BusinessFormComponent />} />
          <Route path="/location" element={<LocationComponent />} />
          <Route path="/dairy" element={<DairyFarmingContent />} />
          <Route path="/nature" element={<NatureGuideContent />} />
          <Route path="/renewable" element={<PineNeedleGasificationContent />} />
          {/* <Route path="/homestays" element={<EcoTourismContent />} /> */}
          <Route path="/tourism" element={<EcoTourismContent />} />
          <Route path = "/upscale" element={<Upscale />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
