import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import styles from '../Style/CarouselComponent.module.css'; // Import CSS module for additional styling
import pramod from '../Assets/pramod.jpg';
import img1 from '../Assets/tulsi.png';

const CarouselComponent = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className={styles.carouselText}>First slide label</h3>
            <p className={styles.carouselText}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pramod}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className={styles.carouselText}>Second slide label</h3>
            <p className={styles.carouselText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src={image1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className={styles.carouselText}>Third slide label</h3>
            <p className={styles.carouselText}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
