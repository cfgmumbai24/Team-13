import React from "react";
import Navbar from "./Components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Style/index.css"
import OptionComponent from "./Components/options";
import CarouselComponent from "./Components/carousal";
import Style from "./Style/option.css"

function Jobs() {
    return (
      <div className={styles.container}>
        <Navbar/> 
        <OptionComponent/>
      </div>
    );
  }
  
  export default Jobs;