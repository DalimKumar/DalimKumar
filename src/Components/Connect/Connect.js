import React, { useEffect, useState } from "react";

import WarpSpeed from "../../warpspeed";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  background: #000;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #0f0919;
  display:flex;
  justify-content:center;
  align-items:center;
  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    top: 70px;
  }
  .spinner {
    padding-top:120px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 90px;
  }
  #bkFrame {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .connect-container {
    width:45%;
    padding-top: 150px;
    z-index:5;
  }
  .connect{
    padding-top:150px;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
 
    z-index:1;
  }
  .animated{
    animation: show 1000ms ease-in-out;
    transition: 1000ms ease-in-out;
    }
  @keyframes show {
    0% {
      opacity: 0.5;
      transform: scale(0);
    }
  }
  .connectButton {
    border-radius: 15px;
    border: none;
    outline: none;
    background:#120B1E;
    position: relative;
    border-radius: 10px;
    margin: 0 10px;
    cursor: pointer;
    color: #fff; 
    }
  }
  .connectButton:after {
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
  .buttonText{
    font-family: 'Inter';
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 156%;
    background: linear-gradient(97.03deg, #00FFF1 -27.9%, #FF06C8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
     background-clip: text;
    text-fill-color: transparent;
     text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);       
}



.image{
  position:absolute;
  padding-top:150px;
  top:50%;
  transform:translateY(-50%);
  width:30%;
  display:block;
  z-index:1;
  transition:1s;
}

.left{
  left:0;
}
.right{
  right:0;
}

.rightAnimation{
  right:15%;

}
.leftAnimation{
  left:15%;
}
@media only screen and (max-width:1600px){
  .rightAnimation{
    right:13%;
  }
  .leftAnimation{
    left:13%;
  }
}
@media only screen and (max-width:991px){
  .rightAnimation{
    right:16%;
  }
  .leftAnimation{
    left:16%;
  }
  .connect-container {
    width:60%;
  }
  .image{
    width:25%;
  }
}
@media only screen and (max-width:767px){
  .rightAnimation{
    right:14%;
  }
  .leftAnimation{
    left:14%;
  }
  }
  @media only screen and (max-width:650px){
  .rightAnimation{
    right:11%;
  }
  .leftAnimation{
    left:11%;
  }
  }
  @media only screen and (max-width:540px){
  .rightAnimation{
    right:9%;
  }
  .leftAnimation{
    left:9%;
  }
  }
@media only screen and (max-width:520px){
  .rightAnimation{
    right:7%;
  }
  .leftAnimation{
    left:7%;
  }
  .connect-container {
    width:90%;
  }
  .image{
    width:30%;
  }
  .buttonText{
    font-size:20px;
  }
}
`;
const Connect = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    new WarpSpeed("bkFrame", {
      targetSpeed: 0.8,
      speedAdjFactor: 0.07,
      shape: "square",
      backgroundColor: "hsl(263,45%,8%)",
      speedWhileLoading: 18,
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  });

  return (
    <Wrapper>
      <img src="./images/logo.svg" alt="#" className="logo" />
      {loader && <img src="./images/spinner.svg" alt="" className="spinner" />}
      <div id="background">
        <canvas id="bkFrame" width="3276" height="1220"></canvas>
      </div>
      {!loader && (
        <>
          <div className="image left">
            {" "}
            <img src="./images/left.svg" alt="" className="w-100 animated" />
          </div>

          <div className="image right">
            <img src="./images/right.svg" alt="" className="w-100 animated" />
          </div>
          <div className="connect-container d-flex justify-content-between align-items-cener animated">
            <img
              src="./images/connectImg.svg"
              alt=""
              className="connectImg w-100"
            />
            <div className="connect ">
              <Link
                to="/mint"
                className="connectButton d-block px-3 py-2"
                onMouseEnter={() => {
                  document
                    .querySelector(".left")
                    .classList.add("leftAnimation");
                  document
                    .querySelector(".right")
                    .classList.add("rightAnimation");
                }}
                onMouseLeave={() => {
                  document
                    .querySelector(".left")
                    .classList.remove("leftAnimation");
                  document
                    .querySelector(".right")
                    .classList.remove("rightAnimation");
                }}
              >
                <span className="buttonText">Connect</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};
export default Connect;
