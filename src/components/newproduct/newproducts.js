import styles from "./new.module.css";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { UilHeartAlt } from "@iconscout/react-unicons";
import NewProduct from "./newproduct";

const NewProducts = () => {
  const products = [
    {
      name: "Pearl Necklace",
      key: "1",
      price: 100,
      image:
        "https://img.freepik.com/free-photo/beautiful-luxury-necklace-jewelry-stand-neck_1339-7946.jpg?w=2000",
      id: "1875487354",
    },
    {
      name: "Denim Jeans",
      key: "2",
      price: 50,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3PmROuKc9-k9yRu6Yau_kOvkiDdvugPrkw&usqp=CAU",
      id: "254548969374",
    },
    {
      name: "Leather Jacket",
      key: "3",
      price: 200,
      image:
        "https://media.glamour.com/photos/62262d4f098e66738974f1d5/1:1/w_1200,h_1200,c_limit/BlankNYC%20Faux%20Leather%20Moto%20Jacket.jpg",
      id: "345649765209",
    },
    {
      name: "Rolex Watch",
      key: "4",
      price: 250,
      image:
        "https://www.appnova.com/-/media/Luxury-Watch-Marketing-Strategies-For-Sustainable-Sales.ashx?h=1280&la=en&w=1920&hash=4066C17459AE981136CE48ECECD9A88FBB2BC864",
      id: "448562975",
    },
  ];

  return (
    <>
      <div className={styles.products}>
        {products.map((item) => {
          return (
            <NewProduct
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

export default NewProducts;
