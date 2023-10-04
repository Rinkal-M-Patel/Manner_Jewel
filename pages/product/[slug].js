import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { client, urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";
import { Acordion, ModalPop } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faCircle } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ product, products }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const updateColor = (color) => {
    setSelectedColor(color.charAt(0).toUpperCase() + color.slice(1));
  };

  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <>
      <div className="container product-detail-container">
        <div className="row">
          {/*------------------------ card production------------------------------------ */}

          <div className="container my-5">
            <div className="row">
              <div className="col-md-5">
                <img
                  src={urlFor(image && image[index])}
                  className="mr-3"
                  height={500}
                />
                <div>
                  {image?.map((item, i) => (
                    <img
                      key={i}
                      src={urlFor(item)}
                      className={
                        i === index
                          ? "small-image selected-image"
                          : "small-image"
                      }
                      onMouseEnter={() => setIndex(i)}
                      height={150}
                    />
                  ))}
                </div>
              </div>

              <div className="col-md-7 ">
                <div className="container-fluid d-flex justify-content-center row">
                  <div className="row secure">
                    <h3>{name}</h3>
                  </div>
                  <div className=" col-10 form-product">
                    <div className="row form-item">
                      <h4>£{price}</h4>
                    </div>
                    <div className="row form-item">
                      <h4>COLOR</h4>
                      <div className="color-selector">
                        <FontAwesomeIcon
                          type="radio"
                          id="gold"
                          name="color"
                          onClick={() => updateColor("GOLD")}
                          icon={faCircle}
                          className="gold-class"
                        />

                        <label
                          htmlFor="gold"
                          className="color-circle gold"
                        ></label>
                        <FontAwesomeIcon
                          type="radio"
                          id="silver"
                          name="color"
                          value="silver"
                          onClick={() => updateColor("SILVER")}
                          icon={faCircle}
                          className="silver-class"
                        />
                      </div>
                      <span id="selectedColor">{selectedColor}</span>
                    </div>
                    <div className="row form-item">
                      <div className="col-6">
                        <h4>Quantity</h4>
                      </div>
                      <div className="col-6 quantity">
                        <h4>
                          {/* ----------------------------plus minus button------------------------------------ */}
                          <div className="quantity-toggle">
                            <button onClick={decQty}>&mdash;</button>
                            <input type="text" value={qty} readOnly />
                            <button onClick={incQty}>&#xff0b;</button>
                          </div>
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="block">
                        <div></div>
                        <button
                          className="shadow btn custom-btn w-100"
                          onClick={() => onAdd(product, qty)}
                        >
                          Add to cart +
                        </button>
                        <button
                          type="button"
                          className="shadow btn custom-btn w-100"
                          onClick={handleBuyNow}
                        >
                          Buy Now
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
                        <FontAwesomeIcon icon={faDroplet} className="mx-1" />
                        FREE RETURNS
                      </p>
                      <br />
                      <p>
                        <i className=" mx-1 fa-regular fa-envelope"></i> FREE
                        GIFT PACKAGING
                      </p>{" "}
                      <br />
                      <p>
                        {" "}
                        <i className="mx-1 fa-solid fa-truck"></i>FREE UK
                        DELIVERY
                      </p>{" "}
                      <br />
                      <p>
                        <i className="mx-1fa-solid fa-pen-nib"></i> UNIQUE
                        DESIGNS
                      </p>{" "}
                      <br />
                      <p>
                        <i className="mx-1fa-solid fa-plane"></i> NEXT DAY
                        DELIVERY & WORLDWIDE SHIPPING
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
                      <i className=" mx-1 fa-solid fa-crop-simple"></i>
                      ADJUSTUBLE SIZING
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
              <Acordion />
            </div>
          </div>

          {/*----------------------------- card production end------------------------------ */}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;