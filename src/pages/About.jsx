import Layout from "../components/Layout";
import { ImQuotesLeft } from "react-icons/im";
import { RiStarSFill } from "react-icons/ri";
import reviewerOne from "../assets/images/reviewer-1.webp";
import reviewerTwo from "../assets/images/reviewer-2.webp";
import { Link } from "react-router-dom";
import logo from "../assets/images/newLogo.webp";

const About = () => {
  return (
    <Layout>
      <div className="about-main">
        <div className="about-hero">
          <div className="container">
            <div className="row d-flex text-center justify-content-center">
              <div className="d-flex justify-content-center">
                <div className="image-area">
                  <img src={logo} alt="" />
                </div>
              </div>
              <h2>About Proposed Offer</h2>
              <p>
                We have helped hundreds of homeowners buy and sell properties.
                Our goal is to provide a quick and no hassle solution to selling
                your home. We are proud of the positive effect we have on our
                local economy. Every home we buy creates jobs and opportunities
                for real estate agents, contractors, escrow officers, local home
                improvement stores, and many others in the industry. We also
                love seeing our neighborhoods transformed and revitalized
                through our purchases! Lastly, even if we don’t buy your home,
                we want to serve you and help you find the best solution for
                your situation.
              </p>
            </div>
          </div>
        </div>

        <div className="difference">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="image-area">
                  <img src={logo} alt="image" />
                </div>
              </div>
              <div className="col-md-6">
                <h2>The Proposed Offer Difference</h2>
                <ul>
                  <li>We&#39;ll buy your home as-is.</li>
                  <li>You won&#39;t have to list it or show it.</li>
                  <li>You won&#39;t have to make repairs.</li>
                  <li>No need to worry about buyers coming in and out.</li>
                </ul>
                <div className="difference-btn">
                  <Link to={"/"}>
                    <button>Get Your Cash Offer</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="container">
            <div className="row">
              <div className="title">
                <p>testimonials</p>
                <h3>What Our Clients Are Saying</h3>
              </div>
              <div className="d-flex justify-content-center col-md-6 col-sm-12">
                <div className="reviews text-center">
                  <ImQuotesLeft className="quot-icon" />
                  <div className="review-item">
                    <div className="stars">
                      <RiStarSFill className="star" />
                      <RiStarSFill className="star" />
                      <RiStarSFill className="star" />
                      <RiStarSFill className="star" />
                      <RiStarSFill className="star" />
                    </div>
                    <div className="comment">
                      Absolutely the best!! Proposed Offer and his team have extensive
                      experience in real estate ownership and transactions.
                      Knowledgeable and honest communication. Easy transactions.
                      I have worked with Proposed Offer for years and I wouldn’t trust
                      anyone else with my business.
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <div className="image-area">
                        <img src={reviewerOne} alt="" />
                      </div>
                    </div>

                    <div className="reviewer text-center">MELISSA GROTE</div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center col-md-6 col-sm-12">
                <div className="reviews text-center">
                  <ImQuotesLeft className="quot-icon" />
                  <div className="review-item">
                    <div className="stars">
                      <RiStarSFill className="star" />
                      <RiStarSFill className="star" />
                      <RiStarSFill className="star" />
                      <RiStarSFill className="star" />
                      <RiStarSFill className="star" />
                    </div>
                    <div className="comment">
                      Proposed Offer is the best in Las Vegas. They do what they
                      say they will do. Proposed Offer is experienced and professional. He
                      is all truth. If you are looking to sell your home quickly
                      with full transparency give Proposed Offer a chance.
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <div className="image-area">
                        <img src={reviewerTwo} alt="" />
                      </div>
                    </div>

                    <div className="reviewer text-center">MELISSA GROTE</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center review-btn">
              <Link to={"/"}>
                <button>Get your cash offer</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
