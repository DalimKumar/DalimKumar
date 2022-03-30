import React, { useEffect } from "react";
import Typed from "typed.js";
import styled from "styled-components";
import smokemachine from "@bijection/smoke";
import Menubar from "../Menubar/Menubar";

const Wrapper = styled.div`
  padding-top: 80px;
  animation: show 200ms ease-in-out;
  transition: 100ms ease-in-out;
  @keyframes show {
    0% {
      opacity: 0.5;
      transform: scale(0);
    }
  }
  overflow-x: hidden;
  background: #000;

  #hi {
    position: absolute;
    top: 40%;
    width: 100%;
    text-align: center;
  }
  #hi a {
    color: #fff;
    font-size: 80px;
    text-decoration: none;
    font-family: Lobster;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
					  supported by Chrome and Opera */
  }

  #gh {
    display: block;
    position: absolute;
    transform: rotate(45deg);
    top: -30px;
    right: -100px;
    transform-origin: top left;
    background: #38dea8;
    padding: 10px 40px;
    color: #fff;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    text-shadow: -1px -1px 0 #5aab00;
    box-shadow: 0 2px 10px #0000003d;
  }

  .twitter-follow-button {
    position: absolute !important;
    bottom: 10px;
    right: 10px;
  }
  .main {
    width: 800px;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .image {
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .developing {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 90px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    background: linear-gradient(97.03deg, #00fff1 0%, #ff06c8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }
  .spinner {
    width: 70px;
    margin-top: 20px;
  }
  @media only screen and (max-width: 991px) {
    .main {
      width: 90%;
    }
    .developing {
      font-size: 65px;
    }
    .spinner {
      width: 50px;
    }
  }
  @media only screen and (max-width: 767px) {
    .developing {
      font-size: 55px;
      text-shadow: none;
    }
    .spinner {
      width: 45px;
    }
  }
  @media only screen and (max-width: 576px) {
    .developing {
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 520px) {
    .main {
      width: 98%;
    }
  }
  @media only screen and (max-width: 400px) {
    .main {
      width: 98%;
    }
    .spinner {
      width: 38px;
    }
    .developing {
      font-size: 37px;
    }
  }
`;
const Developing = ({
  setDevolpingModal,
  setZoombify,
  setDevolpeModal,
  setDevolveAgain,
}) => {
  const options = {
    strings: ["DEVELOPING..."],
    typeSpeed: 400,
    loop: true,
    cursorChar: "",
  };
  useEffect(() => {
    const typed = new Typed(".developing", options);
  }, []);
  useEffect(() => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var party = smokemachine(ctx, [255, 255, 255]);
    party.start(); // start animating
    party.setPreDrawCallback(function (dt) {
      party.addSmoke(window.innerWidth / 2, window.innerHeight, 0.5);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // party.addsmoke(innerWidth/2, innerHeight, 100)
    // onclick=e => {
    // 	console.log(e)
    // 	party.step()
    // }

    onmousemove = function (e) {
      var x = e.clientX;
      var y = e.clientY;
      var n = 0.5;
      var t = Math.floor(Math.random() * 200) + 3800;
      party.addsmoke(x, y, n, t);
    };
    setZoombify(false);
    setDevolpeModal(false);
    setDevolveAgain(true);
    setTimeout(() => {
      setDevolpingModal(false);
    }, 5000);
  }, []);
  return (
    <Wrapper>
      <Menubar />
      <canvas id="canvas"></canvas>
      <div className="main">
        <img src="./images/bloodlineDekstop.svg" alt="#" className="image" />
      </div>
      <div className="loader d-flex flex-column align-items-center">
        <h2 className="developing"></h2>
        <img src="./images/spinner.svg" alt="#" className="spinner" />
      </div>
    </Wrapper>
  );
};
export default Developing;
