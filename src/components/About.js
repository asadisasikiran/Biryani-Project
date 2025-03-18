import React from "react";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          about us
        </h1>

        <div className="row">
          <div className="image">
            <img src='https://t3.ftcdn.net/jpg/06/08/84/24/360_F_608842413_hdYadp6uSC7c7pq6LJew9s8gPnRSgjln.jpg' alt="" />
          </div>

          <div className="content">
            <h3 className="head">what makes our food special?</h3>
            <p>
            There's a good reason why. We start with the finest, freshest ingredients
            every grain of basmati rice is carefully selected, and our spices are 
            blended in-house to ensure they are as aromatic and flavorful as possible.
            </p>
            <p>
            When we cook, it's a labor of love. The rice and meat (or veggies) are
            layered carefully, sealed, and slow-cooked in the traditional ‘dum’ style. 
            This method lets the flavors meld together beautifully, creating a harmony of taste that's simply irresistible.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;