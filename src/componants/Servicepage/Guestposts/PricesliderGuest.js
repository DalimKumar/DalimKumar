import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const MyRangeGuest = () => {
  const [value, setState] = useState([1.5]); //for slider increasing and decreasing
  const [dataValue, setDataValue] = useState(0); // for getting data from an array;
  const data = [
    //the data you have used, you just have to change data here if you need
    { title: "1", price: 160 },
    { title: "3", price: 480 },
    { title: "5", price: 800 },
    { title: "10", price: 1600 },
    { title: "15", price: 2080 },
    { title: "25", price: 4000 },
  ];

  return (
    <div>
      <div className="flex-column justify-content justify-center  ">
        {/* for getting title from array */}
        <h4 className="flex justify-content justify-center font-bold pb-5 z-1 text-transparent  sm:text-5xl sm:text-4xl md:text-5xl sm:text-center md:text-center bg-clip-text bg-gradient-to-br from-[#1CDEA1] via-[#069BB3] to-[#0468C8] p-5">
          Guest post packages
        </h4>{" "}
        <Range
          className=""
          step={1}
          min={1}
          max={6}
          values={value}
          onChange={(values) => {
            if (
              values == 1 ||
              values == 2 ||
              values == 3 ||
              values == 4 ||
              values == 5 ||
              values == 6
            ) {
              const number = values / 1; //if devide this with 1500 becuse this how you can get value 1 , 2, 3 .which we will use for get data from the array.
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
                  colors: ["#069BB3", "#FCFCFC"],
                  min: 1,
                  max: 6,
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
                backgroundColor: "#069BB3",
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
        {/* for getting url from array */}
        <div className="flex justify-between">
          <h4 className="flex font-bold  text-transparent   sm:text-5xl sm:text-4xl md:text-5xl  bg-clip-text bg-gradient-to-br from-[#1CDEA1] via-[#069BB3] to-[#0468C8] p-5 rounded-xl ">
            Avg {data[dataValue].title} Links
          </h4>

          <h4 className="  flex font-bold pb-5  text-transparent   sm:text-5xl sm:text-4xl md:text-5xl  bg-clip-text bg-gradient-to-br from-[#1CDEA1] via-[#069BB3] to-[#0468C8] p-5 rounded-xl ">
            ${data[dataValue].price}
          </h4>
        </div>
        <div>
          <p className="flex justify-content justify-center text-white ">
            Guest Posts that have an average DR of 60+ and 100+ Organic Visitors
            on the page that contains your link.
          </p>
        </div>
        <div className=" flex justify-content justify-center p-8">
          <a
            className="Nichebutton font-bold"
            href="https://linkcity.spp.io/order/guest-posts/cp"
            target="_blank"
            rel="noreferrer"
          >
            Increase my rankings
          </a>
        </div>
      </div>
    </div>
  );
};
export default MyRangeGuest;
