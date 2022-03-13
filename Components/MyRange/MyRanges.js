import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

import styles from "./styles.module.css";

const MyRange = () => {
  const [value, setState] = useState([1500]);
  const [dataValue, setDataValue] = useState(0);
  const data = [
    { title: "30 DR", price: 160, url: "sampleone.com" },
    { title: "60 DR", price: 260, url: "sampletwo.com" },
    { title: "90 DR", price: 340, url: "samplethree.com" },
  ];

  return (
    <div className={styles.myRange}>
      <h3 className={styles.title}>{data[dataValue].title}</h3>
      <Range
        step={20}
        min={1500}
        max={4500}
        values={value}
        onChange={(values) => {
          if (values == 1500 || values == 3000 || values == 4500) {
            const number = values / 1500;
            setDataValue(number - 1);
            console.log(dataValue);
          }
          setState(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "11px",
              width: "100%",
              borderRadius: "8px",
              backgroundImage: "linear-gradient(to right, red , yellow)",
              background: getTrackBackground({
                values: value,
                colors: ["#EB3EE4", "#FCFCFC"],
                min: 1500,
                max: 4500,
              }),
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
              height: "24px",
              width: "25px",
              left: "6px",
              backgroundColor: "#EB3EE4",
              border: "none",
              borderRadius: "50%",
              outline: "none",
            }}
          />
        )}
      />
      {/* <div className={styles.numberRange}> 
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div> */}
      <h4 className={styles.price}>${data[dataValue].price}</h4>
      <a
        className={styles.myButton}
        href={data[dataValue].url}
        target="_blank"
        rel="noreferrer"
      >
        {data[dataValue].url}
      </a>
    </div>
  );
};
export default MyRange;
