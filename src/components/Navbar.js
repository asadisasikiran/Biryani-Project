import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import LogoImg from "../photos/biryani-logo.jpg";

class Navbar extends Component {
  render() {
    const { cartCount, handleCartClick, goToSection } = this.props;
    return (
      <>
        <header className="header">
          <a href="#" className="logo">
            <img src={LogoImg} alt="" />
          </a>
          <nav className="navbar">
            <a href="#home" onClick={goToSection}>Home</a>
            <a href="#about" onClick={goToSection}>About</a>
            <a href="#menu" onClick={goToSection}>Menu</a>
            <a href="#review" onClick={goToSection}>Review</a>
            <a href="#contact" onClick={goToSection}>Contact</a>
            <a href="#blogs" onClick={goToSection}>Blogs</a>
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
