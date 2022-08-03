import styles from "./men.module.css";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { UilHeartAlt } from "@iconscout/react-unicons";
import MenProduct from "./menproduct";

const MenProducts = () => {
  const products = [
    {
      name: "White Shirt",
      key: "1",
      price: 50,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXfhdS1PeGPDzxXAs7j_m1Ggj7FoLe9shTw&usqp=CAU",
      id: "14851368483",
    },
    {
      name: "Denim Jeans",
      key: "2",
      price: 50,
      image:
        "https://thumbs.dreamstime.com/b/men-s-dark-blue-denim-jeans-pants-isolated-white-background-trendy-fashion-casual-clothes-outfit-garments-models-vector-140578250.jpg",
      id: "14619374681374",
    },
    {
      name: "Denim Jacket",
      key: "3",
      price: 200,
      image:
        "https://image.made-in-china.com/202f0j00fFWlHCKGAdcR/Men-Clothing-Track-Suit-Autumn-European-Style-Wholesale-Men-s-Jeans-Jackets-Coats-Denim-Jacket.jpg",
      id: "345649",
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
      name: "Gray Shirt",
      key: "5",
      price: 280,
      image:
        "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1591117692000/photosp/c7544d0b-bea6-4f7b-9ece-f702ec5ac6d9/stock-photo-white-background-textile-t-shirt-object-outfit-wear-template-mock-up-c7544d0b-bea6-4f7b-9ece-f702ec5ac6d9.jpg",
      id: "8754384581",
    },
    {
      name: "Fur Jacket",
      key: "6",
      price: 500,
      image:
        "https://filebroker-cdn.lazada.sg/kf/Sf8fc90ce91d9493cbb296a11452ec6c8d.jpg",
      id: "62485695924",
    },
    {
      name: "Puffer Jacket",
      key: "7",
      price: 100,
      image:
        "https://previews.123rf.com/images/vitalily73/vitalily732005/vitalily73200500338/146448762-men-s-light-blue-t-shirt-and-blue-jacket-isolated-on-white-background-casual-clothing.jpg",
      id: "7248524965",
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
            <MenProduct
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

export default MenProducts;
