import React, { useRef } from 'react';
import {AiOutlineLeft } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';


import { useStateContext } from '../context/StateContext';


export const Cart = () => {


  return (
   <>
   <div className='cart-wrapper'>
    <div className="cart-container">
      <button type="button" className="btn btn-primary cart-heading">
      <AiOutlineLeft />
        <span className="heading">Your Cart</span>
        <span className="cart-num-items">(2 items)</span>
      </button>
      <div className="product-container">
        <div className="product">
          <img
            src=""
            className="cart-product-image"
            alt="Product"
          />
          <div className="item-desc">
            <div className="flex top">
              <h5>name</h5>
              <h4>proce</h4>
            </div>
            <div className="flex bottom">
            <div className="">
           
              <button className="btn">minus</button>
              <span>2</span>
              <button className="btn">plus</button>
        
          </div>
          <button
                    type="button"
                    className="remove-item"
                    >
                    <TiDeleteOutline />
                  </button>
             
            </div>
          </div>
        </div>
      </div>
      <div className="cart-bottom">
        <div className="total">
          <h3>Subtotal:</h3>
          <h3>$80</h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn btn-success">
            Pay now
          </button>
        </div>
      </div>
    </div>
    </div>
   </>
  )
}
