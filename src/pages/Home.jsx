import "./stylesheet.scss";
import Layout from "../components/Layout";
import { FaClock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import forSale from "../assets/images/forsale.webp";
import compactLogo from "../assets/images/newLogo.webp";
import compareImage from "../assets/images/compare.webp";
import ownerImage from "../assets/images/owner-section.jpeg";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import home from "../assets/images/home.webp";
import money from "../assets/images/money.webp";
import calendar from "../assets/images/calendar.webp";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  address: yup.string().required("Property Address is required"),
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be a number"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

const Home = () => {
  const heroSectionRef = useRef(null);

  const scrollToHeroSection = () => {
    heroSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const form = useRef();
  const [successMessage, setSucessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = () => {
    setLoading(true);
    emailjs
      .sendForm("service_9bmkzoo", "template_zm4w45p", form.current, {
        publicKey: "GAQ_Vq4tSYF9xubIj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSucessMessage(true);
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setLoading(false); // Hide loading message
      });
  };

  return (
    <Layout>
      <div className="home-main">
        <div className="hero-section" ref={heroSectionRef}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 col-sm-12">
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

              <div className="col-md-6 col-sm-12">
                <div className="form-area shadow-sm">
                  <div className="title">
                    Need to <span>Sell YOUR House?</span>
                  </div>
                  <div className="sub-title">
                    <span>No</span> Realtors, <span>No</span> Fees,{" "}
                    <span>No</span> Repairs
                  </div>
                  <div className="form-home">
                    <form
                      ref={form}
                      onSubmit={handleSubmit(sendEmail)}
                      action=""
                    >
                      <div className="my-3">
                        {successMessage && (
                          <div className="d-flex justify-content-between alert alert-success text-center">
                            {successMessage ? (
                              <span
                                className="text-success"
                                style={{ fontWeight: "700px" }}
                              >
                                You will get an Email from us soon. Thanks
                              </span>
                            ) : null}
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => setSucessMessage(false)}
                            >
                              <RxCross1 color="#000" />
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="my-3">
                        <label htmlFor="address" className="form-label">
                          Property Address{" "}
                          <span className="text-danger">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          id="address"
                          className="form-control"
                          {...register("address")}
                        />
                        {errors.address && (
                          <div className="text-danger">
                            {errors.address.message}
                          </div>
                        )}
                      </div>
                      <div className="my-3">
                        <label htmlFor="name" className="form-label">
                          Name <span className="text-danger">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          {...register("name")}
                        />
                        {errors.name && (
                          <div className="text-danger">
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                      <div className="my-3">
                        <label htmlFor="phone" className="form-label">
                          Phone <span className="text-danger">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          id="phone"
                          className="form-control"
                          {...register("phone")}
                        />
                        {errors.phone && (
                          <div className="text-danger">
                            {errors.phone.message}
                          </div>
                        )}
                      </div>
                      <div className="my-3">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                          {...register("email")}
                        />
                        {errors.email && (
                          <div className="text-danger">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="my-4">
                        <button disabled={loading} type="submit">
                          {loading
                            ? "Sending Email . . ."
                            : "Get My Free Offer"}
                        </button>
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
              <h3>
                <FaClock className="title-icon me-1" />
                When Selling Fast is Your{" "}
                <span className=""> Top Priority</span>
              </h3>
            </div>
            <div className="row details">
              <div className="col-md-6 col-sm-12 img-area">
                <img src={forSale} alt="" />
              </div>
              <div className="content-area col-md-6 col-sm-12">
                <p className="mb-3">
                  Caught in a tough spot? We get it. Sometimes life throws you a
                  curveball—whether it’s pre-foreclosure, inheriting a property
                  you can’t manage, or dealing with a house that needs more
                  repairs than you can handle. Selling your home the traditional
                  way might not be the best option if you’re looking for speed
                  and convenience.{" "}
                </p>

                <p className="mb-3">
                  That’s where Front Door Buys steps in. We specialize in quick,
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
              <div className="title">
                <h3>
                  <FaUser className="title-icon me-1" />
                  Why Front Door Buys <span>Makes Sense for You</span>
                </h3>
              </div>
              <div className="col-md-6 order-2 order-md-1">
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

              <div className="col-md-6 d-flex justify-content-center order-1 order-md-2">
                <div className="img-area">
                  <img src={compactLogo} alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="how-it-works">
          <div className="container">
            <div className="row">
              <div className="title">
                <h3>
                  <IoSettingsSharp className="title-icon me-1" />
                  How <span> It Works</span>
                </h3>
              </div>
              <div style={{ margin: "0" }} className="row">
                <div className="setps col-md-4">
                  <div className="step-item">
                    <div className="image-area">
                      <img src={home} alt="" />
                    </div>
                    <h3>STEP 1</h3>
                    <p>
                      Tell us about your house. We’ll get started today
                      analyzing your property.
                    </p>
                  </div>
                </div>
                <div className="setps col-md-4">
                  <div className="step-item">
                    <div className="image-area">
                      <img src={money} alt="" />
                    </div>
                    <h3>STEP 2</h3>
                    <p>
                      We’ll make you a fair offer based on the market value and
                      condition with no obligation.
                    </p>
                  </div>
                </div>
                <div className="setps col-md-4">
                  <div className="step-item">
                    <div className="image-area">
                      <img src={calendar} alt="" />
                    </div>
                    <h3>STEP 1</h3>
                    <p>
                      Tell us about your house. We’ll get started today
                      analyzing your property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="compare">
          <div className="container">
            <div className="row d-flex flex-col justify-content-center">
              <div className="title">
                <h3>
                  <FaCheckCircle className="title-icon me-1" />
                  HOW WE <span>COMPARE</span>
                </h3>
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
              <div className="col-md-5 col-sm-12 d-flex align-items-center justify-content-center">
                <div className="image-area">
                  <img src={ownerImage} alt="" />
                </div>
              </div>
              <div className="col-md-7 col-sm-12">
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
                    I would recommend Front Door Buys to anybody who wants to
                    sell their home without headaches and open houses. Not to
                    mention that the office people were so easy to get along
                    with and accommodating. Five stars from me.
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
            <div className="row">
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
                    Front Door Buys has a wonderful team that is very
                    professional and efficient. Great experience and highly
                    recommend
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
              <button onClick={scrollToHeroSection}>
                GET YOUR FREE CASH OFFER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
