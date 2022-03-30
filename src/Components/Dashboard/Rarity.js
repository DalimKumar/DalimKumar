import React from "react";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  .progress {
    height: 5px;
  }
  .progress-bar {
    background: linear-gradient(109.38deg, #ff06c8 1.86%, #5ddeff 97%);
  }
  .overlay-container {
    position: relative;
  }
  .overlay {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 91%;
    background: rgba(49, 56, 96, 0.9);
    filter: blur(10px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 0px 0px 14px 14px;
  }
  .coming-soon {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    text-align: center;

    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-32.1deg);
  }
`;
const Rarity = () => {
  const survivorSupplyArray = [
    {
      level: "Level 1",
      leastValue: 4376,
      maxValue: 5376,
    },
    {
      level: "Level 2",
      leastValue: 4376,
      maxValue: 5376,
    },
    {
      level: "Level 3",
      leastValue: 4376,
      maxValue: 5376,
    },
    {
      level: "Level 4",
      leastValue: 4376,
      maxValue: 5376,
    },
    {
      level: "Level 5",
      leastValue: 4376,
      maxValue: 5376,
    },
    {
      level: "Level 6",
      leastValue: 4376,
      maxValue: 5376,
    },
    {
      level: "Level 7",
      leastValue: 4376,
      maxValue: 5376,
    },
    {
      level: "Level 8",
      leastValue: 4376,
      maxValue: 5376,
    },
  ];
  return (
    <Wrapper>
      <div className="wrapper">
        <h2 className="title">Survivor Supply</h2>

        {survivorSupplyArray.map((el, i) => (
          <div key={i} className="w-100 py-2">
            <p className="level">{el.level}</p>
            <p className="number py-1">
              {el.leastValue.toLocaleString("en-US")}/
              {el.maxValue.toLocaleString("en-US")}
            </p>
            <ProgressBar now={(el.leastValue * 100) / el.maxValue} />
          </div>
        ))}
      </div>
      <div className="overlay"></div>
      <div className="coming-soon">Coming Soon</div>
    </Wrapper>
  );
};
export default Rarity;
