import { Link } from "react-router-dom";
import mainLogo from "../assets/images/logo.webp";
import "./stylesheet.scss";

const Header = () => {
  return (
    <div className="header-main">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col">
            <div className="nav-logo">
              <Link to="/">
                <img src={mainLogo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="nav-menu d-flex justify-content-center">
              <ul className="list-unstyled d-flex gap-5">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col text-end">
            <div className="phone">844-955-4354</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
