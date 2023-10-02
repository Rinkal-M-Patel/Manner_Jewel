import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from '../components';
import { client } from '../lib/client';

const Home = ({ products }) => {
  return (
    <div>
      
      <div>
      <h1>Best selling product</h1>
      <p>bracelete colletion you cna choose</p>
      </div>

      
    <div>
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    </div>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return {
    props: { products }
  }
}


export default Home