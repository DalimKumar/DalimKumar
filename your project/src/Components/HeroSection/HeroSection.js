import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  .title {
    font-family: "Geom Graphic";
    font-weight: 700;
    font-style: italic;
    color: #fff;
    font-size: 3rem;
  }
  .society {
    color: #03dafe;
  }
  .text {
    color: #fff;

    font-size: 16px;
    width: 400px;
  }
  .myButton {
    display: flex;

    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;

    color: #fff;
    background: var(--backgroundColor);
    text-transform: uppercase;
    border-radius: 8px;
    box-shadow: var(--boxShadow);

    font-size: 18px;
    padding: 20px 16px;
    display: block;
    min-width: 200px;
    transition: all 0.3s ease;
    border: 0;
    outline: 0;
  }
  .myButton:hover {
    transform: scale(0.9);
  }
  .active {
    background: var(--blue);
    margin-right: 30px;
  }
  .image {
    width: 100%;
  }
  @media only screen and (max-width: 991px) {
    .title {
      font-size: 2.5rem;
    }
    .text {
      width: 100%;
    }
    .myButton {
      min-width: 145px;
      padding: 15px 12px;
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 767px) {
    .title {
      text-align: center;
    }
    .text {
      width: 90%;
      text-align: center;
    }
  }
  @media only screen and (max-width: 420px) {
    .title {
      font-size: 2rem;
    }
    .text {
      font-size: 14px;
    }
    .myButton {
      min-width: 100px;
      padding: 15px 12px;
      font-size: 14px;
    }
  }
`;
const HeroSection = () => {
  return (
    <Wrapper className="py-5">
      <Col xs={11} xxl={8} className="mx-auto">
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <img src="./images/hero.png" alt="" className="image" />
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center mt-5 my-md-0"
            data-aos="fade-left"
          >
            <div className=" d-flex w-100 d-lg-block justify-content-center align-items-center align flex-column">
              <h2 className="title w-100">
                POKER SHARK <br /> <span className="society">SOCIETY</span>
              </h2>
              <p className="text py-4">
                The Poker Shark Society is a collection of 2,222 unique digital
                art collectibles portraying poker sharks. Sharks grant owners
                access to exciting live events and high-utility giveaways.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start w-100 pt-3 pt-lg-5">
                <button
                  href="#/"
                  className="myButton active"
                  rel="noreferrer"
                  style={{ marginRight: "30px" }}
                >
                  MINT
                </button>
                <a
                  href="https://pokersharksociety.com/static/media/SHARKPAPER.d1560f67.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="myButton"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};
export default HeroSection;
