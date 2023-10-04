// ProductDetail.js

import React from "react";

import CardProduct from "./CardProduct";

const ProductDetail = () => {
  return (
    <div className="container product-detail-container">
      <div className="row">
        {" "}
        <CardProduct />{" "}
      </div>
    </div>
  );
};

export default ProductDetail;
