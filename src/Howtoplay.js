import React from "react";
function Howtoplay() {
  return (
    <>
      <section className="how-to-play">
        <img
          className="left-img"
          src="assets/images/h-play/left-img.png"
          alt=""
        ></img>
        <img
          className="right-img"
          src="assets/images/h-play/right-img.png"
          alt=""
        ></img>
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <img src="assets/images/logo2.png" height="200px" alt=""></img>
                <h2 className="title ">How to play NEO NARCOS</h2>
                <h6 className="text">
                  Whoever controls the $SPICE production on world will control
                  enough riches to rule the sirrus cluster. The most sought
                  after substance in the known universe for it’s ability to heal
                  almost any injury. There are tales that it gives some users
                  god-like abilities..
                </h6>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="s-h-play">
                {/* <img src="assets/images/h-play/bg.png" alt=""></img> */}
                <img
                  src="assets/images/WEB.png"
                  alt=""
                  className="d-none d-xl-block"
                ></img>
                <img
                  src="assets/images/TAB.png"
                  alt=""
                  className="d-none d-sm-block d-xl-none"
                ></img>
                <img
                  src="assets/images/MBL.png"
                  alt=""
                  className="d-sm-none"
                ></img>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <a href="/#" className="mybtn1">
                Get started Now!
              </a>
            </div>
          </div>
        </div>
        <div className="subscribe-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="subscribe-box">
                  <img className="left" src="assets/images/vr.png" alt=""></img>
                  <img
                    className="right"
                    src="assets/images/game controler_.png"
                    alt=""
                  ></img>
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="heading-area">
                        <h5 className="sub-title">Subscribe to Neo Narcos</h5>
                        <h4 className="title">To Get Exclusive Benefits</h4>
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <form action="#" className="form-area">
                        <input
                          type="text"
                          placeholder="Your Email Address"
                        ></input>
                        <button className="mybtn1" type="submit">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Howtoplay;
