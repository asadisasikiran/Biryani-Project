import React from "react";

const Footer = () => {
  const handleIconClick = (platform) => {
    alert(`Hi, this is the ${platform} team!`);
  };

  return (
    <>
      <section className="footer">
        <div className="share">
          <a href="#" onClick={() => handleIconClick('Facebook')} className="fab fa-facebook-f"></a>
          <a href="#" onClick={() => handleIconClick('Twitter')} className="fab fa-twitter"></a>
          <a href="#" onClick={() => handleIconClick('Instagram')} className="fab fa-instagram"></a>
          <a href="#" onClick={() => handleIconClick('LinkedIn')} className="fab fa-linkedin"></a>
        </div>
        <div className="credit">
          created by <span> &nbsp;ASADI SASI KIRAN YADAV</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
