import React from 'react'
import '../styles/globals.css'
import '../styles/index.css'


import {StateContext} from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
import { Footer, Navbar, PromotionBar } from '../components';

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <StateContext>
        <PromotionBar />
        <Navbar />
      
      <Toaster />
      <Component {...pageProps}/>
      <Footer />
      </StateContext>
      
      </div>
  ) 
}

export default MyApp