import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const Serviceslider = () => {
  const [value, setState] = useState([1.5]); //for slider increasing and decreasing
  const [dataValue, setDataValue] = useState(0); // for getting data from an array;
  const data = [
    //the data you have used, you just have to change data here if you need
    { title: "30", price: 5000 },
    { title: "60", price: 10000 },
    { title: "90", price: 15000 },
    { title: "160", price: 25000 },
    { title: "350", price: 50000 },
    { title: "750", price: 75000 },
    ,
  ];

  return (
    <div className="flex-column justify-content justify-center  ">
      {/* for getting title from array */}
      <h3 className="bg-clip-text bg-gradient-to-br from-logo-pink via-fuscia-800 to-purple-600 text-transparent flex content-center p-1 justify-center pb-5 font-bold">
        Link Packages from
      </h3>
      <Range
        className="py-2"
        step={1}
        min={1} //you can ask why I use minValue 1500  and maxValue 4500. The answer is for somoothness. if we use less number then we will not get smoothness
        max={6}
        values={value}
        onChange={(values) => {
          if (
            values == 1 ||
            values == 2 ||
            values == 3 ||
            values == 4 ||
            values == 5 ||
            values == 6 ||
            values == 7
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
                colors: ["#B858D9", "#FCFCFC"],
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
              backgroundColor: "#B858D9",
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
        <h4 className="flex font-bold  text-transparent sm:text-l  md:text-5xl  bg-clip-text bg-gradient-to-br from-logo-pink via-fuscia-800 to-purple-600 text-transparent p-5 rounded-xl ">
          Avg {data[dataValue].title} Links
        </h4>

        <h4 className="  flex font-bold pb-5  text-transparent   sm:text-l md:text-5xl  bg-clip-text bg-gradient-to-br from-logo-pink via-fuscia-800 to-purple-600 text-transparent p-5 rounded-xl ">
          ${data[dataValue].price}
        </h4>
      </div>
      <div>
        <p className="flex justify-content justify-center text-white ">
          Packages are available from ${data[dataValue].price}, no-obligation
          strategy call today to discuss your perfect, data-driven link building
          campaign.
        </p>
      </div>
      <div className=" flex justify-content justify-center p-8">
        <a
          className="test font-bold"
          href="https://linkcity.spp.io/login/portal"
          target="_blank"
          rel="noreferrer"
        >
          Increase my rankings
        </a>
      </div>
    </div>
  );
};
export default Serviceslider;
