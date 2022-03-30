import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  .collection {
    background: rgba(0, 0, 0, 1);
    box-shadow: 0px 28px 62px 1px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    position: relative;
    z-index: 1;
  }
  .level-container {
    box-shadow: 0px 28px 62px 1px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
  }
  .level {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 21.3647px;
    line-height: 156%;
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
    font-size: 16.3013px;
    line-height: 156%;
    background: linear-gradient(97.03deg, #fff500 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 3.35149px rgba(0, 255, 241, 0.26);
  }

  .star {
    width: 20px;
    margin-left: 4px;
  }
  @media only screen and (max-width: 1600px) {
    .level {
      font-size: 18px;
    }

    .myButton {
      font-size: 14px;
      padding: 6px 10px;
    }
    .info {
      font-size: 14px;
      padding: 3px 0;
    }
  }
`;
const GridCollection = ({ data, firstNft, setFirstNft }) => {
  return (
    <Wrapper className="px-3 px-sm-0">
      <Row>
        {data.map((el, i) => (
          <Col sm={10} md={6} lg={4} xxl={3} className="my-3 mx-auto" key={i}>
            <div key={i} className="collection mx-1 ">
              <img src={el.img} alt="#" className="w-100" />
              <div className="px-3 pb-4">
                <div className="level-container d-flex justify-content-between align-items-center w-100 ">
                  <p className="level">Level 1: Survivor</p>
                  <div className="type d-flex">
                    <p>Energy</p>
                    {el.star && <img src={el.star} alt="" className="star" />}
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <p className="level">#{el.number}</p>
                    <p className="info">Head:{el.head}</p>
                    <p className="info">Eyes:{el.eyes}</p>
                    <p className="info">Mouth:{el.mouth}</p>
                    <p className="info">Hand:{el.hand}</p>
                    <p className="info">Top:{el.top}</p>
                    <p className="info">Bottom: {el.bottom}</p>
                  </div>
                  <Link
                    to="/devolve"
                    className="myButton"
                    onClick={() => setFirstNft(data[i])}
                  >
                    <span className="buttonText">Develope</span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};
export default GridCollection;
