import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  animation: show 200ms ease-in-out;
  transition: 100ms ease-in-out;

  .overlays {
    position: absolute;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    z-index: -1;
  }
  .pupup-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
  }
  .popup {
    position: relative;

    background: #272e4f;
  }
  .popup:before {
    content: "";
    filter: drop-shadow(0px 0px 12.0522px rgba(255, 6, 200, 0.5));
    position: absolute;
    top: calc(-1 * 8px);
    left: calc(-1 * 7px);
    height: calc(100% + 2px * 8);
    width: calc(100% + 2px * 8);
    background: linear-gradient(-45deg, #5ddeff 70%, #ff06c8 100%);
    border-radius: calc(2 * 5px);
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }
  .popup-title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 100%;
    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }
  .popup-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    color: #ffffff;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }
  .mintButton {
    border-radius: 15px;
    border: none;
    outline: none;

    position: relative;
    z-index: 1;
    border-radius: 10px;
    margin: 0 10px;
    cursor: pointer;
    color: #fff;
    background: #000;
  }
  .mintButton:before {
    filter: drop-shadow(0px 0px 11.3158px #ff06c8);

    content: "";
    position: absolute;
    top: calc(-1 * 1px);
    left: calc(-1 * 1px);
    height: calc(100% + 2px * 1);
    width: calc(100% + 2px * 1);
    background: linear-gradient(-85deg, #5ddeff 70%, #ff06c8 100%);
    border-radius: calc(2 * 5px);
    z-index: -5;
    background-size: 300% 300%;
  }
  .buttonTextContainer {
    background: #272e4f;
    border-radius: calc(2 * 5px);
  }
  .buttonText {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 23.8481px;
    line-height: 156%;

    text-align: center;

    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    text-shadow: 0px 0px 7.07237px rgba(0, 255, 241, 0.26);
  }

  @keyframes show {
    0% {
      opacity: 0.5;
      transform: scale(0);
    }
  }
  @media only screen and (max-width: 991px) {
    .pupup-container {
      width: 80%;
    }
    .popup-title {
      font-size: 25px;
    }
    .popup-text {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 520px) {
    .pupup-container {
      width: 90%;
    }
    .popup:before {
      top: calc(-1 * 4px);
      left: calc(-1 * 4px);
      height: calc(100% + 2px * 4);
      width: calc(100% + 2px * 4);
    }
    .buttonText {
      font-size: 20px;
    }
  }
`;
const PopupConfirmation = ({ setDevolpeModal, setDevolpingModal }) => {
  return (
    <Wrapper>
      <div className="pupup-container">
        <div className="popup p-3 p-lg-5">
          <h2 className="popup-title">You are about to DEVOLVE...</h2>
          <div className="popup-text pb-5 mb-5 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At erat
            pellentesque adipiscing commodo elit at. Sit amet purus gravida
            quis. Neque vitae tempus quam pellentesque nec nam aliquam sem et.
            Eget duis at tellus at urna condimentum mattis pellentesque id.
            Faucibus ornare suspendisse sed nisi lacus sed viverra. Amet aliquam
            id diam maecenas ultricies. Lorem donec massa sapien faucibus et
            molestie ac feugiat. Feugiat scelerisque varius morbi enim nunc
            faucibus a. Bibendum enim facilisis gravida neque convallis a cras.
            Nisl nunc mi ipsum faucibus. Ac tortor vitae purus faucibus ornare.
            Lacus viverra vitae congue eu.
          </div>
          <div className="d-flex justify-content-between buttonContainer w-100 pt-5 mt-5 ">
            <button
              onClick={() => setDevolpeModal(false)}
              to={"/"}
              className={`mintButton d-flex flex-column justify-content-center aling-items-center `}
            >
              <div className="buttonTextContainer px-2 py-2 px-lg-3 py-lg-2 ">
                <p className="buttonText  ">CANCEL</p>
              </div>
            </button>
            <button
              onClick={() => setDevolpingModal(true)}
              className={`mintButton d-flex flex-column justify-content-center aling-items-center `}
            >
              <div className="buttonTextContainer px-2 py-2 px-lg-3 py-lg-2 ">
                <p className="buttonText">DEVOLVE</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="overlays"></div>
    </Wrapper>
  );
};
export default PopupConfirmation;
