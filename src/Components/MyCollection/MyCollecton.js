import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useMyContext } from "../Context";
import SwitchButton from "./ButtonSwitch";
import GridCollection from "./GridCollection";
import ListCollection from "./ListCollection";
const Wrapper = styled.div`
  padding: 100px 0;
  padding-top: 150px;
  min-width: 100%;
  min-height: 100vh;
  display: block;
  background-image: url(./images/myCollection.png);
  background-size: cover;
  background-position: center center;

  position: relative;
  z-index: 1;
  box-sizing: border-box;

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 130%;
    background: linear-gradient(97.03deg, #00fff1 -20%, #ff06c8 30.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }
  .myButton {
     border-radius: 15px;
    border: none;
    outline: none;
    background:#000;
    position: relative;
    border-radius: 10px;
    padding:10px 12px;
    cursor: pointer;
    
    }
  }
  .myButton:after {
    filter: drop-shadow(0px 0px 16px rgba(127, 17, 224, .8)
);
    content: "";
    position: absolute;
    top: calc(-1 * 2px);
    left: calc(-1 * 2px);
    height: calc(100% + 2px * 2);
    width: calc(100% + 2px * 2);
    background: linear-gradient(-45deg, #FFF500 70% , #FF06C8 100%);
    border-radius: calc(2 * 5px);
    z-index: -1;
    background-size: 300% 300%;
  
  }
  .buttonText{
    background: linear-gradient(97.03deg, #FFF500 -27.9%, #FF06C8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 3.35149px rgba(0, 255, 241, 0.26);
  }
  .info {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    background: linear-gradient(97.03deg, #fff500 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
const MyCollection = () => {
  const { showingType } = useMyContext();
  const collectionArray = [
    {
      img: "./images/card/1.png",
      level: "Level 1: Survivor",
      number: "5,376",
      head: "Braids & Halo",
      eyes: "Cautious",
      mouth: "Moustache",
      hand: "Phone",
      top: "Lion",
      bottom: "Black",
      develope: true,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/card/1.png",
      level: "Level 1: Survivor",
      number: "5,376",
      head: "Braids & Halo",
      eyes: "Cautious",
      mouth: "Moustache",
      hand: "Phone",
      top: "Lion",
      bottom: "Black",
      develope: true,
      type: "Energy",
    },
    {
      img: "./images/card/1.png",
      level: "Level 1: Survivor",
      number: "5,376",
      head: "Braids & Halo",
      eyes: "Cautious",
      mouth: "Moustache",
      hand: "Phone",
      top: "Lion",
      bottom: "Black",
      develope: true,
      type: "Energy",
    },
    {
      img: "./images/card/1.png",
      level: "Level 1: Survivor",
      number: "5,376",
      head: "Braids & Halo",
      eyes: "Cautious",
      mouth: "Moustache",
      hand: "Phone",
      top: "Lion",
      bottom: "Black",
      develope: true,
      type: "Energy",
    },
    {
      img: "./images/card/1.png",
      level: "Level 1: Survivor",
      number: "5,376",
      head: "Braids & Halo",
      eyes: "Cautious",
      mouth: "Moustache",
      hand: "Phone",
      top: "Lion",
      bottom: "Black",
      develope: true,
      type: "Energy",
    },
    {
      img: "./images/card/1.png",
      level: "Level 1: Survivor",
      number: "5,376",
      head: "Braids & Halo",
      eyes: "Cautious",
      mouth: "Moustache",
      hand: "Phone",
      top: "Lion",
      bottom: "Black",
      develope: true,
      type: "Energy",
    },
    {
      img: "./images/card/1.png",
      level: "Level 1: Survivor",
      number: "5,376",
      head: "Braids & Halo",
      eyes: "Cautious",
      mouth: "Moustache",
      hand: "Phone",
      top: "Lion",
      bottom: "Black",
      develope: true,
      type: "Energy",
    },
    {
      img: "./images/card/1.png",
      level: "Level 1: Survivor",
      number: "5,376",
      head: "Braids & Halo",
      eyes: "Cautious",
      mouth: "Moustache",
      hand: "Phone",
      top: "Lion",
      bottom: "Black",
      develope: true,
      type: "Energy",
    },
  ];
  return (
    <Wrapper>
      <Col sm={11} lg={11} xl={10} className="mx-auto">
        <h2 className="title">My Collection</h2>
        <div className="d-flex justify-content-end align-items-center mx-3 ">
          <SwitchButton />
        </div>
        {showingType ? (
          <ListCollection data={collectionArray} />
        ) : (
          <GridCollection data={collectionArray} />
        )}
      </Col>
    </Wrapper>
  );
};
export default MyCollection;
