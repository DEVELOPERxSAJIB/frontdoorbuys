import logo from "../assets/images/newLogo.webp";
import Layout from "../components/Layout";
import "./stylesheet.scss";

const Contact = () => {
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
                  <div className="card-body py-3">
                    <div className="row d-flex justify-content-center">
                      <form action="">
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
                            />
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
                            />
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
                            />
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
                            />
                          </div>
                          <div className="col-md-12 mb-3">
                            <label htmlFor="message" className="form-label">
                              Your Message <span className="text-danger">*</span>
                            </label>
                            <textarea
                              type="text"
                              className="form-control"
                              id="message"
                              name="message"
                            />
                          </div>
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
