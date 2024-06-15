import React from "react";
import Navbar from "./Components/navbar";
import styles from "./Style/index.css"
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