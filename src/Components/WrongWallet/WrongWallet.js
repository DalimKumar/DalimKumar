import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: block;
  background-image: url(./images/afterMintingBackground.png);
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  .logo {
    position: absolute;
    top: 80px;
  }
  .main {
    position: relative;
    display: flex;
    flex-direction: column;

    padding-right: 65px;
    width: 800px;
    padding: 100px;
  }
  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 100%;
  }
  .text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 117%;
    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }
  @media only screen and (max-width: 991px) {
    .main {
      width: 90%;
      padding-right: 45px;

      padding: 70px;
    }
    .text {
      font-size: 35px;
    }
  }
  @media only screen and (max-width: 767px) {
    .main {
      width: 90%;
      padding-right: 40px;

      padding: 50px;
    }
    .text {
      font-size: 28px;
    }
  }
  @media only screen and (max-width: 520px) {
    .main {
      width: 90%;
      padding-right: 30px;

      padding: 30px;
    }
    .text {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 400px) {
    .main {
      width: 95%;
      padding-right: 20px;

      padding: 20px;
    }
    .text {
      font-size: 16px;
    }
  }
`;
const WrongWallet = () => {
  return (
    <Wrapper>
      <img src="./images/logo.svg" alt="" className="logo" />
      <div className="main ">
        <img src="./images/wrongWallet.svg" alt="#" className="image" />
        <p className="text  pb-sm-3">This address is not on the allow list.</p>
        <p className="text pt-2 pb-2 pt-sm-3">
          Please try another address or wait for the public sale.
        </p>
      </div>
    </Wrapper>
  );
};
export default WrongWallet;
