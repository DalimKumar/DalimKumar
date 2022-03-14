import { useEventCallback } from "@mui/material";
import React, { useState } from "react";

const Stake = () => {
  const [value, setValue] = useState(0);
  const stakeArray = [
    { name: "Stake", stakeNumber: 1500 },
    { name: "Stake", stakeNumber: 1500 },
    { name: "Stake", stakeNumber: 1500 },
    { name: "Stake", stakeNumber: 1500 },
    { name: "Stake", stakeNumber: 1500 },
    { name: "Stake", stakeNumber: 1500 },
  ];
  return (
    <section className="game-play-section" style={{ margin: "100px 0" }}>
      <img
        className="left-img"
        src="assets/images/game-play/left-img.png"
        alt=""
      />
      <img
        className="right-img"
        src="assets/images/game-play/right-img.png"
        alt=""
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12  col-xl-8">
            <div className="single-playstack">
              {/* <h5 className="subtitle">
                     Why Neo Narcos?
                  </h5>  */}
              <div className="container " style={{ padding: "32px" }}>
                {/* <!-- <img src="assets/images/bg-01 1.png" height="200px;" width="100%"> --> */}
                <div className="row justify-content-center">
                  {stakeArray.map((el, i) => (
                    <div
                      className="col-sm-6 col-md-4  text-center d-flex flex-column justify-content-center align-items-center"
                      key={i}
                      onClick={() => setValue(i)}
                    >
                      <div
                        className={
                          value === i ? "stack-active stack mr-4" : "stack mr-4"
                        }
                      >
                        <div className="stack-card"></div>
                        <h1 className="stack-text">{el.name}</h1>
                        <h3 className="stack-h3">
                          {el.stakeNumber}
                          <span className="stack-span">
                            <img src="assets/images/diamond.png" alt="#" />
                          </span>
                        </h3>
                        <p className="stack-par">PER DAY</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12  col-xl-4 mx-auto mt-4 mt-xl-0">
            <div className="stack-play">
              <div className="container " style={{ padding: "32px" }}>
                <h2 className="stack-play-section">DAILY REVENUE</h2>

                <div className="row justify-content-between">
                  <div className=" col-7">
                    <lable className="stack-play-lable">STACKED:</lable>
                  </div>
                  <div className=" col-5">
                    <div
                      style={{
                        height: "42px",
                        top: "415px",
                        width: "100%",
                        color: "#fff",
                        textAlign: "center",
                        fontWeight: 600,

                        background: "#3E0762",
                        border: "1px solid #7A1BB4",
                        boxSizing: "border-box",
                        boxShadow: "0px 0px 25px #7A1BB4",
                        borderRadius: "25px",
                      }}
                    >
                      02
                    </div>
                  </div>
                  <div className=" col-7">
                    <lable className="stack-play-lable">REV PER HOUR:</lable>
                  </div>
                  <div className=" col-5">
                    <div className="stack-play-input">
                      1456.5
                      <span className="stack-span">
                        <img src="assets/images/dimond.png" alt="#" />
                      </span>
                    </div>
                  </div>

                  <div className=" col-7">
                    <lable className="stack-play-lable">REV PER DAY :</lable>
                  </div>
                  <div className=" col-5">
                    <div className="stack-play-input">
                      115000
                      <span className="stack-span">
                        <img src="assets/images/dimond.png" alt="#" />
                      </span>
                    </div>
                  </div>

                  <div className="col-md-7">
                    <lable className="stack-play-lable"></lable>
                  </div>
                  <div className="col-md-5">
                    <div className="stack-play-input">
                      X2.0
                      <span className="stack-span">
                        <img src="assets/images/dimond.png" alt="#" />
                      </span>
                      <br />
                      (MULTIPLY)
                    </div>
                  </div>

                  <div className="w-100">
                    <hr className="stack-hr" />
                  </div>
                  <div className=" col-8">
                    <lable className="stack-play-lable">TOTAL PER DAY :</lable>
                  </div>
                  <div className=" col-4">
                    <div className="stack-play-input">
                      23000
                      <span className="stack-span">
                        <img src="assets/images/dimond.png" alt="#" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stake;
