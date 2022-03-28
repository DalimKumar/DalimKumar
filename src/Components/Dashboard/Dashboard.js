import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Rarity from "./Rarity";
import SurvivorSupply from "./SurvivorSupply";
import TotalNft from "./TotalNft";

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

  .wrapper {
    background: #272e4f;
    box-shadow: 0px 28px 62px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    padding: 24px 24px;
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }
  .level {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 21.3647px;
    line-height: 100%;
    color: #ffffff;
  }
  .number {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 21.3647px;
    line-height: 156%;
    color: #ffffff;
  }
  @media only screen and (max-width: 520px) {
    .title {
      font-size: 29px;
    }
  }
`;
const Dashboard = () => {
  return (
    <Wrapper className="px-sm-5 ">
      <Row className="w-100 justify-content-center">
        <Col sm={10} md={6} lg={6} xl={5} xxl={3} className="my-3 mx-auto">
          <SurvivorSupply />
        </Col>
        <Col sm={10} md={6} lg={6} xl={5} xxl={3} className="my-3 mx-auto">
          <SurvivorSupply />
        </Col>
        <Col sm={10} md={6} lg={6} xl={5} xxl={3} className="my-3 mx-auto">
          <TotalNft />
        </Col>
        <Col sm={10} md={6} lg={6} xl={5} xxl={3} className="my-3 mx-auto">
          <Rarity />
        </Col>
      </Row>
    </Wrapper>
  );
};
export default Dashboard;
