
import React from 'react';
import Slider from 'react-slick';

const ProductCarousel = () => {
  const products = [
    { id: 1, name: 'Product 1', imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', imageUrl: 'product2.jpg' },
    { id: 3, name: 'Product 3', imageUrl: 'product3.jpg' },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
  };

  return (
    <div className="product-carousel">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Featured Products</h2>
            <Slider {...settings}>
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                  {/* Add product details, pricing, and buttons here */}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
