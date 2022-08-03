import styles from "./female.module.css";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { UilHeartAlt } from "@iconscout/react-unicons";
import FemaleProduct from "./femaleproduct";

const FemaleProducts = () => {
  const products = [
    {
      name: "Pink Hoodie",
      key: "1",
      price: 100,
      image:
        "https://previews.123rf.com/images/lgrape/lgrape1908/lgrape190800018/131900055-women-s-pink-sweatshirt-on-a-white-background-isolated-image-on-white-background-women-s-clothing-.jpg",
      id: "6187345836",
    },
    {
      name: "Dress",
      key: "2",
      price: 50,
      image:
        "https://i.pinimg.com/564x/3c/a8/43/3ca8432e149acde0673816f3083b56c1--infant-dresses-baby-dresses.jpg",
      id: "25487364827",
    },
    {
      name: "Blouse",
      key: "3",
      price: 200,
      image:
        "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1592660289000/photosp/45ae1835-c1be-42ab-bdef-385a7dd0aec0/stock-photo-clothing-cloth-beige-woman-clothes-cotton-clothes-hanger-hanger-casual-45ae1835-c1be-42ab-bdef-385a7dd0aec0.jpg",
      id: "345916543",
    },
    {
      name: "Pink Shirt",
      key: "4",
      price: 250,
      image:
        "https://img.myloview.com/stickers/t-shirt-in-pastel-pink-color-on-hanger-with-eco-bag-on-white-background-basic-female-clothes-springsummer-outfit-400-187008319.jpg",
      id: "4483784585",
    },
    {
      name: "Summer Dress",
      key: "5",
      price: 280,
      image:
        "https://img.freepik.com/premium-photo/folded-clothes-women-fashion-urban-basic-outfit-female-spring-look-autumn-outfit-burgundy-skirt-beige-sweater-white-shoes-sneakers-bag-make-up-cosmetics-white-background-top-view-flat-lay_221542-2517.jpg?w=2000",
      id: "2523842854890",
    },
    {
      name: "Jacket",
      key: "6",
      price: 500,
      image:
        "https://thumbs.dreamstime.com/b/white-female-jacket-isolated-background-modern-fashionable-women-s-clothing-flat-lay-172022088.jpg",
      id: "6248569672367",
    },
    {
      name: "Green Dress",
      key: "7",
      price: 400,
      image:
        "https://previews.123rf.com/images/inarik/inarik1403/inarik140300005/26790964-woman-in-beauty-fashion-green-gown-long-evening-dress-over-isolated-white-background.jpg",
      id: "7252542496529475",
    },
    {
      name: "Dress",
      key: "8",
      price: 200,
      image:
        "https://previews.123rf.com/images/maximleshkovich/maximleshkovich1709/maximleshkovich170900361/87173388-women-s-fashion-clothes-and-accessories-on-white-background-flat-lay-female-styled-look-with-dress-h.jpg",
      id: "86747297456927",
    },
  ];

  return (
    <>
      <div className={styles.products}>
        {products.map((item) => {
          return (
            <FemaleProduct
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

export default FemaleProducts;
