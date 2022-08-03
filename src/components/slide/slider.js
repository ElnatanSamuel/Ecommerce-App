import styled from "styled-components";
import styles from "./slide.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slide = () => {
  return (
    <>
      <div className={styles.slider}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          useKeyboardArrows={true}
          showStatus={false}
          stopOnHover={false}
          showArrows={false}
          showThumbs={false}
        >
          <div className={styles.content}>
            <div className={styles.opacity}></div>
            <div className={styles.textcontent}>
              <h1 className={styles.head}>WOMAN'S CLOTHES COLLECTION</h1>

              <button className={styles.btn}>SHOP NOW</button>
            </div>
          </div>

          <div className={styles.content2}>
            <div className={styles.opacity}></div>
            <div className={styles.textcontent}>
              <h1 className={styles.head}>MEN'S CLOTHES COLLECTION</h1>

              <button className={styles.btn}>SHOP NOW</button>
            </div>
          </div>

          <div className={styles.content3}>
            <div className={styles.opacity}></div>
            <div className={styles.textcontent}>
              <h1 className={styles.head}>
                CELEBRATE THIS SUMMER WITH 30% OFF
              </h1>

              <button className={styles.btn}>CHECK OUT</button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Slide;
