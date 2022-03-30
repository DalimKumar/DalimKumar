import React, { useState } from "react";
import { Range } from "react-range";
import styled from "styled-components";
const Wrapper = styled.div`
  .myRange {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0px auto;
  }
  .minmax {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;

    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }
`;

const MyRange = ({
  value,
  setValue,
  setMintText,
  price,
  buttonText,
  selected,
}) => {
  return (
    <Wrapper className="myRange pt-4 ">
      <Range
        step={1}
        min={1}
        max={5}
        values={value}
        onChange={(values) => {
          setValue(selected ? [...values] : [1]);
          setMintText(
            selected
              ? `Mint ${value[0] + 1} ${buttonText} Survivors <br/> for ${(
                  (value[0] + 1) *
                  price
                ).toFixed(2)}ETH`
              : `Please select a <br /> Bloodline`
          );
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "8px",
              width: "100%",
              borderRadius: "8px",
              background: "linear-gradient(to right, #FF06C8 , #5DDEFF)",
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              left: "6px",
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "50%",
              outline: "none",
            }}
          />
        )}
      />
      <div className="d-flex align-items-center justify-content-between w-100 pt-1 px-1">
        <p className="minmax">1</p>
        <p className="minmax">5</p>
      </div>
    </Wrapper>
  );
};
export default MyRange;
