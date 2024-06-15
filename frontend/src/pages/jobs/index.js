import React from "react";
import Navbar from "./Components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Style/index.css"
import OptionComponent from "./Components/options";
import CarouselComponent from "./Components/carousal";
import BusinessList from "../../components/BusinessList";
import LocationComponent from "../home/Components/LocationComponent";

function Jobs() {
    return (
      <div className={styles.container}>
        <Navbar/> 
        {/* <OptionComponent/> */}
        <LocationComponent/>
      </div>
    );
  }
  
  export default Jobs;