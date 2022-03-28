import React from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  .progress {
    height: 5px;
  }
  .progress-bar {
    background: linear-gradient(109.38deg, #ff06c8 1.86%, #5ddeff 97%);
  }
`;
const SurvivorSupply = () => {
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
      <div className="wrapper mt-4 d-flex justify-content-between align-items-center">
        <p className="level">Total Survivors</p>
        <p className="number">
          {survivorSupplyArray
            .reduce((acc, curr) => acc + curr.leastValue, 0)
            .toLocaleString("en-US")}
        </p>
      </div>
    </Wrapper>
  );
};
export default SurvivorSupply;
