import { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/images/newLogo.webp";
import { TfiMenu } from "react-icons/tfi";
import { ImCross } from "react-icons/im";
import { MdCall } from "react-icons/md";
import "./stylesheet.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-main">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="navlogo-wrapper col-md-4 col-sm-2">
            <div className="nav-logo">
              <Link to="/">
                <img src={mainLogo} alt="Logo" />
              </Link>
            </div>
          </div>

          <div className="custom-position col-md-8 col-sm-10">
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

            <div className="">
              <div className="phone">
                <a style={{textDecoration : "none", color : "#000"}} href="tel:2533250833">253-3250-833</a></div>
            </div>

            <div className="responsive-menu">
              <button
                className="phone-menu-btn overlay"
                onClick={() => setOpen((prev) => !prev)}
              >
                {open ? <ImCross  /> : <TfiMenu />}
              </button>
              {open && (
                <>
                  <div className="phone-menu">
                    <div className="cross-btn">
                    <ImCross 
                        size={15}
                        color="#000"
                        onClick={() => setOpen(false)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <ul className="list-unstyled d-flex gap-2">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li
                        style={{ position: "absolute", bottom: "30px" }}
                        className="d-flex align-items-center gap-1"
                      >
                        <MdCall size={20} color="#111" />
                        <Link style={{ fontWeight: "500" }} to="tel:8449554354">
                          8449554354
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
