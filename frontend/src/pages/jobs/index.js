import React from "react";
import Navbar from "./Components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Style/index.css"
import QuestionsComponent from "./Components/questionaire";
import CarouselComponent from "./Components/carousal";

function Jobs() {
    return (
      <div className={styles.container}>
        <Navbar/> 
        jobs
        <CarouselComponent/>
      </div>
    );
  }
  
  export default Jobs;