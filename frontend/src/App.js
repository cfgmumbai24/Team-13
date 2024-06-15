import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessList from "./components/BusinessList";
import UserProfileForm from "./components/UserProfile";
import LocationComponent from "./pages/home/Components/LocationComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/home" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>


      <main>
        <BusinessList />
      </main>

      {/* <main>
        <BusinessList />
      </main>

      <main>
          <UserProfileForm />
      </main> */}
    </div>
  );
}

export default App;
