import React, { useState, useEffect } from "react";

const Menu = ({ addToCart }) => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAlertVisible(true);
  };

  useEffect(() => {
    if (alertVisible) {
      const timer = setTimeout(() => {
        setAlertVisible(false);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [alertVisible]);

  const menuItems = [
    { img: 'https://assets.cntraveller.in/photos/63997ddc9ee4918a0f9a6861/16:9/w_1920,h_1080,c_limit/biryani%20in%20hyderabad.jpg', name: 'Chicken Dum Biryani', price: 'Rs.259' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0hKJRv_uZwEpiPtl-YL4zuCSPzovdrIYFw&s', name: 'Gongura Chicken Biryani', price: 'Rs.299' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQm32dHe3i47csNWKVOu-CETtkQOEXPf7OA&s', name: 'Mutton Biryani', price: 'Rs.489' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4jrS6FeVIAvJx2MRMUQW3liP0FnQ_9NeIQ&s', name: 'Veg Biryani', price: 'Rs.250' },
    { img: 'https://nivamart.in/storage/app/public/product/2024-04-05-660ffad8e8395.webp', name: 'Chicken Fry Piece Biryani', price: 'Rs.299' },
    { img: 'https://thumbs.dreamstime.com/b/vegetarian-paneer-biryani-light-blue-background-traditional-veg-indian-cuisine-dish-cheese-basmati-rice-masala-chili-153218631.jpg', name: 'Paneer Biryani', price: 'Rs.299' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWyGdgDQdlYLtqVVBlmcJvaHz-eF-8sUWQg&s', name: 'Fish Biryani', price: 'Rs.270' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7ihpcym_751ZFEnotttODt1Ln4fh8Q_Njg&s', name: 'Prawns Biryani', price: 'Rs.329' }
  ];

  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">Our Menu</h1>

        <div className="box-container">
          {menuItems.map((item, index) => (
            <div className="box" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
              <button className="btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>

        {alertVisible && <div className="alert-box">Added to cart successfully!</div>}
      </section>
    </>
  );
};

export default Menu;
