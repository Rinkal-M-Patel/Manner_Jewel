import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { useStateContext } from '../context/StateContext';


const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
   
    
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
   
  }, []);

  return (
    <div className="thank-you-page">
        <div className="thank-you-header">Thank You for Your Order</div>
        <div className="thank-you-content">
            Your order has been successfully placed. An email confirmation with your order details has been sent to your inbox.
        </div>
        <Link href="/">
          <button type="button" className="btn back-button">
            Continue Shopping
          </button>
        </Link>
        
    </div>
  )
}

export default Success