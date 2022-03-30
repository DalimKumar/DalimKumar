import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useMyContext } from "../Context";
import Loader from "../Loader/Loader";
import MintSucessFull from "../MintSuccesFull/MintSuccesFull";
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

  z-index: 1;
  box-sizing: border-box;

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    top: 70px;
  }
  .main {
    padding-top: 180px;
    width: 800px;
    position: relative;
  }
  .image {
    ${"" /* ; */}
  }
  .minting {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 100%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 100px;
    line-height: 100%;

    text-align: center;
    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 80.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
    padding-top: 150px;
  }
  @media only screen and (max-width: 991px) {
    .main {
      width: 70%;
    }
    .minting {
      font-size: 60px;
    }
  }
  @media only screen and (max-width: 767px) {
    .main {
      width: 90%;
    }
    .minting {
      font-size: 60px;
    }
  }
  @media only screen and (max-width: 520px) {
    .main {
      padding-top: 0;
    }
  }
  @media only screen and (max-width: 480px) {
    .main {
      width: 90%;
    }
    .minting {
      font-size: 40px;
    }
  }
`;
const Minting = () => {
  const { mintSuccess, setMintSuccess } = useMyContext();
  useEffect(() => {
    setTimeout(() => {
      setMintSuccess(true);
    }, 1500);
  }, []);
  return (
    <>
      {mintSuccess ? (
        <MintSucessFull />
      ) : (
        <Wrapper>
          <img src="./images/logo.svg" alt="#" className="logo" />
          <div className="main">
            <img src="./images/minting.svg" alt="#" className="image w-100" />
            <h3 className="minting">MINTING...</h3>
          </div>
          <div className="mt-4">
            <Loader />
          </div>
        </Wrapper>
      )}
    </>
  );
};
export default Minting;
