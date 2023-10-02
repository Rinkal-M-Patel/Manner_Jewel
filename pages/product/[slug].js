import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { client, urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty } = useStateContext();

  return (
    <div>
        <div className='row'>
        <div className='col-md-6'>
        <div className="media">
           
           <img src={urlFor(image && image[index])} className="mr-3" />
           <div>
           {image?.map((item, i) => (
                 <img 
                   key={i}
                   src={urlFor(item)}
                   className={i === index ? 'small-image selected-image' : 'small-image'}
                   onMouseEnter={() => setIndex(i)}
                 />
               ))}
           </div>
     <div className="media-body">
       <h5 className="mt-0">{name}</h5>
       <p>{details}</p>
       <p className="price">{price}</p>
       </div>
   </div>
        </div>
        
        <div className='col-md-6'>
        <div className="">
            <h3>Quantity:</h3>
            
              <button className="btn" onClick={decQty}>minus</button>
              <span>{qty}</span>
              <button className="btn" onClick={incQty}>plus</button>
        
          </div>
          <div>
            <button type="button" className="btn btn-primary">Add to Cart</button>
            <button type="button" className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        </div>
        
    </div>
  )
}

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
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
  

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    console.log(product);
  
    return {
      props: { products, product }
    }
  }

export default ProductDetails