import { Link } from "react-router-dom";
import logo from "../assets/images/newLogo.webp";
import Layout from "../components/Layout";
import "./stylesheet.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  message: yup.string().required("Message is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be a number"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const form = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const [successMessage, setSucessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

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
        setLoading(false);
      });
  };

  return (
    <Layout>
      <div className="contact-main">
        <div className="contact-hero">
          <div className="container">
            <div className="row d-flex text-center justify-content-center">
              <div className="d-flex justify-content-center">
                <div className="image-area">
                  <img src={logo} alt="" />
                </div>
              </div>
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>

        <div className="form-area">
          <div className="container">
            <div className="row my-5">
              <div className="col-md"></div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body px-5 py-3">
                    <div className="row d-flex justify-content-center">
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
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="firstName" className="form-label">
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              name="firstName"
                              placeholder="First Name"
                              {...register("firstName")}
                            />
                            {errors.firstName && (
                              <div className="text-danger">
                                {errors.firstName.message}
                              </div>
                            )}
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="lastName" className="form-label">
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              name="lastName"
                              placeholder="Last Name"
                              {...register("lastName")}
                            />
                            {errors.lastName && (
                              <div className="text-danger">
                                {errors.lastName.message}
                              </div>
                            )}
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">
                              Email <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="Email"
                              {...register("email")}
                            />
                            {errors.email && (
                              <div className="text-danger">
                                {errors.email.message}
                              </div>
                            )}
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="password" className="form-label">
                              Phone <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="password"
                              name="phone"
                              placeholder="Phone"
                              {...register("phone")}
                            />
                            {errors.phone && (
                              <div className="text-danger">
                                {errors.phone.message}
                              </div>
                            )}
                          </div>
                          <div className="col-md-12 mb-3">
                            <label htmlFor="message" className="form-label">
                              Your Message{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <textarea
                              type="text"
                              className="form-control"
                              id="message"
                              name="message"
                              {...register("message")}
                            />
                            {errors.message && (
                              <div className="text-danger">
                                {errors.message.message}
                              </div>
                            )}
                          </div>
                          <div className="col-md-12 mb-3 d-flex me-5">
                            <div className="check-box">
                              <input
                                onClick={() => setIsChecked((prev) => !prev)}
                                type="checkbox"
                                name="consentGiven"
                                value={
                                  isChecked
                                    ? "I want to receive emails"
                                    : "Don't send marketing email"
                                }
                                className="me-2"
                                onChange={handleCheckboxChange}
                                {...register("consentGiven")}
                              />
                            </div>
                            <div className="">
                              <span className="check-box-text">
                                By submitting the contact form and signing up
                                for texts, you consent to receive marketing text
                                messages from Front Door Buys LLC at the number
                                provided. Consent is not a condition of
                                purchase. Message and data rates may apply. You
                                can unsubscribe at any time by replying STOP to
                                the received SMS (texts) or clicking the
                                unsubscribe link (where available) in the
                                marketing text messages. Terms and conditions
                                can be found{" "}
                                <Link
                                  style={{ textDecoration: "none" }}
                                  to={"/"}
                                >
                                  here
                                </Link>
                                . Privacy Policy can be found{" "}
                                <Link
                                  style={{ textDecoration: "none" }}
                                  to={"/"}
                                >
                                  here
                                </Link>
                                . We respect your privacy choices, especially
                                concerning the sharing of your personal
                                information. Any information you provide through
                                opt-in consent will not be shared with third
                                parties for marketing or promotional purposes.
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="contact-form-btn">
                          <button type="submit">
                            {loading ? "Sending . . ." : "Send Message"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
