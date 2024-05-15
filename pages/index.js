import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {  Product, Necklace, HeroBanner, Ring } from '../components';
import { client } from '../lib/client';

const Home = ({ products}) => {
  return (
    <div>
     <HeroBanner />
     
    <div>
          
    </div>


    <div className='container main-page title_pro'>
    <h1 className="bordered-text">Best selling Necklace</h1>
    <h4>New Arrivals</h4>
              <img
          src="/divider1.png"
          alt="Logo"
          className="product-title"
        />
    <div className='row'>
    {products?.map((product) => <Necklace key={product._id} product={product} />)}
       
      </div>
    </div>


    <div className='container main-page title_pro'>
      <div>
      <h1 className="bordered-text"> Best Selling Bracelete</h1>
      <h4>New Arrivals</h4>
              <img
          src="/divider1.png"
          alt="Logo"
          className="product-title"
        />

</div>
    <div className='row'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>

    <div className='container main-page title_pro'>
      <h1 className="bordered-text">Best selling Ring</h1>
      <h4>New Arrivals</h4>
              <img
          src="/divider1.png"
          alt="Logo"
          className="product-title"
        />
    <div className='row'>
    {products?.map((product) => <Ring key={product._id} product={product} />)}
       
      </div>
    </div>
    
    </div>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const neckquery = '*[_type == "necklace"]';
  const neckdata = await client.fetch(neckquery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData,neckdata }
  }
}


export default Home