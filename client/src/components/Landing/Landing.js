import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import i1 from "./1.png";
import i2 from "./2.png";
import i3 from "./3.png";
import i4 from "./4.png";
import i5 from "./5.png";
import "./Landing.css";

function Landing() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={i1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={i2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={i3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={i4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={i5}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Landing;
