import React from "react";
import Navbar from "./Components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Style/index.css"
import NewOpeningComponent from "./Components/newopening";
import Style from "./Style/newopening.css"

function NewOpening() {
    return (
      <div className={styles.container}>
        <Navbar/> 
        <NewOpeningComponent/>
      </div>
    );
  }
  
  export default NewOpening;