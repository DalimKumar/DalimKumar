import React, { useState, useContext } from "react";
import { Range, getTrackBackground } from "react-range";
import { myContext } from "../../../../Context/Context";

const MyRange = () => {
  const [dataValue, setDataValue] = useState(0);
  const { value, setState, cardArray } = myContext();

  //for slider increasing and decreasing
  // for getting data from an array;
  // const [dataset, setDataSet] = useState(1);

  //   const selectionarray = variable -1
  // const datasetselection = [data, data1]
  // const dataselect = datasetselection[0];

  const data = [
    //the data you have used, you just have to change data here if you need
    { title: "1", price: 160 },
    { title: "3", price: 480 },
    { title: "5", price: 800 },
    { title: "10", price: 1600 },
    { title: "15", price: 2080 },
    { title: "25", price: 4000 },
  ];

  // const data1 = [
  //   //the data you have used, you just have to change data here if you need
  //   { title: "1", price: 260, url: "sampleone.com" },
  //   { title: "3", price: 780, url: "sampletwo.com" },
  //   { title: "5", price: 1300, url: "samplethree.com" },
  //   { title: "10", price: 2600, url: "sampleone.com" },
  //   { title: "15", price: 3900, url: "sampletwo.com" },
  //   { title: "25", price: 6500, url: "samplethree.com" },
  // ];

  return (
    <div className="flex-column justify-content justify-center  ">
      {/* for getting title from array */}
      <div>
        <h4 className="flex justify-content justify-center font-bold pb-5 z-1 text-transparent  sm:text-5xl sm:text-4xl md:text-5xl  sm:text-center md:text-center bg-clip-text bg-gradient-to-br from-[#F6AD5A] via-[#D54B58] to-[#D0246D] p-5">
          {value < cardArray.length + 1 &&
            cardArray[Math.floor(value[0]) - 1].title}
          packages
        </h4>{" "}
      </div>
      <Range
        className=""
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
                colors: ["#D54B58", "#FCFCFC"],
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
              backgroundColor: "#D54B58",
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
        <h4 className=" font-bold pb-5 z-1 text-transparent  sm:text-center md:text-center bg-clip-text bg-gradient-to-br from-[#F6AD5A] via-[#D54B58] to-[#D0246D] p-5 rounded-xl ">
          Avg. {data[dataValue].title} Links
        </h4>

        <h4 className=" flex justify-content justify-end font-bold pb-5 z-1 text-transparent  md:text-5xl sm:text-center md:text-center bg-clip-text bg-gradient-to-br from-[#F6AD5A] via-[#D54B58] to-[#D0246D] p-5 rounded-xl ">
          ${data[dataValue].price}
        </h4>
      </div>

      <p className="flex justify-content justify-center text-white ">
        Each niche edit hot domain has an average rating of 60+ and each
        destination page has 100+ organic visitors.
      </p>

      <div className=" flex justify-content justify-center p-8">
        <a
          className="Guestbutton font-bold"
          href="https://linkcity.spp.io/order/niche-edits/cp"
          target="_blank"
          rel="noreferrer"
        >
          Increase my rankings
        </a>
      </div>
    </div>
  );
};
export default MyRange;
