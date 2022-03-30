import React, { useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { useMyContext } from "../Context";
import Menubar from "../Menubar/Menubar";

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-image: url(./images/myCollection.png);
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  .nft-containers::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .nft-containers {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 100%;
    background: linear-gradient(97.03deg, #00fff1 -12.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }
  .text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 100%;
    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }
  .nft-containers {
    padding: 10px;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-gap: 15px;

    background: rgba(0, 0, 0, 0.8);
    height: 65vh;
    overflow-y: scroll;
  }

  .main-nft {
    position: relative;
  }
  .main-nft:before {
    content: "";
    filter: drop-shadow(0px 0px 12.0522px rgba(255, 6, 200, 0.5));
    position: absolute;
    top: calc(-1 * 8px);
    left: calc(-1 * 7px);
    height: calc(100% + 2px * 8);
    width: calc(100% + 2px * 8);
    background: linear-gradient(-45deg, #5ddeff 70%, #ff06c8 100%);
    border-radius: calc(2 * 5px);
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }
  .nft {
    background: #000;
    border-radius: 8px 8px 8px 8px;
    cursor: pointer;
  }
  .nft img {
    border-radius: 8px 8px 0 0;
  }
  .active {
    position: relative;
    z-index: 1;
    background: #000;
  }
  .active .level-container {
    background: #000;
    margin-top: -3px;
  }
  .active::before {
    content: "";
    filter: drop-shadow(0px 0px 12.0522px rgba(255, 6, 200, 0.5));
    position: absolute;
    top: calc(-1 * 4px);
    left: calc(-1 * 4px);
    height: calc(100% + 2px * 4);
    width: calc(100% + 2px * 4);
    background: linear-gradient(-45deg, #ff06c8 70%, #fff500 100%);
    border-radius: calc(2 * 5px);
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }
  .levels {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 11.0087px;
    background: linear-gradient(97.03deg, #fff500 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .types {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 8.29428px;
    background: linear-gradient(97.03deg, #fff500 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 1.57007px rgba(0, 255, 241, 0.26);
  }
  @media only screen and (max-width: 991px) {
    .title {
      font-size: 40px;
    }
    .text {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 767px) {
    .title {
      font-size: 30px;
    }
    .text {
      font-size: 16px;
    }
  }
`;
const AllNft = ({ setConfirmButtonActive, countNft }) => {
  const [selected, setSelected] = useState(null);
  const { firstNft, setFirstNft, secondNft, setSecondNft } = useMyContext();

  const nftArray = [
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5377,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
    {
      img: "./images/develope/1.png",
      level: "LVL 1",
      number: 5376,
      type: "Energy",
      star: "./images/stars/energy.svg",
    },
  ];
  return (
    <Wrapper>
      <div className="py-3 pt-4 pt-sm-0">
        <Menubar />
      </div>
      <Col xs={10} md={10} className="mx-auto ">
        <div className="d-flex align-items-start align-items-sm-center flex-column flex-sm-row  py-5">
          <p className="title">DEVOLVE</p>
          <p className="text pt-2 pt-md-0 px-sm-3">
            Select an NFT to DEVOLVE ({countNft.length}/2)
          </p>
        </div>
        <div className="main-nft">
          <div className="nft-containers">
            {nftArray.map((el, i) => (
              <div
                className={`nft ${selected === i && "active"}`}
                key={i}
                onClick={() => {
                  setSelected(i);
                  setConfirmButtonActive(true);
                  if (firstNft) {
                    if (typeof firstNft === "object") {
                      setFirstNft(firstNft);
                    } else {
                      setFirstNft(nftArray[i]);
                    }
                  }
                  if (secondNft) {
                    if (typeof secondNft === "object") {
                      setSecondNft(secondNft);
                    } else {
                      setSecondNft(nftArray[i]);
                    }
                  }
                }}
              >
                <img src={el.img} alt="#" className="w-100" />
                <div className="d-flex level-container justify-content-between align-items-center p-2">
                  <p className="levels">
                    #{el.number} | {el.level}
                  </p>
                  <div className="types">
                    {el.type} <img src={el.star} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Wrapper>
  );
};
export default AllNft;
