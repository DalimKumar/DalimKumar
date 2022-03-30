import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  .list-container {
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 18.3193px 40.5642px 0.654261px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
  }

  .first-level {
    cursor: pointer;
  }
  .profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .level {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 21.3647px;
    line-height: 156%;
    background: linear-gradient(97.03deg, #fff500 -27.9%, #ff06c8 180.99%);
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
    width: 15px;
    margin-left: 0px;
  }
  .myButton {
    padding: 6px 12px;
  }
  .hide {
    max-height: 0px;
    overflow: hidden;

    transition: 0s;
  }
  .info-container {
    max-height: 1000px;
    transition: max-height 2s ease;
  }
  @media only screen and (max-width: 520px) {
    .profile {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    .level {
      font-size: 13px;
    }
    .type {
      font-size: 13px;
    }
    .myButton {
      font-size: 14px;
      padding: 6px 6px;
    }
    .info {
      font-size: 13px;
      padding: 3px 0;
    }
  }
  @media only screen and (max-width: 360px) {
    .line {
      display: none;
    }
  }
`;
const ListCollection = ({ data, firstNft, setFirstNft }) => {
  const [selected, setSelected] = useState(0);

  return (
    <Wrapper>
      {data.map((el, i) => (
        <div
          key={i}
          className="list-container px-3 px-sm-4 py-3 my-4 "
          style={{ background: selected === i && "rgba(0, 0, 0, 0.8)" }}
        >
          <div
            key={i}
            className=" first-level d-flex justify-content-between  align-items-center"
          >
            <div
              className="d-flex align-items-center "
              onClick={() => setSelected(i)}
            >
              <img src={el.img} alt="" className="profile" />
              <p className="level px-2 px-sm-4">
                {el.level} <span className="line">|</span> #{el.number}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <div
                className="mx-2 mx-sm-3 d-flex align-items-center"
                onClick={() => setSelected(i)}
              >
                <p className="type">{el.type}</p>
                {el.star && <img src={el.star} className="star" alt="" />}
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
          <div
            className={`hide pt-0 ${selected === i && "info-container pt-3"}`}
          >
            <p className="level">#{el.number}</p>
            <p className="info">Head:{el.head}</p>
            <p className="info">Eyes:{el.eyes}</p>
            <p className="info">Mouth:{el.mouth}</p>
            <p className="info">Hand:{el.hand}</p>
            <p className="info">Top:{el.top}</p>
            <p className="info">Bottom: {el.bottom}</p>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};
export default ListCollection;
