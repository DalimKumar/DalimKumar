import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

import styles from "./styles.module.css";

const MyRange = () => {
  const [value, setState] = useState([1500]); //for slider increasing and decreasing
  const [dataValue, setDataValue] = useState(0); // for getting data from an array;
  const data = [
    //the data you have used, you just have to change data here if you need
    { title: "30 DR", price: 160, url: "sampleone.com" },
    { title: "60 DR", price: 260, url: "sampletwo.com" },
    { title: "90 DR", price: 340, url: "samplethree.com" },
  ];

  return (
    <div className={styles.myRange}>
      {/* for getting title from array */}
      <h3 className={styles.title}>{data[dataValue].title}</h3>{" "}
      <Range
        step={30}
        min={1500} //you can ask why I use minValue 1500  and maxValue 4500. The answer is for somoothness. if we use less number then we will not get smoothness
        max={4500}
        values={value}
        onChange={(values) => {
          if (values == 1500 || values == 3000 || values == 4500) {
            const number = values / 1500; //if devide this with 1500 becuse this how you can get value 1 , 2, 3 .which we will use for get data from the array.
            setDataValue(number - 1); // -1 because array index start from 0
            //set data setthe dataValue which we used line no 18,74,75
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
                //for background tracking
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
      {/* for getting price from array */}
      <h4 className={styles.price}>€{data[dataValue].price}</h4>
      {/* for getting url from array */}
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
