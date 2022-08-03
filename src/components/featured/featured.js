import styles from "./featured.module.css";
import { Link } from "react-router-dom";
const Featured = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.left}>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/products"
          >
            <div className={styles.sale}>
              <button className={styles.btn}>SALE</button>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/products"
          >
            <div className={styles.new}>
              <button className={styles.btn}>NEW</button>
            </div>
          </Link>
        </div>
        <div className={styles.middle}>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/products"
          >
            <div className={styles.women}>
              <button className={styles.btn}>WOMEN</button>
            </div>
          </Link>
        </div>
        <div className={styles.right}>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/products"
          >
            <div className={styles.men}>
              <button className={styles.btn}>MEN</button>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/products"
          >
            <div className={styles.access}>
              <button className={styles.btn}>ACCESSORIES</button>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Featured;
