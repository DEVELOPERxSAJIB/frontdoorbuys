import Layout from "../components/Layout";
import testVideo from "../assets/videos/test.mp4";
import "./stylesheet.scss";

const Home = () => {
  return (
    <Layout>
      <div className="home-main">
        <div className="hero-section">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="video-area">
                  <div className="title">
                    Sell Your Home for Cash FAST, No Matter the Condition
                  </div>
                  <div className="video my-3">
                    <video width="90%" height="340" controls>
                      <source src={testVideo} type="video/ogg" />
                    </video>
                  </div>
                  <div className="footer">
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
      </div>
    </Layout>
  );
};

export default Home;
