import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/images/logo.webp";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
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
              <div className="phone">844-955-4354</div>
            </div>

            <div className="responsive-menu">
              <button
                className="phone-menu-btn overlay"
                onClick={() => setOpen((prev) => !prev)}
              >
                {open ? <RxCross2 /> : <RiMenuFill />}
              </button>
              {open && (
                <>
                  <div className="phone-menu">
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
                      <li
                        style={{ position: "absolute", bottom: "30px" }}
                        className="d-flex align-items-center gap-1"
                      >
                        <MdCall size={25} color="#fff" />
                        <Link style={{ fontWeight: "600" }} to="tel:8449554354">
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
