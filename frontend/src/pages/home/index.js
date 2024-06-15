import React from "react";
import Navbar from "./Components/navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from "./Components/carousal";
import styles from "./Style/index.css"
import QuestionsComponent from "./Components/questionaire";
function Home() {
    return (
      <div className={styles.container}>
        <Navbar/> 
        <QuestionsComponent/>
        <CarouselComponent/>
      </div>
    );
  }
  
  export default Home;