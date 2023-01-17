import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import "./Nav.css";

function Nav() {
  const [activeNav, setActiveNav] = useState("Home");
  return (
    <nav className="Nav">
      <div className="Nav__title">
        <div className="Nav__img">
          <img src={Logo} alt="Mr. K Premium Resever Logo" />
        </div>
        <div className="Nav__socials">
          <a href="https://twitter.com/MrKCBD" target="_blank">
            <BsTwitter />
          </a>
          <a href="https://www.instagram.com/mrkcbd/" target="_blank">
            <BsInstagram />
          </a>
        </div>
      </div>
      <section className="Nav__links">
        <ul className="Nav__items">
          <li>
            <Link
              to="/"
              onClick={() => setActiveNav("Home")}
              className={activeNav === "Home" ? "Active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setActiveNav("About")}
              className={activeNav === "About" ? "Active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              onClick={() => setActiveNav("Product")}
              className={activeNav === "product" ? "Active" : ""}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              onClick={() => setActiveNav("Shop")}
              className={activeNav === "Shop" ? "Active" : ""}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setActiveNav("Contact")}
              className={activeNav === "Contact" ? "Active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Nav;
