import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  .nft-container {
    background: linear-gradient(109.38deg, #ff06c8 1.86%, #5ddeff 97%);
    box-shadow: 0px 28px 62px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image {
    width: 25px;
  }
  .twitterFeed {
    background: #8891be;
    border-radius: 14px;
    height: 76.9px;
  }
  .social-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #272e4f;
    box-shadow: 0px 17.8182px 39.4545px rgba(0, 0, 0, 0.25);
    border-radius: 8.90909px;
    height: 70px;
  }
  .social-container img {
    height: 60%;
  }
`;
const TotalNft = () => {
  const twitterFeed = [{}, {}, {}, {}, {}];
  const socialArray = [
    { icon: "./images/dashboard/discord.svg", to: "https://discord.com/" },
    { icon: "./images/dashboard/twitter.svg", to: "https://twitter.com/" },
    { icon: "./images/dashboard/instagram.svg", to: "https://instagram.com/" },
  ];
  return (
    <Wrapper>
      <div className="wrapper d-flex justify-content-between align-items-center">
        <div>
          <p className="level">Total NFTs Burnt</p>
          <p className="number">2,194</p>
        </div>
        <div className="nft-container">
          <img src="./images/dashboard/nft.svg" alt="#" className="image" />
        </div>
      </div>
      <div className=" wrapper mt-4">
        <p className="level pb-2">Twitter Feed</p>
        <div className="">
          {twitterFeed.map((el, i) => (
            <div className="twitterFeed mt-3" key={i}></div>
          ))}
        </div>
      </div>
      <Row className="mt-3">
        {socialArray.map((el, i) => (
          <Col xx={4} key={i}>
            <a
              href={el.to}
              target="_blank"
              rel="noreferrer"
              className="social-container"
            >
              <img src={el.icon} alt="#" />
            </a>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};
export default TotalNft;
