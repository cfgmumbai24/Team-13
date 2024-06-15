import React from "react";
import Navbar from "./Components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Style/index.css"
import OptionComponent from "./Components/options";
import CarouselComponent from "./Components/carousal";

function Jobs() {
    return (
      <div className={styles.container}>
        <Navbar/> 
        <OptionComponent/>
        <CarouselComponent/>
      </div>
    );
  }
  
  export default Jobs;