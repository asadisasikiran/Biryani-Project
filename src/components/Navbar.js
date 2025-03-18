import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import LogoImg from "../photos/biryani-logo.jpg";

class Navbar extends Component {
  render() {
    const { cartCount, handleCartClick } = this.props;
    return (
      <>
        <header className="header">
          <a href="#" className="logo">
            <img src={LogoImg} alt="" />
          </a>
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
            <a href="#blogs">Blogs</a>
            <a href="#" className="cart-icon" onClick={handleCartClick}>
              <FaShoppingCart />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </a>
          </nav>
        </header>
      </>
    );
  }
}

export default Navbar;
