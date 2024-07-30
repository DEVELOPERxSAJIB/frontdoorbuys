import { Link } from "react-router-dom";
import footerLogo from "../assets/images/logo.webp";
import "./stylesheet.scss";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="row">
          <div className="footer-content">
            <div className="image-area">
              <Link to={"/"}>
                <img src={footerLogo} alt="" />
              </Link>
            </div>
            <h3>&#9400; Copyright 2024. All rights reserved.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
