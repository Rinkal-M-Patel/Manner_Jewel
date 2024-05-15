import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import "../styles/Home.module.css";
import Image from "next/image";
import { Cart } from "./Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  

  const { showCart, setShowCart, totalQuantities } = useStateContext(0);
  useEffect(() => {
    const closeSidebarOnOutsideClick = (e) => {
      if (isSidebarOpen && e.target.closest(".offcanvas") === null) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", closeSidebarOnOutsideClick);
    return () => {
      document.removeEventListener("mousedown", closeSidebarOnOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <>
    <nav className="navbar navbar-custom navbar-expand-lg bg-secondary text-uppercase fixed-top  navbar-dark bg-dark" id="mainNav">
      <div className="container">
      <div className="logo">
            <Link href="/">
              {/* Use the Image component to render the logo */}
              <Image
                src="/WhiteLogo.png"
                alt="Logo"
                width={1000}
                height={300}
                className="logo"
              />
            </Link>
          </div>

        <button className="navbar-toggler text-uppercase text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Home</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#work">Necklace</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#skill">Ring</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Bracelete</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
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
        {/* <div
            className={`offcanvas offcanvas-start text-bg-dark ${
              isSidebarOpen ? "show" : ""
            }`}
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
           
          
          </div> */}
      </div>
    </nav>
    {showCart && <Cart />}
    </>
  );
};

export default Navbar;
