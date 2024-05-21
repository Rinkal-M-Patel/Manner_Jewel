import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Image from 'next/image';
import { Cart } from './Cart';
import { useStateContext } from '../context/StateContext';
import '../styles/Home.module.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  useEffect(() => {
    const closeSidebarOnOutsideClick = (e) => {
      if (isSidebarOpen && e.target.closest('.offcanvas') === null) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', closeSidebarOnOutsideClick);
    return () => {
      document.removeEventListener('mousedown', closeSidebarOnOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <nav className="navbar navbar-custom navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-dark bg-dark" id="mainNav">
        <div className="container">
          <div className="logo">
            <Link href="/" passHref>
              {/* Use the Image component to render the logo */}
              <a>
                <Image
                  src="/WhiteLogo.png"
                  alt="Logo"
                  width={1000}
                  height={300}
                  className="logo"
                />
              </a>
            </Link>
          </div>
          <button
            className="navbar-toggler text-uppercase text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <Link href="#about" passHref>
                  <a className="nav-link py-3 px-0 px-lg-3 rounded">Home</a>
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link href="#work" passHref>
                  <a className="nav-link py-3 px-0 px-lg-3 rounded">Necklace</a>
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link href="#skill" passHref>
                  <a className="nav-link py-3 px-0 px-lg-3 rounded">Ring</a>
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link href="#contact" passHref>
                  <a className="nav-link py-3 px-0 px-lg-3 rounded">Bracelete</a>
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link href="#contact" passHref>
                  <a className="nav-link py-3 px-0 px-lg-3 rounded">Contact</a>
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <button
                  type="button"
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  onClick={() => setShowCart(true)}
                >
                  <AiOutlineShopping />
                  <span>{totalQuantities}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
