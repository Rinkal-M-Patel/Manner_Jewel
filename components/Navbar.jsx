import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import "../styles/Home.module.css";
import Image from "next/image";
import { Cart } from "./Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const [searchInput, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
      <nav className="navbar navbar-custom navbar-dark bg-dark fixed-top ">
        <div className="container-fluid">
          <button
            className="navbar-toggler custom-togler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-brand logo">
            <Link href="/">
              {/* Use the Image component to render the logo */}
              <Image
                src="/WhiteLogo.png"
                alt="Logo"
                width={200}
                height={150}
                className="logo"
              />
            </Link>
          </div>

          <div className="icons">
            <a href="">
              <i className=" iconClass  fa-brands fa-searchengin"></i>
            </a>
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShopping />
              <span>{totalQuantities}</span>
            </button>
          </div>
          <div
            className={`offcanvas offcanvas-start text-bg-dark ${
              isSidebarOpen ? "show" : ""
            }`}
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                onClick={toggleSidebar}
                aria-label="Close"
              />
            </div>
            <div className="   offcanvas-body">
              <ul className=" navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link href="/Newin">
                    <a className="nav-link active" aria-current="page" href="#">
                      NEW IN
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/treding">
                    <a className="nav-link">TREDING</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/necklace">
                    <a className="nav-link">NECKLACE</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/bracelets">
                    <a className="nav-link" href="#">
                      BRACELETS
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/rings">
                    <a className="nav-link">RINGS</a>
                  </Link>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  value={searchInput}
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleInput}
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
