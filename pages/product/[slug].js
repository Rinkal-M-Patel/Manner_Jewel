import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Product } from '../../components';
import { client, urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";
import { Acordion, ModalPop } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faTruck,
  faPenNib,
  faPlane,
  faInfinity,
  faAward,
  faDroplet,
  faCircle,
  faCropSimple,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faPinterestP,
  faInstagram,
  faSpotify,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
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
                <div className="container-fluid d-flex  row">
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
                    <div className="quantity ">
                      
                        <h4>Quantity</h4>
                      
                      <div className="">
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
                      <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
                      
                      </div>
                    </div>
                    <div className="row">
                     
                        <ModalPop />
                     
                    </div>

                    <div className="row my-4 p-class">
                      <p>
                        <FontAwesomeIcon icon={faDroplet} className="mx-1" />
                        FREE RETURNS
                      </p>
                      <br />
                      <p>
                        <FontAwesomeIcon icon={faEnvelope} className="mx-1" />
                        FREE GIFT PACKAGING
                      </p>
                      <br />
                      <p>
                        <FontAwesomeIcon icon={faTruck} className="mx-1" />
                        FREE UK DELIVERY
                      </p>
                      <br />
                      <p>
                        <FontAwesomeIcon icon={faPenNib} className="mx-1" />
                        UNIQUE DESIGNS
                      </p>
                      <br />
                      <p>
                        <FontAwesomeIcon icon={faPlane} className="mx-1" />
                        NEXT DAY DELIVERY & WORLDWIDE SHIPPING
                      </p>
                      <br />
                      <p>
                        <FontAwesomeIcon icon={faInfinity} className="mx-1" />
                        SUSTAINABLY-CONSCIOUS
                      </p>
                    </div>
                    <div className="row  my-4 p-class icons  ">
                      <div className="col-12   d-flex justify-content-center ">
                        <p>
                          <a href="">
                            <FontAwesomeIcon
                              icon={faFacebook}
                              className="mx-2 my-3"
                            />
                          </a>
                          <a href="">
                            <FontAwesomeIcon
                              icon={faPinterestP}
                              className="mx-2 my-3"
                            />
                          </a>
                          <a href="">
                            <FontAwesomeIcon
                              icon={faInstagram}
                              className="mx-2 my-3"
                            />
                          </a>
                          <a href="">
                            {" "}
                            <FontAwesomeIcon
                              icon={faSpotify}
                              className="mx-2 my-3"
                            />
                          </a>
                          <a>
                            <FontAwesomeIcon
                              icon={faTwitter}
                              className="mx-2 my-3"
                            />
                          </a>
                          <a>
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              className="mx-2 my-3"
                            />
                          </a>
                          <a>
                            <FontAwesomeIcon
                              icon={faYoutube}
                              className="mx-2 my-3"
                            />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
               
          
            {/* <div className="col-12 col-md-5 ">
              {" "}
              <Acordion />
            </div> */}
          </div>

          {/*----------------------------- card production end------------------------------ */}
        </div>
        
      </div>
      <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                  <div className="maylike-products-container track">
                    {products.map((item) => (
                      <Product key={item._id} product={item} />
                    ))}
                  </div>
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
