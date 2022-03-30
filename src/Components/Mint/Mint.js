import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menubar from "../Menubar/Menubar";

import MyRange from "../MyRange/MyRanges";

import { useMyContext } from "../Context";
const Wrapper = styled.div`

  min-width: 100%;
  min-height: 100vh;
  display: block;
  background-image: url(./images/afterMintingBackground.png);
  background-size: cover;
  background-position: center center;
 
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  .main {
    ${"" /* position: relative; */}
    display: flex;
    flex-direction: column;
    padding: 50px;
    padding-right: 65px;
    width: 800px;
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    z-index:1;
  }

  .image {
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
  z-index:-1;
    width: 100%;
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 33.7201px;
    line-height: 120%;
    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 60.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }

  .buttonContainer {
    display:flex;
    justify-content:center;
    ${
      "" /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    cursor: pointer;
    grid-gap:20px;
    */
    }
  }
  .myButton {
    border: none;
    outline: none;
    background: #000;
    position: relative;
    border-radius: 10px;
    margin:0 1%;
    width:18%;
    cursor: pointer;
  }
  .active{
    color:#fff;
  }
  .active1 {
    background: linear-gradient(to right, #d2216c, #ff06c8);
  }
  .active2 {
    background: linear-gradient(to right,#A4670D,#FF9B06);
  }
  .active3{
    background: linear-gradient(to right,#00FFF1,#057794);
  
  }
  .active4{
    background: linear-gradient(to right,#ABFFFA,#9C8CFF);
  
  }
  .active5{
    background: linear-gradient(to right,#FFF500,#FF06C8);
  
  }
  
  .myButton:first-child {
    margin-left: 0;
  }
  .myButton:last-child {
    margin-right: 0;
  }
  .myButton:after {
    content: "";
    filter: drop-shadow(0px 0px 12.0522px rgba(255, 6, 200, 0.5));
    position: absolute;
    top: calc(-1 * 2px);
    left: calc(-1 * 2px);
    height: calc(100% + 2px * 2);
    width: calc(100% + 2px * 2);
    background: linear-gradient(to right, #d2216c, #ff06c8);
    border-radius: calc(2 * 5px);
    z-index: -5;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }
  .myButton1:after {
    filter: drop-shadow(0px 0px 12.0522px rgba(164, 103, 13, 0.5));
    background: linear-gradient(to right, #a4670d, #ff9b06);
  }
  .myButton2:after {
    filter: drop-shadow(0px 0px 12.0522px rgba(0, 255, 241, 0.5));
    background: linear-gradient(to right, #00fff1, #057794);
  }
  .myButton3:after {
    filter: drop-shadow(0px 0px 12.0522px rgba(171, 255, 250, 0.5));
    background: linear-gradient(to right, #abfffa, #9c8cff);
  }
  .myButton4:after {
    filter: drop-shadow(0px 0px 12.0522px rgba(255, 245, 0, 0.5));
    background: linear-gradient(to right, #fff500, #ff06c8);
  }
  .button-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 22.3251px;
    background: linear-gradient(97.03deg, #d2216c -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 6.62072px rgba(0, 255, 241, 0.26);
    margin-right: 5px;
  }
  .myButton1 .button-text {
    background: linear-gradient(97.03deg, #a4670d -27.9%, #ff9b06 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    text-shadow: 0px 0px 6.62072px rgba(0, 255, 241, 0.26);
  }
  .myButton2 .button-text {
    background: linear-gradient(
      97.03deg,
      #00fff1 -27.9%,
      rgba(5, 119, 148, 0.75) 132.99%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 6.62072px rgba(0, 255, 241, 0.26);
  }
  .myButton3 .button-text {
    background: linear-gradient(97.03deg, #abfffa -27.9%, #9c8cff 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 6.62072px rgba(0, 255, 241, 0.26);
  }
  .myButton4 .button-text {
    background: linear-gradient(97.03deg, #fff500 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 6.62072px rgba(0, 255, 241, 0.26);
  }
  .active .button-text {
    background: linear-gradient(97.03deg, #fff -27.9%, #fff 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
 
  .icon  {
    width: 20px;
    height: 20px;
  }



  .text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13.3608px;
    line-height: 156%;
    text-align: center;
    color: #ffffff;
  }
  .mintButton {
     border-radius: 15px;
    border: none;
    outline: none;
    background:#000;
    position: relative;
    border-radius: 10px;
    margin: 0 10px;
    cursor: pointer;
    color: #fff; 
    }
  }
  .mintButton:after {
    filter: drop-shadow(0px 0px 16px rgba(127, 17, 224, .8)
);
    content: "";
    position: absolute;
    top: calc(-1 * 2px);
    left: calc(-1 * 2px);
    height: calc(100% + 2px * 2);
    width: calc(100% + 2px * 2);
    background: linear-gradient(-45deg, #FF06C8 70% , #5DDEFF 100%);
    border-radius: calc(2 * 5px);
    z-index: -5;
    background-size: 300% 300%;
  
  }
  .disabled{
    cursor: not-allowed;
  }
  .disabled::after{
    background: linear-gradient(-45deg, rgba(255, 6, 200, .4) 70% , rgba(93, 222, 255, .4) 100%);
  
  }
  .disabled .minttext{
    opacity:.5;
  }
  .minttext {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 33.7201px;
    line-height: 100%;
    text-align: center;
    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }
  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @media only screen and (max-width:991px){
    .main {
      width:90%;
    }
    .title{
      font-size:25px;
    }
    .button-text{
      font-size:16px;
    }
    .text{
      font-size:12px;
    }
    .minttext {
      font-size:22px;
    }
  }
  @media only screen and (max-width:767px){
    .main{
      width:450px;
    }
    .title{
      text-align:center;
    }
    .title-bottom{
      text-align:left;
    }
    br{
      display:none;
    }
    .image{
      width:;
     
      
    }
    .buttonContainer {
    
    
  }
  .myButton{
    width:30%;
    
    margin:10px 2%;
    
  }
  .title-bottom{
    font-size:15px;
  }
  }
  @media only screen and (max-width:480px){
    .main{
      width:95%;
    }
    .myButton{
      width:45%;
      margin:10px 2%;
    }
  .title{
      font-size:20px;
    }
    .button-text{
      font-size:14px;
    }
    .text{
      font-size:10px;
    }
    .minttext {
      font-size:18px;
    }
    .title-bottom{
    font-size:15px;
  }
  .main{
    padding: 30px;
    padding-right: 45px;
  }
  }
`;
const Mint = () => {
  const { setMint } = useMyContext();
  const [value, setValue] = useState([1]);
  const [selected, setSelected] = useState(null);
  const [mintText, setMintText] = useState(`Please select a <br /> Bloodline`);
  const [price, setPrice] = useState(0.3);

  const buttonArray = [
    {
      buttonText: "Fire",
      icon: "./images/fire.svg",
      icon2: "./images/firewhite.svg",
      currentValue: 1279,
      maxValue: 1280,
    },
    {
      buttonText: "Earth",
      icon: "./images/earth.svg",
      icon2: "./images/earthwhite.svg",
      text: "SOLD OUT",
      color: "linear-gradient(97.03deg, #A4670D -27.9%, #FF9B06 132.99%)",
    },
    {
      buttonText: "Water",
      icon: "./images/water.svg",
      icon2: "./images/waterwhite.svg",
      currentValue: 1279,
      maxValue: 1280,
    },
    {
      buttonText: "Air",
      icon: "./images/air.svg",
      icon2: "./images/airwhite.svg",
      currentValue: 1279,
      maxValue: 1280,
    },
    {
      buttonText: "Energy",
      icon: "./images/energy.svg",
      icon2: "./images/energywhite.svg",
      text: "SOLD OUT",
    },
  ];

  return (
    <Wrapper>
      <Menubar />
      <div className="mx-auto main ">
        <div className="image-wrapper w-100">
          <img
            src="./images/bloodlineDekstop.svg"
            alt="#"
            className="image w-100 d-none d-md-block"
          />
          <img
            src="./images/bloodlineMobile.svg"
            alt=""
            className="image  d-block d-md-none"
          />
        </div>
        <h2 className="title">BLOODLINE</h2>
        <Row className="buttonContainer py-4 w-100 px-0 mx-0">
          {buttonArray.map((el, i) => (
            <Col
              xs={3}
              className={`myButton px-2 py-1 myButton${i} ${
                selected === i + 1 && `active${i + 1} active `
              }`}
              key={i}
              onClick={() => {
                setSelected(i + 1);
                setMintText(
                  `Mint ${value[0]} ${el.buttonText} Survivors <br/> for ${
                    value[0] * price.toFixed(2)
                  }ETH`
                );
              }}
            >
              <div
                className={`d-flex align-items-center justify-content-center `}
              >
                <span className="button-text">{el.buttonText}</span>{" "}
                <img
                  src={selected === i + 1 ? el.icon2 : el.icon}
                  alt="#"
                  className="icon"
                />
              </div>
              {el.currentValue && el.maxValue ? (
                <p className="text">
                  {el.currentValue} of {el.maxValue}
                </p>
              ) : (
                <p className="text">{el.text}</p>
              )}
            </Col>
          ))}
        </Row>
        <h2 className="title">QUANTITY</h2>
        <MyRange
          value={value}
          setValue={setValue}
          selected={selected}
          setMintText={setMintText}
          price={price}
          buttonText={selected && buttonArray[selected - 1].buttonText}
        />
        <div className="d-flex justify-content-between align-items-center ">
          <h2
            className="title title-bottom px-md-5"
            dangerouslySetInnerHTML={{ __html: mintText }}
          ></h2>
          <Link
            to="/"
            className={`mintButton px-4 py-2 px-lg-5 py-lg-3 ${
              !selected && "disabled"
            }`}
            onClick={() => {
              setMint(true);
            }}
          >
            <span className="minttext">Mint</span>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Mint;
