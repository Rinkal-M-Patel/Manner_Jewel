import React from 'react'
import '../styles/globals.css'
import {StateContext} from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../components';

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <StateContext>
        <Navbar />
      <Toaster />
      <Component {...pageProps}/>
      </StateContext>
      
      </div>
  ) 
}

export default MyApp