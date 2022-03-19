import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  .title {
    font-size: 3.75rem;

    font-style: italic;
  }
  .text {
    line-height: 180%;
    font-weight: 500;
    font-size: 18px;
  }

  .image-container {
    width: 70%;
  }
  @media only screen and (max-width: 1199px) {
    .image-container {
      width: 90%;
    }
  }
  @media only screen and (max-width: 991px) {
    .title {
      font-size: 2.75rem;
    }
    .text {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 420px) {
    .title {
      font-size: 2.25rem;
    }
  }
`;
const Join = () => {
  return (
    <Wrapper className="py-5">
      <Col xs={11} xxl={8} className="mx-auto">
        <h2 className="title py-4 pb-3 pb-md-5">
          JOIN THE SOCIETY<span className="exlamation">!</span>
        </h2>
        <Row className="align-items-center">
          <Col md={7} data-aos="fade-right">
            <p className="text">
              Being the proud owner of a poker shark makes you part of the Poker
              Shark Society and comes with a wide range of benefits. Sharks will
              evolve! - going from fun collectible to fully rigged 3D character
              that you can use as your avatar in metaverses, supporting games,
              and apps. Sharks will also be your gateway to life-enriching
              experiences, crypto expert talks, elite poker coachings, training
              materials, and tools. Check our roadmap and stalk our social media
              for more. Our project is unique in that a whopping 80% of minting
              revenue will go directly back into the project to fund your
              benefits. The community reserve ensures the longevity of the
              project. Read the “Sharkpaper” for details. If you want to gain
              crypto insights, improve your poker game, and increase your mental
              performance while being part of an engaging community, this is the
              NFT for you !
            </p>
          </Col>{" "}
          <Col
            sm={10}
            md={5}
            className="d-flex justify-content-center align-items-center mt-5 mt-md-0 mx-auto"
            data-aos="fade-left"
          >
            <div className="image-container">
              <img src="./images/about.png" alt="" className="image" />
            </div>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};
export default Join;
