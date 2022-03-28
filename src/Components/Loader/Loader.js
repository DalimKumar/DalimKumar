import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  .spinner {
    width: 70px;
    margin-top: 20px;
  }
  @media only screen and (max-width: 991px) {
    .spinner {
      width: 50px;
    }
  }
  @media only screen and (max-width: 767px) {
    .spinner {
      width: 45px;
    }
  }

  @media only screen and (max-width: 400px) {
    .spinner {
      width: 38px;
    }
  }
  ${
    "" /* .spinner {
    margin-top: 20px;
  }
  .spinner__circle {
    position: relative;
    width: 54px;
    height: 54px;
    overflow: hidden;
    background: linear-gradient(0deg, #00fff1 0%, #ff06c8 50%);
    border-radius: 100%;
    animation: spin 1s infinite linear;
    margin: 0 auto;
  }
  .spinner__circle-inner,
  .spinner__circle-gradient {
    position: absolute;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -50%);
  }
  .spinner__circle-inner {
    top: 50%;
    left: 50%;
    background-color: #000;
    border-radius: 100%;
  }
  .spinner__circle-gradient {
    top: -24px;
    left: 6px;
    background-color: #000;
    backgounnd-image: none;
    transform: rotate(-45deg);
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 991px) {
  } */
  }
`;
const Loader = () => {
  return (
    <Wrapper>
      <img src="./images/spinner.svg" alt="#" className="spinner" />
      {/* <div class="spinner">
        <div class="spinner__circle">
          <div class="spinner__circle-gradient"></div>

          <div class="spinner__circle-inner"></div>
        </div>
      </div> */}
    </Wrapper>
  );
};
export default Loader;
