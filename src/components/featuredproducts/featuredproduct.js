import styles from "./products.module.css";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { UilHeartAlt } from "@iconscout/react-unicons";
import { useStateValue } from "../../StateProvider";

const FeaturedProduct = ({ price, name, image, id }) => {
  const [{ basket, favorite }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        name: name,
        price: price,
        image: image,
        id: id,
      },
    });
  };

  const addToFavorite = () => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      item: {
        name: name,
        price: price,
        image: image,
        id: id,
      },
    });
  };

  return (
    <>
      <div className={styles.product}>
        <img className={styles.image} src={image} alt="some" />
        <div className={styles.content}>
          <p className={styles.head}>{name}</p>
          <div className={styles.details}>
            <div className={styles.icons}>
              <UilShoppingCart
                className={styles.icon}
                size="20"
                color="#fff"
                onClick={addToBasket}
              />
              <UilHeartAlt
                className={styles.icon}
                size="20"
                color="#fff"
                onClick={addToFavorite}
              />
            </div>
            <p className={styles.price}>$ {price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
