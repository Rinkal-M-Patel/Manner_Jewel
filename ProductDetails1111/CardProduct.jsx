import React, { useState } from "react";
import headerImage1 from "../assets/header5.webp";
import "./Card.css";
import ImagesSection from "./ImageSection";
import Quantity from "./Quantity";
import Accordion from "./Acordion";
import ProductContainer from "./SimilaProducts.jsx";

import ModalPop from "./ModalPop.jsx";
const CardProduct = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const updateColor = (color) => {
    setSelectedColor(color.charAt(0).toUpperCase() + color.slice(1));
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <ImagesSection />
          <div className="col-md-7 ">
            <div className="container-fluid d-flex justify-content-center row">
              <div className="row secure">
                <h3> I AM</h3>
              </div>
              <div className=" col-10 form-product">
                <div className="row form-item">
                  <h4>£55</h4>
                </div>
                <div className="row form-item">
                  <h4>COLOR</h4>
                  <div className="color-selector">
                    <i
                      type="radio"
                      id="gold"
                      name="color"
                      onClick={() => updateColor("GOLD")}
                      className="fa-regular fa-circle gold-class"
                    ></i>

                    <label htmlFor="gold" className="color-circle gold"></label>
                    <i
                      type="radio"
                      id="silver"
                      name="color"
                      value="silver"
                      onClick={() => updateColor("SILVER")}
                      className="fa-regular fa-circle silver-class"
                    ></i>
                  </div>
                  <span id="selectedColor">{selectedColor}</span>
                </div>
                <div className="row form-item">
                  <div className="col-6">
                    <h4>Quantity</h4>
                  </div>
                  <div className="col-6 quantity">
                    <h4>
                      <Quantity />
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="block">
                    <button className="shadow btn custom-btn w-100">
                      Add to cart +
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="block  btn  w-100">
                    <ModalPop />
                  </div>
                </div>

                <div className="row my-4 p-class">
                  <p>
                    {" "}
                    <i className=" mx-1 fa-solid fa-arrows-rotate"></i>FREE
                    RETURNS
                  </p>{" "}
                  <br />
                  <p>
                    <i className=" mx-1 fa-regular fa-envelope"></i> FREE GIFT
                    PACKAGING
                  </p>{" "}
                  <br />
                  <p>
                    {" "}
                    <i className="mx-1 fa-solid fa-truck"></i>FREE UK DELIVERY
                  </p>{" "}
                  <br />
                  <p>
                    <i className="mx-1fa-solid fa-pen-nib"></i> UNIQUE DESIGNS
                  </p>{" "}
                  <br />
                  <p>
                    <i className="mx-1fa-solid fa-plane"></i> NEXT DAY DELIVERY
                    & WORLDWIDE SHIPPING
                  </p>{" "}
                  <br />
                  <p>
                    <i className="mx-1 fa-solid fa-infinity"></i>{" "}
                    SUSTAINABLY-CONSCIOUS
                  </p>{" "}
                </div>
                <div className="row  my-4 p-class icons  ">
                  <div className="col-12   d-flex justify-content-center ">
                    <p>
                      <a href="">
                        {" "}
                        <i className=" mx-2 my-3 fa-brands fa-facebook"></i>
                      </a>{" "}
                      <a href="">
                        {" "}
                        <i className="mx-2 my-3 fa-brands fa-pinterest-p"></i>
                      </a>
                      <a href="">
                        <i className="mx-2 my-3 fa-brands fa-instagram"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i className=" mx-2 my-3 fa-brands fa-spotify"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5  my-2">
          <div className="row">
            <div className="water-class col-4">
              <a href="">
                <p>
                  <i className=" mx-1 fa-solid fa-droplet"></i>
                  WATER & SWEAT REZISTANCE
                </p>
              </a>
            </div>
            <div className="water-class col-4">
              <a href="">
                <p>
                  {" "}
                  <i className=" mx-1 fa-solid fa-crop-simple"></i>ADJUSTUBLE
                  SIZING
                </p>
              </a>
            </div>
            <div className="water-class col-4">
              <a href="">
                <p>
                  <i className="mx-1 fa-solid fa-award"></i>
                  EXCLUZIVE DESIGN
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 ">
          {" "}
          <Accordion />{" "}
        </div>
      </div>
      <div className="container-fluid similar-products my-4">
        <ProductContainer />
      </div>
    </>
  );
};
export default CardProduct;
