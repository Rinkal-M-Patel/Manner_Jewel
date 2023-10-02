import React from 'react'
import '../styles/globals.css'
import {StateContext} from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <StateContext>
      <Toaster />
      <Component {...pageProps}/>
      </StateContext>
      
      </div>
  ) 
}

export default MyApp