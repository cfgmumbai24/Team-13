import React from "react";
import Navbar from "./Components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Style/index.css"
import LocationComponent from "../home/Components/LocationComponent";
import OptionComponent from "./Components/options";
function Jobs() {
    return (
      <div className={styles.container}>
        <Navbar/> 
        <OptionComponent/>
      </div>
    );
  }
  
  export default Jobs;