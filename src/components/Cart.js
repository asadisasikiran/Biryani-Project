import React, { Component } from "react";
class Cart extends Component {
  render() {
    const { items, removeFromCart } = this.props;
    return (
      <section className="cart">
        <div className="box-container">
          {items.length === 0 ? (
            <div className="carto">
                <p>Your cart is empty</p>
                <a href='Home.js' class="btn">
                  Go Back To Home
                </a>
            </div>
          ) : (
            items.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.img} alt="" />
                <h3>{item.name}</h3>
                <div className="price">{item.price}</div>
                <button className="btn" onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            ))
          )}
        </div>
      </section>
    );
  }
}

export default Cart;
