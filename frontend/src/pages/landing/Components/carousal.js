import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import styles from '../Style/CarouselComponent.module.css'; // Import CSS module for additional styling
import pramod from '../Assets/pramod.jpg';
import img1 from '../Assets/tulsi.png';
import img2 from '../Assets/harish.jpg';

const CarouselComponent = () => {
  return (
    <div className={styles.carouselContainer}>
      <h1>Success Stories</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
            <h3 className={styles.carouselTextH}><br className="small-space" /> Tulsi, from Mukteshwar</h3>
            <p className={styles.carouselText}>Tulsi balances roles as a teacher, farmer, and trekking instructor, and has also started a homestay for tourists in her village. Despite limited schooling, she ventured into social work with Chirag's Room to Read program and leads treks in Nepal.</p>
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pramod}
            alt="Second slide"
          />
          
            <h3 className={styles.carouselTextH}><br className="small-space" />Pramod Soun, from Badari</h3>
            <p className={styles.carouselText}>Pramod Soun launched his mushroom cultivation business in March 2022 after attending awareness workshops and rejecting a traditional job. With guidance from Margshala's network, he achieved his first successful sale of oyster mushrooms in May 2022, marking his venture into the local market.</p>
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />
          
            <h3 className={styles.carouselTextH}><br className="small-space" />Harish</h3>
            <p className={styles.carouselText}>Harish diverged from his family's military tradition to embrace entrepreneurship for long-term stability, launching a profitable business through the Margshala program. He values this path as a stable alternative to the uncertain availability of government jobs.</p>
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
