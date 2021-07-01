import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#F75C03",
        borderTop: "5px solid #2a9d8f",
        height: "4rem",
      }}
      className="footer mt-auto py-3 footerCustom"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-10"></div>
          <div className="col-sm-2">
            <span className="footerBrand">League Tracker</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
