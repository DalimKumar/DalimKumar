import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: block;
  background-image: url(./images/afterMintingBackground.png);
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  .main {
    width: 800px;
  }
  .wrapper {
    position: absolute;
    top: 45%;
    left: 52%;
    transform: translate(-50%, -50%);
  }
  .image{
      margin-bottom:100px;
  }
  .title {
    ont-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 90px;
    line-height: 100%;
    /

    text-align: center;
    letter-spacing: 0.065em;

    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    text-shadow: -10px -10px 5.5849px rgba(0, 255, 241, 0.15);
    padding-top: 10px;
    padding-right: 20px;
  }
  .box {
    width: 77%;
    height: 75.5px;
    margin-left: 5%;

    background: rgba(175, 249, 252, 0.49);
    position: relative;
  }
  .box1 {
    position: absolute;
    width: 100%;
    top: 13px;
    left: 15px;
    background: radial-gradient(
        243.28% 969.14% at 49.77% 48.45%,
        #b0f9fb 0%,
        #319ed4 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 0px 0px 84px -4px #b0f9fd;
    filter: blur(1px);
    border-radius: 1px;
  }
  .box3 {
    position: absolute;
    top: 35px;
    left: 70px;
    height: 50px;
    width: 100%;

    background: rgba(176, 248, 252, 0.09);
  }
  .text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 40.4813px;
    line-height: 156%;

    text-align: center;
    letter-spacing: 0.065em;

    color: #ffffff;
  }
  .buttonContainer{
      position:absolute;
      top:67%;
      left:50%;
      transform:translateX(-50%)
  }
  .mintButton {
    display:block;
    border-radius: 15px;
    border: none;
    outline: none;
    background:#000;
    position: relative;
    border-radius: 10px;
    margin: 0 10px;
    cursor: pointer;
    color: #fff; 
    
  }
  .mintButton:after {
    filter: drop-shadow(0px 0px 16px rgba(127, 17, 224, .8)
);
    content: "";
    position: absolute;
    top: calc(-1 * 3px);
    left: calc(-1 * 3px);
    height: calc(100% + 2px * 3);
    width: calc(100% + 2px * 3);
    background: linear-gradient(-85deg, #5DDEFF 70% ,#FF06C8 100%);
    border-radius: calc(2 * 5px);
    z-index: -5;
    background-size: 300% 300%;
  
  }
  .buttonTitle{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20.7201px;
    line-height: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(97.03deg, #00FFF1 -27.9%, #FF06C8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }
  .buttonText{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-size: 16px;
    line-height: 120%;
    text-align: center;
    background: linear-gradient(97.03deg, #00FFF1 -27.9%, #FF06C8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  @media only screen and (max-width: 991px) {
    .buttonContainer{
      position:static;
      width:100%;
    
      transform:translateX(0%)
  }
    .wrapper {
      left: 55%;
    }
    .main {
      width: 90%;
      display:flex;
      justify-content:center;
    }
  }
  @media only screen and (max-width: 767px) {
   .buttonTitle{
       font-size:16px;
   }
   .buttonText{
       font-size:13px;
   }
  }
  @media only screen and (max-width: 520px) {
    .main {
      width: 110%;
    }
    .mintButton:after {
   
    top: calc(-1 * 2px);
    left: calc(-1 * 2px);
    height: calc(100% + 2px * 2);
    width: calc(100% + 2px * 2);
   
  
  }
  }
`;
const MintSucessFull = () => {
  return (
    <Wrapper>
      <div className="main">
        {" "}
        <img
          src="./images/mintSuccesFull.svg"
          alt="#"
          className="w-100 d-lg-none"
        />
        <img
          src="./images/Union.svg"
          alt="#"
          className="w-100 d-none d-lg-block image"
        />
        <div className="wrapper d-none d-lg-block">
          <h2 className="title">CONFIRMED</h2>
          <div className="box">
            {" "}
            <div className="box1">
              <p className="text">MINT SUCCESSFUL</p>
            </div>
            <div className="box3"></div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center buttonContainer ">
        <Link
          to={"/"}
          className={`mintButton d-flex flex-column justify-content-center aling-items-center px-2 py-2 px-lg-3 py-lg-2 `}
        >
          <span className="buttonTitle">View on Etherscan</span>
          <span className="buttonText">0x06a8...c34F</span>
        </Link>
        <Link
          to={"/"}
          className={`mintButton d-flex flex-column justify-content-center aling-items-center px-2 py-2 px-lg-3 py-lg-1 `}
        >
          <span className="buttonTitle">Mint Again</span>
        </Link>
      </div>
    </Wrapper>
  );
};
export default MintSucessFull;
