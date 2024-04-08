import React, { useContext } from "react";
import styles from "./ShoesList.module.css";
import { CartItemsContext } from "../Context/CartItemsContext";
var _id = 0,
  size = 0;
function ShoesList() {
  const cartItemsContext = useContext(CartItemsContext);
  _id++;
  size++;
  const handleAddToCart = (shoe) => {
    if (shoe !== undefined) {
      const { brand, name, price, image } = shoe;
      const item = { _id, brand, name, price, image, size };
      console.log(item);
      cartItemsContext.addShoes(item, 1);
    }
  };
  const shoesData = [
    {
      brand: "Nike",
      name: "Air Zoom Pegasus 38",
      price: 2199,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png",
    },
    {
      brand: "Puma",
      name: "Future Rider Twofold",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger05.png",

    },
    {
      brand: "Reebok",
      name: "Nano X1",
      price: 1899,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas02.png",
    },
    {
      brand: "Under Armour",
      name: "Charged Assert 8",
      price: 1499,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger02.png",
    },
    {
      brand: "New Balance",
      name: "Fresh Foam 1080v11",
      price: 2499,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas03.png",
    },
    {
      brand: "Adidas",
      name: "Solarboost 3",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas04.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger03.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas05.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger04.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas06.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas07.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger01.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas09.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger06.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas10.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger07.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas02.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger02.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas03.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas04.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger03.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas05.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger01.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger05.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas02.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger02.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas03.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas04.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger03.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas05.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: 1999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: 999,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger02.png",
    },
  ];

  return (
    <div className={styles.body}>
      <ul className={styles.ull}>
        {shoesData.map((shoe, index) => (
          <li key={shoe.brand + index} className={styles.lii}>
            <div className={styles.divi}>
              <h2>{shoe.name}</h2>
              <p className={styles.pi}>{shoe.price}/-</p>
            </div>
            <img
              className={`${styles.imgi} cursor-pointer`}
              src={shoe.image}
              alt={shoe.image}
              id={shoe.image}
              onClick={() => handleAddToCart(shoe)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoesList;
