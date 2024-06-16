import React from "react";
import Navbar from "./Components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Style/index.css"
import UpscaleComponent from "./Components/upscale";

function Upscale() {
    return (
      <div className={styles.container}>
        <Navbar/> 
        {/* <OptionComponent/> */}
        <UpscaleComponent/>
      </div>
    );
  }
  
  export default Upscale;