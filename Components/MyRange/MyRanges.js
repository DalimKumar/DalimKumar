import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

import styles from "./styles.module.css";

const MyRange = () => {
  const [value, setState] = useState([1]);
  const data = [
    { title: "30 DR", price: 160, url: "sampleone.com" },
    { title: "60 DR", price: 260, url: "sampletwo.com" },
    { title: "90 DR", price: 340, url: "samplethree.com" },
  ];
  console.log(value[0]);
  return (
    <div className={styles.myRange}>
      <h3 className={styles.title}>{data[value - 1].title}</h3>
      <Range
        step={1}
        min={1}
        max={3}
        values={value}
        onChange={(values) => setState(values)}
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
                min: 1,
                max: 3,
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
      <h4 className={styles.price}>${data[value - 1].price}</h4>
      <a
        className={styles.myButton}
        href={data[value - 1].url}
        target="_blank"
        rel="noreferrer"
      >
        {data[value - 1].url}
      </a>
    </div>
  );
};
export default MyRange;
