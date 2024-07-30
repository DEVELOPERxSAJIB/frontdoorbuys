import Layout from "../components/Layout";
import "./stylesheet.scss";
import { FaClock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import forSale from "../assets/images/forsale.webp";
import compactLogo from "../assets/images/logo_compact.webp";
import compareImage from "../assets/images/compare.webp";
import ownerImage from "../assets/images/owner-section.jpeg";
import { IoSettingsSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { useRef } from "react";

const Home = () => {

  const heroSectionRef = useRef(null);

  const scrollToHeroSection = () => {
    heroSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className="home-main">
        <div className="hero-section" ref={heroSectionRef}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="video-area">
                  <div className="title">
                    Sell Your Home for Cash FAST, No Matter the Condition
                  </div>

                  <div className="footer mt-5">
                    Zero work required, zero hidden fees. get cash in hand and a
                    fresh start in as little as <span>7 Days</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-area shadow-sm">
                  <div className="title">
                    Need to <span>Sell YOUR House?</span>
                  </div>
                  <div className="sub-title">
                    <span>No</span> Realtors, <span>No</span> Fees,{" "}
                    <span>No</span> Repairs
                  </div>
                  <div className="form-home">
                    <form onSubmit={(e) => e.preventDefault()} action="">
                      <div className="my-3">
                        <label htmlFor="address" className="form-label">
                          Property Address{" "}
                          <span className="text-danger">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          id="address"
                          className="form-control"
                        />
                      </div>
                      <div className="my-3">
                        <label htmlFor="name" className="form-label">
                          Name <span className="text-danger">*</span>{" "}
                        </label>
                        <input type="text" id="name" className="form-control" />
                      </div>
                      <div className="my-3">
                        <label htmlFor="phone" className="form-label">
                          Phone <span className="text-danger">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          id="phone"
                          className="form-control"
                        />
                      </div>
                      <div className="my-3">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                        />
                      </div>
                      <div className="my-4">
                        <button>Get My Free Offer</button>
                      </div>

                      <div className="text-start mt-4 px-4">
                        <span>
                          By clicking &quot;Get My FREE Offer&quot; you agree to
                          Nestbuys and its affikiates Terms of Service and
                          Privacy Policy.
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="priority-main">
          <div className="container">
            <div className="title">
              <FaClock className="title-icon me-1" />
              When Selling Fast is Your{" "}
              <span className="ms-2"> Top Priority</span>
            </div>
            <div className="row details">
              <div className="col-md-6 img-area">
                <img src={forSale} alt="" />
              </div>
              <div className="content-area col-md-6">
                <p className="mb-3">
                  Caught in a tough spot? We get it. Sometimes life throws you a
                  curveball—whether it’s pre-foreclosure, inheriting a property
                  you can’t manage, or dealing with a house that needs more
                  repairs than you can handle. Selling your home the traditional
                  way might not be the best option if you’re looking for speed
                  and convenience.{" "}
                </p>

                <p className="mb-3">
                  That’s where Homerun Offer steps in. We specialize in quick,
                  cash offers for homes just like yours. Forget the stress of
                  fixing up your home, dealing with showings or paying
                  commission; we buy your home as-is, so you can move on faster
                  than ever.
                </p>

                <p>
                  Just think about how good it’ll feel to leave all the stress
                  of your current situation behind and walk away with cash in
                  your pocket that will help you start over however you’d like.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="why-us">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="title">
                  <FaUser className="title-icon me-1" />
                  Why Homerun Offer <span className="ms-1"> Makes</span>
                </div>
                <h2> Sense for You</h2>
                <div className="stramline">
                  <span>Streamlined Selling Process:</span> Imagine bypassing
                  months of uncertainty and the headache of potential buyers
                  walking through your home. Our process is designed for
                  efficiency. From the moment you contact us, we&quot;re focused
                  on making your experience smooth and stress-free. You could
                  have a cash offer in hand within 24 hours, with the
                  possibility of closing the sale in as little as a week.
                </div>
                <div className="support">
                  <span>Support Every Step of the Way:</span> We understand that
                  selling your home, especially under difficult circumstances,
                  can be stressful. That&quot;s why our team is here to guide
                  you through every step. Need advice on handling a tricky
                  financial situation with your property? We&quot;re here for
                  that, too. Our goal is to be more than just a home buying
                  service—we&quot;re your problem-solving partners in real
                  estate.
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <div className="img-area">
                  <img src={compactLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="how-it-works">
          <div className="container">
            <div className="row">
              <div className="title">
                <IoSettingsSharp className="title-icon me-1" />
                How <span className="ms-2"> It Works</span>
              </div>
              <div className="setps">
                <div className="step-item">
                  <FaLocationDot className="step-item-icon" />
                  <h3>Submit</h3>
                  <p>your address</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="deal-text">
                <span>A Fair Deal, Fast:</span> You’re not just getting a fast
                sale; you’re getting a fair one. We base our cash offers on a
                thorough understanding of local market conditions, ensuring you
                get a competitive price for your property. And with our
                no-obligation policy, you have nothing to lose by seeing what we
                can offer.
              </div>

              <div className="move-forward-text">
                <span>Ready to Move Forward?</span> If the idea of selling your
                home quickly, with no hassle and no fees, sounds like what you
                need, it’s time to get in touch. Don’t let financial
                difficulties, the burden of unwanted property, or the fear of
                extensive repairs keep you from moving forward in life.
              </div>
            </div>
          </div>
        </div>

        <div className="compare">
          <div className="container">
            <div className="row d-flex flex-col justify-content-center">
              <div className="title">
                <FaCheckCircle className="title-icon me-1" />
                HOW WE <span className="ms-2">COMPARE</span>
              </div>
              <div className="image-area">
                <img src={compareImage} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="owner-info">
          <div className="container">
            <div className="row">
              <div className="col-md-5 d-flex justify-content-center">
                <div className="image-area">
                  <img src={ownerImage} alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="title text-center">
                  RYAN <span className="ms-2">PINEDA</span>
                </div>
                <div className="description">
                  <p>
                    Ryan Pineda has been in the real estate industry since 2010
                    and has invested in over $100,000,000 of real estate. He has
                    amassed over 2 million followers on social media and has
                    generated over 1 billion views online.
                  </p>

                  <p>
                    Ryan lives in Las Vegas, NV with his wife Mindy and three
                    children James, Olivia, and Judah. Before his business
                    success he was a professional baseball player with the
                    Oaklands A’s. His desire is to share his story, inspire
                    others, and teach others how to live the Wealthy Way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="container">
            <div className="row">
              <div className="title">
                <FaUserFriends className="title-icon me-1" />
                testimonials
              </div>
              <div className="reviews col-md-6">
                <div className="review-item ">
                  <div className="stars">
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                  </div>
                  <div className="comment">
                    I would recommend Homerun Offer to anybody who wants to sell
                    their home without headaches and open houses. Not to mention
                    that the office people were so easy to get along with and
                    accommodating. Five stars from me.
                  </div>

                  <div className="reviewer">- Carol O.</div>
                </div>
              </div>
              <div className="reviews col-md-6">
                <div className="review-item ">
                  <div className="stars">
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                  </div>
                  <div className="comment">
                    At this hard moment in my life where another cash company
                    failed to guide me through the process homerun opened my
                    eyes to how it all works. Thank you for all of your help.
                  </div>

                  <div className="reviewer">- Carmen P.</div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="reviews col-md-6">
                <div className="review-item">
                  <div className="stars">
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                  </div>
                  <div className="comment">
                    Homerun Offer has a wonderful team that is very professional
                    and efficient. Great experience and highly recommend
                  </div>

                  <div className="reviewer">- Konstansa G.</div>
                </div>
              </div>
              <div className="reviews col-md-6">
                <div className="review-item">
                  <div className="stars">
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                    <RiStarSFill className="star" />
                  </div>
                  <div className="comment">
                    They made the experience super easy, and everyone I talked
                    to was pleasant throughout. I&quot;d highly recommend
                    selling your home to them if you&quot;re looking for a great
                    experience
                  </div>

                  <div className="reviewer">- Tiffany H.</div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button onClick={scrollToHeroSection}>GET YOUR FREE CASH OFFER NOW</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
