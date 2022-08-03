import styles from "./sale.module.css";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { UilHeartAlt } from "@iconscout/react-unicons";
import SaleProduct from "./saleproduct";

const SaleProducts = () => {
  const products = [
    {
      name: "Pink Shirt",
      key: "4",
      price: 250,
      image:
        "https://img.myloview.com/stickers/t-shirt-in-pastel-pink-color-on-hanger-with-eco-bag-on-white-background-basic-female-clothes-springsummer-outfit-400-187008319.jpg",
      id: "4483784585",
    },
    {
      name: "Pearl Necklace",
      key: "1",
      price: 100,
      image:
        "https://img.freepik.com/free-photo/beautiful-luxury-necklace-jewelry-stand-neck_1339-7946.jpg?w=2000",
      id: "1875487354",
    },
    {
      name: "Flannel",
      key: "4",
      price: 250,
      image:
        "https://thumbs.dreamstime.com/b/warm-winter-shirt-cotton-flannel-white-background-45991940.jpg",
      id: "4414134",
    },
    {
      name: "Rain Jacket",
      key: "8",
      price: 200,
      image:
        "https://media.istockphoto.com/photos/mens-tshirt-and-jacket-isolated-on-white-backgroundcasual-clothing-picture-id1324328299?b=1&k=20&m=1324328299&s=612x612&w=0&h=9r2FVyK7oclVtzNPjwts3BhIwstMGNxjUFbS2qF7yBs=",
      id: "84456927",
    },
  ];

  return (
    <>
      <div className={styles.products}>
        {products.map((item) => {
          return (
            <SaleProduct
              id={item.id}
              price={item.price}
              name={item.name}
              image={item.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default SaleProducts;
