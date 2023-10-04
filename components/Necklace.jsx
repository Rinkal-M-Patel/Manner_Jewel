import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  if (name === 'necklace') {
    return (
      <>
        <Link href={`/product/${slug.current}`}>
          <div className="col-md-3">
            <img
              src={urlFor(image && image[0])}
              width={250}
              height={250}
              className="product-image"
            />

            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="product-price">£{price}</p>
            </div>
          </div>
        </Link>
      </>
    );
  }  else {
   
    return null;
  }
}

export default Product;
