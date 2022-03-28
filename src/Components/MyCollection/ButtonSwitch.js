import React from "react";

import { Col } from "react-bootstrap";
import styled from "styled-components";
import { useMyContext } from "../Context";

const Wrapper = styled.div`
  .view-container {
    position: relative;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 3px;
    width: 80px;
    height: 30px;
    cursor: pointer;
  }
  .switch {
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    position: absolute;
    width: 50%;
    height: 100%;
    background: linear-gradient(109.38deg, #ff06c8 30.86%, #5ddeff 97%);
    border-radius: 3px;
    transition: 0.5s;
    z-index: -1;
  }
  .left {
    height: 100%;
  }
  .right {
  }
`;

const SwitchButton = () => {
  const { setShowingType } = useMyContext();
  const leftClick = () => {
    document.querySelector(".switch").style.left = "0px";
    setShowingType((prev) => !prev);
  };

  const rightClick = () => {
    document.querySelector(".switch").style.left = "50%";
    setShowingType((prev) => !prev);
  };
  return (
    <Wrapper>
      <div className="d-flex align-items-center justify-content-between view-container">
        <div className="switch"></div>
        <div
          className="left w-50  d-flex justify-content-center align-items-center"
          onClick={leftClick}
        >
          <img src="/images/card/list.svg" alt="#" />
        </div>
        <div
          className="right w-50 d-flex justify-content-center align-items-center"
          onClick={rightClick}
        >
          <img src="/images/card/grid.svg" alt="#" />
        </div>
      </div>
    </Wrapper>
  );
};

export default SwitchButton;
