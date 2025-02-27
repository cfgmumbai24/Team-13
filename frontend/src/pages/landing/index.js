import React from "react";
import Navbar from "./Components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Style/index.css"
import QuestionsComponent from "./Components/questionaire";
import CarouselComponent from "./Components/carousal";

function Landing() {
    return (
      <div className={styles.container}>
        <Navbar/> 
        <QuestionsComponent/>
        <CarouselComponent/>
      </div>
    );
  }
  
  export default Landing;