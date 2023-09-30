import React from 'react';


import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, price } }) => {
  return (
    <div>
          <div className="card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
             
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="product-price">${price}</p>

               
              </div>
            </div>
     
    </div>
  )
}

export default Product