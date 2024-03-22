import React from "react";
import styles from "./ShoesList.module.css";

function ShoesList() {
  // Define an array of shoe data
  const shoesData = [
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger05.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas02.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger02.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas03.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas04.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger03.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas05.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger04.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas06.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas07.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger08.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas09.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger06.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas10.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger07.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas02.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger02.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas03.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas04.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger03.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas05.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger08.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger09.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas02.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger02.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas03.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas04.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger03.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas05.png",
    },
    {
      brand: "adidas",
      name: "I-5923 RUNNER PRIDE",
      price: "£99.95",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png",
    },
    {
      brand: "tiger",
      name: "TIGER ALLY",
      price: "£95.00",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tiger10.png",
    },
  ];

  return (
    <ul className={styles.ull}>
      {shoesData.map((shoe, index) => (
        <li key={index} className={styles.lii}>
          <div className={styles.divi}>
            <h2>{shoe.name}</h2>
            <p className={styles.pi}>{shoe.price}</p>
          </div>
          <img className={styles.imgi} src={shoe.image} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default ShoesList;
