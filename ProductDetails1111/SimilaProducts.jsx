import React from "react";
import "./SimilarProducts.css";
import image1 from "../assets/header5.webp";
import image2 from "../assets/header4.webp";
const ProductCard = ({ imgSrc, alt }) => (
  <div className="card1">
    <img src={imgSrc} alt={alt} className="product_img1" />
    <p className="product_description">Title</p>
  </div>
);

const ProductContainer = () => (
  <div className="container1">
    <div className="row d-flex justify-content-center text-center">
      <h2 className="my-3">YOU MAY ALSO LIKE</h2>

      <div className="wrapper1">
        <ProductCard imgSrc={image1} alt="" />
        <ProductCard imgSrc={image2} alt="" />
        <ProductCard imgSrc={image1} alt="" />
      </div>
    </div>
  </div>
);

export default ProductContainer;
