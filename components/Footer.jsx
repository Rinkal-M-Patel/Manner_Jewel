import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  
} from "@fortawesome/free-brands-svg-icons";

const images = [
  { src: '/f_image1.jpg', alt: 'Gallery Image 10', width: 128, height: 120 },
  { src: '/f_image2.jpg', alt: 'Gallery Image 11', width: 128, height: 120 },
  { src: '/f_image3.jpeg', alt: 'Gallery Image 12', width: 128, height: 120 },
  { src: '/f_image1.jpg', alt: 'Gallery Image 13', width: 128, height: 120 },
];


const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Subscribed email:', email);
      // Add your form submission logic here, e.g., sending the email to a server
      alert(`Subscribed with ${email}`);
      setEmail(''); // Clear the input field after submission
  };
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
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

          <div className='mb10'>
            <p>We are an independent men jewellery digital platform with sustainable sourcing at the heart of our products and ensure our suppliers observe the same. </p>
            <p>Email: contact@manner.com</p>
            <p>Phone: +447788744412</p>
            </div>
          </div>
          <div className="col-md-4">
            <h4>NewsLetters</h4>
            <div>
                  <div>
                   
                    <p>Join our email list for useful information.</p>
                    <form className="subscription-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                    <div className="group-middle">
                      <p className="text-white">Follow Us</p>
                      <div>
                      <ul className="list-inline list-inline-sm footer-social-list-2">
                        <li> <a href="">
                            <FontAwesomeIcon
                              icon={faFacebook}
                              className="mx-2 my-3"
                            />
                          </a></li>
                        <li> <a href="">
                            <FontAwesomeIcon
                              icon={faInstagram}
                              className="mx-2 my-3"
                            />
                          </a></li>
                        <li> <a>
                            <FontAwesomeIcon
                              icon={faTwitter}
                              className="mx-2 my-3"
                            />
                          </a></li>
                        <li><a>
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              className="mx-2 my-3"
                            />
                          </a></li>
                    </ul>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <div className="row row-10 gutters-10">
            {images.map((image, index) => (
                <div className="col-6 col-sm-3 col-lg-6" key={index}>
                    <article className="thumbnail thumbnail-mary">
                        <div className="thumbnail-mary-figure">
                            <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
                        </div>
                    </article>
                </div>
            ))}
        </div>
          </div>
        </div>
      </div>
    </footer></>

  );
};

export default Footer;
