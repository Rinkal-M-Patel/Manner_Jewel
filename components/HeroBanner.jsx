// HeroBanner
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  const inlineStyles = {
    paddingLeft: 0,
    paddingRight: 0,
  };
  return (
    <>
      <section>
        <div className="container-fluid  header-custom">
          <div className="row">
            <div className="col-6" style={inlineStyles}>
              <Image
                src="/header5.webp"
                alt="Logo"
                width={1000}
                height={700}
              />
            </div>
            <div className="col-6  " style={inlineStyles}>
              <Image
                src="/header4.webp"
                alt="Logo"
                width={1000}
                height={700}
              />
            </div>
          </div>
          <div className="row">
            <div className="carusel">
              <div className="carusel_section">
                <h2>CRAFTED BY KINGS, WORN</h2>
                <h2>BY GENTLEMEN</h2>
                <Link href="/">
                  <button className="btn btn-light">SHOP NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
