import React from "react";
import HeroImg from "../photos/heroo.jpg";
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's review
        </h1>

        <div className="box-container">
          <div className="box">
            <p>
              I think this is the best i have ever visit and ever 
              tasted theese kind of biryani's. I will suggest to visit this and you'll never forget theese biryani's. i will give 5 star rating to this.The perfect biryani balances tender meat or vegetables with fragrant, something that in this restaurent fluffy rice, and a blend of spices that tantalize the taste buds. this is the  It's a dish that brings people together, perfect for celebrations or a comforting meal at home
            </p>
            <img src={HeroImg} className="user" alt="" />
            <h3>Sasi Kiran</h3>
          </div>
          <div className="box">
            <p>
            Biryani is a beloved, aromatic dish with rich, flavorful rice and tender meat or vegetables, perfected by various regional recipes. Each bite promises a harmonious blend of spices and tradition  It's a dish that brings people together, perfect for celebrations or a comforting meal at home mentality come  The perfect biryani balances tender meat or vegetables with fragrant, fluffy rice, and a blend of spices that tantalize the taste buds.
            </p>
            <img src='https://img.risingkashmir.com/wp-content/uploads/2024/07/01141319/Screenshot_20240701-1404012-1.png' className="user" alt="" />
            <h3>Rohit Sharma</h3>
          </div>
          <div className="box">
            <p>
            Biryani is a flavorful masterpiece, with perfectly cooked rice and succulent meat or veggies. The perfect biryani balances tender meat or vegetables with fragrant, fluffy rice, and a blend of spices that tantalize the taste buds. It's a dish that brings people together, perfect for celebrations perfect biryani balances tender meat or a comforting meal at home The blend of spices creates an irresistible aroma and taste that's simply unforgettable.
            </p>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3ykHjY4VFkR0Lc7QkteRfXyZ44JgWUGGzA&s' className="user" alt="" />
            <h3>Pawan Kalyan</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;