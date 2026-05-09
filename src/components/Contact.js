import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          contact us
        </h1>
        <div class="row">

          <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <input type="number" placeholder="Phone number" />
            </div>
            <div class="inputBox">
              <textarea rows={4} placeholder="enter your address"></textarea>
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;