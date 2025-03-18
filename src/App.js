import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      showCart: false
    };
  }

  addToCart = (item) => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, item]
    }));
  };

  removeFromCart = (index) => {
    this.setState(prevState => {
      const newCartItems = prevState.cartItems.filter((_, i) => i !== index);
      return { cartItems: newCartItems };
    });
  };

  handleCartClick = () => {
    this.setState(prevState => ({
      showCart: !prevState.showCart
    }));
  };

  render() {
    const { cartItems, showCart } = this.state;
    return (
      <>
        <Navbar cartCount={cartItems.length} handleCartClick={this.handleCartClick} />
        {showCart ? (
          <Cart items={cartItems} removeFromCart={this.removeFromCart} />
        ) : (
          <>
            <Home />
            <About />
            <Menu addToCart={this.addToCart} />
            <Review />
            <Contact />
            <Blog />
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default App;
