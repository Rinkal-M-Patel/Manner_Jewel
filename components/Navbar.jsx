import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './Cart';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
 
  const { showCart, setShowCart, totalQuantities } = useStateContext(0);

  return (
    <div className="navbar">
      <p className="logo">
        <Link href="/">Manner</Link>
      </p>

      <button type="button" className="btn btn-outline-info" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span>{totalQuantities}</span>
      </button>

     {showCart && <Cart />}
    </div>
  )
}

export default Navbar