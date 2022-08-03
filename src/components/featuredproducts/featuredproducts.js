import styles from "./products.module.css";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { UilHeartAlt } from "@iconscout/react-unicons";
import FeaturedProduct from "./featuredproduct";

const FeaturedProducts = () => {
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
      name: "Men's Shirt",
      key: "2",
      price: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2gbpGItiJERhtnDoLJvp6EtvuAnXepXaG8Q&usqp=CAU",
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
      price: 100,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4I8iyqtzI6QWgfv52gN3CnwHfUzonNVwKgA&usqp=CAU",
      id: "448562975",
    },
    {
      name: "Dyna Fit Jacket",
      key: "5",
      price: 280,
      image:
        "https://www.dynafit.com/media/image/44/3a/75/8226fa91-781c-475b-8059-5f58e9cc4ed9_dynafit.jpg",
      id: "545294659274592",
    },
    {
      name: "Sweat Pants",
      key: "6",
      price: 500,
      image: "https://m.media-amazon.com/images/I/812kvCQHo0L._AC_UL1500_.jpg",
      id: "624856927465924",
    },
    {
      name: "Black Shirt",
      key: "7",
      price: 100,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQfAclQyeeCV59Kjodk9TINSmGRaMqQx9Amg&usqp=CAU",
      id: "724852496529475",
    },
    {
      name: "Denim Jeans",
      key: "8",
      price: 200,
      image:
        "https://previews.123rf.com/images/siraphol/siraphol1702/siraphol170200562/71203910-beautiful-casual-men-jeans-pants-and-clothes-isolated-on-white-background.jpg?fj=1",
      id: "8456297456927",
    },
  ];

  return (
    <>
      <h1 className={styles.mainhead}>Featured Products</h1>
      <div className={styles.products}>
        {products.map((item) => {
          return (
            <FeaturedProduct
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

export default FeaturedProducts;
