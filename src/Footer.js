import React from "react";
function Footer() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="flogo">
                <a href="#">
                  <img src="assets/images/footer-ogo.png" alt=""></img>
                </a>
              </div>
              <div className="social-links">
                <ul>
                  <li>
                    <a href="#">
                      <img src="assets/images/icon-twitter.svg"></img>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/images/icon-discord.svg"></img>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/images/icon-instagram.svg"></img>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>Copyright © 2021.All Rights Reserved By NEO NARCO</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
