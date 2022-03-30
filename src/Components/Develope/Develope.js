import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Overlay from "./Overlay";
import PopupConfirmation from "./PopupConfirmation";
import Developing from "../Developing/Developing";
import styled from "styled-components";

import { useMyContext } from "../Context";

import AllNft from "./AllNft";
import Menubar from "../Menubar/Menubar";
const Wrapper = styled.div`
  padding-bottom: 100px;
  min-width: 100%;
  min-height: 100vh;
  background-image: url(./images/myCollection.png);
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.8);
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 100%;
    background: linear-gradient(97.03deg, #00fff1 0.9%, #ff06c8 17.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }
  .choose {
    width: 450px;
    height: 542px;

    position: relative;
    background: #000;
  }
  .choose:before {
    content: "";
    filter: drop-shadow(0px 0px 12.0522px rgba(255, 6, 200, 0.5));
    position: absolute;
    top: calc(-1 * 8px);
    left: calc(-1 * 8px);
    height: calc(100% + 2px * 8);
    width: calc(100% + 2px * 8);
    background: linear-gradient(-45deg, #ff06c8 70%, #fff500 100%);
    border-radius: calc(2 * 5px);
    z-index: -5;

    background-size: 300% 300%;
  }
  .devlopeAgain:hover {
    transform: scale(1.09);
    transition: 1s;
    box-shadow: 0px 0px 27px 7px #ff06c8;
  }
  .zoombie {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
  .zoombie-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 60.234px;
    text-align: center;
    background: linear-gradient(97.03deg, #d2216c -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    text-shadow: 0px 0px 19.4237px rgba(0, 255, 241, 0.26);
    transform: rotate(-21.46deg);
  }
  .plus {
    cursor: pointer;
  }
  .text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: 100%;
    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
    padding-right: 10px;
  }
  .image {
    height: 83%;
  }
  .level-container {
    height: 17%;
    background: #000;
  }
  .level {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 30.9884px;
    line-height: 100%;
    background: linear-gradient(97.03deg, #fff500 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .type {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18.29428px;
    background: linear-gradient(97.03deg, #fff500 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 1.57007px rgba(0, 255, 241, 0.26);
  }
  .star {
    width: 16px;
  }
  .confirmNft {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 6;
    background: #272e4f;
    justify-self: flex-end;
  }
  .myButton {
    border: none;
    outline: none;
    background: #272e4f;
    position: relative;
    border-radius: 10px;
    cursor: pointer;
    padding: 6px 25px;
  }
  .myButton:after {
    content: "";
    filter: drop-shadow(0px 0px 12.0522px rgba(255, 6, 200, 0.5));
    position: absolute;
    top: calc(-1 * 2px);
    left: calc(-1 * 2px);
    height: calc(100% + 2px * 2);
    width: calc(100% + 2px * 2);

    background: linear-gradient(-85deg, #5ddeff 70%, #ff06c8 100%);
    border-radius: calc(2 * 5px);
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }
  .deactive:after {
    opacity: 0.4;
  }
  .buttonText {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 23.8481px;
    line-height: 156%;
    text-align: center;
    background: linear-gradient(45.03deg, #00fff1 -15.9%, #ff06c8 90.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 7.07237px rgba(0, 255, 241, 0.26);
  }
  .myModals {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  .myModal {
    position: fixed;
    top: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  .animation {
    animation: show 200ms ease-in-out;
    transition: 100ms ease-in-out;
  }
  @keyframes show {
    0% {
      opacity: 0.5;
      transform: scale(0);
    }
  }
  @media only screen and (max-width: 1399px) {
    .choose {
      width: 450px;
      height: 500px;
    }
  }
  @media only screen and (max-width: 1199px) {
    .choose {
      width: 350px;
      height: 410px;
    }
  }
  @media only screen and (max-width: 991px) {
    .title {
      font-size: 40px;
    }
    .text {
      font-size: 20px;
    }
    .buttonText {
      font-size: 16px;
    }
    .choose {
      width: 280px;
      height: 350px;
    }
    .level {
      font-size: 18px;
    }
    .type {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 767px) {
    .choose {
      width: 67%;
      height: 400px;
      margin: 0 auto;
    }
    .buttonText {
      text-shadow: none;
    }
  }
  @media only screen and (max-width: 520px) {
    .title {
      font-size: 35px;
    }
    .text {
      font-size: 16px;
      line-height: 120%;
    }
    .zoombie-text {
      font-size: 40px;
    }

    .buttonText {
      font-size: 16px;
    }
    .choose {
      height: 350px;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 400px) {
    .title {
      font-size: 30px;
    }
    .level {
      font-size: 16px;
    }
    .type {
      font-size: 14px;
    }
    .choose {
      width: 72%;
      height: 300px;
      margin: 0 auto;
    }
  }
`;
const Develope = () => {
  const {
    firstNft,
    setFirstNft,
    secondNft,
    setSecondNft,
    showNft,
    setShowNft,
  } = useMyContext();
  const [showAllNft, setShowAllNft] = useState(false);
  const [devolveModal, setDevolpeModal] = useState(false);
  const [devolpingModal, setDevolpingModal] = useState(false);
  const [devolveAgain, setDevolveAgain] = useState(false);
  const [developeButtonAcitive, setDevelopeButtonActive] = useState(false);
  const [confirmButtonActive, setConfirmButtonActive] = useState(false);
  const [zoombify, setZoombify] = useState();

  let countNft = [];

  if (typeof firstNft === "object") {
    countNft = [...countNft, firstNft];
  }
  if (typeof secondNft === "object") {
    countNft = [...countNft, secondNft];
  }
  const itemArray = [
    { img: "./images/plus.svg", nft: firstNft, setNft: setFirstNft },
    { img: "./images/plus.svg", nft: secondNft, setNft: setSecondNft },
  ];

  return (
    <Wrapper>
      <Menubar />
      <Col xs={12} lg={12} xl={11} xxl={10} className="mx-auto pt-5 px-4">
        {!showAllNft && <h2 className="title pb-3 py-sm-5">DEVOLVE</h2>}
      </Col>
      <Col xs={12} sm={11} xl={10} xxl={9} className="mx-auto">
        <div className="d-flex flex-column flex-md-row justify-content-between w-100  px-xxl-5">
          {itemArray.map((el, i) => (
            <div
              key={i}
              className={`choose d-flex justify-content-center ${
                !el.nft && "align-items-center"
              } ${devolveAgain && "devlopeAgain"} my-4`}
              onClick={() => {
                if (!devolveAgain) {
                  if (firstNft && secondNft) {
                    setZoombify(i + 1);
                    setDevelopeButtonActive(true);
                  }

                  setShowAllNft(!firstNft || !secondNft ? true : false);
                  el.setNft(!firstNft || !secondNft ? true : el.nft);
                }
              }}
            >
              {zoombify && <Overlay zoombify={zoombify === i + 1 && true} />}

              <div
                className={`w-100 ${
                  !el.nft && "d-flex justify-content-center"
                }`}
              >
                <img
                  src={el.nft ? el.nft.img : "./images/plus.svg"}
                  alt="#"
                  className={`plus ${el.nft && "w-100 image"}`}
                />
                {el.nft && (
                  <div className="d-flex level-container px-3 justify-content-between align-items-center p-2">
                    <p className="level">
                      #{el.nft.number} | {el.nft.level}
                    </p>
                    <div className="type d-flex align-items-center">
                      {el.nft.type}{" "}
                      {el.nft.star && (
                        <img src={el.nft.star} alt="#" className="star" />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Col>
      <div className="d-flex confirmNft justify-content-between align-items-center mt-4 py-3">
        <Col
          xs={11}
          md={10}
          className="mx-auto d-flex justify-content-between align-items-center "
        >
          {firstNft && secondNft ? (
            <p className="text ">
              {devolveAgain
                ? "DEVOLVE COMPLETED"
                : "Select which NFT you Would like to Zombify"}{" "}
            </p>
          ) : (
            <p className="text ">
              {" "}
              Select an NFT to DEVOLVE ({countNft.length}/2)
            </p>
          )}
          {showAllNft ? (
            <button
              className={confirmButtonActive ? "myButton" : "myButton deactive"}
              onClick={() => {
                if (confirmButtonActive) {
                  setShowAllNft(false);
                }
              }}
            >
              <span
                className="buttonText"
                style={{ opacity: confirmButtonActive ? "1" : ".4" }}
                onClick={() => {
                  setConfirmButtonActive(firstNft && secondNft);
                }}
              >
                Confirm
              </span>
            </button>
          ) : (
            <button
              className={
                developeButtonAcitive ? "myButton" : "myButton deactive"
              }
              onClick={() => {
                if (developeButtonAcitive) {
                  setShowAllNft(false);
                  setDevelopeButtonActive(firstNft && secondNft);
                  setDevolpeModal(true);
                  if (devolveAgain) {
                    setFirstNft(false);
                    setSecondNft(false);
                    setDevolpeModal(false);
                    setDevolveAgain(false);
                  }
                }
              }}
            >
              <span
                className="buttonText"
                style={{ opacity: developeButtonAcitive ? "1" : ".4" }}
                onClick={() => {}}
              >
                {devolveAgain ? "DEVOLVE AGAIN" : "Devolve"}
              </span>
            </button>
          )}
        </Col>
      </div>
      {showAllNft && (
        <div className="myModal w-100">
          <AllNft
            setConfirmButtonActive={setConfirmButtonActive}
            countNft={countNft}
          />
        </div>
      )}
      {devolveModal && (
        <div className="myModals w-100">
          <PopupConfirmation
            setDevolpeModal={setDevolpeModal}
            setDevolpingModal={setDevolpingModal}
          />
          <div className="overlay"></div>
        </div>
      )}
      {devolpingModal && (
        <div className="myModals w-100">
          <Developing
            setDevolpingModal={setDevolpingModal}
            setDevolpeModal={setDevolpeModal}
            setZoombify={setZoombify}
            setDevolveAgain={setDevolveAgain}
          />
        </div>
      )}
      {devolveModal && <div className="overlay"></div>}
    </Wrapper>
  );
};
export default Develope;
